const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/project', express.static('public'));

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const stage = require('./models/stage.js');
const project = require('./models/project.js');
const carbonFactors = require('./models/carbonFactors.js');

const home = require('./middlewares/homePage.js');
const newProject = require('./middlewares/saveNewProject.js');

app.get('/', (req, res) => {
  home.homePage(req, res);
});

app.post('/projectSearch', (req, res) => {
  project.model.findOne({projNo: req.body.projNo}, function(err,data) {
    if (err) {console.error(err)};
  }).then(result => {
      if (result === null){res.send('Project not found')}
      else {res.redirect('/project/' + result.projNo)}
    });
});

app.get('/project/:projNo', (req,res) => {
  res.sendFile(__dirname + "/views/project.html")
});

app.get('/project/:projNo/json', (req,res) => {
  //res.sendFile(__dirname + "/views/project.html")
  project.model.findOne({projNo: req.params.projNo}, function(err,data) {
    if (err) {console.log(err); };
  }).then(result => {
    if (result === null){res.send('Project not found')}
    else {
      res.json(result)
    };
    });
});

app.get('/NewProject', (req, res) => {
  res.sendFile(__dirname + "/views/newProject.html")
});

app.post('/NewProject/submit/', (req,res) => {
  newProject.save(req,res);
  //console.log(err);
  console.log("Project " + req.body.projNo + " saved");
  res.redirect('/project/' + req.body.projNo);
});

app.get('/ECO2eFactors', (req, res) => {
  carbonFactors.model.find()
                      .sort("-year")
                      .limit(1)
                      .then(result => {res.json(result[0])});
});

app.get('/LETITargets', (req, res) => {
  res.sendFile(__dirname + '/letiTarget.json');
})

app.get('/About', (req, res) => {
  res.sendFile(__dirname + "/views/about.html")
});

app.listen(3000, (err) => {
  //if err console.log(err);
  console.log('server started');
});
