

import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Sidebar from './Include/Sidebar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContradictionsDatabaseAction, getStaticApiAction, getdetailscontaindicationAction } from '../Redux/Action/ContaindicationAction'
import { FieldArray, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Decryptedid } from '../Util/BcruptEncyptid'
import { useState } from 'react'
import Editform from './Editform'
export default function EditContraindicationDatabase() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getStaticApiAction())
  },[])
  const {id}=useParams();
const [initialvalues,setInitialvalues]=useState({})

  var idvalue = Decryptedid(atob(id));


  useEffect(()=>{
    dispatch(getdetailscontaindicationAction(idvalue)).then(function(data){
      if(data.payload){
        var getdetailscontaindication=data.payload;
        var formDataFromApi = {
          id:getdetailscontaindication?._id,
          title: getdetailscontaindication?.title,
          entryType: getdetailscontaindication?.entery_id?._id,
          description: getdetailscontaindication?.description,
          side_effect: getdetailscontaindication?.side_effect,
          links: getdetailscontaindication?.link?.map((link) => ({
            source: link.source._id,
            url: link.url,
          })),
          contraindicationAdvice: getdetailscontaindication?.contraindication_advice?.map((advice) => ({
            area: advice.area._id,
            source: advice.source,
            answer: advice.answer,
          })),
        };
        setInitialvalues(formDataFromApi)
      }
    })
  },[idvalue])



  const  getStaticApi=useSelector((state)=>state.Containdication.getStaticApi)

  var  getdetailscontaindication=useSelector((state)=>state.Containdication.getdetailscontaindication)






  


  const validationSchema = Yup.object().shape({
    formData: Yup.array().of( Yup.object().shape({
      title: Yup.string().required('Title is required'),
      entryType: Yup.string().required('Select Entry Type is required'),
      links: Yup.array().of(
        Yup.object().shape({
          source: Yup.string().required('Select Source is required'),
          url: Yup.string().required('URL is required'),
        })
      ),
      description: Yup.string().required('Description is required'),
   
      side_effect: Yup.array().of(
        Yup.object().shape({
          value: Yup.string(),
          label: Yup.string().required("This field required"),
        })
      ),
      contraindicationAdvice: Yup.array().of(
        Yup.object().shape({
          area: Yup.string().required('Select Area is required'),
          source: Yup.string().required('Description is required'),
          answer: Yup.string().required('This field required'),
        })
      ),
    })
    )
  });



  const navigate=useNavigate()










  






  return (
    <div>
       {/* <!-- Begin page --> */}
        <div id="layout-wrapper">

      

            {/* <!-- ========== Left Sidebar Start ========== --> */}
            <div className="vertical-menu">

            <Sidebar />
            </div>
            {/* <!-- Left Sidebar End --> */}

            

            {/* <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== --> */}
         
       {
       Object.keys(initialvalues).length>0 &&
      
            <Editform initialValues={initialvalues} validationSchema={validationSchema} getStaticApi={getStaticApi} id={idvalue} />
            
          }
                </div>

            </div>
            

  )
}

       

       

       
