
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {increment,decrement}  from "../redux/reducer/counterslice3"
const Card3 = () => {
    const count=useSelector((state)=>state.counter3.value)
   const dispath=useDispatch()
    return (
      
    <div className='bg-image mb-5 mt-5'>
    <div className='container'>
        <div className='row'>
        <div className='col-12 mt-5 mb-5'>
              <h1 className='heading'></h1>
    
              </div>

            <div className='col-6'>
              { <img src="https://res.cloudinary.com/ddjjx7t57/image/upload/v1708763398/iphone_15_pro_max_black_titanium_pdp_image_position-1__wwen_mjlv5l.webp" className='imgsizing'/> }

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

           
             

            

        </div>

    </div>
    
</div>
    );
};

export default Card3;