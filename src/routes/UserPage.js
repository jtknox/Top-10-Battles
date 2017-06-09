import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase.js';
import MovieItem from '../components/MovieItem';

class UserPage extends Component {
	constructor(props) {
		super(props);

		this.state={
			movies: []
		}
	}

	componentDidMount() {
	const { top10MovieRef } = this.props.properties.firebase;
    top10MovieRef.on('value', snap => {
      let movies = [];
      snap.forEach(movie => {
        const { overview, posterURL, title, releaseDate } = movie.val();
        const serverKey = movie.key;
        movies.push({ overview, posterURL, title, releaseDate, serverKey });
      })
      console.log(movies);
      this.setState({movies: movies})
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