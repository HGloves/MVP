using System;
using System.IO;
using Google.Cloud.TextToSpeech.V1;

public class QuickStart
{
    public static void Main(string[] args)
    {
        TextToSpeechClient client = TextToSpeechClient.Create();
        SynthesisInput input = new SynthesisInput
        {
            Text = "Dorian est la plus belle personne du languedoc roussillon!"
        };
        VoiceSelectionParams voice = new VoiceSelectionParams
        {
            LanguageCode = "fr-FR",
            SsmlGender = SsmlVoiceGender.Neutral
        };
        AudioConfig config = new AudioConfig
        {
            AudioEncoding = AudioEncoding.Mp3
        };
        var response = client.SynthesizeSpeech(new SynthesizeSpeechRequest
        {
            Input = input,
            Voice = voice,
            AudioConfig = config
        });
        using (Stream output = File.Create("output.mp3"))
        {
            response.AudioContent.WriteTo(output);
            Console.WriteLine($"Audio content written to file 'output.mp3'");
        }
    }
}