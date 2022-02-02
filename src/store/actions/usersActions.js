
import axios from 'axios'
import {usersSlice} from "../reducers/usersSlice";

const { getUsers, startLoading, hasError} = usersSlice.actions;
export const fetchUsers = () => async dispatch => {
    dispatch(startLoading());
    try{
         await axios.get(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data`).then(
            (response) =>

        dispatch(getUsers(response.data)))
    }
    catch(e){

        dispatch( hasError(e.message))
        return console.error(e.message);
    }

}