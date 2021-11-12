import {ActionsType} from "./Store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostAC = () => ({type: ADD_POST} as const)
export const postChangeAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText,} as const)

type ProfileInfoType = {
    id: number
    status: string
    age: string
    birthday: string
    city: string
    hobby: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
    img: string
}

const initialState = {
    profileInfo: [
        {
            id: 1,
            status: 'Inst: @garkusha.photo',
            age: '20 years',
            birthday: 'November 9',
            city: 'Minsk',
            hobby: 'Front-end development every day'
        }
    ] as Array<ProfileInfoType>,
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 14,
            img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/LM5zJ9SgTI9kNPgUIpW4MchmmsKtvjcGcQNeEQh5HpUjJnWQ5nIK4NXQKqlIudlFO6zT87_GqL1HwhakvEevs4gQ.jpg?size=200x200&quality=96&crop=4,4,852,852&ava=1'
        },
        {
            id: 2,
            message: 'I read new book!',
            likesCount: 155,
            img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/LM5zJ9SgTI9kNPgUIpW4MchmmsKtvjcGcQNeEQh5HpUjJnWQ5nIK4NXQKqlIudlFO6zT87_GqL1HwhakvEevs4gQ.jpg?size=200x200&quality=96&crop=4,4,852,852&ava=1'
        }
    ] as Array<PostsType>,
    newPostText: '',
}

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0,
                img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/LM5zJ9SgTI9kNPgUIpW4MchmmsKtvjcGcQNeEQh5HpUjJnWQ5nIK4NXQKqlIudlFO6zT87_GqL1HwhakvEevs4gQ.jpg?size=200x200&quality=96&crop=4,4,852,852&ava=1'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        default:
            return state
    }
}

export default profileReducer;