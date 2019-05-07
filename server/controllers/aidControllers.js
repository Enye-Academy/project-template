/* eslint-disable sort-keys */
import {
    INTERNAL_SERVER_ERROR, CREATED, OK, NOT_FOUND, BAD_REQUEST, getStatusText
} from 'http-status-codes';
import validateAidQueryText from '../validation/aid';

const db = require('./promise').AidDb;

const Aids = {
    async create(req, res) {
        const { errors, isValid } = validateAidQueryText(req.body);

        // Check Validation
        if (!isValid) {
            return res.status(BAD_REQUEST).send({
                status: 'fail',
                data: { errors },
            });
        }
        const queryText = req.body;
        try {
            const aid = await db.create(queryText);
            return res.status(CREATED).send({
                status: 'success',
                data: { aid, message: 'Aid successfully created' },
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
            });
        }
    },

    async deleteAid(req, res) {
        const queryText = {
            _id: req.params.id,
        };
        try {
            const aid = await db.findOneAndDelete(queryText);
            if (!aid) {
                return res.status(NOT_FOUND).send({
                    status: 'error',
                    message: getStatusText(NOT_FOUND),
                });
            }
            return res.status(OK).send({
                status: 'success',
                data: null,
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
            });
        }
    },

    async getAll(req, res) {
        try {
            const aids = await db.find();
            return res.status(OK).send({
                status: 'success',
                data: { aids },
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
            });
        }
    },

    async getOne(req, res) {
        const queryText = {
            _id: req.params.id,
        };
        try {
            const aid = await db.findOne(queryText);
            if (!aid) {
                return res.status(NOT_FOUND).send({
                    status: 'error',
                    message: getStatusText(NOT_FOUND),
                });
            }
            return res.status(OK).send({
                status: 'success',
                data: { aid },
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
            });
        }
    },

    async updateAid(req, res) {
        const queryText = {
            _id: req.params.id,
        };

        const { errors, isValid } = validateAidQueryText(req.body);

        // Check Validation
        if (!isValid) {
            return res.status(BAD_REQUEST).send({
                status: 'fail',
                data: { errors },
            });
        }

        const updateData = req.body;
        try {
            const aid = await db.findOneAndUpdate(queryText, updateData);
            if (!aid) {
                return res.status(NOT_FOUND).send({
                    status: 'error',
                    message: getStatusText(NOT_FOUND),
                });
            }
            return res.status(OK).send({
                status: 'success',
                data: { aid, message: 'Aid successfully updated' },
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
            });
        }
    },
};

module.exports = Aids;
