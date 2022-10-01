import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/slices/userSlice';
import { Link } from 'react-router-dom';
import { FAVORITE_ROUTE } from '../../utils/const';

import Modal from '../Modal/Modal'
import Profile from '../Profile/Profile';

import { VscAccount } from 'react-icons/vsc';
import './AccountActions.scss'

const AccountActions = () => {
     const [visibleBottom, setVisibleBottom] = useState(false)
     const [modalActive, setModalActive] = useState(false)
     const dispatch = useDispatch()

     const handleProfile = () => {
          if (!visibleBottom) {
               setVisibleBottom(true)

          } else {
               setVisibleBottom(false)
          }
     }

     return (
          <div className='profile'>
               <div className='profile__top'>
                    <button onClick={handleProfile} className='profile__btn btn_null'>
                         <VscAccount className='profile__account-icon account-icon' />
                    </button>
               </div>
               <div className={`profile__bottom ${visibleBottom ? 'profile__bottom_visible' : ''}`}>
                    <ul className='profile__list list-profile'>
                         <li className='list-profile__item'><button onClick={() => setModalActive(true)} className='list-profile__btn btn_null'>Profile</button></li>
                         <li className='list-profile__item'>
                              <Link className='list-profile__link link' to={FAVORITE_ROUTE}>Favorite</Link>
                         </li>
                    </ul>
                    <button className='header__logout logout btn' onClick={() => dispatch(removeUser())}>Выйти</button>
               </div>
               <Modal active={modalActive} setActive={setModalActive}>
                    <Profile/>
               </Modal>
          </div>
     );
};

export default AccountActions;