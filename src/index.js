console.log("Starting webhook executor...");

const fs = require("fs");

let hooksJson = JSON.parse(fs.readFileSync("./hooks/hooks.json"));

