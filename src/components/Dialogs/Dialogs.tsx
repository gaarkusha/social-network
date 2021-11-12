import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from "./DialogsContainer";

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.DialogPage.dialogs.map((d) =>
        <DialogItem key={d.id} image={d.img} name={d.name} id={d.id}/>);
    let messagesElements = props.DialogPage.messages.map((m) =>
        <Message key={m.id} message={m.message} id={m.id}/>);
    let newMessageText = props.DialogPage.newMessageText

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.updateNewMessageText(newText)
    }

    return (
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>{dialogsElements}</div>
                <div className={s.delimiter_v}></div>
                <div className={s.messages}>
                    {messagesElements}
                    <textarea value={newMessageText}
                              onChange={onNewMessageChange}
                              className={s.input_message}
                              placeholder="Enter your message"/>
                    <button className={s.btn_message} onClick={onSendMessageClick}>send</button>
                </div>
            </div>
    )
}

export default Dialogs;