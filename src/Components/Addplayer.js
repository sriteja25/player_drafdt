import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap'
import FirebaseCnfig from '../Firebase/FirebaseConfig'
import firebase from 'firebase'
import { stringify } from "querystring";
import styled from 'styled-components'

const Spacing = styled.div`

    height:30px;
    width:100%;
`

export default function Home() {


    const [playerName, setPlayerName] = useState("Player-1");
    const [roundName, setRoundName] = useState("Round-1");
    const [index, setIndex] = useState(0);
    const [myName, setMyName] = useState("Player-1");
    const [isYourChance, setIsYourChance] = useState(true);


    const addListener = () => {

        const db = firebase.firestore();
        const doc = db.collection('aizauuHdDGMgNB3').doc(roundName);

        doc.onSnapshot(docSnapshot => {
            checkNextPlayer(docSnapshot.data())
            // ...
        }, err => {
            console.log(`Encountered error: ${err}`);
        });
    }

    const checkNextPlayer = data => {

        for (var i = 0; i < Object.keys(data).length; i++) {

            var valdata = data[i.toString()]

            for (const [key, value] of Object.entries(valdata)) {
                if (value === "") {
                    console.log("Its empty")
                    playerNameChanged(key, i)

                    return
                }

            }
        }
        changeRoundName()
    }

    const changeRoundName = () => {

        var strArray = roundName.split("-")
        var currentNum = Number(strArray[1])

        if (currentNum === 18) {
            //End the game here
        } else {
            currentNum = currentNum + 1
        }
        setRoundName("Round-" + currentNum);
        setIndex(0);
        // console.log("This is " + roundName)
        (async () => {
            await getDetails();
        })();
        
            
    }

    async function getDetails(){

        const db = firebase.firestore();
        const ref = db.collection('aizauuHdDGMgNB3').doc(roundName);
        const doc = await ref.get();

        if (!doc.exists) {
            console.log('No such document!');
        } else {
            console.log('Document data:', doc.data());

            var data = doc.data()

            for (var i = 0; i < Object.keys(data).length; i++) {

                var valdata = data[i.toString()]

                for (const [key, value] of Object.entries(valdata)) {
                    if (value === "") {
                        console.log("Its empty")
                        playerNameChanged(key, i)

                        return
                    }

                }
            }
        }
    }

    const playerNameChanged = (playerName, changedIndex) => {

        if (myName === playerName) {
            setIsYourChance(true);
            setIndex(changedIndex);
        } else {
            setIsYourChance(false);
        }
    }

    const buttonSubmit = (e) => {
        e.preventDefault();
        console.log("Its here")
        if (isYourChance === true) {
            setIsYourChance(false);
            (async () => {
                await addNewPlayer();
            })();
            
        } else {

        }

    }

    async function addNewPlayer() {

        
        const db = firebase.firestore();
        const ref = db.collection('aizauuHdDGMgNB3').doc(roundName);

        var obj = {};
        var key = playerName
        obj[key] = "Messi"

        var final = {}
        final[index] = obj
        
        await ref.set(final, { merge: true });
    }



    return (

        <>
            <label>
                Round : {roundName}
            </label>
            <Spacing />
            <label>
                Player : {playerName}
            </label>
            <Spacing />
            <form>
                <label>
                    Name:
                </label>
                <input type="text" name="name" />
                <Spacing />
                {isYourChance === true && <input type="submit" value={"Submit"} onClick={
                    
                    buttonSubmit} />}


                {addListener()}
            </form>




        </>

    )
}