import React from 'react';
import s from './../Dialogs.module.css'


type MessageProps = {
    message: string
    image: string
    id: number
}

const Message = (props: MessageProps) => {

    const sendMessageRef = React.createRef<HTMLInputElement>()

    const sendMessage = () => {
        alert(sendMessageRef.current?.value)
    }

    return (
        <div className={s.message_block}>
            <div className={s.message_item}>
                <img src={props.image}/>
                <div className={s.message}>
                    <div className={s.message_text}>{props.message}</div>
                    <input className={s.input_message} ref={sendMessageRef} type="text"/>
                    <button className={s.btn_message} onClick={sendMessage}>send</button>
                </div>
            </div>
            <div className={s.delimiter_g}></div>
        </div>
    )
}

export default Message;