import { INTERNAL_SERVER_ERROR,CREATED,OK,NOT_FOUND } from 'http-status-codes';
const db = require("./promise").ReportDb;

const Reports = {
    async create(req, res) {
        const queryText = req.body;
        try {
          const createdReport = await db.create(queryText);
          return res.status(CREATED).send({
            message: 'Report successfully created',
            data: createdReport,
          });
        } catch (error) {
          return res.status(INTERNAL_SERVER_ERROR).send(error);
        }
    },
	async getAll(req, res) {
        try {
            const foundReports = await db.find();
            return res.status(OK).send({
                message: 'Reports retrieved successfully',
                data: foundReports,
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send(error);
        }
	},
	async getOne(req, res) {
		const queryText = {
			_id: req.params.id,
        };
        try{
            const foundReport = await db.findOne(queryText);
            if (!foundReport) return res.status(NOT_FOUND).send({ message: 'Report not found' });
            return res.status(OK).send({
              message: 'Report retrieved successfully',
              data: foundReport,
            });
          }
        catch(err){
            return res.status(INTERNAL_SERVER_ERROR).send(error);
        }
    },
    
    async deleteReport(req, res){
        const queryText = {
            _id: req.params.id
        };
        try {
            const deletedReport = await db.findOneAndDelete(queryText);
            if (!deletedReport) return res.status(NOT_FOUND).send({ message: 'Report not found' });
            return res.status(OK).send({
              message: 'Report successfully deleted',
              data: deletedReport,
            });
          } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send(error);
          }
    },

	
};


module.exports = Reports;