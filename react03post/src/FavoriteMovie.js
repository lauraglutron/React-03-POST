import React, { Component } from "react";
import axios from "axios";

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "why do you like this movie?",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies";
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Movie #${res.title} has been successfully added!`);
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding the movie.");
      });
  };

  render() {
    return (
      <div className="FavoriteMovie">
        <h1>Favorite movie</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <div className="form-data">
              <label htmlFor="title">title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>
            <div className="form-data">
              <label htmlFor="comment">comment</label>
              <textarea
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FavoriteMovie;
