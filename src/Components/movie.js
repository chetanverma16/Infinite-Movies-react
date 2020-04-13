import React from 'react';

const Movie = ({poster_image,title,overview,release_date,vote_average}) =>{
    let image_url = `url('https://image.tmdb.org/t/p/w500/${poster_image}')`
    return(
    <div> 
    <div className = "card"
        style = {
            {
                background: `${image_url} no-repeat center/cover`,
            }
        }>
        <div className="title">{title}</div>
        </div>

    </div>
    )
}

export default Movie;