console.log("Starting webhook executor...")

const fs = require("fs")

var hooksRawJson;

fs.readFile("./hooks/hooks.json", 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    hooksRawJson = data;
});