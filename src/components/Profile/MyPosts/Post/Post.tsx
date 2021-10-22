import React from 'react'
import s from './Post.module.css'

type TypeMassage = {
    massage: string
    likesCount: number
    img: string
}

const Post = (props: TypeMassage) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src={props.img}/>
                <div className={s.message}>{props.massage}</div>
            </div>
            <div className={s.post_status}>
                <div className={s.comments}>Comments</div>
                <div className={s.likes}>
                    <span>like: </span>
                    <div className={s.likesCount}>{props.likesCount}</div>
                </div>
            </div>
            <div className={s.delimiter}></div>
        </div>
    )
}

export default Post;