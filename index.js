const express = require('express');

const app = express();

app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/home.html")
});

app.get('/NewProject', (req, res) => {
  res.sendFile(__dirname + "/public/newProject.html")
});

app.post('/NewProject/submit/', (req,res) => {
  console.log('hi');
  console.log(req.body.projNo);
})

app.listen(3000, () => {
  console.log('server started');
});
