const soundObject = new Expo.Audio.Sound();

try {
  await soundObject.loadAsync(require('../../audio/output.mp3'));
  await soundObject.playAsync();
  console.log("Sound is playing !")
} catch (error) {
  console.log("An error occurred!")
}