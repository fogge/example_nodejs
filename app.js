// Require Express - a webserver module
const express = require('express');

// Require the person info
const persons = require('./person-info.json');

// Create express server
const app = express();

// A route using params
app.get('/person/:firstName', (req, res) => {
  let chosen = persons.filter((person) =>
    person.firstName == req.params.firstName
  );
  res.json(chosen);
  /*if(chosen.length){
    let toSend = '';
    for(let person of chosen){
      toSend += `
        <h1>${person.firstName} ${person.lastName}</h1>
        <p>${person.about}</p>
      `
    }
    res.send(toSend);
  }
  else {
    res.send('<h1>Could not find any person with that name!');
  }*/
});

// Another route using params
app.get('/person/:firstName/:lastName', (req, res) => {
  let chosen = persons.filter((person) =>
    person.firstName == req.params.firstName &&
    person.lastName == req.params.lastName
  );
  res.json(chosen);
})

// Respond to everything else
app.get('*', (req,res) => {
  res.send('Glad you are here!');
});

// Start the webserver
app.listen(3000, ()=> {
  console.log('Listening on port 3000.');
});