import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, postsType, profileInfoType} from "../../Redux/State";

type ProfileProps = {
    posts: Array<postsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
    profileInfo: Array<profileInfoType>
}

const Profile = (props: ProfileProps) => {

    let profileInfoElement = props.profileInfo.map((p) => <ProfileInfo key={p.id} status={p.status} age={p.age} birthday={p.birthday} city={p.city} hobby={p.hobby}/>)

    return (
        <div>
            {profileInfoElement}
            <MyPosts posts={props.posts}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
            />
        </div>
    )
}

export default Profile;