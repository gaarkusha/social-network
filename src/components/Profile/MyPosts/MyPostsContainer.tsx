import React from 'react'
import {addPostAC, InitialStateType, postChangeAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    profilePage: InitialStateType
}
type MapDispatchPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

export type MyPostPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return{
        updateNewPostText: (newText: string) => {
            dispatch(postChangeAC(newText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)