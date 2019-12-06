import * as Speech from 'expo-speech';

function speaker(text, language) {
  Speech.speak(text, {language : language});
}

export default speaker;