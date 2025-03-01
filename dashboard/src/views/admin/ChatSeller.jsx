import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaList } from 'react-icons/fa';

const ChatSeller = () => {

    const [show, setShow] = useState(false);
    const sellerId = 123;
    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md h-[calc(100vh-140px)]'>
                <div className='w-full flex h-full relative'>
                    <div className={`w-[280px] h-full absolute z-10 ${show ? '-left-[16px]' : '-left-[336px]'}
                    md:left-0 md:relative transition-all`}>
                        <div className='w-full h-[calc(100vh-177px)] md:bg-transparent bg-indigo-400 rounded-md overflow-y-auto'>
                            <div className='flex text-xl items-center justify-between p-4 md:p-0 md:px-3 md:pb-3 text-white'>
                                <h2>Seller</h2>
                                <span onClick={()=>setShow(false)} className='block md:hidden cursor-pointer'><IoMdClose /></span>
                            </div>
                            <div className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 cursor-pointer bg-indigo-700 rounded-md`}>
                                <div className='relative'>
                                    <img src='/images/admin.jpg' className='w-[38px] h-[38px] border-white border-2 p-[2px] max-w-[38px] rounded-full'></img>
                                    <span className='absolute -right-0 -bottom-0 w-[12px] h-[12px] bg-green-500 rounded-full'></span> 
                                </div>
                                <div className='justify-center flex flex-col items-start w-full'>
                                    <div className='flex justify-between items-center w-full'>
                                        <h2 className='text-base font-semibold'>Alice</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 cursor-pointer`}>
                                <div className='relative'>
                                    <img src='/images/admin.jpg' className='w-[38px] h-[38px] border-white border-2 p-[2px] max-w-[38px] rounded-full'></img>
                                    <span className='absolute -right-0 -bottom-0 w-[12px] h-[12px] bg-green-500 rounded-full'></span> 
                                </div>
                                <div className='justify-center flex flex-col items-start w-full'>
                                    <div className='flex justify-between items-center w-full'>
                                        <h2 className='text-base font-semibold'>Bob</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 cursor-pointer`}>
                                <div className='relative'>
                                    <img src='/images/admin.jpg' className='w-[38px] h-[38px] border-white border-2 p-[2px] max-w-[38px] rounded-full'></img>
                                    <span className='absolute -right-0 -bottom-0 w-[12px] h-[12px] bg-green-500 rounded-full'></span> 
                                </div>
                                <div className='justify-center flex flex-col items-start w-full'>
                                    <div className='flex justify-between items-center w-full'>
                                        <h2 className='text-base font-semibold'>David</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                    </div>
                    <div className='w-full md:w-[calc(100%-200px)] md:pl-4'>
                        <div className='flex justify-between items-center '>
                            {
                                sellerId && <div className='flex justify-start items-center gap-3'>
                                    <div className='relative'>
                                        <img src='/images/demo.jpg' className='w-[45px] h-[45px] border-green-500 border-2 p-[2px] max-w-[45px] rounded-full'></img>
                                        <span className='absolute -right-0 -bottom-0 w-[12px] h-[12px] bg-green-500 rounded-full'></span> 
                                    </div>
                                </div>
                            }
                            <div onClick={()=>setShow(!show)}
                             className='w-[35px] flex md:hidden h-[35px] rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center text-white'>
                    
                                <span><FaList /></span>
                            </div>
                        </div>
                        <div className='py-4'>
                            <div className='bg-slate-700 h-[calc(100vh-290px)] p-3 rounded-md overflow-y-auto'>
                                <div className='w-full flex justify-start items-center'>
                                    <div className='flex justify-start gap-2 items-start md:px-3 py-2 max-w-full lg:max-w[85%]'>
                                        <div>
                                            <img className='w-[38px] h-[38px] rounded-full p-[2px] border-2 max-w-[38px] border-white' src='/images/demo.jpg'/>
                                        </div>
                                        <div className='flex justtify-center items-start flex-col  w-full bg-blue-500 rounded-md py-1 px-3 text-white'>
                                            <span>How are you?</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full flex justify-end items-center'>
                                    <div className='flex justify-start gap-2 items-start md:px-3 py-2 max-w-full lg:max-w[85%]'>
                                        
                                        <div className='flex justtify-center items-start flex-col  w-full bg-red-500 rounded-md py-1 px-3 text-white'>
                                            <span>How are you?</span>
                                        </div>
                                        <div>
                                            <img className='w-[38px] h-[38px] rounded-full p-[2px] border-2 max-w-[38px] border-white' src='/images/demo.jpg'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full flex justify-start items-center'>
                                    <div className='flex justify-start gap-2 items-start md:px-3 py-2 max-w-full lg:max-w[85%]'>
                                        <div>
                                            <img className='w-[38px] h-[38px] rounded-full p-[2px] border-2 max-w-[38px] border-white' src='/images/demo.jpg'/>
                                        </div>
                                        <div className='flex justtify-center items-start flex-col  w-full bg-blue-500 rounded-md py-1 px-3 text-white'>
                                            <span>I need some help</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <form className='flex gap-3'>
                            <input className='w-full flex justify-between border px-2 items-center py-[5px]
                             border-slate-800 rounded-md outline-none bg-transparent text-[#d0d2d6] outline-none focus:border-blue-200'
                            type='text' placeholder='Type your message here' />
                            <button className='bg-blue-400 shadow-lg hover:shadow-blue-500/50 text-white font-semibold rounded-md px-7 py-2'>
                                Send
                            </button>
            

                        </form>

                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default ChatSeller;