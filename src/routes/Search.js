import React, { Component } from 'react';
import MovieItem from '../components/MovieItem.js';
import { TMDB_BASE_URL } from '../constants.js';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase.js';

class Search extends Component {
	constructor(props) {
		super(props);
		this.addMovie = this.addMovie.bind(this);
		this.state={
			query: ''
		}
	}

	_handleKeyPress = (e) => {
    	if (e.key === 'Enter') {
      		console.log('enter');
      		this.loadMovie();
    	}
  	}	

	signOut() {
    	firebaseApp.auth().signOut();
    	//TODO: create an action that will clear the email and password
    	//stored in the global state
  	}

	loadMovie() {
		const { loadMoviesFromAPI } = this.props.actions;
		const url = `${TMDB_BASE_URL}${this.state.query}`;
		loadMoviesFromAPI(url);
	}

	addMovie(title, posterURL, overview, releaseDate) {
		console.log(this.props);
		const { top10MovieRef } = this.props.properties.firebase;
		const { addTop10Movie } = this.props.actions;
		addTop10Movie({
			title: title,
			posterURL: posterURL,
			overview: overview,
			releaseDate: releaseDate
		})
		top10MovieRef.push({title, posterURL, overview, releaseDate});
	}

	render() {
		console.log(this.props);
		const { queriedMovies } = this.props.properties.movies;
		var MovieList;
		queriedMovies ? MovieList = queriedMovies.map(movie => <MovieItem title={movie.title} overview={movie.overview} poster={movie.poster_path} releaseDate={movie.release_date} addMovie={this.addMovie}/>) : MovieList=<div></div>;
		return (
		<div>
			<Link to='userPage'>user page</Link>
			<div>This is the search page</div>
			<button onClick={() => this.signOut()}>Log Out</button>
			<input 
				type="text" 
				placeholder="Enter Movie Here..."
				//updateQueryInput
				onChange={event => this.setState({ query: event.target.value })}
				onKeyPress={(e) => this._handleKeyPress(e)}
			/>
			<button className="btn" onClick={() => this.loadMovie()}>Search</button>
			{MovieList}
		</div>)
	}
}

export default Search;