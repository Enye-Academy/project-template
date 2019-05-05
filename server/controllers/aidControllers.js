import { INTERNAL_SERVER_ERROR,CREATED,OK,NOT_FOUND,BAD_REQUEST } from 'http-status-codes';
const db = require("./promise").AidDb;
import validateAidQueryText from '../validation/aid'


const Aids = {
    async create(req, res) {
        const { errors, isValid } = validateAidQueryText(req.body);

		// Check Validation
		if (!isValid) {
			return res.status(BAD_REQUEST).json(errors);
		}
        const queryText = req.body;
        try {
          const createdAid = await db.create(queryText);
          return res.status(CREATED).send({
            message: 'Aid successfully created',
            data: createdAid,
          });
        } catch (error) {
          return res.status(INTERNAL_SERVER_ERROR).send(error);
        }
    },
	async getAll(req, res) {
        try {
            const foundAids = await db.find();
            return res.status(OK).send({
                message: 'Aidss retrieved successfully',
                data: foundAids,
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
            const foundAid = await db.findOne(queryText);
            if (!foundAid) return res.status(NOT_FOUND).send({ message: 'Aid not found' });
            return res.status(OK).send({
              message: 'Aid retrieved successfully',
              data: foundAid,
            });
          }
        catch(err){
            return res.status(INTERNAL_SERVER_ERROR).send(error);
        }
	},
	
    async updateAid(req, res){
        const queryText = {
            _id: req.params.id
        };

        const { errors, isValid } = validateAidQueryText(req.body);

		// Check Validation
		if (!isValid) {
			return res.status(BAD_REQUEST).json(errors);
        }
        
        const updateData = req.body;
        try {
            const updatedAid = await db.findOneAndUpdate(queryText, updateData);
            if (!updatedAid) return res.status(NOT_FOUND).send({ message: 'Aid not found' });
            return res.status(OK).send({
                message: 'Aid updated successfully',
                data: updatedAid,
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send(error);
        }
    },
    async deleteAid(req, res){
        const queryText = {
            _id: req.params.id
        };
        try {
            const deletedAid = await db.findOneAndDelete(queryText);
            if (!deletedAid) return res.status(NOT_FOUND).send({ message: 'Aid not found' });
            return res.status(OK).send({
              message: 'Aid successfully deleted',
              data: deletedAid,
            });
          } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send(error);
          }
    },

	
};

module.exports = Aids;
