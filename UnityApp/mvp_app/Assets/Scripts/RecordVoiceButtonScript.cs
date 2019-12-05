using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class RecordVoiceButtonScript : MonoBehaviour
{
    public GameObject background;

    public void buttonEvent() {
        if (background.active)
            background.SetActive(false);
        else 
            background.SetActive(true);
    }
}
