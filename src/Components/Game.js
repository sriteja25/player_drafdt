import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap'
import Players from '../Jsons/Players.json'
import MaterialTable from 'material-table'


export default function Home() {


    var arr = []

    const renderPlayer = (player, index) => {
        arr.push(player)

        
        // generateTable()

    }

    const columns = [

        { title: "Id", field: "Id" },
        { title: "Name", field: "Name" },
        { title: "Rating", field: "Rating" },
        { title: "Position", field: "Position" },
        { title: "Club", field: "Club" },
        { title: "Nationality", field: "Nationality" },
        { title: "Age", field: "Age" }
    ]

    const generateTable = () => {

        console.log(Players)

        arr = arr.filter(function (obj) {
            return obj.Id !== "1203";
        });


        return (

            <MaterialTable title="All players table"

                data={arr}
                columns={columns}
                options={{
                    search: true,
                    filtering: true,
                    sorting: true
                }
                }
            />
        )
    }

    return (

        <>

            {Players.map(renderPlayer)}
            {generateTable()}
            {/* <ReactBootStrap.Table striped bordered hover>
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
            </ReactBootStrap.Table> */}

        </>
    )

}