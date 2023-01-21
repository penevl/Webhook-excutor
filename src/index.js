console.log("Starting webhook executor...");

const fs = require("fs");
const express = require('express')
const { exec } = require('child_process');
const app = express()

let hooksJson = JSON.parse(fs.readFileSync("./hooks/hooks.json"));

hooksJson.forEach(element => {
    
    let name = element.name;
    let url = element.url;
    let script = element.script;


    console.log("Created a webhook listener for \"" + name + "\" with the url of \"" + url  +"\"")

    app.post(element.url, (req, res) => {

        console.log("\"" + name + "\" Has been hit with a request")
        console.log("Executing script \"" + script + "\"")

        exec("sh " + __dirname + "/../scripts/" + script, (error, stdout, stderr) => {
            console.log("[SCRIPT EXECUTION START]")
            console.log(stdout);
            console.error(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
            console.log("[SCRIPT EXECUTION END]")
        });

        res.status(200).end()

      })

});

app.listen(3000, () => console.log("Server up on port 3000"))