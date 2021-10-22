import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';
import {dialogsDataType, messagesType} from "../../Redux/State";

type DialogsProps = {
    dialogsData: Array<dialogsDataType>
    messages: Array<messagesType>
}

const Dialogs = (props: DialogsProps) => {

    let dialogsElements = props.dialogsData.map((d) =>
        <DialogItem key={d.id} image={d.img} name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map((m) =>
        <Message key={m.id} image={m.img} message={m.message} id={m.id}/>);

    return (
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>{dialogsElements}</div>
                <div className={s.delimiter_v}></div>
                <div className={s.messages}>{messagesElements}</div>
            </div>
    )
}

export default Dialogs;