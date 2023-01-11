import React from 'react';
import Table from '../components/table';
import { useState } from 'react';
import Map from '../components/map';

const Home = () => {

    const [data, setData] = useState([]);

    const searchBuses = async () => {

        var routeId = document.getElementById('routeid').value

        if (routeId === '') {
            alert('Please enter a route ID');
            return;
        }

        console.log('started fetching')
        const apiurl = `/bustime/api/v2/getvehicles?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=${routeId}&format=json`;
        try {
            var data = await fetch(apiurl);
            data = await data.json();
        } catch (err) {
            console.log(err);
            setData([]);
            return;
        }

        console.log('request completed')
        const buses = data['bustime-response']['vehicle'];
        setData(buses);
    }

    const checkSpeed = () => {

        const routeid = document.getElementById('routeid').value;
        if (routeid === '') {
            alert('Please enter a route ID');
            return;
        }
        const speed = document.getElementById('speedvalue').value;
        console.log(speed);
    }

    return (
        <div className="home">
            <p>Route Id:</p>
            <input type="text" placeholder="Enter Route Id" id='routeid' />
            <button id='search' onClick={searchBuses}>Search</button>
            <p>Speed:</p>
            <input type="text" placeholder="Enter Speed" id='speedvalue' />
            <button id='report' onClick={checkSpeed}>Generate Report</button>
            {data === undefined ? <p>No data found</p> : data.length > 0 ? <><Table data={data} /> <Map buses={data}></Map> </> : <p>No data found</p>
            }
        </div >
    );
};

export default Home;