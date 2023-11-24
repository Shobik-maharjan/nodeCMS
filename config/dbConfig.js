// FOR LOCAL ENVIRONMENT
module.exports = {
  HOST: "roundhouse.proxy.rlwy.net",
  USER: "root",
  PASSWORD: "1G5CCf125GdEhf-D1625HbEbh5g4-gda",
  DB: "railway",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
