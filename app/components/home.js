import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of languages that you'd like to autosuggest.
const searchCategories = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  }

];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : searchCategories.filter(cat =>
    cat.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };


  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'What are you looking for?',
      value,
      onChange: this.onChange
    };


    return(
      <div>
        <br/>
        <br/>
        <br/>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="col s1"></div>
              <div className="col s10">
                <img src="/media/martini-drink-with-splash.png" width="100%"/>
              </div>

               <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

