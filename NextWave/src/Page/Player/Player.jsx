import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useParams } from 'react-router-dom'

const Player = () => {

    const { id } = useParams();

    const [apidata, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""
    })

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjM2NmFjOTc1ZTM0ZGE4NDNlMzZhNTI5NWIwZDE0MSIsInN1YiI6IjY2MzFiZTQxYzM5MjY2MDEyYjZjZjZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9_QFQdMbtIR9PAX3bVxh4QXe4Aree8jkVm63-xt9mRY'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results[0]))
            .catch(err => console.error(err));
    }, [])
    return (
        <div className='player'>
            <img src={back_arrow_icon} alt="" />
            <iframe width='90%' height="90%" src={`https://www.youtube.com/embed/${apidata.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
            <div className="player-info">
                <p>{apidata.published_at.slice(0, 10)}</p>
                <p>{apidata.name}</p>
                <p>{apidata.typeof}</p>
            </div>
        </div>
    )
}

export default Player