import { INTERNAL_SERVER_ERROR,CREATED,OK,NOT_FOUND,BAD_REQUEST } from 'http-status-codes';
const db = require("./promise").AidDb;
import validateAidQueryText from '../validation/aid'


const Aids = {
    async create(req, res) {
        const { errors, isValid } = validateAidQueryText(req.body);

		// Check Validation
		if (!isValid) {
			return res.status(BAD_REQUEST).send({
                status : "fail",
                data : { "title" : errors }
            });
		}
        const queryText = req.body;
        try {
          const aid = await db.create(queryText);
          return res.status(CREATED).send({
            status: 'success',
            data: { aid, message: 'Aid successfully created' }
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
            const aids = await db.find();
            return res.status(OK).send({
                status: 'success',
                data: {"Aids": aids}
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
            const aid = await db.findOne(queryText);
            if (!aid) return res.status(NOT_FOUND).send({
                status : 'error',
                message : getStatusText(NOT_FOUND)
            });
            return res.status(OK).send({
                status: 'success',
                data: {"Aid": aid}
            });
          }
        catch(err){
            return res.status(INTERNAL_SERVER_ERROR).send({
                status : 'error',
                message : error
            });
        }
	},
	
    async updateAid(req, res){
        const queryText = {
            _id: req.params.id
        };

        const { errors, isValid } = validateAidQueryText(req.body);

		// Check Validation
		if (!isValid) {
			return res.status(BAD_REQUEST).send({
                status : "fail",
                data : { "title" : errors }
            });
        }
        
        const updateData = req.body;
        try {
            const updatedAid = await db.findOneAndUpdate(queryText, updateData);
            if (!updatedAid) return res.status(NOT_FOUND).send({
                status : 'error',
                message : getStatusText(NOT_FOUND)
            });
            return res.status(OK).send({
                status: 'success',
                data: { UpdatedAid, message: 'Aid successfully updated' }
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status : 'error',
                message : error
            });
        }
    },

    async deleteAid(req, res){
        const queryText = {
            _id: req.params.id
        };
        try {
            const deletedAid = await db.findOneAndDelete(queryText);
            if (!deletedAid) return res.status(NOT_FOUND).send({
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

module.exports = Aids;