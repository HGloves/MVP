using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;



public class LormLightScript : MonoBehaviour
{
    public GameObject obj;
    public GameObject hand;

    float offset_x = 0;

    int idxToTest = 1;

    bool isEndGreaterX = false;
    bool isEndGreaterY = false;
    bool isEndGreaterZ = false;

    Transform actualBegin;
    Transform actualEnd;

    [Serializable]
    public struct lorm_moves
    {
        public char c;
        public Vector3 begin;
        public Vector3 end;
    }

    public Transform[] myArray2 = new Transform[30];

    //X = X
    //Y = Z
    //Z = Y

    private void Start()
    {
        foreach (Transform child in myArray2[idxToTest])
        {
            Debug.Log("Child:");
            Debug.Log(child);
        }
        actualBegin = myArray2[idxToTest].GetChild(0);
        actualEnd = myArray2[idxToTest].GetChild(1);
        isEndGreaterX = (actualEnd.position.x > actualBegin.position.x) ? true : false;
        isEndGreaterY = (actualEnd.position.y > actualBegin.position.y) ? true : false;
        isEndGreaterZ = (actualEnd.position.z > actualBegin.position.z) ? true : false;
        obj.transform.position = actualBegin.position;
        offset_x = (actualBegin.position.x - myArray2[1].position.x) / (actualBegin.position.y - actualEnd.position.y);
        offset_x *= (offset_x  < 0) ? - 1 : 1;
    }

    private void Update()
    {
        //Debug.Log(myArray[0].begin);
        //Debug.Log(myArray[0].end);
        //Debug.Log("hand.transform.position = " + hand.transform.position);
        //Debug.Log("obj.transform.position =  " + obj.transform.position);
        //Debug.Log("offset_x = " + offset_x);
        Vector3 new_pos;
        new_pos.x = (actualEnd.position.x > obj.transform.position.x) ? obj.transform.position.x + offset_x :
        (actualEnd.position.x < obj.transform.position.x) ? obj.transform.position.x - offset_x : obj.transform.position.x;

        new_pos.y = (actualEnd.position.y > obj.transform.position.y) ? obj.transform.position.y + 1 :
        (actualEnd.position.y < obj.transform.position.y) ? obj.transform.position.y - 1 : obj.transform.position.y;

        new_pos.z = (actualEnd.position.z > obj.transform.position.z) ? obj.transform.position.z + 1 :
        (actualEnd.position.z < obj.transform.position.z) ? obj.transform.position.z - 1 : obj.transform.position.z;

        obj.transform.position = new_pos;
    }
}
