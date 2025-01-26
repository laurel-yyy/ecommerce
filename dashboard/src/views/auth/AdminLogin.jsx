import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer';

const AdminLogin = () => {

    const dispatch = useDispatch();

    const [state,setState] = useState({
        email: '',
        password: '',
    });

    const inputHandler=(e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    };

    const submit=(e) => {
        e.preventDefault();
        dispatch(admin_login(state));
    }
    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center'>
            <div className='w-[350px] text-[#ffffff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <div className='h-[70px] flex justify-center items-center mb-3'>
                        <div className='w-[180px] h-[50px]'>
                            <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="logo" />
                        </div>
                    </div>

                    <form onSubmit={submit}>

                        <div className="flex flex-col w-full mb-3 gap-1">
                            <label htmlFor='email' >Email</label>
                            <input onChange={inputHandler} value={state.email} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' 
                            type='email' name='email' id='email' placeholder='email' required/>
                        </div>

                        <div className="flex flex-col w-full mb-3 gap-1">
                            <label htmlFor='password' >Password</label>
                            <input onChange={inputHandler} value={state.password} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' 
                            type='password' name='password' id='password' placeholder='password' required/>
                        </div>

                        <button className='bg-slate-600 w-full justify-center hover:shadow-blue-300/
                        hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Login</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;