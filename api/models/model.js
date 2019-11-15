const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const SecurityScanSchema = new Schema({
    name: {
        type: String,
        required: "Repo Name is a must"
    },
    status: {
        type: [
        {
            type: String,
            enum: ["Queued", "In Progress", "Success", "Failure"]
        }
        ],
        default: ["Queued"]
    },
    file: {
        type: {}
    },
    QueuedAt: {
        type: Date,
        default: Date.now
    },
    ScanningAt: {
        type: Date,
        default: Date.now
    },
    FinishedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("SecurityScan", SecurityScanSchema);