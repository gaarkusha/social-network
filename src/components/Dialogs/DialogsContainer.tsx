import React from 'react';
import {messageChangeAC, sendMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {InitialStateType} from "../../Redux/dialogs-reducer";

type MapStatePropsType = {
    DialogPage: InitialStateType
}
type MapDispatchPropsType = {
    updateNewMessageText: (newText: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        DialogPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return{
        updateNewMessageText: (newText: string) => {
            dispatch(messageChangeAC(newText))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
