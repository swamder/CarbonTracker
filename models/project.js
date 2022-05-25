//Define the project schema, that will contain all info for each project
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stage = require('./stage.js');

const projectSchema = new Schema({
  projNo: {type: String, required: true, unique: true},
  projName: {type: String, required: true},
  info: {
    type: {type: String, required: true},
    value: Number,
    cooridantes: {ew: Number, ns: Number},
    dates: {designStart: {type: Date, required: true}, constructionStart: {type: Date, required: true}, constructionEnd: {type: Date, required: true}} 
    },
  stage2: stage.schema,
  stage3: stage.schema,
  stage4: stage.schema,
  stage5: stage.schema
});

const Project = mongoose.model("Project", projectSchema)

exports.schema = projectSchema;
exports.model = Project;