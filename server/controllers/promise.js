import Aid from '../models/aid';
import Report from '../models/report';

/**
       * @param {string} param
       * @param {string} text
       * @return {object} returns updated object
       */

class AidDb {
    static find(param) {
        return Aid.find(param);
    }

    static create(param) {
        return Aid.create(param);
    }

    static findOne(param) {
        return Aid.findOne(param);
    }

    static findOneAndUpdate(param, text) {
        return Aid.findOneAndUpdate(param, text, { new: true });
    }

    static findOneAndDelete(param) {
        return Aid.findOneAndDelete(param);
    }
}

class ReportDb {
    static find(param) {
        return Report.find(param);
    }

    static create(param) {
        return Report.create(param);
    }

    static findOne(param) {
        return Report.findOne(param);
    }

    static findOneAndDelete(param) {
        return Report.findOneAndDelete(param);
    }
}

module.exports = {
    AidDb,
    ReportDb,
};
