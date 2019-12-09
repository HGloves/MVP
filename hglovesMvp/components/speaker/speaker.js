import * as Speech from 'expo-speech';

function textToSpeech(text, language) {
  Speech.speak(text, {language : language});
}

export default textToSpeech;