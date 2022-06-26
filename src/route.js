const {
  addDestinationHandler,
  getAllDestinationHandler,
  editDestinationByIdHandler,
  deleteDestinationByIdHandler,
  getDestinationByIdHandler,
  addCityHandler,
  getCityByIdHandler,
  getAllCityHandler,
  deleteCityByIdHandler,
  editCityByIdHandler,
  addReviewHandler,
  getReviewByIdHandler,
  getAllReviewHandler,
  deleteReviewByIdHandler,
  editReviewByIdHandler,
  getReviewByIdDestinationHandler,
  filterCityHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/destination',
    handler: addDestinationHandler,
  },
  {
    method: 'GET',
    path: '/destination',
    handler: getAllDestinationHandler,
  },
  {
    method: 'PUT',
    path: '/destination/{id}',
    handler: editDestinationByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/destination/{id}',
    handler: deleteDestinationByIdHandler,
  },
  {
    method: 'GET',
    path: '/destination/{id}',
    handler: getDestinationByIdHandler,
  },
  {
    method: 'POST',
    path: '/city',
    handler: addCityHandler,
  },
  {
    method: 'GET',
    path: '/city/{id}',
    handler: getCityByIdHandler,
  },
  {
    method: 'GET',
    path: '/city',
    handler: getAllCityHandler,
  },
  {
    method: 'DELETE',
    path: '/city/{id}',
    handler: deleteCityByIdHandler,
  },
  {
    method: 'PUT',
    path: '/city/{id}',
    handler: editCityByIdHandler,
  },
  {
    method: 'POST',
    path: '/city/filter/{query}',
    handler: filterCityHandler,
  },
  {
    method: 'POST',
    path: '/review/{id_destination}',
    handler: addReviewHandler,
  },
  {
    method: 'GET',
    path: '/review/{id}',
    handler: getReviewByIdHandler,
  },
  {
    method: 'GET',
    path: '/review',
    handler: getAllReviewHandler,
  },
  {
    method: 'DELETE',
    path: '/review/{id}',
    handler: deleteReviewByIdHandler,
  },
  {
    method: 'PUT',
    path: '/review/{id}',
    handler: editReviewByIdHandler,
  },
  {
    method: 'GET',
    path: '/review/destinations/{id_destination}',
    handler: getReviewByIdDestinationHandler,
  },
];

module.exports = routes;
