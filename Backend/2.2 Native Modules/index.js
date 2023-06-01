const fs = require("fs");

//To write 
// fs.writeFile("message.txt", "Hello from Rishi", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

//To read
fs.readFile("message.txt","utf-8",(err, data) => {
    if (err) throw err;
    console.log(data);
  }); 