import React, {useState, useEffect} from "react";
import axios from 'axios'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import "./FootballVideos.css"


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
            <div key={video.title} className="title">
         {video.title}
          {<br></br>}
          {video.competition}
          {<br></br>}
          <a href={video.matchviewUrl} target="_blank"><img src={video.thumbnail} height="150px" weigth="150px"/></a>
          {<br></br>}
date: {video.date}
{<br></br>}
{/* {video.videos.map((e)=>{
  <div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='https://www.scorebat.com/embed/v/aVFvaDMra3FCNVBZN2wzazlNZTdFQT09/?token=NDQyODVfMTY3MjA2ODMyOF8yYmViMWM2OTk2ZWNhZWMwM2MxYzVjNzE0ZjRmZWIzZDUyZGZjMWJi&utm_source=api&utm_medium=video&utm_campaign=apifd' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>
})} */}
        </div>
          )
})
    }
    </div>
  );
};
export default FootballVideos;