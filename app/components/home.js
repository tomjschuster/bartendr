import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typeahead } from 'react-typeahead';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onOptionSelected = this.onOptionSelected.bind(this);
    this.onCategoryClick = this.onCategoryClick.bind(this);
  }

  displayOption(option) {
    return option.type === 'product' ?
      option.name + ' (' + option.size + ')' :
      option.name + ' (category)';
  }

  onOptionSelected(option) {
    if (option.type === 'product') {
      this.props.router.push(`/products/${option.id}`);
    } else if (option.type === 'category') {
      this.props.router.push({pathname: '/products', query: {}, state: { currentCategory: option.id}});
    }
  }

  onCategoryClick(currentCategory) {
    this.props.router.push({pathname: '/products', state: {currentCategory}});
  }

  render() {
    let { displayOption, onOptionSelected, onCategoryClick } = this;
    let { options } = this.props;
    return (
      <div>
        <div>
              <p className="flow-text center-align">
                Pick Your Poison:<br/>
                Enter a liquor type, flavor or product name and explore our extensive catelog...
              </p>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i id="search-ahead-icon" className="material-icons prefix">search</i>
                <Typeahead
                  placeholder="vodka, patron, peach, bourbon, etc..."
                  options={options}
                  maxVisible={5}
                  displayOption={displayOption}
                  filterOption='name'
                  onOptionSelected={onOptionSelected}
                  customClasses={{
                    input: 'typeahead-search-input',
                    listAnchor: 'typeahead-search-list-anchor',
                    results: 'typeahead-search-results'
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <img src="/media/martini-drink-with-splash.png" width="100%"/>
              </div>
            </div>
            <hr />
            <div>
              <p className="flow-text center-align">Browse our selections</p>
            </div>
            <div className="row cat-links">
              <div id="vodka-cat" className="col s11 m5 l3 valign-wrapper"
                   onClick={() => onCategoryClick(6)}>
                <h4 className="valign">Vodka</h4>
              </div>
              <div id="gin-cat" className="col s11 m5 l3 valign-wrapper"
                   onClick={() => onCategoryClick(8)}>
                <h4 className="valign">Gin</h4>
              </div>
              <div id="whiskey-cat" className="col s11 m5 l3 valign-wrapper"
                   onClick={() => onCategoryClick(7)}>
                <h4 className="valign">Whiskey</h4>
              </div>
              <div id="tequila-cat" className="col s11 m5 l3 valign-wrapper"
                   onClick={() => onCategoryClick(4)}>
                <h4 className="valign">Tequila</h4>
              </div>
            </div>
            <div className="row all-links">
              <div className="col s12 valign-wrapper"
                   onClick={() => onCategoryClick()}>
                <h4 className="valign">All Products</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({allProducts, allCategories}) => {
  let products = allProducts.map(product => ({
    type: 'product',
    id: product.id,
    name: product.name,
    size: product.size
  }));
  let categories = allCategories.map(category => ({
    type: 'category',
    id: category.id,
    name: category.name
  }))
  return { options: products.concat(categories) }
};

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

