import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

function AddEnquiry() {

 
  const {register,handleSubmit,setValue,reset}=useForm();
  const saveData=Enquiry=>{
    axios.post('http://localhost:4000/Enquiry',Enquiry)
    .then(res=>{
      if(res.status===201)
      {
        alert("Enquiry details saved..!")
        reset();
      }
    })
    .catch(error=>console.log(error)
    )
  }
  
  return (
    <div className='d-flex justify-content-center'>
    <div className='bg-white w-50 mt-3 p-3'>
      <h1 className='text-center fs-3 text-primary'>Add Product details..</h1>

      <form onSubmit={handleSubmit(saveData)}>
        <div>
          <h1>{id}</h1>
        <label className='form-label'>Enter ID</label>
        <input type='text' {...register('applicant_Id')} className='form-control border border-dark'></input>
        </div>
        <div>
        <label className='form-label'>Enter first Name</label>
        <input type='text'  {...register('first_Name')}  className='form-control border border-dark'></input>
        </div>
        <div>
        <label className='form-label'>Enter last_Name</label>
        <input type='text'  {...register('last_Name')} className='form-control border border-dark'></input>
        </div>
        <div>
        <label className='form-label'>Enter  age</label>
        <input type='text'  {...register('age')} className='form-control border border-dark'></input>
        </div>
        <div>
          <label className='form-label'>Enetr  email</label>
          <input type='number' {...register('email')}  className='form-control border border-dark'></input>
        </div>
       
        <div>
          <label className='form-label'>Enetr mobileNo </label>
          <input type='number' {...register('mobileNo')}  className='form-control border border-dark'></input>
        </div>
        <div>
          <label className='form-label'>Enetr alternateMobileNo </label>
          <input type='number' {...register('alternateMobileNo')}  className='form-control border border-dark'></input>
        </div>
        <div>
          <label className='form-label'>Enetr pancardNo </label>
          <input type='number' {...register('pancardNo')}  className='form-control border border-dark'></input>
        </div>
        <div>
          <label className='form-label'>Enetr adharNo </label>
          <input type='number' {...register('adharNo')}  className='form-control border border-dark'></input>
        </div>
        <div>
        <label className='form-label'>Enter  address</label>
        <input type='text'  {...register('address')} className='form-control border border-dark'></input>
        </div>
        <div>
        <label className='form-label'>Enter  city</label>
        <input type='text'  {...register('city')} className='form-control border border-dark'></input>
        </div>
       
        <button className='btn btn-success mt-4'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default AddEnquiry