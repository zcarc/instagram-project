import {all, fork, takeLatest, put, delay} from 'redux-saga/effects'
import {ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS} from "../reducers/post";

function* addPost() {

    try {
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
        });

    }catch (e) {
        console.error(e);
        yield put({
           type: ADD_POST_FAILURE,
           error: e,
        });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga () {

    yield all([
        fork(watchAddPost),
    ]);

}