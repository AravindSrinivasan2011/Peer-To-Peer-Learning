
const express = require('express');
const bodyParser = require('body-parser');

const port = 3000

const cloudant = require('./lib/cloudant.js');

const app = express();
app.use(bodyParser.json());

const testConnections = () => {

  const status = {}
      return cloudant.info()
      .then(info => {
      status['cloudant'] = 'ok';
      return status
    })
    .catch(err => {
      console.error(err);
      status['cloudant'] = 'failed';
      return status
    });
};

const handleError = (res, err) => {
  const status = err.code !== undefined && err.code > 0 ? err.code : 500;
  return res.status(status).json(err);
};

app.get('/', (req, res) => {
  testConnections().then(status => res.json({ status: status }));


});

/**
 * Get a session ID
 *
 * Returns a session ID that can be used in subsequent message API calls.
 */
app.get('/api/session', (req, res) => {
  assistant
    .session()
    .then(sessionid => res.send(sessionid))
    .catch(err => handleError(res, err));
});


app.post('/api/resource', (req, res) => {

  const name = req.body.name;
  const stclass = req.body.stclass;
  const subject = req.body.subject;
  const video = req.body.video;

  console.log('inside cloundat /api/resource;');

  cloudant
    .create(name,stclass,subject,video)
    .then(data => {
      if (data.statusCode != 201) {
        res.sendStatus(data.statusCode)
      } else {
        res.send(data.data)
      }
    })
    .catch(err => handleError(res, err));
});


app.get('/api/resource', (req, res) => {


  const name = req.query.name;
  const stclass = req.query.stclass;

  cloudant
    .find(name,stclass)
    .then(data => {

      if (data.statusCode != 200) {
        res.sendStatus(data.statusCode)
      } else {
        res.send(data.data)
      }
    })
    .catch(err => handleError(res, err));
});


app.get('/api/resource/audio', (req, res) => {





 var request = require('request');
 const audiopath = './recordings/audio-file.flac';


 //const audiopath= 'content://com.android.providers.downloads.documents/document/raw%3A%2Fstorage%2Femulated%2F0%2FDownload%2Faudio-file.flac'; 
  const fs = require('fs');
  audio = fs.createReadStream(audiopath);
  

  
var options = {
      url: 'https://api.eu-gb.speech-to-text.watson.cloud.ibm.com/v1/recognize',
      method: 'POST',
      body: audio,
      headers: {
        'Content-Type': 'audio/flac'
      },
      auth: {
          'user': 'apikey',
          'pass': 'L6C-U6AnUSj1REKtirKOYiaixGpD5zSMCevq-8N4kX5e'
      }
  };

  request(options, function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      JSON.parse(body, (key, value) => {
         if(key =='transcript'){
          console.log(value);
          res.send(value);
         } 
      });
    }
    
})

});


  


const server = app.listen(port, () => {
   const host = server.address().address;
   const port = server.address().port;
   console.log(`SolutionStarterKitCooperationServer listening at http://${host}:${port}`);
});



