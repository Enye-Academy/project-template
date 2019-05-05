import Aid from  "../models/aid"
import Report from "../models/report"

class AidDb {
    static find(param) {
      return new Promise((resolve, reject) => {
        Aid.find(param)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  
    static create(param) {
      return new Promise((resolve, reject) => {
        Aid.create(param)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  
    static findOne(param) {
      return new Promise((resolve, reject) => {
        Aid.findOne(param)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  
    /**
       * @param {string} param
       * @param {string} text
       * @return {object} returns updated object
       */
    static findOneAndUpdate(param, text) {
      return new Promise((resolve, reject) => {
        Aid.findOneAndUpdate(param, text, { new: true })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  
    static findOneAndDelete(param) {
      return new Promise((resolve, reject) => {
        Aid.findOneAndDelete(param)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
}

class ReportDb {
    static find(param) {
      return new Promise((resolve, reject) => {
        Report.find(param)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  
    static create(param) {
      return new Promise((resolve, reject) => {
        Report.create(param)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  
    static findOne(param) {
      return new Promise((resolve, reject) => {
        Report.findOne(param)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  
    static findOneAndDelete(param) {
      return new Promise((resolve, reject) => {
        Report.findOneAndDelete(param)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
}

module.exports = {
    AidDb,
    ReportDb
};