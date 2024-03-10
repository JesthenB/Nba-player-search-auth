'use client'
import React, { useState, ChangeEvent } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
  
  const [cardStartHero, setCardStartHero] = useState('hidden')
  const [searchInput, setSearchInput] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playerImage, setPlayerImage] = useState("");
  const [playerTeam, setPlayerTeam] = useState("");
  const [playerHeight, setPlayerHeight] = useState("");
  const [playerPosition, setPlayerPosition] = useState("");
  const [playerWeight, setPlayerWeight] = useState("");
  const [playerDescription, setPlayerDescription] = useState("");


  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setSearchInput(event.target.value);

  };


  const handleClick = async () =>{
    // console.log('it works');
    try{
      const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchInput}`);
      const data = await response.json();
      // console.log('data from api', data);

      for (let i = 0; i < data.player.length; i++){
        let playersSearchResult = data.player[i];

        if(playersSearchResult.strSport.toLowerCase() === "basketball"){
        setPlayerName(playersSearchResult.strPlayer);
        setPlayerImage(playersSearchResult.strCutout);
        setPlayerTeam(playersSearchResult.strTeam);
        setPlayerHeight(playersSearchResult.strHeight);
        setPlayerPosition(playersSearchResult.strPosition);
        setPlayerWeight(playersSearchResult.strWeight);
        setPlayerDescription(playersSearchResult.strDescriptionEN)
        setCardStartHero('visible')   
      }

        console.log('let me see :', playersSearchResult);
        // console.log('fetch me this data', playerName, playerImage, playerTeam, playerHeight, playerPosition, playerWeight);
      }

    } catch (error) {
      console.error('Error fetching data:', error)
    }
  };
    

  return (
    <div className="container">
      <form className="search-input">
        <input type="search" value={searchInput} onChange={handleChange}></input>
        <button type="button" onClick={handleClick}>Search</button>
      </form>
      <div className={`card start-hero ${cardStartHero}`}>
      <span className="result-card">
            <h2 className="name">{playerName}</h2> <br></br>
            <img className="img" src={playerImage}></img> <br></br>
            <h2 className="Team">{playerTeam}</h2> <br></br>
            <h2 className="height">{playerHeight}</h2> <br></br>
            <h2 className="position">{playerPosition}</h2> <br></br>
            <h2 className="weight">{playerWeight}</h2>
        </span> 
        
        <br></br>

        <span className="result-card">
            <h4 className="description">{playerDescription}</h4>
        </span>
      </div>
    </div>
  );
}
