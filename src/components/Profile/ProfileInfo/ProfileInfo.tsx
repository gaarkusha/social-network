import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileInfoPropsType} from "./ProfileInfoContainer";

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            {
                props.profilePage.profileInfo.map(p => <div key={p.id} className={s.descriptionBlock}>
                    <div className={s.avatar}>
                        <img
                            src='https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/LM5zJ9SgTI9kNPgUIpW4MchmmsKtvjcGcQNeEQh5HpUjJnWQ5nIK4NXQKqlIudlFO6zT87_GqL1HwhakvEevs4gQ.jpg?size=200x200&quality=96&crop=4,4,852,852&ava=1'/>
                    </div>
                    <div className={s.description}>
                        <div className={s.descriptionNameBlock}>
                            <div className={s.name_info}>Garkusha Vladislav</div>
                            <div className={s.status}>{p.status}</div>
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
                                <div className={s.props}>{p.age}</div>
                                <div className={s.props}>{p.birthday}</div>
                                <div className={s.props}>{p.city}</div>
                                <div className={s.props}>{p.hobby}</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default ProfileInfo;