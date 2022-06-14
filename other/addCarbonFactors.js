//Run this file to add a set of embodied carbon factors

console.log("function started");
  

require("../models/carbonFactors.js");

const saw2020Factors = new CarbonFactors({
  name: "SAW2020Factors",
  description: "Smith and Wallwork default embodied carbon factors, set in 2020",
  dateAdded: "09/03/2022",
  concrete: {insitu: {a1a3: 0.103, a4: 0.005, a5a: 0.005, a5w: 0.007, a1a5: 0.12},
            precast: {a1a3: 0.178, a4: 0.032, a5a: 0.005, a5w: 0.002, a1a5: 0.218}},
  steel: {sections: {a1a3: 1.79, a4: 0.096, a5a: 0.014, a5w: 0.019, a1a5: 1.919},
         rebar: {a1a3: 1.337, a4: 0.096, a5a: 0.007, a5w: 0.077, a1a5: 1.517}},
  timber: {clt: {a1a3: 0.437, a4: 0.16, a5a: 0.007, a5w: 0.024, a1a5: 0.628},
          glulam: {a1a3: 0.512, a4: 0.16, a5a: 0.014, a5w: 0.025, a1a5: 0.711},
          other: {a1a3: 0.263, a4: 0.032, a5a: 0.007, a5w: 0.021, a1a5: 0.323}},
  masonry: {blockwork: {a1a3: 0.28, a4: 0.032, a5a: 0.004, a5w: 0.083, a1a5: 0.316},
           brickwork: {a1a3: 0.213, a4: 0.032, a5a: 0.005, a5w: 0.066, a1a5: 0.316}}
});

console.log("factors defined");
  
saw2020Factors.save(function(err, data) {
    if (err) return console.error(err);
    //done(null, data)
    else console.log('saw2020Factors added to database.')
    });