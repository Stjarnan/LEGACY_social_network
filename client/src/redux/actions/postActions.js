import axios from "axios";

import {
  ADD_POST,
  GET_POSTS,
  GET_ERRORS,
  POST_LOADING,
  DELETE_POST,
  GET_POST,
  CLEAR_ERROR
} from "./types";

export const addPost = data => dispatch => {
  dispatch(clearError());
  axios
    .post("/api/posts/", data)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getPosts = () => dispatch => {
  dispatch(postLoading());
  axios
    .get("/api/posts/")
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_POSTS,
        payload: null
      });
    });
};

export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const postLikeToggle = id => dispatch => {
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => {
      dispatch(getPosts());
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getPost = id => dispatch => {
  dispatch(postLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_POST,
        payload: null
      });
    });
};

export const addComment = (postId, comment) => dispatch => {
  dispatch(clearError());
  axios
    .post(`/api/posts/comment/${postId}`, comment)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/posts/comment/${postId}/${commentId}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const postLoading = () => {
  return {
    type: POST_LOADING
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  };
};
