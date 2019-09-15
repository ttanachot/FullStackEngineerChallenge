import fetch from '../Utils/fetch';
import { setAccessToken } from '../Utils/auth';

const fetchLogin = async (data) => {
  try {
    const response = await fetch.post('/api/user/login', data);
    const { accessToken } = response;
    setAccessToken(accessToken);
    return response;
  } catch (err) {
    return { error: 'Cannot login with your username and password!' };
  }
};

const fetchProfile = async () => {
  try {
    const response = await fetch.get('/api/employee/profile');
    return response;
  } catch (err) {
    return { error: 'Cannot get profile' };
  }
};

const fetchTopic = async (data) => {
  const { topicId } = data;
  const response = await fetch.get(`/api/topic/${topicId}`);
  return response;
};

const fetchCreateReview = async (data) => {
  const response = await fetch.post('/api/review', data);
  return response;
};

const fetchReview = async (data) => {
  const { reviewId } = data;
  const response = await fetch.get(`/api/review/${reviewId}`);
  return response;
};

export default {
  fetchLogin,
  fetchProfile,
  fetchCreateReview,
  fetchTopic,
  fetchReview,
};
