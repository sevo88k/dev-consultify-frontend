import React from 'react'
import UserCompleteConsultationform from '../Component/UserCompleteConsultationform'
import { useParams } from 'react-router-dom';

export default function SalonCustomerCompletedConsultationForms() {
    const {id}=useParams();
  return (
    <UserCompleteConsultationform url={"/Salon-customers"} id={id}/>
  )
}
