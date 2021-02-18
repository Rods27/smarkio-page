const rescue = require('express-rescue');
const connection = require('./connection');
const TextToSpeech = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const Sound = require('node-aplay');
const fs = require('fs');

//Get all comments
const getAll = rescue(async (_req, res)=> {
  const [comment] = await connection.execute('SELECT * FROM commentaries;');
  res.status(200).json(comment)
});

//Insert a comment
const create = rescue(async (req, res)=> {
  const { comment } = req.body
  const all = await getAll();
  console.log(all)
  const [newComment] = await connection.execute(
    'INSERT INTO commentaries (comment) VALUES (?)',
    [comment]
  )
  res.status(200).json(newComment)
});

//Delete a comment
const exclude = rescue(async (req, res)=> {
  const { text } = req.body;
   await connection.execute(
    'DELETE FROM Smarkio_DB.commentaries WHERE comment = ?',
    [text]
  )
  res.status(200).json('Response deleted successfully');
});

//Text to Speech
const textToSpeech = new TextToSpeech({
  authenticator: new IamAuthenticator({ apikey: 'imCUsUNRYTrOyQJ_TwSu4vWtlg2prml9SRc71GQ2LUG4'}),
  serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/b5015479-92b1-4cda-9c69-488842da2b6c',
  disableSslVerification: true,
});

const read = rescue(async (req, res)=> {
  const synthesizeParams = {
    text: req.body.text,
    accept: 'audio/wav',
    voice: 'pt-BR_IsabelaV3Voice',
  }
  textToSpeech.synthesize(synthesizeParams)
    .then(response => {
      return textToSpeech.repairWavHeaderStream(response.result);
    })
    .then(buffer => {
      fs.writeFileSync(`../client/public/sounds/${req.body.text}.wav`, buffer);
      new Sound(`../client/public/sounds/${req.body.text}.wav`).play();
    })
    .catch(err => {
      console.log('error:', err);
    });
});

  module.exports = { getAll, create, read, exclude };