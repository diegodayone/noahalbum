import React from "react";

class SingleMovieComponent extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1>
          {this.props.title} {this.props.randomNumber}
        </h1>
        <img src={this.props.movie.Poster} style={{ width: "200px" }} alt={this.props.movie.Title}></img>
        <span>{this.props.movie.Title}</span>
      </div>
    );
  }
}

export default SingleMovieComponent;
