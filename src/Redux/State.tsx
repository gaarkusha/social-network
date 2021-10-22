export type storeType = {
    _state: RootStateType
    _callBack: (_state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}
export type profileInfoType = {
    id: number
    status: string
    age: string
    birthday: string
    city: string
    hobby: string
}
export type postsType = {
    id: number
    message: string
    likesCount: number
    img: string
}
export type messagesType = {
    id: number
    message: string
    img: string
}
export type dialogsDataType = {
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

}
export type RootStateType = {
    ProfilePage: ProfilePageType
    DialogPage: DialogPageType
}
export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof postChangeAC>

export const addPostAC = () => ({type: ADD_POST} as const)
export const postChangeAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText,} as const)

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const store: storeType = {
    _state: {
        ProfilePage: {
            profileInfo: [
                {
                    id: 1,
                    status: 'Inst: @garkusha.photo',
                    age: '20 years',
                    birthday: 'November 9',
                    city: 'Minsk',
                    hobby: 'Front-end development every day'
                }
            ],
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
            ],
            newPostText: '',
        },
        DialogPage: {
            messages: [
                {
                    id: 1,
                    message: 'Hi',
                    img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/LM5zJ9SgTI9kNPgUIpW4MchmmsKtvjcGcQNeEQh5HpUjJnWQ5nIK4NXQKqlIudlFO6zT87_GqL1HwhakvEevs4gQ.jpg?size=200x200&quality=96&crop=4,4,852,852&ava=1'
                },
                {
                    id: 2,
                    message: 'Yo',
                    img: 'data:image/jpeg;base64,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'
                },
                {
                    id: 3,
                    message: 'How are you',
                    img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/5SN7mQ1Vx5Q_LD-TuEHHMnn9VPL1O6VilRlHXycgpsDIN0X9HhhKXCbpRllgKdjceGWQ5mtQtzGpgGl54IX2TVoc.jpg?size=200x200&quality=96&crop=0,0,2159,2160&ava=1'
                },
                {
                    id: 4,
                    message: 'I read new book',
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig1/awKWHadMlKhrMesJKZyPjQTVAfAmI75Fl0odlvG1-WmGW0OhZ54L7YhLwTwqlBpI05JbW7H3.jpg?size=200x200&quality=96&crop=0,293,1592,1592&ava=1'
                },
                {
                    id: 5,
                    message: 'Go to sleep',
                    img: 'https://sun9-32.userapi.com/impg/mXqzF1RlK59N7v-MGXrEOZWl9y4gkCBgxiVYNQ/DwQgmTrAztQ.jpg?size=810x1080&quality=96&sign=cd8dc4ab31554923b8b3959440e4c2e8&type=album'
                },
                {
                    id: 6,
                    message: 'I am happy',
                    img: 'https://sun9-46.userapi.com/impf/c840336/v840336194/5886e/lP_V4uuy1qI.jpg?size=780x780&quality=96&sign=91bdca527e3e3579a35ffad98648e8b3&type=album'
                },
                {
                    id: 7,
                    message: 'where is my tea?',
                    img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/_JL89qaqXfw-5c53zcmZ3Lfe6MBeU9sYVJ1C1DCYP9VpjBpbD6pDQEK37gysXNI5mNPxui6cY7GwbvULYPMz-UmU.jpg?size=200x200&quality=96&crop=0,147,1613,1613&ava=1'
                }
            ],
            dialogsData: [
                {
                    id: 1,
                    name: 'Vlad',
                    img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/LM5zJ9SgTI9kNPgUIpW4MchmmsKtvjcGcQNeEQh5HpUjJnWQ5nIK4NXQKqlIudlFO6zT87_GqL1HwhakvEevs4gQ.jpg?size=200x200&quality=96&crop=4,4,852,852&ava=1'
                },
                {
                    id: 2,
                    name: 'Polina',
                    img: 'data:image/jpeg;base64,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'
                },
                {
                    id: 3,
                    name: 'Jenya',
                    img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/5SN7mQ1Vx5Q_LD-TuEHHMnn9VPL1O6VilRlHXycgpsDIN0X9HhhKXCbpRllgKdjceGWQ5mtQtzGpgGl54IX2TVoc.jpg?size=200x200&quality=96&crop=0,0,2159,2160&ava=1'
                },
                {
                    id: 4,
                    name: 'Ivan',
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig1/awKWHadMlKhrMesJKZyPjQTVAfAmI75Fl0odlvG1-WmGW0OhZ54L7YhLwTwqlBpI05JbW7H3.jpg?size=200x200&quality=96&crop=0,293,1592,1592&ava=1'
                },
                {
                    id: 5,
                    name: 'Kostya',
                    img: 'https://sun9-32.userapi.com/impg/mXqzF1RlK59N7v-MGXrEOZWl9y4gkCBgxiVYNQ/DwQgmTrAztQ.jpg?size=810x1080&quality=96&sign=cd8dc4ab31554923b8b3959440e4c2e8&type=album'
                },
                {
                    id: 6,
                    name: 'Kolya',
                    img: 'https://sun9-46.userapi.com/impf/c840336/v840336194/5886e/lP_V4uuy1qI.jpg?size=780x780&quality=96&sign=91bdca527e3e3579a35ffad98648e8b3&type=album'
                },
                {
                    id: 7,
                    name: 'Sasha',
                    img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/_JL89qaqXfw-5c53zcmZ3Lfe6MBeU9sYVJ1C1DCYP9VpjBpbD6pDQEK37gysXNI5mNPxui6cY7GwbvULYPMz-UmU.jpg?size=200x200&quality=96&crop=0,147,1613,1613&ava=1'
                }
            ]
        },
    },
    _callBack(_state: RootStateType) {
    },
    subscribe(observer) {
        this._callBack = observer
    },
    getState() {
        return this._state
    },
    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPost: postsType = {
                id: 3,
                message: this._state.ProfilePage.newPostText,
                likesCount: 0,
                img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/LM5zJ9SgTI9kNPgUIpW4MchmmsKtvjcGcQNeEQh5HpUjJnWQ5nIK4NXQKqlIudlFO6zT87_GqL1HwhakvEevs4gQ.jpg?size=200x200&quality=96&crop=4,4,852,852&ava=1'
            }
            this._state.ProfilePage.posts.push(newPost)
            this._state.ProfilePage.newPostText = ''
            this._callBack(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.ProfilePage.newPostText = action.newText
            this._callBack(this._state)
        }
    }
}