import React, { useState, useEffect } from 'react';
import Data from "../../../../data.json"
import { Button, Table } from '@mui/material';
import Home from './Home';
import { Link, useHref } from 'react-router-dom';
import Search from '../../../../components/search';



const FlightDetails = ({ post }) => {

    const [source, setSource] = useState("")
    // const [data, setData] = useState([]);
    // const getData = () => {
    //     fetch('data.json'
    //         , {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             console.log(response)
    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             console.log(myJson);
    //             setData(myJson)
    //         });
    // }
    // useEffect(() => {
    //     getData()
    // }, [])
    return (
        <div className="" style={{ marginRight: '200px' }}>
            <h1>Flight Details</h1>
            <div>
                {Data.map((post) =>

                    <>
                        <table class="table table-striped"  >
                            <thead>
                                <tr>
                                    <th>Arrivl Time</th>
                                    <th>Date</th>
                                    <th>Departure Time</th>
                                    <th>Destination</th>
                                    <th>FlightNo</th>
                                    <th>Name</th>
                                    <th>Origin</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> {post.arrivalTime}</td>
                                    <td>{post.date}</td>
                                    <td>{post.departureTime}</td>
                                    <td>{post.destination}</td>
                                    <td>{post.flightNo}</td>
                                    <td>{post.name}</td>
                                    <td>{post.origin}</td>
                                    <td>{post.price}</td>
                                    <a href="/search"><td> <button type="button" class="btn btn-primary" >Book</button></td></a>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )
                }))
            </div>


        </div >
    );
}

export default FlightDetails;