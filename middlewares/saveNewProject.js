const stage = require('./../models/stage.js');
const project = require('./../models/project.js');

exports.save = function (req,res) {
  //function takes in html req body as json converts it to into a project and saves to mongodb

  var newProject = new project.model({
    projNo: req.body.projNo,
    projName: req.body.projName,
    info: {
      type: req.body.projType,
      value: req.body.projValue,
      cooridantes: {ew: req.body.coorEW, ns: req.body.coorNS},
      dates: {designStart: req.body.dateDesignStart, constructionStart: req.body.dateConstructionStart, constructionEnd: req.body.dateConstructionEnd} 
      }
  });

  //check if stage 2 has been completed
  const stage2MaterialSum = req.body.stage2ConInsitu*1 + req.body.stage2ConPiles*1 + req.body.stage2ConPreCast*1 + req.body.stage2SteelRebar*1 + req.body.stage2SteelSections*1 + req.body.stage2SteelSheetPiles*1 +req.body.stage2TimberCLT*1 + req.body.stage2TimberGlulam*1 + req.body.stage2TimberOther*1 + req.body.stage2MasonryBrick*1 + req.body.stage2MasonryBlock*1;
  
  //create stage 2 schema if data is complete
  if (stage2MaterialSum > 0 ) {
    var newStage2 = new stage.model({
      ga: req.body.stage2GA,
      totalMaterials: {
        concrete: {piles: req.body.stage2ConPiles, insitu: req.body.stage2ConInsitu, precast: req.body.stage2ConPreCast},
        steel: {rebar: req.body.stage2SteelRebar, sections: req.body.stage2SteelSections, sheetPiles: req.body.stage2SteelSheetPiles},
        timber: {clt: req.body.stage2TimberCLT, glulam: req.body.stage2TimberGlulam, other: req.body.stage2TimberOther},
        masonry: {brick: req.body.stage2MasonryBrick, block: req.body.stage2MasonryBlock}
      }
    });
    //check if stage 2 includes sub/super data
    const stage2MaterialSupSum = req.body.stage2ConInsituSup*1 + req.body.stage2ConPilesSup*1 + req.body.stage2ConPreCastSup*1 + req.body.stage2SteelRebarSup*1 + req.body.stage2SteelSectionsSup*1 + req.body.stage2SteelSheetPilesSup*1 +req.body.stage2TimberCLTSup*1 + req.body.stage2TimberGlulamSup*1 + req.body.stage2TimberOtherSup*1 + req.body.stage2MasonryBrickSup*1 + req.body.stage2MasonryBlockSup*1;
    
    if (stage2MaterialSupSum > 0) {
      var stage2SubMaterials = {
        concrete: {piles: req.body.stage2ConPilesSub, insitu: req.body.stage2ConInsituSub, precast: req.body.stage2ConPreCastSub},
          steel: {rebar: req.body.stage2SteelRebarSub, sections: req.body.stage2SteelSectionsSub, sheetPiles: req.body.stage2SteelSheetPilesSub},
          timber: {clt: req.body.stage2TimberCLTSub, glulam: req.body.stage2TimberGlulamSub, other: req.body.stage2TimberOtherSub},
          masonry: {brick: req.body.stage2MasonryBrickSub, block: req.body.stage2MasonryBlockSub}
      };

      Object.assign(newStage2, {subMaterials: stage2SubMaterials})
      
      const stage2MaterialSup = {
        concrete: {piles: req.body.stage2ConPilesSup, insitu: req.body.stage2ConInsituSup, precast: req.body.stage2ConPreCastSup},
          steel: {rebar: req.body.stage2SteelRebarSup, sections: req.body.stage2SteelSectionsSup, sheetPiles: req.body.stage2SteelSheetPilesSup},
          timber: {clt: req.body.stage2TimberCLTSup, glulam: req.body.stage2TimberGlulamSup, other: req.body.stage2TimberOtherSup},
          masonry: {brick: req.body.stage2MasonryBrickSup, block: req.body.stage2MasonryBlockSup}
      };
      Object.assign(newStage2, {superMaterials: stage2MaterialSup})
    };
    
    Object.assign(newProject, {stage2:newStage2})
  };

  //check if stage 3 has been completed
  const stage3MaterialSum = req.body.stage3ConInsitu*1 + req.body.stage3ConPiles*1 + req.body.stage3ConPreCast*1 + req.body.stage3SteelRebar*1 + req.body.stage3SteelSections*1 + req.body.stage3SteelSheetPiles*1 +req.body.stage3TimberCLT*1 + req.body.stage3TimberGlulam*1 + req.body.stage3TimberOther*1 + req.body.stage3MasonryBrick*1 + req.body.stage3MasonryBlock*1;
  
  //create stage 3 schema if data is complete
  if (stage3MaterialSum > 0 ) {
    var newStage3 = new stage.model({
      ga: req.body.stage3GA,
      totalMaterials: {
        concrete: {piles: req.body.stage3ConPiles, insitu: req.body.stage3ConInsitu, precast: req.body.stage3ConPreCast},
        steel: {rebar: req.body.stage3SteelRebar, sections: req.body.stage3SteelSections, sheetPiles: req.body.stage3SteelSheetPiles},
        timber: {clt: req.body.stage3TimberCLT, glulam: req.body.stage3TimberGlulam, other: req.body.stage3TimberOther},
        masonry: {brick: req.body.stage3MasonryBrick, block: req.body.stage3MasonryBlock}
      }
    });
    //check if stage 3 includes sub/super data
    const stage3MaterialSupSum = req.body.stage3ConInsituSup*1 + req.body.stage3ConPilesSup*1 + req.body.stage3ConPreCastSup*1 + req.body.stage3SteelRebarSup*1 + req.body.stage3SteelSectionsSup*1 + req.body.stage3SteelSheetPilesSup*1 +req.body.stage3TimberCLTSup*1 + req.body.stage3TimberGlulamSup*1 + req.body.stage3TimberOtherSup*1 + req.body.stage3MasonryBrickSup*1 + req.body.stage3MasonryBlockSup*1;
    
    if (stage3MaterialSupSum > 0) {
      var stage3SubMaterials = {
        concrete: {piles: req.body.stage3ConPilesSub, insitu: req.body.stage3ConInsituSub, precast: req.body.stage3ConPreCastSub},
          steel: {rebar: req.body.stage3SteelRebarSub, sections: req.body.stage3SteelSectionsSub, sheetPiles: req.body.stage3SteelSheetPilesSub},
          timber: {clt: req.body.stage3TimberCLTSub, glulam: req.body.stage3TimberGlulamSub, other: req.body.stage3TimberOtherSub},
          masonry: {brick: req.body.stage3MasonryBrickSub, block: req.body.stage3MasonryBlockSub}
      };

      Object.assign(newStage3, {subMaterials: stage3SubMaterials})
      
      const stage3MaterialSup = {
        concrete: {piles: req.body.stage3ConPilesSup, insitu: req.body.stage3ConInsituSup, precast: req.body.stage3ConPreCastSup},
          steel: {rebar: req.body.stage3SteelRebarSup, sections: req.body.stage3SteelSectionsSup, sheetPiles: req.body.stage3SteelSheetPilesSup},
          timber: {clt: req.body.stage3TimberCLTSup, glulam: req.body.stage3TimberGlulamSup, other: req.body.stage3TimberOtherSup},
          masonry: {brick: req.body.stage3MasonryBrickSup, block: req.body.stage3MasonryBlockSup}
      };
      Object.assign(newStage3, {superMaterials: stage3MaterialSup})
    };
    
    Object.assign(newProject, {stage3:newStage3})
  };  
  
  //check if stage 4 has been completed
  const stage4MaterialSum = req.body.stage4ConInsitu*1 + req.body.stage4ConPiles*1 + req.body.stage4ConPreCast*1 + req.body.stage4SteelRebar*1 + req.body.stage4SteelSections*1 + req.body.stage4SteelSheetPiles*1 +req.body.stage4TimberCLT*1 + req.body.stage4TimberGlulam*1 + req.body.stage4TimberOther*1 + req.body.stage4MasonryBrick*1 + req.body.stage4MasonryBlock*1;
  
  //create stage 4 schema if data is complete
  if (stage4MaterialSum > 0 ) {
    var newStage4 = new stage.model({
      ga: req.body.stage4GA,
      totalMaterials: {
        concrete: {piles: req.body.stage4ConPiles, insitu: req.body.stage4ConInsitu, precast: req.body.stage4ConPreCast},
        steel: {rebar: req.body.stage4SteelRebar, sections: req.body.stage4SteelSections, sheetPiles: req.body.stage4SteelSheetPiles},
        timber: {clt: req.body.stage4TimberCLT, glulam: req.body.stage4TimberGlulam, other: req.body.stage4TimberOther},
        masonry: {brick: req.body.stage4MasonryBrick, block: req.body.stage4MasonryBlock}
      }
    });
    //check if stage 4 includes sub/super data
    const stage4MaterialSupSum = req.body.stage4ConInsituSup*1 + req.body.stage4ConPilesSup*1 + req.body.stage4ConPreCastSup*1 + req.body.stage4SteelRebarSup*1 + req.body.stage4SteelSectionsSup*1 + req.body.stage4SteelSheetPilesSup*1 +req.body.stage4TimberCLTSup*1 + req.body.stage4TimberGlulamSup*1 + req.body.stage4TimberOtherSup*1 + req.body.stage4MasonryBrickSup*1 + req.body.stage4MasonryBlockSup*1;
    
    if (stage4MaterialSupSum > 0) {
      var stage4SubMaterials = {
        concrete: {piles: req.body.stage4ConPilesSub, insitu: req.body.stage4ConInsituSub, precast: req.body.stage4ConPreCastSub},
          steel: {rebar: req.body.stage4SteelRebarSub, sections: req.body.stage4SteelSectionsSub, sheetPiles: req.body.stage4SteelSheetPilesSub},
          timber: {clt: req.body.stage4TimberCLTSub, glulam: req.body.stage4TimberGlulamSub, other: req.body.stage4TimberOtherSub},
          masonry: {brick: req.body.stage4MasonryBrickSub, block: req.body.stage4MasonryBlockSub}
      };

      Object.assign(newStage4, {subMaterials: stage4SubMaterials})
      
      const stage4MaterialSup = {
        concrete: {piles: req.body.stage4ConPilesSup, insitu: req.body.stage4ConInsituSup, precast: req.body.stage4ConPreCastSup},
          steel: {rebar: req.body.stage4SteelRebarSup, sections: req.body.stage4SteelSectionsSup, sheetPiles: req.body.stage4SteelSheetPilesSup},
          timber: {clt: req.body.stage4TimberCLTSup, glulam: req.body.stage4TimberGlulamSup, other: req.body.stage4TimberOtherSup},
          masonry: {brick: req.body.stage4MasonryBrickSup, block: req.body.stage4MasonryBlockSup}
      };
      Object.assign(newStage4, {superMaterials: stage4MaterialSup})
    };
    
    Object.assign(newProject, {stage4:newStage4})
  };
 
  //check if stage 5 has been completed
  const stage5MaterialSum = req.body.stage5ConInsitu*1 + req.body.stage5ConPiles*1 + req.body.stage5ConPreCast*1 + req.body.stage5SteelRebar*1 + req.body.stage5SteelSections*1 + req.body.stage5SteelSheetPiles*1 +req.body.stage5TimberCLT*1 + req.body.stage5TimberGlulam*1 + req.body.stage5TimberOther*1 + req.body.stage5MasonryBrick*1 + req.body.stage5MasonryBlock*1;
  
  //create stage 5 schema if data is complete
  if (stage5MaterialSum > 0 ) {
    var newStage5 = new stage.model({
      ga: req.body.stage5GA,
      totalMaterials: {
        concrete: {piles: req.body.stage5ConPiles, insitu: req.body.stage5ConInsitu, precast: req.body.stage5ConPreCast},
        steel: {rebar: req.body.stage5SteelRebar, sections: req.body.stage5SteelSections, sheetPiles: req.body.stage5SteelSheetPiles},
        timber: {clt: req.body.stage5TimberCLT, glulam: req.body.stage5TimberGlulam, other: req.body.stage5TimberOther},
        masonry: {brick: req.body.stage5MasonryBrick, block: req.body.stage5MasonryBlock}
      }
    });
    //check if stage 5 includes sub/super data
    const stage5MaterialSupSum = req.body.stage5ConInsituSup*1 + req.body.stage5ConPilesSup*1 + req.body.stage5ConPreCastSup*1 + req.body.stage5SteelRebarSup*1 + req.body.stage5SteelSectionsSup*1 + req.body.stage5SteelSheetPilesSup*1 +req.body.stage5TimberCLTSup*1 + req.body.stage5TimberGlulamSup*1 + req.body.stage5TimberOtherSup*1 + req.body.stage5MasonryBrickSup*1 + req.body.stage5MasonryBlockSup*1;
    
    if (stage5MaterialSupSum > 0) {
      var stage5SubMaterials = {
        concrete: {piles: req.body.stage5ConPilesSub, insitu: req.body.stage5ConInsituSub, precast: req.body.stage5ConPreCastSub},
          steel: {rebar: req.body.stage5SteelRebarSub, sections: req.body.stage5SteelSectionsSub, sheetPiles: req.body.stage5SteelSheetPilesSub},
          timber: {clt: req.body.stage5TimberCLTSub, glulam: req.body.stage5TimberGlulamSub, other: req.body.stage5TimberOtherSub},
          masonry: {brick: req.body.stage5MasonryBrickSub, block: req.body.stage5MasonryBlockSub}
      };

      Object.assign(newStage5, {subMaterials: stage5SubMaterials})
      
      const stage5MaterialSup = {
        concrete: {piles: req.body.stage5ConPilesSup, insitu: req.body.stage5ConInsituSup, precast: req.body.stage5ConPreCastSup},
          steel: {rebar: req.body.stage5SteelRebarSup, sections: req.body.stage5SteelSectionsSup, sheetPiles: req.body.stage5SteelSheetPilesSup},
          timber: {clt: req.body.stage5TimberCLTSup, glulam: req.body.stage5TimberGlulamSup, other: req.body.stage5TimberOtherSup},
          masonry: {brick: req.body.stage5MasonryBrickSup, block: req.body.stage5MasonryBlockSup}
      };
      Object.assign(newStage5, {superMaterials: stage5MaterialSup})
    };
    
    Object.assign(newProject, {stage5:newStage5})
  };

  newProject.save(function(err, data) {
    if (err) { console.log(err);
              //res.send(err);
              //res.end();
              //return err;
             }
    });

};