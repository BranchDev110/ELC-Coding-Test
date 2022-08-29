/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */

const App = () => {
    const [data , setData] = useState([]);
    const [searchStr , setSearchStr] = useState("");

    const fetchData = (searchStr) => {
        let url = "http://localhost:3035";
        url += (searchStr !== "" ? `?search=${searchStr}` : "");
        fetch(url).then(response => response.json()).then(data => setData(data));
    }
    useEffect(() => {
        fetchData("");
    } , [])

    useEffect(() => {
        fetchData(searchStr);
    } , [searchStr])
    return (
        <div className="App">
            <Menu setSearchStr={searchStr => setSearchStr(searchStr)}/>
            <Home data={data}/>
        </div>
    );
}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
