import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook} from 'react-icons/fa';
import {useDispatch, useSelector } from 'react-redux';
import {PropagateLoader} from 'react-spinners';
import { overrideStyle } from '../../utils/utils';
import { seller_register,messageClear } from '../../store/Reducers/authReducer';
import toast from 'react-hot-toast';

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {loader,successMessage,errorMessage} = useSelector(state=>state.auth)

    const [state,setState] = useState({
        name: '',
        email: '',
        password: '',
    });

    const inputHandler=(e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }

    const submit=(e) => {
        e.preventDefault();
        dispatch(seller_register(state))
    }

    useEffect(() => {

        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/')  
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        

    },[successMessage,errorMessage])



    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center'>
            <div className='w-[350px] text-[#ffffff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h2 className='text-xl mb-3 font-bold'>Welcome to Ecommerce</h2>
                    <p className='text-sm mb-3 font-medium'>Please register your account</p>

                    <form onSubmit={submit}>
                        <div className="flex flex-col w-full mb-3 gap-1">
                            <label htmlFor='name' >Name</label>
                            <input onChange={inputHandler} value={state.name} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' 
                            type='text' id='name' name='name' placeholder='name' required/>
                        </div>
                        <div className="flex flex-col w-full mb-3 gap-1">
                            <label htmlFor='email' >Email</label>
                            <input onChange={inputHandler} value={state.email} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' 
                            type='email' id='email' name='email' placeholder='email' required/>
                        </div>
                        <div className="flex flex-col w-full mb-3 gap-1">
                            <label htmlFor='password' >Password</label>
                            <input onChange={inputHandler} value={state.password} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' 
                            type='password' id='password' name='password' placeholder='password' required/>
                        </div>
                        <div className='flex  items-center w-full mb-3 gap-1'>
                            <input type='checkbox' id='checkbox' name='checkbox' 
                            className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500' required/>
                            <label htmlFor='checkbox'>I agree to privary policy</label>
                        </div>

                        <button disabled={loader ? true:false} className='bg-slate-600 w-full justify-center hover:shadow-blue-300/
                        hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
                            {
                                loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle}/> : 'Sign Up'
                            }
                        </button>
                        <div className='flex item-center mb-3 gap-3 justify-center'>
                            <p>Already have an account? <Link className='font-bold' to="/login">Sign In</Link></p>
                        </div>
                        <div className='flex w-full justify-center items-center mb-3'>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                                <div className='w-[10%] flex justify-center items-center'>
                                    <span className='pb-1'>Or</span>
                                </div>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='w-[135px] h-[40px] flex rounded-md bg-orange-500 shadow-lg hover:shadow-orange-900/50 justify-center cursor-pointer items-center overflow-hidden'>
                                <span> <FaGoogle/> </span>
                            </div>
                            <div className='w-[135px] h-[40px] flex rounded-md bg-blue-500 shadow-lg hover:shadow-blue-900/50 justify-center cursor-pointer items-center overflow-hidden'>
                                <span> <FaFacebook/> </span>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;