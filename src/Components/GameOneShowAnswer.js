import React from "react";
import { connect } from "react-redux";
import { getDogs, getRandomDog } from "../Actions/getDogs";
import { Link } from "react-router-dom";
import _ from "lodash";

// const randomDogName1 = this.getRandomDogNameFromDogList()
// const randomDogName2 = this.getRandomDogNameFromDogList()
// const correctDog = this.randomDogBreedName
// const answers = [randomDogName1, randomDogName2, correctDog]
// const shuffledAnswers = _.shuffle(answers)
// console.log('hello??', shuffledAnswers)

class GameOneShowAnswer extends React.Component {
  componentDidMount() {
    this.props.getDogs();
  }

  retrieveRandomDogImage = () => {
    this.props.getRandomDog();
    this.getRandomDogNameFromDogList()
  }

  getRandomDogNameFromDogList = () => {
    const dogName = this.props.dogsList
    // console.log('dogName:', dogName)
    const arrayOfRandomDogNames = _.shuffle(dogName)
    return _.sample(arrayOfRandomDogNames)
  }

  render() {
    const randomDogBreedName = this.props.gameOne.breed;
    const randomImage = this.props.gameOne.image;
    console.log('randomImage test GAME ONE SHOW ANSWER :', randomImage)
    return (
      <div className="randomDogImage">
        <h2>Select the correct breed.</h2>
        <button onClick={this.retrieveRandomDogImage}>Show next question!</button>
        <br></br>
        <br></br>
        { <img src={randomImage} alt="" /> }
        <p>{randomDogBreedName}</p>
        <p>{this.getRandomDogNameFromDogList()}</p>
        <p>{this.getRandomDogNameFromDogList()}</p>
      </div>
    );
  }
}

const mapStateToProps = state => { // each prop will have the value you give it. -> which means, the state of the reducer.
                                  // the prop can have any name you give it. but makes it accessible in the component as props.propname ie props.gameOne (gives you state from GameOne reducer
  return {
    gameOne: state.gameOneReducer,
    dogsList: state.dogsList,
  };
};

export default connect(
  mapStateToProps,
  { getDogs, getRandomDog }
)(GameOneShowAnswer);