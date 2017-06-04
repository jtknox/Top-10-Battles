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
      			<img src={poster_url} alt="..." className="poster"/>
            <div className="posterCover">
              <h4>{props.title}</h4>
              <hr/>
            </div>
          </div>
    		</div>
  		</div>
	</div>)
};

export default MovieItem;