import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { FaE } from 'react-icons/fa6';
import { FaEdit, FaImage, FaTrash } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';

const Category = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [parPage, setParpage] = React.useState(5);
    const [show, setShow] = React.useState(false);

    return (
        <div className='p-2 lg:p-7 pt-5'>

            <div className='flex lg:hidden justify-between items-center mb-5 p-4 bg-[#6a5fdf] rounded-md'>
                <h1 className='text-[#d0d2d6] font-semibold text-lg'>
                    Category
                </h1>
                <button onClick={()=>{setShow(true)}} className='bg-red-500 shadow-lg hover:shadow-red-500/40 px-4 py-2 cursor-pointer rounded-md text-sm text-white'>Add</button>

            </div>


            <div className='flex flex-wrap w-full'>
                <div className='w-full lg:w-7/12'>
                    <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                        <div className='flex justify-between items-center'>
                            <select onChange={(e) => setParpage(e.target.value)}
                            className='px-4 py-2 hover:border-indigo-500 outline-none border border-slate-700 rounded-md text-[#d0d2d6] rounded-md bg-[#6a5fdf]'>
                                <option value='5'>5</option>
                                <option value='10'>10</option>
                                <option value='20'>20</option>
                            </select>
                            <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'
                            type='text' placeholder='Search' />
                        </div>
                        <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-left text-[#d0d2d6]'>
                                <thead className='text-sm text-[#d0d2d6] border-b uppercase border-slate-700'>
                                    <tr>
                                        <th scope='col' className='py-3 px-4'>No</th>
                                        <th scope='col' className='py-3 px-4'>Image</th>
                                        <th scope='col' className='py-3 px-4'>Name</th>
                                        <th scope='col' className='py-3 px-4'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [1, 2, 3, 4, 5].map((d, i) => 
                                            <tr key={i}> 
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{d}</td>
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                                    <img src={`/images/category/${d}.jpg`} className='w-[45px] h-[45px] rounded-md' />
                                                </td>
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>Pending</td>
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                                    <div className='flex justify-start items-center gap-4'>
                                                        <Link className='p-[6px] bg-yellow-300 rounded hover:shadow-lg hover:shadow-yellow-500/50'>
                                                            <FaEdit/>
                                                         </Link>
                                                         <Link className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'>
                                                            <FaTrash/>
                                                         </Link>
                                                    </div>
                                                </td>
                                            </tr>)
                                    }
                                </tbody>
                            </table>
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

                <div className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed 
                    ${show ? '-right-0' : '-right-[340px]'} z-[9999] top-0 transition-all duration-500`}>
                    <div className='w-full pl-5'>
                        <div className='bg-[#6a5fdf] h-screen lg:rounded-md lg:h-auto px-3 py-2 text-[#d0d2d6] '>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-[#d0d2d6] font-semibold text-xl mb-4 text-center w-full '>Add Category</h1>
                                <div onClick={()=>setShow(false)} className='block lg:hidden cursor-pointer'>
                                    <IoMdCloseCircle className='h-[20px] w-[20px]'/>
                                </div>
                            </div> 
                            <form>
                                <div className='flex flex-col w-full gap-1 mb-3'>
                                    <label htmlFor='name' className='text-[#d0d2d6]'>Category Name</label>
                                    <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type='text' id='name' name='category_name' placeholder='Name'></input>
                                </div>
                                <div>
                                    <label htmlFor='image' className='flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed border-indigo-800 hover:border-indigo-100 w-full'>
                                        <span><FaImage /></span>
                                        <span>Select Image</span>
                                    </label>
                                    <input className='hidden' name='image'></input>
                                    <div>
                                        <button className='bg-red-500 w-full hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2'>Add Category</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;