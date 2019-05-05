const db = require("./promise").ReportDb;


const Reports = {
    async create(req, res) {
        const queryText = req.body;
        try {
          const createdReport = await db.create(queryText);
          return res.status(201).send({
            message: 'Report successfully created',
            data: createdReport,
          });
        } catch (error) {
          return res.status(400).send(error);
        }
    },
	async getAll(req, res) {
        const queryText = {};
        try {
            const foundReports = await db.find(queryText);
            return res.status(200).send({
                message: 'Reports retrieved successfully',
                data: foundReports,
            });
        } catch (error) {
            return res.status(400).send(error);
        }
	},
	async getOne(req, res) {
		const queryText = {
			_id: req.params.ReportId,
        };
        try{
            const foundReport = await db.findOne(queryText);
            if (!foundReport) return res.status(404).send({ message: 'Report not found' });
            return res.status(200).send({
              message: 'Report retrieved successfully',
              data: foundReport,
            });
          }
        catch(err){
            return res.status(400).send(error);
        }
    },
    
    async deleteReport(req, res){
        const queryText = {
            _id: req.params.ReportId
        };
        try {
            const deletedReport = await db.findOneAndDelete(queryText);
            if (!deletedReport) return res.status(404).send({ message: 'Report not found' });
            return res.status(200).send({
              message: 'Report successfully deleted',
              data: deletedReport,
            });
          } catch (error) {
            return res.status(400).send(error);
          }
    },

	
};


module.exports = Reports;