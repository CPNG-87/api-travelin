const { supabase } = require('./supabase');

const addDestinationHandler = async (request, h) => {
  const {
    title, review, openingHours, description, image, address, city, country, isFood, cost,
  } = request.payload;

  const updatedAt = new Date().toISOString();

  try {
    const { data, error } = await supabase
      .from('destination')
      .insert([
        {
          title,
          review,
          openingHours,
          description,
          image,
          address,
          city,
          country,
          isFood,
          cost,
          updatedAt,
        },
      ]);

    if (error) {
      const response = h.response({
        status: 'Failed',
        message: error.message,
      });
      response.code(500);
      return response;
    }

    const response = h.response({
      status: 'Success',
      message: 'Add Destination Success',
      data_destination: data,
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'Failed',
      message: error.message,
    });
    response.code(500);
    return response;
  }
};

const getAllDestinationHandler = async (request, h) => {
  try {
    const { data: destination, error } = await supabase
      .from('destination')
      .select('*');

    if (error) {
      const response = h.response({
        status: 'Failed',
        message: error.message,
      });
      response.code(500);
      return response;
    }

    const response = h.response({
      status: 'Success',
      message: 'Get All Data Destination Success',
      data: destination,
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'Failed',
      message: error.message,
    });
    response.code(500);
    return response;
  }
};

const editDestinationByIdHandler = async (request, h) => {
  const { id } = request.params;

  const {
    title, review, openingHours, description, image, address, city, country, isFood, cost,
  } = request.payload;

  const updatedAt = new Date().toISOString();

  try {
    const { data: destination, error } = await supabase
      .from('destination')
      .update({
        title,
        review,
        openingHours,
        description,
        image,
        address,
        city,
        country,
        isFood,
        cost,
        updatedAt,
      })
      .eq('id', id);

    if (error) {
      const response = h.response({
        status: 'Failed',
        message: error.message,
      });
      response.code(500);
      return response;
    }

    const response = h.response({
      status: 'Success',
      message: 'Update Destination By Id Success',
      data: destination,
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'Failed',
      message: error.message,
    });
    response.code(500);
    return response;
  }
};

const deleteDestinationByIdHandler = async (request, h) => {
  const { id } = request.params;
  try {
    const { data: destination, error } = await supabase
      .from('destination')
      .delete()
      .eq('id', id);

    if (error) {
      const response = h.response({
        status: 'Failed',
        message: error.message,
      });
      response.code(500);
      return response;
    }

    const response = h.response({
      status: 'Success',
      message: 'Delete Data Destination By Id Success',
      data: destination.id,
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'Failed',
      message: error.message,
    });
    response.code(500);
    return response;
  }
};

const getDestinationByIdHandler = async (request, h) => {
  const { id } = request.params;
  try {
    const { data: destination, error } = await supabase
      .from('destination')
      .select('*')
      .eq('id', id);

    if (error) {
      const response = h.response({
        status: 'Failed',
        message: error.message,
      });
      response.code(500);
      return response;
    }

    const response = h.response({
      status: 'Success',
      message: 'Get Data Destination By Id Success',
      data: destination,
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'Failed',
      message: error.message,
    });
    response.code(500);
    return response;
  }
};

const addUserHandler = async (request, h) => {
  const {
    username, email, password, image,
  } = request.payload;

  const updatedAt = new Date().toISOString();

  try {
    const { data: users, error } = await supabase
      .from('users')
      .insert([
        {
          username,
          email,
          password,
          image,
          updatedAt,
        },
      ]);

    if (error) {
      const response = h.response({
        status: 'Failed',
        message: error.message,
      });
      response.code(500);
      return response;
    }

    const response = h.response({
      status: 'Success',
      message: 'Add Data User Success',
      data: users,
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'Failed',
      message: error.message,
    });
    response.code(500);
    return response;
  }
};

const getUserByIdHandler = async (request, h) => {
  const { id } = request.params;
  try {
    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id);

    if (error) {
      const response = h.response({
        status: 'Failed',
        message: error.message,
      });
      response.code(500);
      return response;
    }

    const response = h.response({
      status: 'Success',
      message: 'Get Data User By Id Success',
      data: users,
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'Failed',
      message: error.message,
    });
    response.code(500);
    return response;
  }
};

const getAllUserHandler = async (request, h) => {
  try {
    const { data: users, error } = await supabase
      .from('users')
      .select('*');

    if (error) {
      const response = h.response({
        status: 'Failed',
        message: error.message,
      });
      response.code(500);
      return response;
    }

    const response = h.response({
      status: 'Success',
      message: 'Get All Data User Success',
      data: users,
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'Failed',
      message: error.message,
    });
    response.code(500);
    return response;
  }
};

const editUserByIdHandler = async (request, h) => {
  const { id } = request.params;

  const {
    username, email, password, image,
  } = request.payload;

  const updatedAt = new Date().toISOString();

  try {
    const { data: users, error } = await supabase
      .from('users')
      .update({
        username,
        email,
        password,
        image,
        updatedAt,
      })
      .eq('id', id);

    if (error) {
      const response = h.response({
        status: 'Failed',
        message: error.message,
      });
      response.code(500);
      return response;
    }

    const response = h.response({
      status: 'Success',
      message: 'Update User By Id Success',
      data: users,
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'Failed',
      message: error.message,
    });
    response.code(500);
    return response;
  }
};

const deleteUserByIdHandler = async (request, h) => {
  const { id } = request.params;

  try {
    const { data: users, error } = await supabase
      .from('users')
      .delete()
      .eq('id', id);

    if (error) {
      const response = h.response({
        status: 'Failed',
        message: error.message,
      });
      response.code(500);
      return response;
    }

    const response = h.response({
      status: 'Success',
      message: 'Delete User By Id Success',
      data: users,
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'Failed',
      message: error.message,
    });
    response.code(500);
    return response;
  }
};

module.exports = {
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
};
