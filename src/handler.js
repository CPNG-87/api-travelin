const { supabase } = require('./supabase');
require('dotenv').config();

const addDestinationHandler = async (request, h) => {
  const {
    title, opening_hours, description, image, address, country, is_food, cost,
    opening_days,
    lat,
    lng,
    id_city,
  } = request.payload;

  const updated_at = new Date().toISOString();

  try {
    const { data, error } = await supabase
      .from('destinations')
      .insert([
        {
          title,
          opening_hours,
          opening_days,
          description,
          image,
          address,
          country,
          is_food,
          cost,
          lat,
          lng,
          updated_at,
          id_city,
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
      .from('destinations')
      .select(`
        *,
        cities (
          *
        )
      `);

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
    title, opening_hours, description, image, address, country, is_food, cost,
    opening_days,
    lat,
    lng,
    id_city,
  } = request.payload;

  const updated_at = new Date().toISOString();

  try {
    const { data: destination, error } = await supabase
      .from('destinations')
      .update({
        title,
        opening_hours,
        opening_days,
        description,
        image,
        address,
        country,
        is_food,
        cost,
        lat,
        lng,
        updated_at,
        id_city,
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
      .from('destinations')
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
      .from('destinations')
      .select(`*,
        cities (
          *
        )
      `)
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

// City Handler

const addCityHandler = async (request, h) => {
  const {
    lat,
    lng,
    city,
  } = request.payload;

  const updated_at = new Date().toISOString();

  try {
    const { data, error } = await supabase
      .from('cities')
      .insert([
        {
          lat,
          lng,
          city,
          updated_at,
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
      message: 'Add City Success',
      data_city: data,
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

const getCityByIdHandler = async (request, h) => {
  const { id } = request.params;
  try {
    const { data: cities, error } = await supabase
      .from('cities')
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
      message: 'Get Data City By Id Success',
      data: cities,
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

const getAllCityHandler = async (request, h) => {
  try {
    const { data: cities, error } = await supabase
      .from('cities')
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
      message: 'Get All Data City Success',
      data: cities,
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

const deleteCityByIdHandler = async (request, h) => {
  const { id } = request.params;
  try {
    const { data: city, error } = await supabase
      .from('cities')
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
      message: 'Delete Data City By Id Success',
      data: city,
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

const editCityByIdHandler = async (request, h) => {
  const { id } = request.params;

  const { lat, lng, city } = request.payload;

  const updated_at = new Date().toISOString();

  try {
    const { data: cities, error } = await supabase
      .from('cities')
      .update({
        lat,
        lng,
        updated_at,
        city,
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
      message: 'Update City By Id Success',
      data: cities,
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

// Reviews Handler

const addReviewHandler = async (request, h) => {
  const { id_destination } = request.params;
  const { rating, review, image } = request.payload;

  const updated_at = new Date().toISOString();

  try {
    const { data: reviews, error } = await supabase
      .from('reviews')
      .insert([
        {
          id_destination,
          rating,
          review,
          image,
          updated_at,
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
      message: 'Add Review Success',
      data: reviews,
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

const getReviewByIdHandler = async (request, h) => {
  const { id } = request.params;
  try {
    const { data: reviews, error } = await supabase
      .from('reviews')
      .select(`*,
      destinations (
        *
      )
    `)
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
      message: 'Get Data Review By Id Success',
      data: reviews,
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

const getReviewByIdDestinationHandler = async (request, h) => {
  const { id_destination } = request.params;
  try {
    const { data: reviews, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('id_destination', id_destination);

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
      message: 'Get Data Review By Id Destination Success',
      data: reviews,
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

const getAllReviewHandler = async (request, h) => {
  try {
    const { data: reviews, error } = await supabase
      .from('reviews')
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
      message: 'Get All Data review Success',
      data: reviews,
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

const deleteReviewByIdHandler = async (request, h) => {
  const { id } = request.params;
  try {
    const { data: reviews, error } = await supabase
      .from('reviews')
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
      message: 'Delete Data Review By Id Success',
      data: reviews,
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

const editReviewByIdHandler = async (request, h) => {
  const { id } = request.params;

  const {
    rating, review, image, id_destination,
  } = request.payload;

  const updated_at = new Date().toISOString();

  try {
    const { data: reviews, error } = await supabase
      .from('reviews')
      .update({
        id_destination,
        rating,
        review,
        image,
        updated_at,
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
      message: 'Update Reviews By Id Success',
      data: reviews,
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
};
