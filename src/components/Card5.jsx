
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {increment,decrement}  from "../redux/reducer/counterslice5"
const Card5 = () => {
    const count=useSelector((state)=>state.counter5.value)
    const count1=useSelector((state)=>state.counter.value)
    const count2=useSelector((state)=>state.counter1.value)
    const count3=useSelector((state)=>state.counter2.value)
    const count4=useSelector((state)=>state.counter3.value)
    const count5=useSelector((state)=>state.counter4.value)
    const add=count1+count2+count3+count4+count5+count
   const dispath=useDispatch()
    return (
      
    <div className='bg-image mb-5 mt-5'>
    <div className='container'>
        <div className='row'>
        <div className='col-12 mt-5 mb-5'>
              <h1 className='heading'></h1>
    
              </div>

            <div className='col-6'>
              { <img src="https://res.cloudinary.com/ddjjx7t57/image/upload/v1708762962/1683286284Rog-phone-6-800x800_one_to_one_a5tusr.webp" className='imgsizing'/> }

            </div>
            <div className='col-3 sele'>
                
            <button  onClick={()=>dispath(increment())}>ADD</button>

            </div>

            <div className='col-3'>
                 <p>${count}</p> 
                <div className='rightsize'>
                <button className='remove'onClick={()=>dispath(decrement())}>Remove</button>
            
                </div>
            </div>
            <div className='col-12'>
                <hr className='mt-5'></hr>

            </div>
            <div className='col-6'>
                <p className='subtitle'>SUNTOTAL;</p>

            </div>
            <div className='col-6'>
                <p className='free'>{count}</p>

            </div>
            <div className='col-6'>
                <p className='subtitle'>SHIPPING:</p>

            </div>
            <div className='col-6'>
                <p className='free'>FREE</p>

            </div>
            <div className='col-12'>
                <hr className='mt-5'></hr>

            </div>

            <div className='col-6'>
                <p  className='free1'>TOTAL:</p>

            </div>
            <div className='col-6'>
               <p className='freetotal'> $  {add}</p> 
                <p className='free3'>Get Daily Cash With Nespola Card</p>

            </div>
             

            

        </div>

    </div>
    
</div>
    );
};

export default Card5;