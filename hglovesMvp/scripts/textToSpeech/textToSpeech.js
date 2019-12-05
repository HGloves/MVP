const textToSpeechGoogle = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

textToSpeech('Bonjour, ceci est un example de conversion.')

async function textToSpeech(text) {
  console.log('Start encoding\n');

  const client = new textToSpeechGoogle.TextToSpeechClient();

  const request = {
    input: {text: text},
    voice: {languageCode: 'fr-FR', ssmlGender: 'NEUTRAL'},
    audioConfig: {audioEncoding: 'MP3'},
  };
  const [response] = await client.synthesizeSpeech(request);
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('../../../audio/output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: audio/output.mp3');
}