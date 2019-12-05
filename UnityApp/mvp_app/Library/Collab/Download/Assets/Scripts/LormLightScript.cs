using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;



public class LormLightScript : MonoBehaviour
{
    public GameObject obj;
    public GameObject hand;

    Vector3 vectorDir;
    //bool asBegin = false;

    struct lorm_moves
    {
        public char c;
        public Vector3 begin;
        public Vector3[] checkpoints;
        public int index;
    }

    static lorm_moves[] myArray =
        {
                new lorm_moves() { c = 'A', begin = new Vector3(509, 1025, -20), checkpoints = new [] {new Vector3(20, -250, 0)}, index = 0 },
                };

    private void Start()
    {
        obj.transform.position = myArray[0].begin;
        float x = (myArray[0].checkpoints[myArray[0].index].x == 0) ? 0 : ((Math.Abs(myArray[0].checkpoints[myArray[0].index].x / myArray[0].checkpoints[myArray[0].index].x)) * (myArray[0].checkpoints[myArray[0].index].x < 0 ? -1 : (myArray[0].checkpoints[myArray[0].index].x == 0) ? 0 : 1));
        float y = (myArray[0].checkpoints[myArray[0].index].y == 0) ? 0 : ((Math.Abs(myArray[0].checkpoints[myArray[0].index].y / myArray[0].checkpoints[myArray[0].index].x)) * (myArray[0].checkpoints[myArray[0].index].y < 0 ? -1 : (myArray[0].checkpoints[myArray[0].index].y == 0) ? 0 : 1));
        float z = (myArray[0].checkpoints[myArray[0].index].z == 0) ? 0 : ((Math.Abs(myArray[0].checkpoints[myArray[0].index].z / myArray[0].checkpoints[myArray[0].index].x)) * (myArray[0].checkpoints[myArray[0].index].z < 0 ? -1 : (myArray[0].checkpoints[myArray[0].index].z == 0) ? 0 : 1));
        vectorDir = new Vector3(x, y, z);
    }

    private void Update()
    {
        Vector3 new_pos;

        new_pos = obj.transform.position + vectorDir;

        if (obj.transform.position == myArray[0].begin + myArray[0].checkpoints[myArray[0].index] && myArray[0].checkpoints.Length != myArray[0].index + 1)
        {
            myArray[0].index += 1;
            myArray[0].begin = obj.transform.position;
            float x = (myArray[0].checkpoints[myArray[0].index].x == 0) ? 0 : ((Math.Abs(myArray[0].checkpoints[myArray[0].index].x / myArray[0].checkpoints[myArray[0].index].x)) * (myArray[0].checkpoints[myArray[0].index].x < 0 ? -1 : (myArray[0].checkpoints[myArray[0].index].x == 0) ? 0 : 1));
            float y = (myArray[0].checkpoints[myArray[0].index].y == 0) ? 0 : ((Math.Abs(myArray[0].checkpoints[myArray[0].index].y / myArray[0].checkpoints[myArray[0].index].x)) * (myArray[0].checkpoints[myArray[0].index].y < 0 ? -1 : (myArray[0].checkpoints[myArray[0].index].y == 0) ? 0 : 1));
            float z = (myArray[0].checkpoints[myArray[0].index].z == 0) ? 0 : ((Math.Abs(myArray[0].checkpoints[myArray[0].index].z / myArray[0].checkpoints[myArray[0].index].x)) * (myArray[0].checkpoints[myArray[0].index].z < 0 ? -1 : (myArray[0].checkpoints[myArray[0].index].z == 0) ? 0 : 1));
            vectorDir = new Vector3(x, y, z);
        } else if (obj.transform.position != myArray[0].begin + myArray[0].checkpoints[myArray[0].index]) {
            if (obj.transform.position.x == myArray[0].begin.x + myArray[0].checkpoints[myArray[0].index].x)
                new_pos.x = obj.transform.position.x;
            if (obj.transform.position.y == myArray[0].begin.y + myArray[0].checkpoints[myArray[0].index].y)
                new_pos.y = obj.transform.position.y;
            if (obj.transform.position.z == myArray[0].begin.z + myArray[0].checkpoints[myArray[0].index].z)
                new_pos.z = obj.transform.position.z;
            obj.transform.position = new_pos;
        }
        Debug.Log("obj.transform.position = " + obj.transform.position);
    }
}
