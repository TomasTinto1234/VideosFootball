import React, {useState, useEffect} from "react";
import axios from 'axios'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import "./list.css"


const FootballVideos = () => {
  const [videos, setVideo] = useState([])

const fetchVideos = async ()=> {
try {
  const api = await axios.get("https://www.scorebat.com/video-api/v3/feed/?token=NDQyODVfMTY3MjA2NzUzN19mYzVmNDQ2YTM5MmM5ZDZjZDBjNjExODVlYjI0Y2I1NDFhZTAyODk2")
  const responseApi = api.data.response
  // console.log(responseApi)
  setVideo(responseApi)
} catch (error) {
  
}
}

  useEffect(() => {
    //  fetchUsers()
     fetchVideos()
  }, []);

  return (
    <div>
      <h1 className="tuclase">Videos of football</h1>
      {videos && videos.map((video) => {
          return (
            <div key={video.videos.id} className="title">
         {video.title}
          {<br></br>}
          {video.competition}
          {<br></br>}
          <a href={video.matchviewUrl} target="_blank"><img src={video.thumbnail} height="150px" weigth="150px"/></a>
          {<br></br>}
date: {video.date}
{<br></br>}
        </div>
          )
})
    }
    </div>
  );
};
export default FootballVideos;