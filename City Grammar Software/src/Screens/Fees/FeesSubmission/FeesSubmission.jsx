import React, { useState } from 'react';
import './feesubmission.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection } from 'firebase/firestore';
import { database,auth } from '../../../Config/firebase';
import showSweetAlert from '../../../Components/ShowSweetAlert';
const FeeSubmission =() => {
   let [feesData,setFeesData] = useState({
    name: "",
    class : "",
    feetype: "",
    amount : "",
    paymentmethod : ""
   })


   const handleFeeSubmission = async (e) =>{
     e.preventDefault()
     
     try{
       showSweetAlert('loading','payment is being submitted',false,true)

      const addData = await addDoc(collection(database,'Fees'),feesData)
      
      showSweetAlert('Payment Submitted','',false,false)
     
      setFeesData({
        name: "",
    class : "",
    feetype: "",
    amount : "",
    paymentmethod : ""
      })
     }catch(error){
      console.log(error)
     }
   }
  return (
    <>
  
      <main id="main" className="container mt-4 mb-4">
        <div className="row stdregis">
          <div className="col-lg-2"></div>
          <div className="col-xs-12 col-lg-offset-3 col-lg-8">
            <div className="m-b-md text-center">
              <h1 id="title" className=''>Fees Submission</h1>
    
            </div>

            <form id="subjects-form" name="fees-form" onSubmit={handleFeeSubmission}>
              <fieldset>
                <label htmlFor="personname">
                  <span className='fs-4'>Your Name</span>
                  <input
                  value={feesData.name}
                  onChange={(e)=>setFeesData({...feesData,name:e.target.value})}
                    type="text"
                    id="personname"
                    name="personname"
                    placeholder="Enter Your Name"
                    required
                  />
                </label>
              </fieldset>


              <fieldset>
                <label htmlFor="class">
                  <span className='fs-4'>Class</span>

                  <input
                  onChange={(e)=>setFeesData({...feesData,class:e.target.value})}
                 
                  value={feesData.class}

                    className="w-100"
                    type="number"
                    id="class"
                    name="class"
                    placeholder="Enter your class"
                    required
                  />
                </label>
              </fieldset>

              <fieldset>
                <label htmlFor="feetype">
                <span className='fs-4'>Fee Type</span>
                  
                  <select
                  onChange={(e)=>setFeesData({...feesData,feetype:e.target.value})}
                 
                  value={feesData.feetype}
                  
                  
                  id="feetype" name="feetype" className="m-t-xs">
                    <option className="d-none">Select Fees Type</option>
                    <option value="monthly fees">Monthly Fees</option>
                    <option value="yearly fees">Yearly Fees</option>
                  </select>
                </label>
              </fieldset>


                  <fieldset>
                <label htmlFor="amount">
                  <span className='fs-4'>Amount</span>

                  <input
                  onChange={(e)=>setFeesData({...feesData,amount:e.target.value})}
                 
                  value={feesData.amount}

                    className="w-100"
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Enter amount"
                    required
                  />
                </label>
              </fieldset>      
        
              <fieldset>
                <label htmlFor="paymentmethod">
                <span className='fs-4'>Payment Method</span>
                  
                  <select
                  onChange={(e)=>setFeesData({...feesData,paymentmethod:e.target.value})}
                 
                  value={feesData.paymentmethod}
                  
                  
                  id="paymentmethod" name="paymentmethod" className="m-t-xs">
                    <option className="d-none">Select Payment Method</option>
                    <option value="credit card">Credit Card</option>
                    <option value="debit card">Debit Card</option>
                    <option value="net banking">Net Banking</option>
                    <option value="upi">UPI</option>
                    
                  </select>
                </label>
              </fieldset>

              <button 
               id="submitBtn"
               type="submit"
               name="submitBtn"
               className="btn btn-primary w-100 btnsubmit border-0 mt-5"
              
              >Submit</button>
            </form>
          </div>
        </div>
      </main>

    
    </>
  );
}

export default FeeSubmission;
