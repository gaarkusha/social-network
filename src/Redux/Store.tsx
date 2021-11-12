import {addPostAC, postChangeAC} from "./profile-reducer";
import {messageChangeAC, sendMessageAC} from "./dialogs-reducer";
import {followAC, setUsersAC, unfollowAC} from "./users-reducer";

type storeType = {
    _state: RootStateType
    _callBack: (_state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}
type profileInfoType = {
    id: number
    status: string
    age: string
    birthday: string
    city: string
    hobby: string
}
type postsType = {
    id: number
    message: string
    likesCount: number
    img: string
}
type messagesType = {
    id: number
    message: string
}
type dialogsDataType = {
    id: number
    name: string
    img: string
}
type ProfilePageType = {
    profileInfo: Array<profileInfoType>
    posts: Array<postsType>
    newPostText: string
}
type DialogPageType = {
    messages: Array<messagesType>
    dialogsData: Array<dialogsDataType>
    newMessageText: string

}
type RootStateType = {
    ProfilePage: ProfilePageType
    DialogPage: DialogPageType
    Sidebar : {}
}
export type ActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof postChangeAC> |
    ReturnType<typeof messageChangeAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

