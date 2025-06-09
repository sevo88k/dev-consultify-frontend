import React from 'react'
import Sidebar from './Include/Sidebar';
import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Decryptedid, Encryptedid } from '../Util/BcruptEncyptid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { customerDetailsAction, getCompletedconsultaitonformUserAction } from '../Redux/Action/UserAction';
import moment from 'moment';
import UserCompleteConsultationform from '../Component/UserCompleteConsultationform';

export default function UserCompletedConsultationForms() {
    const {id}=useParams();

  return (
 <UserCompleteConsultationform url="/All-users" id={id}/>
  )
}
