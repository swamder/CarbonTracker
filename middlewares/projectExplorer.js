const project = require('./../models/project.js');

exports.createTableDataArray = (results) => {
  let projects =[];

  for(let i=0; i<results.length;i++){
    let row=[];
    row.push(results[i].projNo);
    row.push(results[i].projName);
    row.push(results[i].projType);

    projects.push(row);
  }
  
 return projects  
};