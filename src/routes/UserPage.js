import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp, top10MovieRef } from '../firebase.js';
import MovieItem from '../components/MovieItem';

class UserPage extends Component {
	constructor(props) {
		super(props);
		this.state={
			movies: []
		}
	}

	componentDidMount() {
    top10MovieRef.on('value', snap => {
      let movies = [];
      snap.forEach(movie => {
        const { overview, posterURL, title, releaseDate } = movie.val();
        const serverKey = movie.key;
        movies.push({ overview, posterURL, title, releaseDate, serverKey });
      })
      this.setState({movies: movies})
      console.log(movies);
    })
  	}

	render() {
		var movieList = <div></div>;
		if(this.state.movies) {
			movieList = this.state.movies.map(movie => <MovieItem title={movie.title} overview={movie.overview} poster={movie.poster_path} releaseDate={movie.release_date} />);
		}
		return (
		<div>
			{movieList}
			<Link to='search'>Search</Link>
		</div>
		)
	}

}

export default UserPage;