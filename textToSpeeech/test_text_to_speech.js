const textToSpeech = require('@google-cloud/text-to-speech');

const fs = require('fs');
const util = require('util');
main()
async function main() {
  console.log('Start encoding\n');
  const client = new textToSpeech.TextToSpeechClient();

  const text = 'Bonjour, ceci est un example de conversion.';
  const request = {
    input: {text: text},
    voice: {languageCode: 'fr-FR', ssmlGender: 'NEUTRAL'},
    audioConfig: {audioEncoding: 'MP3'},
  };
  const [response] = await client.synthesizeSpeech(request);
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');
}