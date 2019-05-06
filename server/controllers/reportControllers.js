import { INTERNAL_SERVER_ERROR,CREATED,OK,NOT_FOUND } from 'http-status-codes';
const db = require("./promise").ReportDb;

const Reports = {
  async create(req, res) {
    const queryText = req.body;
    try {
      const report = await db.create(queryText);
      return res.status(CREATED).send({
        status: 'success',
        data: { report, message: 'Report successfully created' }
      });
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).send({
          status : 'error',
          message : error
      });
    }
  },

	async getAll(req, res) {
    try {
      const reports = await db.find();
      return res.status(OK).send({
        status: 'success',
        data: {"Reports": reports},
      });
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).send({
          status : 'error',
          message : error
        });
    }
  },
  
	async getOne(req, res) {
		const queryText = {
			_id: req.params.id,
    };
    try{
      const report = await db.findOne(queryText);
      if (!report) return res.status(NOT_FOUND).send({
        status : 'error',
        message : getStatusText(NOT_FOUND)
      });
      return res.status(OK).send({
        status: 'success',
        data: {"Report": report}
      });
    } catch(err){
        return res.status(INTERNAL_SERVER_ERROR).send({
          status : 'error',
          message : error
        });
    }
  },

  async deleteReport(req, res){
    const queryText = {
      _id: req.params.id
    };
    try {
      const deletedReport = await db.findOneAndDelete(queryText);
      if (!deletedReport) return res.status(NOT_FOUND).send({
        status : 'error',
        message : getStatusText(NOT_FOUND)
      });
      return res.status(OK).send({
        status : "success",
        data : null
      });
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).send({
          status : 'error',
          message : error
        });
    }
  },
};

module.exports = Reports;