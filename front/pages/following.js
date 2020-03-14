import React from "react";
import FollowLayout from "../components/FollowLayout";
import ProfileLayout from "../components/ProfileLayout";
import {LOAD_FOLLOWINGS_REQUEST} from "../reducers/user";
import {useSelector} from "react-redux";


const Following = ({pageName}) => {

    const {userSessionData} = useSelector(state => state.user);

    return (
        <>
            <ProfileLayout userSessionData={userSessionData}/>
            <FollowLayout pageName={pageName}/>
        </>
    );
};

Following.getInitialProps = (context) => {

    const {dispatch, getState} = context.store;
    const {userSessionData, followingList} = getState().user;

    if(!followingList) {
        dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
            data: userSessionData && userSessionData.id,
        });
    }

    return {pageName: 'following'}

};


export default Following;