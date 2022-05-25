//Define carbon factors schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carbonFactorSchema = new Schema({
  name: {type: String, required: true, unique: true},
  description: String,
  dateAdded: Date,
  concrete: {insitu: {a1a3: Number, a4: Number, a5a: Number, a5w: Number, a1a5: Number},
            precast: {a1a3: Number, a4: Number, a5a: Number, a5w: Number, a1a5: Number}},
  steel: {sections: {a1a3: Number, a4: Number, a5a: Number, a5w: Number, a1a5: Number},
         rebar: {a1a3: Number, a4: Number, a5a: Number, a5w: Number, a1a5: Number}},
  timber: {clt: {a1a3: Number, a4: Number, a5a: Number, a5w: Number, a1a5: Number},
          glulam: {a1a3: Number, a4: Number, a5a: Number, a5w: Number, a1a5: Number},
          other: {a1a3: Number, a4: Number, a5a: Number, a5w: Number, a1a5: Number}},
  masonry: {blockwork: {a1a3: Number, a4: Number, a5a: Number, a5w: Number, a1a5: Number},
           brickwork: {a1a3: Number, a4: Number, a5a: Number, a5w: Number, a1a5: Number}}  
  
});

const CarbonFactors = mongoose.model("Carbon Factors", carbonFactorSchema);

exports.schema = carbonFactorSchema;
exports.model = CarbonFactors;