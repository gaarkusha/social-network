import React from 'react';
import s from './../Dialogs.module.css'


type MessageProps = {
    message: string
    id: number
}

const Message = (props: MessageProps) => {

    return (
        <div className={s.message_block}>
            <div className={s.message_item}>
                <div className={s.message}>
                    <div className={s.message_text}>{props.message}</div>
                </div>
            </div>
            <div className={s.delimiter_g}></div>
        </div>
    )
}

export default Message;