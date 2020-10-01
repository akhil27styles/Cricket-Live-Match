import axios from 'axios'
const API_KEY='7cuQBWcMCefaRmj98Nom4oPHyjQ2';
    export const getMatches=()=>{  
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;
    return fetch(url)
      .then((res)=>res.json()).catch((error)=>console.log("ERROR:",error));
      };