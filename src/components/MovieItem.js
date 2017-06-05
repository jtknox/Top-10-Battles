import React from 'react';
import { TMDB_BASE_IMG } from '../constants.js';
import moment from 'moment';

const MovieItem = (props) => {
	const poster_url = `${TMDB_BASE_IMG}${props.poster}`;
	const year = moment(`${props.releaseDate}`,"YYYY-MM-DD").format("YYYY");
	return (
	<div>
  		<div className="col-xs-12 col-sm-6 col-md-3">
    		<div className="thumbnail movieItem">
          <div className='crop'>
      			<img src={poster_url} alt='http://suggestmovie.net/images/posternotfound.png' className="poster"/>
            <div className="posterCover">
              <div className = "movieText">
                <h3>{props.title}</h3>
                <hr/>
                <h5>{props.overview}</h5>
                <button onClick={() => props.addMovie(props.title, poster_url, props.overview, props.releaseDate)} className="btn addButton">Add</button>
              </div>
            </div>
          </div>
    		</div>
  		</div>
	</div>)
};

export default MovieItem;