import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editProfile, verifySalonUser } from '../Redux/Actions/user/auth';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const PaymentSuccess = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.success == 'paid_success') {
            dispatch(editProfile({
                id: params.id,
                subscription: 1 //IGNORE
            })).then(
                (data) => {
                    if (data?.payload?.success) {
                        //  localStorage.setItem("token",data?.payload?.data?.token);
                        //  localStorage.setItem("userId",data?.payload?.data?._id);
                        //  localStorage.setItem("firstname",data?.payload?.data?.firstname);
                        //  localStorage.setItem("lastename",data?.payload?.data?.lastname);
                        toast.success(data?.payload?.message);
                        setTimeout(() => {
                            window.location.href = "/signin";
                        }, 2000)

                    }
                }
            );
        }

    }, [])

    return (
        <></>
    )
}

export default PaymentSuccess;