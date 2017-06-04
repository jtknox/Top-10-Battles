import React, { Component } from 'react';
import MovieItem from '../components/MovieItem.js';
import { TMDB_BASE_URL } from '../constants.js';
import { firebaseApp } from '../firebase.js';

class Search extends Component {

	signOut() {
    	firebaseApp.auth().signOut();
  	}

	loadMovie() {
		const { query } = this.props.properties;
		const { loadMovies } = this.props.actions;
		const url = `${TMDB_BASE_URL}${query}`;
		loadMovies(url);
	}

	render() {
		const { clicked, movies } = this.props.properties;
		const { updateQuery } = this.props.actions;
		var MovieList;
		clicked ? MovieList = movies.map(movie => <MovieItem title={movie.title} poster={movie.poster_path} releaseDate={movie.release_date}/>) : MovieList=<div></div>;
		return (
		<div>
			<div>This is the search page</div>
			<button onClick={() => this.signOut()}>Log Out</button>
			<input 
				type="text" 
				placeholder="Enter Movie Here..."
				//updateQueryInput
				onChange={event => updateQuery(event.target.value)} 
			/>
			<button className="btn" onClick={() => this.loadMovie()}>Search</button>
			{MovieList}
		</div>)
	}
}

export default Search;