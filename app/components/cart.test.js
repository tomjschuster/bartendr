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

  let cartData, cartWrapper;
  beforeEach('Create <Cart /> wrapper', () => {
    cartData = testCart;
    cartWrapper = shallow(<Cart cart={cartData}/>);
  });

  describe('the cart state', () => {

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
  });

  describe('the table which renders the cart items', () => {

    let cartData, singleOrderWrapper;
    beforeEach('Create <Cart /> wrapper', () => {
      cartData = testCart;
      singleOrderWrapper = shallow(<SingleOrder cart={cartData}/>);
    });

    it("Renders a table component called 'SingleOrder' that will in turn render the cart items", () => {
      expect(cartWrapper.children().find(ConnectedSingleOrder)).to.have.length(1);
    });

    it("SingleOrder contains a table displaying product image, product name, quantity, and price", () => {
      expect(singleOrderWrapper.find('table')).to.have.length(1);
      expect(singleOrderWrapper.containsMatchingElement(<th data-field="id">Product</th>)).to.equal(true);
      expect(singleOrderWrapper.containsMatchingElement(<th data-field="name">Name</th>)).to.equal(true);
      expect(singleOrderWrapper.containsMatchingElement(<th data-field="quantity">Quantity</th>)).to.equal(true);
      expect(singleOrderWrapper.containsMatchingElement(<th data-field="price">Price</th>)).to.equal(true);
    });

    it("The table calculates the correct price per item based on quantity and calculates the correct total price", () => {
      let currentTotal = cartData.reduce((prev, curr) => {
        return prev + curr.purchase_price * curr.quantity
      }, 0);

      expect(singleOrderWrapper.find('#totalprice').text()).to.equal(currentTotal.toString());

      // Changing the quantity of the first item in the cart
      cartData[0].quantity = cartData[0].quantity + 2;
      singleOrderWrapper.setState(cartData);
      let newTotal = cartData.reduce((prev, curr) => {
        return prev + curr.purchase_price * curr.quantity
      }, 0);

      expect(singleOrderWrapper.find('#totalprice').text()).to.equal(newTotal.toString());

    });




  });

});
