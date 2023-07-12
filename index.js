const dsaPatterns = require('./handlers/patterns');
const dsaArrays = require('./handlers/arrays');

const express = require("express")
const app = express()
app.get("/",function(request,response){
response.send("Hello World!")
})
app.listen(10000, function () {
  // dsaPatterns.patterns();
  dsaArrays.arrays();
});