const carbonFactors = fetch('https://CarbonTracker.swamder.repl.co/ECO2eFactors')
  .then(response => response.json())
  .then(data => {return data});

const letiTargets = fetch('https://CarbonTracker.swamder.repl.co/LETITargets')  .then(response => response.json())
  .then(data => {return data});

async function startUp() {
  console.log(await carbonFactors);
  console.log(await letiTargets);
}

var activeTab = $(document).ready(function(){
  $('.nav-tabs a').on('shown.bs.tab', function(event){
    var activeTab = $(event.target).text();
    console.log(activeTab);
    updateMaterialsGraph();
    return activeTab
  });
});


async function updateMaterialsGraph(){
  //console.log(activeTab);
  //console.log(document.getElementById("stage2ConInsituSub").value);
  var stage2ConSub = (document.getElementById("stage2ConInsituSub").value*1 + document.getElementById("stage2ConPreCastSub").value*1 + document.getElementById("stage2ConPilesSub").value*1) * 2400;
  var stage2SteelSub = (document.getElementById("stage2SteelRebarSub").value*1 + document.getElementById("stage2SteelSectionsSub").value*1 + document.getElementById("stage2SteelSheetPilesSub").value*1)*1;
  var stage2TimberSub = (document.getElementById("stage2TimberGlulamSub").value*1 + document.getElementById("stage2TimberCLTSub").value*1 + document.getElementById("stage2TimberOtherSub").value*1) * 500;
  var stage2MasonrySub = (document.getElementById("stage2MasonryBrickSub").value*1800 + document.getElementById("stage2MasonryBlockSub").value*2000);

  var stage2ConSup = (document.getElementById("stage2ConInsituSup").value + document.getElementById("stage2ConPreCastSup").value + document.getElementById("stage2ConPilesSup").value) * 2400;
  var stage2SteelSup = (document.getElementById("stage2SteelRebarSup").value + document.getElementById("stage2SteelSectionsSup").value + document.getElementById("stage2SteelSheetPilesSup").value)*1;
  var stage2TimberSup = (document.getElementById("stage2TimberGlulamSup").value + document.getElementById("stage2TimberCLTSup").value + document.getElementById("stage2TimberOtherSup").value) * 500;
  var stage2MasonrySup = (document.getElementById("stage2MasonryBrickSup").value + document.getElementById("stage2MasonryBlockSup").value) * 2000;

  var stage3ConSub = (document.getElementById("stage3ConInsituSub").value + document.getElementById("stage3ConPreCastSub").value + document.getElementById("stage3ConPilesSub").value) * 2400;
  var stage3SteelSub = (document.getElementById("stage3SteelRebarSub").value + document.getElementById("stage3SteelSectionsSub").value + document.getElementById("stage3SteelSheetPilesSub").value)*1;
  var stage3TimberSub = (document.getElementById("stage3TimberGlulamSub").value + document.getElementById("stage3TimberCLTSub").value + document.getElementById("stage3TimberOtherSub").value) * 500;
  var stage3MasonrySub = (document.getElementById("stage3MasonryBrickSub").value + document.getElementById("stage3MasonryBlockSub").value) * 2000;

  var stage3ConSup = (document.getElementById("stage3ConInsituSup").value + document.getElementById("stage3ConPreCastSup").value + document.getElementById("stage3ConPilesSup").value) * 2400;
  var stage3SteelSup = (document.getElementById("stage3SteelRebarSup").value + document.getElementById("stage3SteelSectionsSup").value + document.getElementById("stage3SteelSheetPilesSup").value)*1;
  var stage3TimberSup = (document.getElementById("stage3TimberGlulamSup").value + document.getElementById("stage3TimberCLTSup").value + document.getElementById("stage3TimberOtherSup").value) * 500;
  var stage3MasonrySup = (document.getElementById("stage3MasonryBrickSup").value + document.getElementById("stage3MasonryBlockSup").value) * 2000;

  var stage4ConSub = (document.getElementById("stage4ConInsituSub").value + document.getElementById("stage4ConPreCastSub").value + document.getElementById("stage4ConPilesSub").value) * 2400;
  var stage4SteelSub = (document.getElementById("stage4SteelRebarSub").value + document.getElementById("stage4SteelSectionsSub").value + document.getElementById("stage4SteelSheetPilesSub").value)*1;
  var stage4TimberSub = (document.getElementById("stage4TimberGlulamSub").value + document.getElementById("stage4TimberCLTSub").value + document.getElementById("stage4TimberOtherSub").value) * 500;
  var stage4MasonrySub = (document.getElementById("stage4MasonryBrickSub").value + document.getElementById("stage4MasonryBlockSub").value) * 2000;

  var stage4ConSup = (document.getElementById("stage4ConInsituSup").value + document.getElementById("stage4ConPreCastSup").value + document.getElementById("stage4ConPilesSup").value) * 2400;
  var stage4SteelSup = (document.getElementById("stage4SteelRebarSup").value + document.getElementById("stage4SteelSectionsSup").value + document.getElementById("stage4SteelSheetPilesSup").value)*1;
  var stage4TimberSup = (document.getElementById("stage4TimberGlulamSup").value + document.getElementById("stage4TimberCLTSup").value + document.getElementById("stage4TimberOtherSup").value) * 500;
  var stage4MasonrySup = (document.getElementById("stage4MasonryBrickSup").value + document.getElementById("stage4MasonryBlockSup").value) * 2000;

  var stage5ConSub = (document.getElementById("stage5ConInsituSub").value + document.getElementById("stage5ConPreCastSub").value + document.getElementById("stage5ConPilesSub").value) * 2400;
  var stage5SteelSub = (document.getElementById("stage5SteelRebarSub").value + document.getElementById("stage5SteelSectionsSub").value + document.getElementById("stage5SteelSheetPilesSub").value)*1;
  var stage5TimberSub = (document.getElementById("stage5TimberGlulamSub").value + document.getElementById("stage5TimberCLTSub").value + document.getElementById("stage5TimberOtherSub").value) * 500;
  var stage5MasonrySub = (document.getElementById("stage5MasonryBrickSub").value + document.getElementById("stage5MasonryBlockSub").value) * 2000;

  var stage5ConSup = (document.getElementById("stage5ConInsituSup").value + document.getElementById("stage5ConPreCastSup").value + document.getElementById("stage5ConPilesSup").value) * 2400;
  var stage5SteelSup = (document.getElementById("stage5SteelRebarSup").value + document.getElementById("stage5SteelSectionsSup").value + document.getElementById("stage5SteelSheetPilesSup").value)*1;
  var stage5TimberSup = (document.getElementById("stage5TimberGlulamSup").value + document.getElementById("stage5TimberCLTSup").value + document.getElementById("stage5TimberOtherSup").value) * 500;
  var stage5MasonrySup = (document.getElementById("stage5MasonryBrickSup").value + document.getElementById("stage5MasonryBlockSup").value) * 2000;

  var conTotal = (document.getElementById("stage2ConInsitu").value*1 + document.getElementById("stage2ConPreCast").value*1 + document.getElementById("stage2ConPiles").value*1) * 2400;
  var steelTotal = stage2SteelSub + stage2SteelSup;
  var timberTotal = stage2TimberSub + stage2TimberSup;
  var masonryTotal = stage2MasonrySub + stage2MasonrySup;
  
  var quantsData = [{ y:["Concrete","Steel","Timber","Masonry"], x: [conTotal, steelTotal, timberTotal, masonryTotal], type: "bar", orientation: 'h'}];

  Plotly.newPlot("quantsGraph", quantsData);

  //create LETI graph
  var buildingType = document.getElementById("projType").value;

  const x = await carbonFactors;

  var stage2ConcreteCarbon = (document.getElementById("stage2ConInsitu").value*1 * x.concrete.insitu.a1a5 + document.getElementById("stage2ConPreCast").value*1 * x.concrete.precast.a1a5 + document.getElementById("stage2ConPiles").value*1 * x.concrete.insitu.a1a5) * 2400;

  var stage2SteelCarbon = (document.getElementById("stage2SteelRebar").value*1 * x.steel.rebar.a1a5 + document.getElementById("stage2SteelSections").value*1 * x.steel.sections.a1a5 + document.getElementById("stage2SteelSheetPiles").value*1 * x.steel.sections.a1a5)*1;

  var stage2TimberCarbon = (document.getElementById("stage2TimberGlulam").value * x.timber.glulam.a1a5 + document.getElementById("stage2TimberCLT").value * x.timber.clt.a1a5 + document.getElementById("stage2TimberOther").value * x.timber.other.a1a5) * 500;

  var stage2MasonryCarbon = (document.getElementById("stage2MasonryBrick").value*1800 * x.masonry.brickwork.a1a5 + document.getElementById("stage2MasonryBlock").value*2000 * x.masonry.blockwork.a1a5);

  var stage2CarbonGA = (stage2ConcreteCarbon + stage2SteelCarbon + stage2TimberCarbon + stage2MasonryCarbon)/ document.getElementById("stage2GA").value;

  const a = await letiTargets

  var leti2020 = a["2020"][document.getElementById("projType").value].structure;
  var leti2030 = a["2030"][document.getElementById("projType").value].structure
  
  var carbonData = [{
    x: ["LETI 2020","Project","LETI 2030",],
    y: [leti2020, stage2CarbonGA, leti2030],
    type: "bar",
  }];
  
  Plotly.newPlot("carbonGraph", carbonData);
  
}; 


function updateMaterialTotals() {

  //stage 2
    //concrete
    document.getElementById("stage2ConInsitu").value = parseInt(document.getElementById("stage2ConInsituSub").value) + parseInt(document.getElementById("stage2ConInsituSup").value);
    document.getElementById("stage2ConPreCast").value = parseInt(document.getElementById("stage2ConPreCastSub").value) + parseInt(document.getElementById("stage2ConPreCastSup").value);
    document.getElementById("stage2ConPiles").value = parseInt(document.getElementById("stage2ConPilesSub").value) + parseInt(document.getElementById("stage2ConPilesSup").value);

    //steel
    document.getElementById("stage2SteelRebar").value = parseInt(document.getElementById("stage2SteelRebarSub").value) + parseInt(document.getElementById("stage2SteelRebarSup").value);
    document.getElementById("stage2SteelSections").value = parseInt(document.getElementById("stage2SteelSectionsSub").value) + parseInt(document.getElementById("stage2SteelSectionsSup").value);
    document.getElementById("stage2SteelSheetPiles").value = parseInt(document.getElementById("stage2SteelSheetPilesSub").value) + parseInt(document.getElementById("stage2SteelSheetPilesSup").value);

    //timber
    document.getElementById("stage2TimberGlulam").value = parseInt(document.getElementById("stage2TimberGlulamSub").value) + parseInt(document.getElementById("stage2TimberGlulamSup").value);
    document.getElementById("stage2TimberCLT").value = parseInt(document.getElementById("stage2TimberCLTSub").value) + parseInt(document.getElementById("stage2TimberCLTSup").value);
    document.getElementById("stage2TimberOther").value = parseInt(document.getElementById("stage2TimberOtherSub").value) + parseInt(document.getElementById("stage2TimberOtherSup").value);

    //Masonry
    document.getElementById("stage2MasonryBrick").value = parseInt(document.getElementById("stage2MasonryBrickSub").value) + parseInt(document.getElementById("stage2MasonryBrickSup").value);
    document.getElementById("stage2MasonryBlock").value = parseInt(document.getElementById("stage2MasonryBlockSub").value) + parseInt(document.getElementById("stage2MasonryBlockSup").value);

  //Stage 3
    //concrete
      document.getElementById("stage3ConInsitu").value = parseInt(document.getElementById("stage3ConInsituSub").value) + parseInt(document.getElementById("stage3ConInsituSup").value);
      document.getElementById("stage3ConPreCast").value = parseInt(document.getElementById("stage3ConPreCastSub").value) + parseInt(document.getElementById("stage3ConPreCastSup").value);
      document.getElementById("stage3ConPiles").value = parseInt(document.getElementById("stage3ConPilesSub").value) + parseInt(document.getElementById("stage3ConPilesSup").value);

    //steel
      document.getElementById("stage3SteelRebar").value = parseInt(document.getElementById("stage3SteelRebarSub").value) + parseInt(document.getElementById("stage3SteelRebarSup").value);
      document.getElementById("stage3SteelSections").value = parseInt(document.getElementById("stage3SteelSectionsSub").value) + parseInt(document.getElementById("stage3SteelSectionsSup").value);
      document.getElementById("stage3SteelSheetPiles").value = parseInt(document.getElementById("stage3SteelSheetPilesSub").value) + parseInt(document.getElementById("stage3SteelSheetPilesSup").value);

    //timber
      document.getElementById("stage3TimberGlulam").value = parseInt(document.getElementById("stage3TimberGlulamSub").value) + parseInt(document.getElementById("stage3TimberGlulamSup").value);
      document.getElementById("stage3TimberCLT").value = parseInt(document.getElementById("stage3TimberCLTSub").value) + parseInt(document.getElementById("stage3TimberCLTSup").value);
      document.getElementById("stage3TimberOther").value = parseInt(document.getElementById("stage3TimberOtherSub").value) + parseInt(document.getElementById("stage3TimberOtherSup").value);

    //Masonry
      document.getElementById("stage3MasonryBrick").value = parseInt(document.getElementById("stage3MasonryBrickSub").value) + parseInt(document.getElementById("stage3MasonryBrickSup").value);
      document.getElementById("stage3MasonryBlock").value = parseInt(document.getElementById("stage3MasonryBlockSub").value) + parseInt(document.getElementById("stage3MasonryBlockSup").value);

  //Stage 4
    //concrete
      document.getElementById("stage4ConInsitu").value = parseInt(document.getElementById("stage4ConInsituSub").value) + parseInt(document.getElementById("stage4ConInsituSup").value);
      document.getElementById("stage4ConPreCast").value = parseInt(document.getElementById("stage4ConPreCastSub").value) + parseInt(document.getElementById("stage4ConPreCastSup").value);
      document.getElementById("stage4ConPiles").value = parseInt(document.getElementById("stage4ConPilesSub").value) + parseInt(document.getElementById("stage4ConPilesSup").value);

    //steel
      document.getElementById("stage4SteelRebar").value = parseInt(document.getElementById("stage4SteelRebarSub").value) + parseInt(document.getElementById("stage4SteelRebarSup").value);
      document.getElementById("stage4SteelSections").value = parseInt(document.getElementById("stage4SteelSectionsSub").value) + parseInt(document.getElementById("stage4SteelSectionsSup").value);
      document.getElementById("stage4SteelSheetPiles").value = parseInt(document.getElementById("stage4SteelSheetPilesSub").value) + parseInt(document.getElementById("stage4SteelSheetPilesSup").value);

    //timber
      document.getElementById("stage4TimberGlulam").value = parseInt(document.getElementById("stage4TimberGlulamSub").value) + parseInt(document.getElementById("stage4TimberGlulamSup").value);
      document.getElementById("stage4TimberCLT").value = parseInt(document.getElementById("stage4TimberCLTSub").value) + parseInt(document.getElementById("stage4TimberCLTSup").value);
      document.getElementById("stage4TimberOther").value = parseInt(document.getElementById("stage4TimberOtherSub").value) + parseInt(document.getElementById("stage4TimberOtherSup").value);

    //Masonry
      document.getElementById("stage4MasonryBrick").value = parseInt(document.getElementById("stage4MasonryBrickSub").value) + parseInt(document.getElementById("stage4MasonryBrickSup").value);
      document.getElementById("stage4MasonryBlock").value = parseInt(document.getElementById("stage4MasonryBlockSub").value) + parseInt(document.getElementById("stage4MasonryBlockSup").value);

  //Stage 5
      //concrete
      document.getElementById("stage5ConInsitu").value = parseInt(document.getElementById("stage5ConInsituSub").value) + parseInt(document.getElementById("stage5ConInsituSup").value);
      document.getElementById("stage5ConPreCast").value = parseInt(document.getElementById("stage5ConPreCastSub").value) + parseInt(document.getElementById("stage5ConPreCastSup").value);
      document.getElementById("stage5ConPiles").value = parseInt(document.getElementById("stage5ConPilesSub").value) + parseInt(document.getElementById("stage5ConPilesSup").value);

    //steel
      document.getElementById("stage5SteelRebar").value = parseInt(document.getElementById("stage5SteelRebarSub").value) + parseInt(document.getElementById("stage5SteelRebarSup").value);
      document.getElementById("stage5SteelSections").value = parseInt(document.getElementById("stage5SteelSectionsSub").value) + parseInt(document.getElementById("stage5SteelSectionsSup").value);
      document.getElementById("stage5SteelSheetPiles").value = parseInt(document.getElementById("stage5SteelSheetPilesSub").value) + parseInt(document.getElementById("stage5SteelSheetPilesSup").value);

    //timber
      document.getElementById("stage5TimberGlulam").value = parseInt(document.getElementById("stage5TimberGlulamSub").value) + parseInt(document.getElementById("stage5TimberGlulamSup").value);
      document.getElementById("stage5TimberCLT").value = parseInt(document.getElementById("stage5TimberCLTSub").value) + parseInt(document.getElementById("stage5TimberCLTSup").value);
      document.getElementById("stage5TimberOther").value = parseInt(document.getElementById("stage5TimberOtherSub").value) + parseInt(document.getElementById("stage5TimberOtherSup").value);

    //Masonry
      document.getElementById("stage5MasonryBrick").value = parseInt(document.getElementById("stage5MasonryBrickSub").value) + parseInt(document.getElementById("stage5MasonryBrickSup").value);
      document.getElementById("stage5MasonryBlock").value = parseInt(document.getElementById("stage5MasonryBlockSub").value) + parseInt(document.getElementById("stage5MasonryBlockSup").value);
      
    };
