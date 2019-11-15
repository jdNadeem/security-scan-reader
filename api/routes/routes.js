module.exports = app => {
  const securityScan = require("../controllers/controller");

  app.route("/").get(securityScan.list_all_scans);
  app
  .route("/scan")
  .post(securityScan.create_a_scan);

  app
    .route("/scan/:id")
    .get(securityScan.read_a_scan);
}