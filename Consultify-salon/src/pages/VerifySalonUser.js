import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifySalonUser } from '../Redux/Actions/user/auth';
import { useNavigate, useParams } from 'react-router-dom';

const VerifySalonUser = () =>{

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(verifySalonUser(params?.id)).then((data)=>{
            if(data?.payload?.success){
               navigate("/signin")
            }
        })
    },[])

    return (
        <></>
    )
}

export default VerifySalonUser;