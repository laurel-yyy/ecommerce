import React from 'react';

const SellerDetails = () => {
    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='text-[20px] font-semibold mb-3 '>
                <h1>Seller Details</h1>
            </div>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='w-full flex flex-wrap text-[#d0d2d6]'>
                    <div className='w-3/12 flex justify-center items-center py-3'>
                        <img src='/images/demo.jpg' className='w-full h-[230px]' />
                    </div>
                    <div className='w-4/12'>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                                <h2>Basic Info</h2>
                            </div>
                            <div className='flex flex-col jubtify-between text-sm gap-2 font-semibold p-4 bg-indigo-200 rounded-md'>
                                <div className='flex gap-2 text-black font-bold'>
                                    <span>Name:</span>
                                    <span>Seller Name</span>
                                </div>
                                <div className='flex gap-2 text-black font-bold'>
                                    <span>Email:</span>
                                    <span>seller@123.com</span>
                                </div>
                                <div className='flex gap-2 text-black font-bold'>
                                    <span>Role:</span>
                                    <span>Seller</span>
                                </div>
                                <div className='flex gap-2 text-black font-bold'>
                                    <span>Status:</span>
                                    <span>Active</span>
                                </div>
                                <div className='flex gap-2 text-black font-bold'>
                                    <span>Payment Status:</span>
                                    <span>Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-4/12'>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                                <h2>Address</h2>
                            </div>
                            <div className='flex flex-col jubtify-between text-sm gap-2 font-semibold p-4 bg-indigo-200 rounded-md'>
                                <div className='flex gap-2 text-black font-bold'>
                                    <span>Shop Name:</span>
                                    <span>Eazy Shop</span>
                                </div>
                                <div className='flex gap-2 text-black font-bold'>
                                    <span>Division</span>
                                    <span>division</span>
                                </div>
                                <div className='flex gap-2 text-black font-bold'>
                                    <span>District</span>
                                    <span>district</span>
                                </div>
                                <div className='flex gap-2 text-black font-bold'>
                                    <span>State:</span>
                                    <span>state</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <form>
                        <div className='flex py-3 gap-4'>
                            <select className='px-4 py-2 hover:border-indigo-200 outline-none border border-slate-700 rounded-md text-[#d0d2d6] rounded-md bg-[#6a5fdf]'>
                                <option value=''>---Select Status---</option>
                                <option value='active'>Active</option>
                                <option value='deactive'>Deactive</option>
                            </select>
                            <div>
                                <button className='bg-red-500 w-full hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 '>Add Category</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SellerDetails;