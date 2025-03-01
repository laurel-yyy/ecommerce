import React from 'react';

const OrderDetails = () => {
    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex justify-between items-center p-4'>
                    <h2 className='text-[#d0d2d6] text-xl font-semibold'>Order Details</h2>
                    <select className='px-4 py-2 hover:border-indigo-200 outline-none border bg-slate-600 border-slate-800 rounded-md text-[#d0d2d6] cursor-pointer'>
                        <option value="">Pending</option>
                        <option value="">Processing</option>
                        <option value="">Warehouse</option>
                        <option value="">Placed</option>
                        <option value="">Cancel</option>
                    </select>
                </div>
                <div className='p-4 '>
                    <div className='flex gap-2 text-lg text-[#d0d2d6] '>
                        <h2>#3434</h2>
                        <span> 3, Jan, 2024</span>
                    </div>
                    <div className='flex flex-wrap '>
                        <div className='w-[30%]'>
                            <div className='pr-3 text-[#d0d2d6] text-lg'>
                                <div className='flex gap-1 flex-col'>
                                    <h2 className='font-semibold'>Delivered to: Eve</h2>
                                    <p><span className='text-sm'>Cecilia Chapman 
                                        711-2880 Nulla St.
                                        Mankato Mississippi</span></p>
                                </div>
                                <div className='flex justify-start items-center gap-3'>
                                    <h2 >Payment Status:</h2>
                                    <span className='text-base'>Paid</span>
                                </div>
                                <div className='flex justify-start items-center gap-3'>
                                    <h2>Price</h2>
                                    <span className='text-base'>$234</span>
                                </div>

                                <div className='mt-4 flex flex-col gap-4 bg-indigo-400 rounded-lg p-2'>
                                    <div className='text-[#d0d2d6]'>
                                        <div className='flex gap-3 text-md'>
                                            <img className='w-[45px] h-[45px]' src="/images/category/1.jpg" alt="" />
                                            <div>
                                                <h2>Sneakers</h2>
                                                <span>Brand : Eazy</span>
                                                <span>Quantity: 2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-[#d0d2d6]'>
                                        <div className='flex gap-3 text-md'>
                                            <img className='w-[45px] h-[45px]' src="/images/category/1.jpg" alt="" />
                                            <div>
                                                <h2>Sneakers</h2>
                                                <span>Brand : Eazy</span>
                                                <span>Quantity: 2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-[#d0d2d6]'>
                                        <div className='flex gap-3 text-md'>
                                            <img className='w-[45px] h-[45px]' src="/images/category/1.jpg" alt="" />
                                            <div>
                                                <h2>Sneakers</h2>
                                                <span>Brand : Eazy</span>
                                                <span>Quantity: 2</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='w-[70%]'>
                            <div className='pl-3 '>
                                <div className='flex gap-3 mt-4 flex-col bg-indigo-400 rounded-lg p-4'>
                                    <div className=' text-[#d0d2d6]'>
                                        <div className='flex justify-start items-center gap-3'>
                                            <h2>Seller 1 Order:</h2>
                                            <span> Pending</span>
                                        </div>
                                        <div className='flex gap-3 text-md mt-2'>
                                            <img className='w-[45px] h-[45px]' src="/images/category/1.jpg" alt="" />
                                            <div>
                                                <h2>Sneakers</h2>
                                                <span>Brand : Eazy</span>
                                                <span>Quantity: 2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' text-[#d0d2d6] mt-2'>
                                        <div className='flex justify-start items-center gap-3'>
                                            <h2>Seller 1 Order:</h2>
                                            <span> Pending</span>
                                        </div>
                                        <div className='flex gap-3 text-md mt-2'>
                                            <img className='w-[45px] h-[45px]' src="/images/category/1.jpg" alt="" />
                                            <div>
                                                <h2>Sneakers</h2>
                                                <span>Brand : Eazy</span>
                                                <span>Quantity: 2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' text-[#d0d2d6] mt-2'>
                                        <div className='flex justify-start items-center gap-3'>
                                            <h2>Seller 1 Order:</h2>
                                            <span> Pending</span>
                                        </div>
                                        <div className='flex gap-3 text-md mt-2'>
                                            <img className='w-[45px] h-[45px]' src="/images/category/1.jpg" alt="" />
                                            <div>
                                                <h2>Sneakers</h2>
                                                <span>Brand : Eazy</span>
                                                <span>Quantity: 2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderDetails;