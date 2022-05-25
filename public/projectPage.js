async function createPage() {
  const fetchURL ='https://CarbonTracker.swamder.repl.co' + window.location.pathname + '/json';
  fetch(fetchURL)
    .then(response => response.json())
    .then(data => showData(data))
};


async function showData(data) {
  $("#heading").text(data.projNo + ' - ' + data.projName);
  
  $("#tab1Type").text(data.projType);
  $("#tab1Value").text("£"+data.info.value);
  $("#tab1Coor").text("E/W: " + data.info.cooridantes.ew + ", N/S: " + data.info.cooridantes.ns);
  $("#tab1DesignStart").text(data.info.dates.designStart);
  $("#tab1ConStart").text(data.info.dates.constructionStart);
  $("#tab1ConEnd").text(data.info.dates.constructionEnd);

  if (typeof data.stage2 != "undefined") {

    if (typeof data.stage2.subMaterials != "undefined") {
      $("#tab2Head1").append("<th scope='col'>Stage2</th>");
      $("#tab2Head2").append("<td>Sub Structure</td>");

      $("#tab2BodyConPiles").append("<td>"+data.stage2.subMaterials.concrete.piles+"</td>");
      $("#tab2BodyConInsitu").append("<td>"+data.stage2.subMaterials.concrete.insitu+"</td>");
      $("#tab2BodyConPrecast").append("<td>"+data.stage2.subMaterials.concrete.precast+"</td>");

      $("#tab2BodySteelRebar").append("<td>"+data.stage2.subMaterials.steel.rebar+"</td>");
      $("#tab2BodySteelSections").append("<td>"+data.stage2.subMaterials.steel.sections+"</td>");
      $("#tab2BodySteelSheet").append("<td>"+data.stage2.subMaterials.steel.sheetPiles+"</td>");

      $("#tab2BodyTimberCLT").append("<td>"+data.stage2.subMaterials.timber.clt+"</td>");
      $("#tab2BodyTimberGlulam").append("<td>"+data.stage2.subMaterials.timber.glulam+"</td>");
      $("#tab2BodyTimberOther").append("<td>"+data.stage2.subMaterials.timber.other+"</td>");

      $("#tab2BodyMasonryBrick").append("<td>"+data.stage2.subMaterials.masonry.brick+"</td>");
      $("#tab2BodyMasonryBlock").append("<td>"+data.stage2.subMaterials.masonry.block+"</td>");
    };

    if (typeof data.stage2.superMaterials != "undefined") {
      $("#tab2Head1").append("<th scope='col'></th>");
      $("#tab2Head2").append("<td>Super Structure</td>");

      $("#tab2BodyConPiles").append("<td>"+data.stage2.superMaterials.concrete.piles+"</td>");
      $("#tab2BodyConInsitu").append("<td>"+data.stage2.superMaterials.concrete.insitu+"</td>");
      $("#tab2BodyConPrecast").append("<td>"+data.stage2.superMaterials.concrete.precast+"</td>");

      $("#tab2BodySteelRebar").append("<td>"+data.stage2.superMaterials.steel.rebar+"</td>");
      $("#tab2BodySteelSections").append("<td>"+data.stage2.superMaterials.steel.sections+"</td>");
      $("#tab2BodySteelSheet").append("<td>"+data.stage2.superMaterials.steel.sheetPiles+"</td>");

      $("#tab2BodyTimberCLT").append("<td>"+data.stage2.superMaterials.timber.clt+"</td>");
      $("#tab2BodyTimberGlulam").append("<td>"+data.stage2.superMaterials.timber.glulam+"</td>");
      $("#tab2BodyTimberOther").append("<td>"+data.stage2.superMaterials.timber.other+"</td>");

      $("#tab2BodyMasonryBrick").append("<td>"+data.stage2.superMaterials.masonry.brick+"</td>");
      $("#tab2BodyMasonryBlock").append("<td>"+data.stage2.superMaterials.masonry.block+"</td>");
    };
    
    if (typeof data.stage2.totalMaterials != "undefined") {
      $("#tab2Head1").append("<th scope='col'></th>");
      $("#tab2Head2").append("<td>Total</td>");

      $("#tab2BodyConPiles").append("<td>"+data.stage2.totalMaterials.concrete.piles+"</td>");
      $("#tab2BodyConInsitu").append("<td>"+data.stage2.totalMaterials.concrete.insitu+"</td>");
      $("#tab2BodyConPrecast").append("<td>"+data.stage2.totalMaterials.concrete.precast+"</td>");

      $("#tab2BodySteelRebar").append("<td>"+data.stage2.totalMaterials.steel.rebar+"</td>");
      $("#tab2BodySteelSections").append("<td>"+data.stage2.totalMaterials.steel.sections+"</td>");
      $("#tab2BodySteelSheet").append("<td>"+data.stage2.totalMaterials.steel.sheetPiles+"</td>");

      $("#tab2BodyTimberCLT").append("<td>"+data.stage2.totalMaterials.timber.clt+"</td>");
      $("#tab2BodyTimberGlulam").append("<td>"+data.stage2.totalMaterials.timber.glulam+"</td>");
      $("#tab2BodyTimberOther").append("<td>"+data.stage2.totalMaterials.timber.other+"</td>");

      $("#tab2BodyMasonryBrick").append("<td>"+data.stage2.totalMaterials.masonry.brick+"</td>");
      $("#tab2BodyMasonryBlock").append("<td>"+data.stage2.totalMaterials.masonry.block+"</td>");
    };
  };
  
  const co2FactorsData = await fetch('https://CarbonTracker.swamder.repl.co/ECO2eFactors')
  const co2Factors = await co2FactorsData.json()

  const letiTargetsData = await fetch('https://CarbonTracker.swamder.repl.co/LETITargets')
  const letiTargets = await letiTargetsData.json()

  var materialGraphData = [
    {
      x: calculateMaterialECO2e(data.stage2.totalMaterials, co2Factors),
      y: ['Sequestered', 'Masonry', 'Timber', 'Steel', 'Concrete'],
      type:'bar',
      orientation: 'h'
    }
  ];
  
  Plotly.newPlot("carbonGraph", materialGraphData, letiGraphLayout);
  
  const stage2TotalCarbon = calculateTotalEmbodiedCarbona1a5(data.stage2.totalMaterials, co2Factors);
  const stage2TotalCarbonPerM2 = stage2TotalCarbon / data.stage2.ga

  const ydata = [letiTargets["2020"][data.info.type].structure, stage2TotalCarbonPerM2, letiTargets["2030"][data.info.type].structure];
  console.log(ydata);
  
  var letiGraphData = [
    {
    x: ['LETI 2020', data.projName, 'LETI 2030'],
    y: ydata,
    type: "bar"
  }
  ];

  var letiGraphLayout = {
    autosize: true,
    yaxis: {
      title: 'Embodied Carbon A1-A5 CO2e/m2',
      //ticktext: ['long label','Very long label','3','label'],
      //tickvals: [1, 2, 3, 4],
      //tickmode: 'array',
      automargin: {t:0,b:0,r:0},
      //titlefont: { size:30 },
    }
  };
  Plotly.newPlot("letiGraph", letiGraphData, letiGraphLayout);
  
};

function returnMonthAndYear(date) {
  return date.getMonth() + '/' + date.getFullYear()
}

function calculateTotalEmbodiedCarbona1a5(materials, co2Factors) {
  
  var totalCO2 = (materials.concrete.piles*1 + materials.concrete.insitu*1)*2400*co2Factors.concrete.insitu.a1a5 + materials.concrete.precast*2400*co2Factors.concrete.precast.a1a5 + materials.steel.rebar*co2Factors.steel.rebar.a1a5 + materials.steel.sections*co2Factors.steel.sections.a1a5 + materials.steel.sheetPiles*co2Factors.steel.sections.a1a5 + materials.timber.clt*500*co2Factors.timber.clt.a1a5 + materials.timber.glulam*500*co2Factors.timber.glulam.a1a5 + materials.timber.other*500*co2Factors.timber.other.a1a5 + materials.masonry.brick*1800*co2Factors.masonry.brickwork.a1a5 + materials.masonry.block*2000*co2Factors.masonry.blockwork.a1a5;
  return totalCO2;
};

function calculateMaterialECO2e (materials, co2Factors) {
  const conCarbon = 2400*((materials.concrete.piles*1 + materials.concrete.insitu*1)*co2Factors.concrete.insitu.a1a5 + materials.concrete.precast*co2Factors.concrete.precast.a1a5);
  const steelCarbon = materials.steel.rebar*co2Factors.steel.rebar.a1a5 + materials.steel.sections*co2Factors.steel.sections.a1a5 + materials.steel.sheetPiles*co2Factors.steel.sections.a1a5;
  const timberCarbon = 500*(materials.timber.clt*co2Factors.timber.clt.a1a5 + materials.timber.glulam*co2Factors.timber.glulam.a1a5 + materials.timber.other*co2Factors.timber.other.a1a5);
  const masonryCarbon = materials.masonry.brick*1800*co2Factors.masonry.brickwork.a1a5 + materials.masonry.block*2000*co2Factors.masonry.blockwork.a1a5;
  const sequesteredCarbon = (materials.timber.clt*1 +materials.timber.glulam*1 +materials.timber.other*1)*500*-1.64;

  return [sequesteredCarbon, masonryCarbon, timberCarbon, steelCarbon, conCarbon]
};