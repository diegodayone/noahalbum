import React from "react";
import SingleMovieComponent from "./SingleMovieComponent";

class ListAlbumComponent extends React.Component {
  state = {
    movies: null
  };
  render() {
    return (
      <div>
        <h1>This is the second component</h1>
        {this.state.movies &&
          this.state.movies.map((movie, index) => (
            <SingleMovieComponent key={index} title={movie.Title} movie={movie} />
          ))}
      </div>
    );
  }

  componentDidMount = async () => {
    var response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=harry%20potter");
    var movies = await response.json();
    this.setState({
      movies: movies.Search
    });
  };

  componentDidUpdate = async noah => {
    if (noah.query !== this.props.query) {
      //if the query has changed
      var response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=" + this.props.query);
      var movies = await response.json();
      this.setState({
        movies: movies.Search
      });
    }
  };
}

export default ListAlbumComponent;
