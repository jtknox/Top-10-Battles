import React, { Component } from 'react';
import MovieItem from '../components/MovieItem.js';
import { TMDB_BASE_URL } from '../constants.js';
import { firebaseApp, top10MovieRef } from '../firebase.js';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state={
			query: ''
		}
	}

	signOut() {
    	firebaseApp.auth().signOut();
    	//TODO: create an action that will clear the email and password
    	//stored in the global state
  	}

	loadMovie() {
		const { loadMovies } = this.props.actions;
		const url = `${TMDB_BASE_URL}${this.state.query}`;
		loadMovies(url);
	}

	addMovie(title, posterURL, overview, releaseDate) {
		console.log('here');
		top10MovieRef.push({title, posterURL, overview, releaseDate});
	}

	render() {
		const { queriedMovies } = this.props.properties;
		console.log(queriedMovies);
		var MovieList;
		queriedMovies ? MovieList = queriedMovies.map(movie => <MovieItem title={movie.title} overview={movie.overview} poster={movie.poster_path} releaseDate={movie.release_date} addMovie={this.addMovie}/>) : MovieList=<div></div>;
		return (
		<div>
			<div>This is the search page</div>
			<button onClick={() => this.signOut()}>Log Out</button>
			<input 
				type="text" 
				placeholder="Enter Movie Here..."
				//updateQueryInput
				onChange={event => this.setState({ query: event.target.value })} 
			/>
			<button className="btn" onClick={() => this.loadMovie()}>Search</button>
			{MovieList}
		</div>)
	}
}

export default Search;