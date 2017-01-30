var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    title: String,
    description: String,
    link: String,
    date: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Project', projectSchema);