const mongoose = require('mongoose');

var historySchema = new mongoose.Schema({
    term: String,
    when: {type: Date, default: Date.now}
});

module.exports = mongoose.model('History', historySchema);