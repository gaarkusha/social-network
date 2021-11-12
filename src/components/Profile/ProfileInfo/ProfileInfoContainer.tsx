import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";
import {InitialStateType} from "../../../Redux/profile-reducer";

type MapStatePropsType = {
    profilePage: InitialStateType
}
type MapDispatchPropsType = {

}

export type ProfileInfoPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return{
    }
}

export const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)