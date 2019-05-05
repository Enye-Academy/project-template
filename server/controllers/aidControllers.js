const db = require("./promise").AidDb;
import validateAidQueryText from '../validation/aid'


const Aids = {
    async create(req, res) {
        console.log(req.body);
        const { errors, isValid } = validateAidQueryText(req.body);

		// Check Validation
		if (!isValid) {
			return res.status(400).json(errors);
		}
        const queryText = req.body;
        try {
          const createdAid = await db.create(queryText);
          return res.status(201).send({
            message: 'Aid successfully created',
            data: createdAid,
          });
        } catch (error) {
          return res.status(400).send(error);
        }
    },
	async getAll(req, res) {
        const queryText = {};
        try {
            const foundAids = await db.find(queryText);
            return res.status(200).send({
                message: 'Aidss retrieved successfully',
                data: foundAids,
            });
        } catch (error) {
            return res.status(400).send(error);
        }
	},
	async getOne(req, res) {
		const queryText = {
			_id: req.params.aidId,
        };
        try{
            const foundAid = await db.findOne(queryText);
            if (!foundAid) return res.status(404).send({ message: 'Aid not found' });
            return res.status(200).send({
              message: 'Aid retrieved successfully',
              data: foundAid,
            });
          }
        catch(err){
            return res.status(400).send(error);
        }
	},
	
    async updateAid(req, res){
        const queryText = {
            _id: req.params.aidId
        };

        const { errors, isValid } = validateAidQueryText(req.body);

		// Check Validation
		if (!isValid) {
			return res.status(400).json(errors);
        }
        
        const updateData = req.body;
        try {
            const updatedAid = await db.findOneAndUpdate(queryText, updateData);
            if (!updatedAid) return res.status(404).send({ message: 'Aid not found' });
            return res.status(200).send({
                message: 'Aid updated successfully',
                data: updatedAid,
            });
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    async deleteAid(req, res){
        const queryText = {
            _id: req.params.aidId
        };
        try {
            const deletedAid = await db.findOneAndDelete(queryText);
            if (!deletedAid) return res.status(404).send({ message: 'Aid not found' });
            return res.status(200).send({
              message: 'Aid successfully deleted',
              data: deletedAid,
            });
          } catch (error) {
            return res.status(400).send(error);
          }
    },

	
};

module.exports = Aids;
