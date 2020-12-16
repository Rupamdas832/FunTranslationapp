const express = require("express")
var cors = require("cors")

var app = express();
const port = 3002
app.use(cors())

app.get("/", (req, res) => {
  res.send(" Go to translate using FAKE api ha ha ha ....")
})

app.get('/translate/yoda.json', (req, res) => {
    console.log(req.query.text)
    res.json({
      "success": {
          "total": 1
      },
      "contents": {
          "translated": "Testing,  yoda translation voice",
          "text": req.query.text || "text missing",
          "translation": "yoda"
      }
  })
  });
  app.get('/translate/minion.json', (req, res) => {
    console.log(req.query.text)
    res.json({
      "success": {
          "total": 1
      },
      "contents": {
          "translated": "Testing,  minion translation voice",
          "text": req.query.text || "text missing",
          "translation": "yoda"
      }
  })
  });
  app.get('/translate/pirate.json', (req, res) => {
    console.log(req.query.text)
    res.json({
      "success": {
          "total": 1
      },
      "contents": {
          "translated": "Testing,  pirate translation voice",
          "text": req.query.text || "text missing",
          "translation": "yoda"
      }
  })
  });
  app.get('/translate/brooklyn.json', (req, res) => {
    console.log(req.query.text)
    res.json({
      "success": {
          "total": 1
      },
      "contents": {
          "translated": "Testing,  brooklyn translation voice",
          "text": req.query.text || "text missing",
          "translation": "yoda"
      }
  })
  });
  app.get('/translate/australian.json', (req, res) => {
    console.log(req.query.text)
    res.json({
      "success": {
          "total": 1
      },
      "contents": {
          "translated": "Testing,  australian translation voice",
          "text": req.query.text || "text missing",
          "translation": "yoda"
      }
  })
  });

app.listen(port, () => {
    console.log("Server is RUNNING IN " + port)
})