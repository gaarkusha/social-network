import React, {ChangeEvent} from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostPropsType} from "./MyPostsContainer";

const MyPosts = (props: MyPostPropsType) => {

    let postsElements = props.profilePage.posts.map((p) => <Post key={p.id} img={p.img} likesCount={p.likesCount} massage={p.message}/>)

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }

    return (

        <div className={s.postsBlock}>
            <div className={s.inputPost}>
                <textarea className={s.textarea}
                          placeholder='anything new?'
                          value={props.profilePage.newPostText}
                          onChange={onPostChange}/>
                <button className={s.btnPost}
                        onClick={onAddPost}>Add post</button>
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