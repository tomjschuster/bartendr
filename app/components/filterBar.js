import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Collapsible, CollapsibleItem } from 'react-materialize';

class FilterBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  //    $('.dropdown-button').dropdown({
  //     inDuration: 300,
  //     outDuration: 225,
  //     constrain_width: false, // Does not change width of dropdown to that of the activator
  //     hover: true, // Activate on hover
  //     gutter: 0, // Spacing from edge
  //     belowOrigin: false, // Displays dropdown below the button
  //     alignment: 'left' // Displays dropdown with edge aligned to the left of button
  //   }
  // );


  }

  render() {
    let { allCategories, setCurrentCategory, setMaxPrice, setMinStars } = this.props;
    return (
      <Collapsible>
        <CollapsibleItem header='Filter' icon='clear_all'>
          <div className='row'>
            <div className='col s12 m4'>
            <Input s={12} type='select' defaultValue={0} onChange={evt => setCurrentCategory(Number(evt.target.value))}>
              <option value='' disabled selected>Category</option>
              { allCategories.map(category => (
               <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </Input>
            </div>
            <div className='col s12 m4'>
            <Input s={12} type='select' onChange={evt => setMaxPrice(Number(evt.target.value))}>
              <option value='0' disabled selected>Price Range</option>
              <option value='15'>under $15</option>
              <option value='30'>under $30</option>
              <option value='45'>under $45</option>
              <option value='60'>under $60</option>
              <option value='75'>under $75</option>
              <option value='90'>under $90</option>
            </Input>
            </div>
            <div className='col s12 m4'>
            <Input s={12} type='select' onChange={evt => setMinStars(Number(evt.target.value))}>
              <option value='0' disabled selected>Rating</option>
              <option value='1'>★</option>
              <option value='2'>★★</option>
              <option value='3'>★★★</option>
              <option value='4'>★★★★</option>
              <option value='5'>★★★★★</option>
            </Input>
            </div>
      </div>
        </CollapsibleItem>
      </Collapsible>
    );
  }
}

const mapStateToProps = ({allCategories}) => ({
  allCategories
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);
