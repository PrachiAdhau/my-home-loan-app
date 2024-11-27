import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ViewEnquiry() {
    const [Enquiry,setEnquiry]=useState([]);

    const getData=()=>{
        axios.get('http://localhost:4000/Enquiry')
        
        .then((res)=>setEnquiry(res.data))
    }
    useEffect(getData,[])
  return (
    <div>
    <table className='table tabel-hover'>
        <thead>
            <tr>
            <th>applicant_Id</th>
            <th>first_Name</th>
            <th>last_Name</th>
            <th>age</th>
            <th>email</th>
            <th>mobileNo</th>
            <th>alternateMobileNo</th>
            <th>pancardNo</th>
            <th>adharNo</th>
            <th>address</th>
            <th>city</th>
            </tr>
           </thead>
            <tbody>
                {
                    Enquiry.map((Enquiry)=><tr>
                        <td>{Enquiry.applicant_Id}</td>
                        <td>{Enquiry.first_Name}</td>
                        <td>{Enquiry.last_Name}</td>
                        <td>{Enquiry.age}</td>
                        <td>{Enquiry.email}</td>
                        <td>{Enquiry.mobileNo}</td>
                        <td>{Enquiry.alternateMobileNo}</td>
                        <td>{Enquiry.pancardNo}</td>
                        <td>{Enquiry.adharNo}</td>
                        <td>{Enquiry.address}</td>
                        <td>{Enquiry.city}</td>
                       
                    </tr>)
                }
            </tbody>
        
        </table>
        </div>)
}

export default ViewEnquiry;