const {
  addDestinationHandler,
  getAllDestinationHandler,
  editDestinationByIdHandler,
  deleteDestinationByIdHandler,
  getDestinationByIdHandler,
  addUserHandler,
  getUserByIdHandler,
  getAllUserHandler,
  editUserByIdHandler,
  deleteUserByIdHandler,
  registerHandler,
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
    path: '/users',
    handler: addUserHandler,
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: getUserByIdHandler,
  },
  {
    method: 'GET',
    path: '/users',
    handler: getAllUserHandler,
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: editUserByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: deleteUserByIdHandler,
  },
  {
    method: 'POST',
    path: '/auth/register',
    handler: registerHandler,
  },
];

module.exports = routes;
