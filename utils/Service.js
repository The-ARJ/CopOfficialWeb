import axios from "axios";

const baseURL = "http://localhost:3005/users";
export const imgURL = "http://localhost:3005";
// export const imgURL = "https://res.cloudinary.com/dy8ua6x3r/image/food_images/su2i6hsgyf5b5ejuy3tz";
export const foodURL = "http://localhost:3005/foods";
export const recommendURL = "http://localhost:3005/recommendation";
export const notificationURL = "http://localhost:3005/notifications";
export const feedbackURL = "http://localhost:3005/feedbacks";
export const contactURL = "http://localhost:3005/contacts";

const login = (credentials) => {
  return axios.post(`${baseURL}/login/user`, credentials);
};

const register = (userDetails) => {
  return axios.post(`${baseURL}/`, userDetails);
};
const updateUser = (userId, userDetails) => {
  const config = {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios.put(`${baseURL}/${userId}`, userDetails, config);
};
const foods = (foodDetails) => {
  return axios.get(`${foodURL}`, {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  });
};
const getFoodById = (id, token) => {
  return axios.get(`${foodURL}/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};
const deleteFoodbyId = (id, token) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return axios.delete(`${foodURL}/${id}`, config);
};

const addFood = (formData) => {
  const config = {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post(`${foodURL}/`, formData, config);
};
const getAllFeedback = (foodDetails) => {
  return axios.get(`${feedbackURL}`, {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  });
};

const createFeedback = (formData) => {
  const config = {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post(`${feedbackURL}/`, formData, config);
};
const updateFood = (foodId, updatedFoodDetails, token) => {
  return axios.put(`${foodURL}/${foodId}`, updatedFoodDetails, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

const breakfast = (breakfastDetails) => {
  return axios.get(`${recommendURL}/breakfast`, {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  });
};
const lunch = (breakfastDetails) => {
  return axios.get(`${recommendURL}/lunch`, {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  });
};
const dinner = (breakfastDetails) => {
  return axios.get(`${recommendURL}/dinner`, {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  });
};

const users = (userDetails) => {
  return axios.get(`${baseURL}`, {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  });
};
const getUserById = (id, token) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return axios.get(`${baseURL}/${id}`, config);
};
const deleteUserById = (id, token) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return axios.delete(`${baseURL}/${id}`, config);
};

const notification = (notifyDetails) => {
  return axios.get(`${notificationURL}`, {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  });
};
const notificationforUsers = (notifyDetails) => {
  return axios.get(`${notificationURL}/past`, {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  });
};
const addnotification = (formData) => {
  const config = {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post(`${notificationURL}/`, formData, config);
};
const deleteNotificationbyId = (id, token) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return axios.delete(`${notificationURL}/${id}`, config);
};

const updateNotification = (id, updatednotificationDetails, token) => {
  return axios.put(`${notificationURL}/${id}`, updatednotificationDetails, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};
const getNotificationById = (id, token) => {
  return axios.get(`${notificationURL}/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};
const deleteAllNotifications = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.delete(`${notificationURL}`, config);
};

const deleteFeedbackbyId = (id, token) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return axios.delete(`${feedbackURL}/${id}`, config);
};

const deleteAllFeedbacks = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.delete(`${feedbackURL}`, config);
};

const getAllContact = () => {
  return axios.get(`${contactURL}`, {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  });
};
const createContact = (formData) => {
  return axios.post(`${contactURL}/`, formData);
};
const deleteContactbyId = (id, token) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return axios.delete(`${contactURL}/${id}`, config);
};

const deleteAllContacts = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.delete(`${contactURL}`, config);
};
const auth = {
  login,
  register,
  updateUser,
  foods,
  addFood,
  updateFood,
  users,
  getUserById,
  breakfast,
  lunch,
  dinner,
  notification,
  addnotification,
  deleteNotificationbyId,
  updateNotification,
  getFoodById,
  getNotificationById,
  deleteAllNotifications,
  deleteUserById,
  deleteFoodbyId,
  notificationforUsers,
  getAllFeedback,
  createFeedback,
  deleteFeedbackbyId,
  deleteAllFeedbacks,
  getAllContact,
  createContact,
  deleteContactbyId,
  deleteAllContacts
};

export default auth;
