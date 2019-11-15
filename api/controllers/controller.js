const mongoose = require("mongoose");
const Scan = mongoose.model("SecurityScan");

exports.list_all_scans = (req, res) => {
  Scan.find({}, (err, scan) => {
    if (err) {
      res.send(err);
    }
    res.json(scan);
  });
};

exports.create_a_scan = (req, res) => {
  const new_scan = new Scan(req.body);
  new_scan.save((err, scan) => {
    if (err) {
      res.send(err);
    }
    res.json(scan);
  });
};

exports.read_a_scan = (req, res) => {
  Scan.findById(req.params.id, (err, scan) => {
    if (err) {
      res.send(err);
    }
    res.json(scan);
  });
};