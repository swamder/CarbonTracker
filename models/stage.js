//Define the stage schema, containing all the material quantities/info for a single RIBA stage
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stageSchema = new Schema({
  ga: Number,
  totalMaterials: {
    concrete: {piles:Number, insitu: Number, precast: Number},
    steel: {rebar: Number, sections: Number, sheetPiles: Number},
    timber: {clt: Number, glulam: Number, other: Number},
    masonry: {brick: Number, block: Number}
  },
  subMaterials: {
    concrete: {piles:Number, insitu: Number, precast: Number},
    steel: {rebar: Number, sections: Number, sheetPiles: Number},
    timber: {clt: Number, glulam: Number, other: Number},
    masonry: {brick: Number, block: Number}
  },
  superMaterials: {
    concrete: {piles:Number, insitu: Number, precast: Number},
    steel: {rebar: Number, sections: Number, sheetPiles: Number},
    timber: {clt: Number, glulam: Number, other: Number},
    masonry: {brick: Number, block: Number}
  }
});

const Stage = mongoose.model("Stage", stageSchema);

exports.schema = stageSchema;
exports.model = Stage;