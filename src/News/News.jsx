import React,{useState,useEffect} from 'react'
import {getSportsDetail} from "../api/Api";
import Newslist from '../Components/Newslist'


const News = () => {
  const [articles, setarticles] = useState([]);
    useEffect(() => {
       getSportsDetail()
       .then((data)=>setarticles(data.articles))
       .catch((error)=>console.log("ERROR:",error)); 
      }, []);
    return (
        <div className="News">
             <h4>Cricket News</h4>
             {articles.map((News) => (
              <Newslist News={News}/>
            ))}
        </div>
    )
}

export default News
