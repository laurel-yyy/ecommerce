import React from 'react';
import { BsArrowDownSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';


const Orders = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [searchValue, setSearchValue] = React.useState('');
    const [parPage, setParpage] = React.useState(5);
    const [show, setShow] = React.useState(false);

    return (
        <div className='px-2 lg:px-7 py-5 '>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex justify-between items-center'>
                    <select onChange={(e) => setParpage(e.target.value)}
                    className='px-4 py-2 hover:border-indigo-500 outline-none border border-slate-700 rounded-md text-[#d0d2d6] rounded-md bg-[#6a5fdf]'>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                    </select>
                    <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'
                    type='text' placeholder='Search' />
                </div>

                <div className='relative mt-5 overflow-x-auto'>
                    <div className='w-full text-sm text-left text-[#d0d2d6]'>
                        <div className='text-[#d0d2d6] text-sm border-slate-700 border-b uppercase'>
                            <div className='flex justify-between items-center'>
                                <div className='py-3 w-[25%] font-bold'>Order ID</div>
                                <div className='py-3 w-[13%] font-bold'>Price</div>
                                <div className='py-3 w-[18%] font-bold'>Payment Status</div>
                                <div className='py-3 w-[18%] font-bold'>Order Status</div>
                                <div className='py-3 w-[18%] font-bold'>Action</div>
                                <div className='py-3 w-[8%] font-bold'> <BsArrowDownSquare /> </div>
                            </div>
                        </div>

                        <div className='text-[#d0d2d6] '>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap'>#030811</div>
                                <div className='py-3 w-[13%] font-medium'>$123</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'><Link to='/admin/dashboard/details/3'>Action</Link></div>
                                <div onClick={() => setShow(!show)}
                                    className='py-3 w-[8%] font-medium'> <BsArrowDownSquare /> </div>
                            </div>
                        </div>

                        <div className={show ? 'block border-b border-slate-700 bg-[#8288ed]' : 'hidden'}>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3'>#030121</div>
                                <div className='py-3 w-[13%] font-medium'>$291</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'></div>
                                <div className='py-3 w-[8%] font-medium'> </div>
                            </div>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3'>#030121</div>
                                <div className='py-3 w-[13%] font-medium'>$291</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'></div>
                                <div className='py-3 w-[8%] font-medium'> </div>
                            </div>
                        </div>

                        <div className='text-[#d0d2d6] '>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap'>#030811</div>
                                <div className='py-3 w-[13%] font-medium'>$123</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'><Link>Action</Link></div>
                                <div onClick={() => setShow(!show)}
                                    className='py-3 w-[8%] font-medium'> <BsArrowDownSquare /> </div>
                            </div>
                        </div>

                        <div className={show ? 'block border-b border-slate-700 bg-[#8288ed]' : 'hidden'}>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3'>#030121</div>
                                <div className='py-3 w-[13%] font-medium'>$291</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'></div>
                                <div className='py-3 w-[8%] font-medium'> </div>
                            </div>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3'>#030121</div>
                                <div className='py-3 w-[13%] font-medium'>$291</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'></div>
                                <div className='py-3 w-[8%] font-medium'> </div>
                            </div>
                        </div>

                        <div className='text-[#d0d2d6] '>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap'>#030811</div>
                                <div className='py-3 w-[13%] font-medium'>$123</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'><Link>Action</Link></div>
                                <div onClick={() => setShow(!show)}
                                    className='py-3 w-[8%] font-medium'> <BsArrowDownSquare /> </div>
                            </div>
                        </div>

                        <div className={show ? 'block border-b border-slate-700 bg-[#8288ed]' : 'hidden'}>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3'>#030121</div>
                                <div className='py-3 w-[13%] font-medium'>$291</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'></div>
                                <div className='py-3 w-[8%] font-medium'> </div>
                            </div>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3'>#030121</div>
                                <div className='py-3 w-[13%] font-medium'>$291</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'></div>
                                <div className='py-3 w-[8%] font-medium'> </div>
                            </div>
                        </div>

                        <div className='text-[#d0d2d6] '>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap'>#030811</div>
                                <div className='py-3 w-[13%] font-medium'>$123</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'><Link>Action</Link></div>
                                <div onClick={() => setShow(!show)}
                                    className='py-3 w-[8%] font-medium'> <BsArrowDownSquare /> </div>
                            </div>
                        </div>

                        <div className={show ? 'block border-b border-slate-700 bg-[#8288ed]' : 'hidden'}>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3'>#030121</div>
                                <div className='py-3 w-[13%] font-medium'>$291</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'></div>
                                <div className='py-3 w-[8%] font-medium'> </div>
                            </div>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3'>#030121</div>
                                <div className='py-3 w-[13%] font-medium'>$291</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'>Pending</div>
                                <div className='py-3 w-[18%] font-medium'></div>
                                <div className='py-3 w-[8%] font-medium'> </div>
                            </div>
                        </div>

                    </div>


                </div>

            <div className='mt-4 w-full flex justify-end'>
                <Pagination 
                    pageNumber={currentPage}
                    setPageNumber={setCurrentPage}
                    totalItem={50}
                    parPage={parPage}
                    showItem={3}
                />
            </div>
           

            </div>
        </div>
    );
};

export default Orders;