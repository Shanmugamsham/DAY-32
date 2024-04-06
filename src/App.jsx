import './App.css'
import React from 'react';
 import { useSelector, useDispatch } from 'react-redux'
 import {increment,decrement}  from "./redux/reducer/counterslice"
const App = () => {
 const count=useSelector((state)=>state.counter.value)
 const dispath=useDispatch()
  return (
   
    <div className='bg-image'>
    <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='heading'>REDUX NEW CARD</h1>

          </div>

            <div className='col-6'>
              { <img src="https://res.cloudinary.com/ddjjx7t57/image/upload/v1709270139/53172881544_89e3385c12_b_annm4x.jpg" className='imgsizing'/> }

            </div>
            <div className='col-3 sele'>
                
            <button  onClick={(e)=>dispath(increment())}>ADD</button>

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
               <p className='free'>{count}</p> 
                <p className='free3'>Get Daily Cash With Nespola Card</p>

            </div>
             

            

        </div>

    </div>
    
</div>

    
  );
};

export default App;