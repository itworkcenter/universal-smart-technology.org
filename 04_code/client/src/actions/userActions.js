import axios from 'axios';
import { GET_USERS, ADD_USER, DELETE_USER, ITEMS_LOADING } from './types';

export const getUsers = () => dispatch => {
    dispatch(setItemsLoading());

    axios.get('/api/users').then(res =>
        dispatch({
          type: GET_USERS,
          payload: res.data
        })
      );
}
export const deleteUser = id => dispatch => {
    axios.delete(`/api/users/${id}`)
    .then(res => dispatch({
        type: DELETE_USER,
        payload: id
    }))
}
export const addUser = user => dispatch => {
    console.log(user)
    axios.post('/api/users', user).then(res =>{
        console.log(res.data)
        return dispatch({
            type: ADD_USER,
            payload: res.data
          })

    }
        
      );
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}
