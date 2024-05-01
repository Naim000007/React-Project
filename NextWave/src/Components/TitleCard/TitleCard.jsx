import React, { useEffect, useRef, useState } from 'react'
import "./TitleCard.css"
import cards_data from '../../assets/cards/Cards_data'



const TitleCard = ({ title, category }) => {

    const [apiData, setApiData] = useState([])
    const cardsRef = useRef();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjM2NmFjOTc1ZTM0ZGE4NDNlMzZhNTI5NWIwZDE0MSIsInN1YiI6IjY2MzFiZTQxYzM5MjY2MDEyYjZjZjZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9_QFQdMbtIR9PAX3bVxh4QXe4Aree8jkVm63-xt9mRY'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results))
            .catch(err => console.error(err));
    }, [])


    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {
        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [])
    return (
        <div className='titlecards'>
            <h2>{title ? title : "Popular on NextWave"}</h2>
            <div className="card-list" ref={cardsRef}>
                {
                    apiData.map((card, index) => {
                        return <div className='card' key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt="" />
                            <p>{card.original_title}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default TitleCard