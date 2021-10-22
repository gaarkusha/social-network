import React, {ChangeEvent} from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {ActionsType, addPostAC, postChangeAC, postsType} from "../../../Redux/State";

type MyPostsProps = {
    posts: Array<postsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsProps) => {

    let postsElements = props.posts.map((p) => <Post key={p.id} img={p.img} likesCount={p.likesCount} massage={p.message}/>)

    const addNewPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(postChangeAC(newText))
    }

    return (

        <div className={s.postsBlock}>
            <div className={s.inputPost}>
                <textarea className={s.textarea}
                          placeholder='anything new?'
                          value={props.newPostText}
                          onChange={onPostChange}/>
                <button className={s.btnPost}
                        onClick={addNewPost}>Add post</button>
            </div>
            <div className={s.myPost}>
                <div className={s.myPostTitle}>My post</div>
                <div className={s.post}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;