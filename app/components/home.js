import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typeahead } from 'react-typeahead';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onOptionSelected = this.onOptionSelected.bind(this);
  }

  displayOption(option) {
    return option.type === 'product' ?
      option.name + " (" + option.size + ")" :
      option.name;
  }

  onOptionSelected(option) {
    if (option.type === 'product') {
      this.props.router.push(`/products/${option.id}`);
    } else if (option.type === 'category') {
      this.props.router.push(`/products`);
    }
  }

  render() {
    let { displayOption, onOptionSelected } = this;
    let { options } = this.props;
    return (
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
              <div className="col s1"></div>
              <div className="input-field col s12">
                <i className="material-icons">search
                </i>
                <Typeahead
                  options={options}
                  maxVisible={10}
                  displayOption={displayOption}
                  filterOption='name'
                  onOptionSelected={onOptionSelected}
                />
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

