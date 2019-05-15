/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable sort-keys */
import {
    CREATED, getStatusText, INTERNAL_SERVER_ERROR, NOT_FOUND, OK
} from 'http-status-codes';

const db = require('./promise').ReportDb;

const Reports = {
    async create(req, res) {
        const queryText = req.body;
        const { public_id, url } = await req.file;
        queryText.audioId = public_id;
        queryText.audioUrl = url;

        try {
            const report = await db.create(queryText);
            return res.status(CREATED).send({
                status: 'success',
                data: { message: 'Report successfully created', report },
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
            });
        }
    },

    async deleteReport(req, res) {
        const queryText = {
            _id: req.params.id,
        };
        try {
            const report = await db.findOneAndDelete(queryText);
            if (!report) {
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
            const reports = await db.find();
            return res.status(OK).send({
                status: 'success',
                data: { reports },
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
            const report = await db.findOne(queryText);
            if (!report) {
                return res.status(NOT_FOUND).send({
                    status: 'error',
                    message: getStatusText(NOT_FOUND),
                });
            }
            return res.status(OK).send({
                status: 'success',
                data: { report },
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

module.exports = Reports;
