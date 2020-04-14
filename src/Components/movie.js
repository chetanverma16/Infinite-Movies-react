import React from 'react';
import Fade from "react-reveal/Fade";

const Movie = ({poster_image,title,overview,release_date,vote_average}) =>{

    let image_url = `url('https://image.tmdb.org/t/p/w500/${poster_image}')`


    return (
      <div>
        <Fade bottom>
          <div
            className="card"
            style={{
              background: `${image_url} no-repeat center/cover`,
            }}
          >
            <div className="title">
              {title}
              <br />
              <p>{overview}</p>
            </div>
          </div>
        </Fade>
      </div>
    );
}

export default Movie;