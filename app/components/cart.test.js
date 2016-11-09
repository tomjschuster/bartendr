import React from 'react';
import {createStore} from 'redux';
import {range, last} from 'lodash';

import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { shallow, mount, setState, instance, find, render } from 'enzyme';
import {spy} from 'sinon';
import faker from 'faker';

import ConnectedCart, {Cart} from './cart';
import ConnectedSingleOrder, {SingleOrder} from './singleOrder';
import rootReducer from '../reducers/index.jsx';
import actualStore from '../store.jsx';

const test = faker.image.imageUrl();

const createRandomCart = amount => {
  return range(0, amount).map(index => {
    return {
      purchase_price: (faker.random.number() * 0.22).toFixed(2),
      quantity: faker.random.number(),
      product: {
        id: faker.random.number(),
        name: faker.name.lastName(),
        description: faker.lorem.paragraph(),
        proof: faker.random.number(),
        size: `${faker.random.number()} ml`,
        inventory: faker.random.number(),
        photoUrl: faker.image.imageUrl()
      }
    }
  })
};

const testCart = createRandomCart(5)


describe('Cart', () => {

  describe('the cart state', () => {

    let cartData, cartWrapper;
    beforeEach('Create <Cart /> wrapper', () => {
      cartData = testCart;
      cartWrapper = shallow(<Cart cart={cartData}/>);
    });

    it("Cart component has cart passed to it's props and is an array", () => {
      expect(cartWrapper.instance().props.cart).to.be.length(5);
      expect(cartWrapper.instance().props.cart).to.be.instanceof(Array);
    });

    it("Cart component's cart state is an array of objects", () => {
      let cartProps = cartWrapper.instance().props.cart;
      expect(cartProps[0]).to.be.instanceof(Object);
    });

    it("The objects within the cart state array has keys 'purchase_price', 'quantity', and 'product' where 'product' is also an single product object", () => {
      let cartPropsFirstItem = cartWrapper.instance().props.cart[0];
      expect(cartPropsFirstItem).to.include.keys('purchase_price');
      expect(cartPropsFirstItem).to.include.keys('quantity');
      expect(cartPropsFirstItem).to.include.keys('product');
      expect(cartPropsFirstItem.product).to.be.instanceof(Object);
    });

    // it("Renders a table component called 'SingleOrder' that will in turn render the cart items", () => {
    //   console.log(cartWrapper.render(SingleOrder))
    //   expect(cartWrapper.find(<SingleOrder />)).to.have.length(1)
    // });

  });

});
