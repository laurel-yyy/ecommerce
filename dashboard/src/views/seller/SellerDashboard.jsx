import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdCurrencyExchange, MdProductionQuantityLimits } from 'react-icons/md';
import Chart from 'react-apexcharts';
import { Link, data } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const SellerDashboard = () => {

    const state = {
        series: [
            {
                name: 'Orders',
                data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 200, 180]
            },
            {
                name: 'Revenue',
                data: [20, 30, 35, 40, 39, 50, 60, 81, 105, 130, 180, 160]
            },
            {
                name :'Sales',
                data : [10, 20, 25, 30, 29, 40, 50, 71, 95, 120, 170, 150]
            }
        ],
        options: {
            color : ['#181ee8', '#181ee8'],
            plotOptions: {
                radius: 30,
            },
            chart : {
                background: 'transparent',
                foreColor: '#d0d226',
            },
            dataLabels: {
                enabled: false,
            },
            stroke : {
                show: true,
                curve: ['smooth','straight', 'stepline'],
                lineCap: 'butt',
                colors: ['#f0f0f0'],
                width: .5,
                dashArray: 0,
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            legend: {
                position: 'top',
            },
            responsive:[
                {
                    breakpoint: 545,
                    yaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    },
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true,
                            }
                        },
                        chart: {
                            height: 550,
                        }
                    }
                }
            ]

        }

    }

    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a] gap-3'>
                        <h2 className='text-3xl font-bold'>$4343</h2>
                        <span className='text-md font-medium'>Total Sales</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#fde3ff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a] gap-3'>
                        <h2 className='text-3xl font-bold'>50</h2>
                        <span className='text-md font-medium'>Products</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl'>
                        <MdProductionQuantityLimits className='text-[#fde3ff] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#e9feaa] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a] gap-3'>
                        <h2 className='text-3xl font-bold'>12</h2>
                        <span className='text-md font-medium'>Orders</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl'>
                        <FaCartShopping className='text-[#e9feaa] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a] gap-3'>
                        <h2 className='text-3xl font-bold'>1</h2>
                        <span className='text-md font-medium'>Pending Orders</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#4986f7] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#ecebff] shadow-lg'/>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-wrap mt-7'>
                <div className='w-full lg:w-7/12 lg:pr-3'>
                    <div className='w-full bg-[#6a5fdf] p-4 rounded-md'>
                        <Chart options={state.options} series={state.series} type='bar' height={350} />
                    </div>
                </div>
                <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
                    <div className='w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-lg font-semibold text-[#d0d2d6]'>Recent Customer Message</h2>
                            <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                        </div>
                        <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
                            <ol className='relative border-1 border-slate-600 ml-4'>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 justify-center items-center w-10 h-10 p-[6px] bg-[#5f85df] rounded-full shadow-lg z-10'>   
                                        <img className='w-full h-full rounded-full shadow-lg' src='/images/admin.jpg' alt=''/>
                                    </div>
                                    <div className='border-slate-800 p-3 rounded-lg shadow-sm bg-slate-700'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='font-normal text-md'>Seller</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 days ago</time>
                                        </div>
                                        <div className='p-2 bg-slate-600 border border-slate-800 text-xs rounded-lg font-normal'>
                                            How are you?
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 justify-center items-center w-10 h-10 p-[6px] bg-[#5f85df] rounded-full shadow-lg z-10'>   
                                        <img className='w-full h-full rounded-full shadow-lg' src='/images/admin.jpg' alt=''/>
                                    </div>
                                    <div className='border-slate-800 p-3 rounded-lg shadow-sm bg-slate-700'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='font-normal text-md'>Customer</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 days ago</time>
                                        </div>
                                        <div className='p-2 bg-slate-600 border border-slate-800 text-xs rounded-lg font-normal'>
                                            How are you?
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 justify-center items-center w-10 h-10 p-[6px] bg-[#5f85df] rounded-full shadow-lg z-10'>   
                                        <img className='w-full h-full rounded-full shadow-lg' src='/images/admin.jpg' alt=''/>
                                    </div>
                                    <div className='border-slate-800 p-3 rounded-lg shadow-sm bg-slate-700'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='font-normal text-md'>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 days ago</time>
                                        </div>
                                        <div className='p-2 bg-slate-600 border border-slate-800 text-xs rounded-lg font-normal'>
                                            How are you?
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md mt-6 text-[#d0d2d6]'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-semibold text-[#d0d2d6] pb-3'>Recent Orders</h2>
                    <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] border-b uppercase border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>Order ID</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Payment</th>
                                <th scope='col' className='py-3 px-4'>Order Status</th>
                                <th scope='col' className='py-3 px-4'>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((d, i) => 
                                    <tr key={i}> 
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#1234</td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>$123</td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                                        <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><Link>View</Link></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;