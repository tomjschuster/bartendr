export const convertProduct = product => {
  let sumStars = product.reviews.reduce((sum, review) => sum + review.stars, 0);
  let numReviews = product.reviews.length;
  product.avgStars = sumStars / numReviews;
  product.numReviews = numReviews;
  return product;
};
