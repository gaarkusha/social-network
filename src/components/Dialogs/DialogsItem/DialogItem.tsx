import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'

type DialogItemProps = {
    name: string
    id: number
    image: string
}

const DialogItem = (props: DialogItemProps) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <img src={props.image} />
            <NavLink className={s.name} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;