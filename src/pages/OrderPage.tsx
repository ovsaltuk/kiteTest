import React, { useState }from 'react';
import { Navigation } from '../js/components/Navigation';
import '../style/components/orderPage.scss';

export function OrderPage() {
  const [nameValue, setNameValue] = useState('');
  const [adressValue, setAdressValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorAdress, setErrorAdress] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameValue.trim() && adressValue.trim()){
      window.location.replace('http://localhost:3000/');
    } else {
      setErrorName( nameValue.trim() ? '' : 'Поле не должно быть пустым' );
      setErrorAdress( adressValue.trim() ? '' : 'Поле не должно быть пустым' );
      setErrorPhone( phoneValue.trim() ? '' : 'Поле не должно быть пустым' );
    }
    
  } 

  return (
    <>
      <Navigation />s
      <form action="#" className='order-form' onSubmit={submit}>
        <div className="order-form__container">
          <span className='order-form__input-title'>ФИО</span>
          <input 
            type="text" 
            placeholder='ФИО' 
            className='order-form__input' 
            value={nameValue} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setNameValue(event.target.value)}}/>
          <span className='order-form__error'>{errorName}</span>

          <span className='order-form__input-title'>Телефон</span>
          <input 
            type="phone" 
            placeholder='Телефон' 
            className='order-form__input' 
            value={phoneValue} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setPhoneValue(event.target.value)}}/>
          <span className='order-form__error'>{errorPhone}</span>

          <span className='order-form__input-title'>Адрес</span>
          <textarea 
            placeholder='Адрес' 
            className='order-form__input' 
            value={adressValue} 
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {setAdressValue(event.target.value)}}/>
          <span className='order-form__error'>{errorAdress}</span>

          <button className='order-form__btn' >Заказать</button>
        </div>
      </form>
    </>
  )
}