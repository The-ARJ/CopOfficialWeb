import axios from "axios";

const baseURL = "http://localhost:3005/users";
export const imgURL = "http://localhost:3005";
export const complaintURL = "http://localhost:3005/complaints";
export const crimeReportURL = "http://localhost:3005/crime-report";
export const firURL = "http://localhost:3005/fir";
export const recommendURL = "http://localhost:3005/recommendation";
export const notificationURL = "http://localhost:3005/notifications";
export const feedbackURL = "http://localhost:3005/feedbacks";
export const contactURL = "http://localhost:3005/contacts";
export const criminalURL = "http://localhost:3005/criminals";

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
const getAllComplaints = (token) => {
  return axios.get(`${complaintURL}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

const getComplaintById = (id, token) => {
  return axios.get(`${complaintURL}/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

const deleteComplaintbyId = (id, token) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return axios.delete(`${complaintURL}/${id}`, config);
};

const createComplaint = (formData) => {
  const config = {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post(`${complaintURL}/`, formData, config);
};

const updateComplaint = (complaintId, updatedComplaintDetails, token) => {
  return axios.put(`${complaintURL}/${complaintId}`, updatedComplaintDetails, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

// Criminal Services
const getAllCriminals = () => {
  return axios.get(`${criminalURL}`, {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  });
};

const getCriminalById = (id, token) => {
  return axios.get(`${criminalURL}/${id}`, {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  });
};

const deleteCriminalById = (id, token) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return axios.delete(`${criminalURL}/${id}`, config);
};

const createCriminal = (formData) => {
  const config = {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post(`${criminalURL}/`, formData, config);
};

// UpdateCriminal service
const updateCriminal = (criminalId, updatedCriminalDetails, token) => {
  return axios.put(`${criminalURL}/${criminalId}`, updatedCriminalDetails, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

//Crime Report Services

const getAllCrimeReports = (token) => {
  return axios.get(`${crimeReportURL}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

const getCrimeReportById = (id, token) => {
  return axios.get(`${crimeReportURL}/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

const deleteCrimeReportById = (id, token) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return axios.delete(`${crimeReportURL}/${id}`, config);
};

const createCrimeReport = (formData) => {
  const config = {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post(`${crimeReportURL}/`, formData, config);
};

const updateCrimeReport = (crimeReportId, updatedCrimeReportDetails, token) => {
  return axios.put(`${crimeReportURL}/${crimeReportId}`, updatedCrimeReportDetails, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

// FIR Services
const getAllFIRs = (token) => {
  return axios.get(`${firURL}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

const getFIRById = (id, token) => {
  return axios.get(`${firURL}/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

const deleteFIRById = (id, token) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return axios.delete(`${firURL}/${id}`, config);
};

const createFIR = (formData) => {
  const config = {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post(`${firURL}/`, formData, config);
};

const updateFIR = (firId, updatedFIRDetails, token) => {
  return axios.put(`${firURL}/${firId}`, updatedFIRDetails, {
    headers: {
      Authorization: `bearer ${token}`,
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
const getCurrentUser = () => {
  const config = {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios.get(`${baseURL}/current/user`, config);
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
const getAllFeedback = (complaintDetails) => {
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
  getAllComplaints,
  createComplaint,
  updateComplaint,
  users,
  getUserById,
  notification,
  addnotification,
  deleteNotificationbyId,
  updateNotification,
  getComplaintById,
  getNotificationById,
  deleteAllNotifications,
  deleteUserById,
  deleteComplaintbyId,
  notificationforUsers,
  getAllFeedback,
  createFeedback,
  deleteFeedbackbyId,
  deleteAllFeedbacks,
  getAllContact,
  createContact,
  deleteContactbyId,
  deleteAllContacts,
  getCurrentUser,
  getAllCrimeReports,
  getCrimeReportById,
  deleteCrimeReportById,
  createCrimeReport,
  updateCrimeReport,
  getAllFIRs,
  createFIR,
  deleteFIRById,
  getFIRById,
  updateFIR,
  getAllCriminals,
  getCriminalById,
  deleteCriminalById,
  createCriminal,
  updateCriminal
};

export default auth;
