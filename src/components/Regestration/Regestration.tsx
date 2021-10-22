import React from 'react';
import s from './Regestration.module.css'

export const Regestration = () => {
    return (
        <div className={s.reg_wrapper}>
            <div className={s.reg_block}>
                <div className={s.reg_block_text}>
                    <div className={s.input_text}>Регистрация в</div>
                    <div className={s.mesUp_text}>MesUp</div>
                </div>
                <div className={s.input_block}>
                    <input className={s.input_log}/>
                    <input className={s.input_pas}/>
                    <div className={s.log}>логин</div>
                    <div className={s.pas}>пороль</div>
                </div>
                <div className={s.voiti_block}>
                    <div className={s.btn_voiti}>войти</div>
                    <div className={s.btn_vost}>Забыли пороль?</div>
                </div>
            </div>
        </div>
    )
}