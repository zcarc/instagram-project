import {all, call} from 'redux-saga/effects';
import user from './user';
import post from './post';
import axios from "axios";

axios.defaults.baseURL = 'http://wrkreactapp.site:8080/api/';

export default function* rootSaga() {
    yield all([
        call(user),
        call(post),
    ]);
}