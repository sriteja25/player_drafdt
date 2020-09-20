import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap'


export default function Home() {


    const players = [

        { Position: "FWD", Name: "Messi", Club: "Barcelona", Nationality: "Argentina", Age: "32" },
        { Position: "FWD", Name: "Messi", Club: "Barcelona", Nationality: "Argentina", Age: "32" },
        { Position: "FWD", Name: "Messi", Club: "Barcelona", Nationality: "Argentina", Age: "32" },
        { Position: "FWD", Name: "Messi", Club: "Barcelona", Nationality: "Argentina", Age: "32" },
        { Position: "FWD", Name: "Messi", Club: "Barcelona", Nationality: "Argentina", Age: "32" }

    ]

    const renderPlayer = (player, index) => {
        return (
            <>
                <tr key={index}>

                    <td>{player.Name}</td>
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
                        <th>Name</th>
                        <th>Position</th>
                        <th>Club</th>
                        <th>Nationality</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(renderPlayer)}
                </tbody>
            </ReactBootStrap.Table>

        </>
    )

}