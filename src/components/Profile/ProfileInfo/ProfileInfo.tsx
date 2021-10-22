import React from "react";
import s from './ProfileInfo.module.css'

type ProfileInfoProps = {
    status: string
    age: string
    birthday: string
    city: string
    hobby: string
}

const ProfileInfo = (props: ProfileInfoProps) => {
    return (
        <div className={s.descriptionBlock}>
            <div className={s.avatar}>
                <img
                    src='https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/LM5zJ9SgTI9kNPgUIpW4MchmmsKtvjcGcQNeEQh5HpUjJnWQ5nIK4NXQKqlIudlFO6zT87_GqL1HwhakvEevs4gQ.jpg?size=200x200&quality=96&crop=4,4,852,852&ava=1'/>
            </div>
            <div className={s.description}>
                <div className={s.descriptionNameBlock}>
                    <div className={s.name_info}>Garkusha Vladislav</div>
                    <div className={s.status}>{props.status}</div>
                </div>
                <div className={s.delimiter}></div>
                <div className={s.profile_wrapper}>
                    <div className={s.profile_info}>
                        <div className={s.info}>Age:</div>
                        <div className={s.info}>Birthday:</div>
                        <div className={s.info}>City:</div>
                        <div className={s.info}>Hobby:</div>
                    </div>
                    <div className={s.props_info}>
                        <div className={s.props}>{props.age}</div>
                        <div className={s.props}>{props.birthday}</div>
                        <div className={s.props}>{props.city}</div>
                        <div className={s.props}>{props.hobby}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;