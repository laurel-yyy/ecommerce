import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { FaEdit, FaEye, FaImage, FaTrash } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';

const SellerRequest = () => {

    const [currentPage, setCurrentPage] = React.useState(1);
    const [parPage, setParpage] = React.useState(5);
    const [show, setShow] = React.useState(false);

    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='text-[20px] font-semibold mb-3 '>
                <h1>Deactive Sellers</h1>
            </div>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex justify-between items-center'>
                    <select onChange={(e) => setParpage(e.target.value)}
                    className='px-4 py-2 hover:border-indigo-200 outline-none border border-slate-700 rounded-md text-[#d0d2d6] rounded-md bg-[#6a5fdf]'>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                    </select>
                    <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'
                    type='text' placeholder='Search' />
                </div>
                <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-left text-[#d0d2d6]'>
                                <thead className='text-sm text-[#d0d2d6] border-b uppercase border-slate-700'>
                                    <tr>
                                        <th scope='col' className='py-3 px-4'>No</th>
                                        <th scope='col' className='py-3 px-4'>Name</th>
                                        <th scope='col' className='py-3 px-4'>Email</th>
                                        <th scope='col' className='py-3 px-4'>Payment Status</th>
                                        <th scope='col' className='py-3 px-4'>Status</th>
                                        <th scope='col' className='py-3 px-4'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [1, 2, 3, 4, 5].map((d, i) => 
                                            <tr key={i} className='border-b border-slate-700'> 
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{d}</td>
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>My name</td>
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>admin@123.com</td>
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Inactive</span></td>
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Pending</span></td>
                                                <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                                    <div className='flex justify-start items-center gap-4'>
                                                        <Link to='/admin/dashboard/seller/details/2' className='p-[6px] bg-green-500 text-white rounded hover:shadow-lg hover:shadow-green-500/50'>
                                                            <FaEye/>
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
    );
};

export default SellerRequest;