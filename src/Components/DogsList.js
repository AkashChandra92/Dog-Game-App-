import React from "react";
import { connect } from "react-redux";
import { getDogs } from "../Actions/getDogs";
import { Link } from "react-router-dom";

class DogsList extends React.Component {
  componentDidMount() {
    this.props.getDogs();
  }

  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>;
  }

  render() {
    const dogBreeds = this.props.state;
    console.log("Doglist state:", dogBreeds);
    return (
      <div className="dogs-list">
        <h2>Show me the dogs: </h2>

        {!dogBreeds && "Loading..."}

        {dogBreeds && (
          <ul>
            {dogBreeds.map(breed => (
              <li key={breed}>
                <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state.dogsList };
};

export default connect(
  mapStateToProps,
  { getDogs }
)(DogsList);
