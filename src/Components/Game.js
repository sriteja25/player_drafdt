import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap'
import Players from '../Jsons/Players.json'


export default function Home() {


    const players = Players
    // const players = [

    //     // { Position: "FWD", Name: "Messi", Club: "Barcelona", Nationality: "Argentina", Age: "32" },
    //     // { Position: "FWD", Name: "Messi", Club: "Barcelona", Nationality: "Argentina", Age: "32" },
    //     // { Position: "FWD", Name: "Messi", Club: "Barcelona", Nationality: "Argentina", Age: "32" },
    //     // { Position: "FWD", Name: "Messi", Club: "Barcelona", Nationality: "Argentina", Age: "32" },
    //     // { Position: "FWD", Name: "Messi", Club: "Barcelona", Nationality: "Argentina", Age: "32" }

    // ]

    const renderPlayer = (player, index) => {

        console.log(player)

        return (
            <>
                <tr key={index}>
                    <td>{player.Id}</td>
                    <td>{player.Name}</td>
                    <td>{player.Rating}</td>
                    <td>{player.Position}</td>
                    <td>{player.Club}</td>
                    <td>{player.Nationality}</td>
                    <td>{player.Age}</td>
                </tr>
            </>
        )

    }

    return (

        <>
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Position</th>
                        <th>Club</th>
                        <th>Nationality</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {Players.map(renderPlayer)}
                </tbody>
            </ReactBootStrap.Table>

        </>
    )

}