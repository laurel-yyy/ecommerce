import React, { useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
import { getNav } from '../navigation/index';
import { BiLogOutCircle } from 'react-icons/bi';

const Sidebar = () => {

    const { pathname } = useLocation();


    const [allNavs, setAllNavs] = React.useState([]);
    useEffect(() => {
        const navs = getNav('admin');
        setAllNavs(navs);
    }, []);

    console.log(allNavs);

    return (
        <div>
            <div>

            </div>

            <div className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgba(0,0,0,0.5)] transition-all`}>
                <div className='h-[70px] flex justify-center items-center'>
                    <Link to='/' className='w-[180px] h-[50px]'>
                        <img src="/images/logo.png" alt="logo" className='w-full h-full' />
                    </Link>
                </div>
                <div className='px-[16px]'>
                    <ul>
                        {
                            allNavs.map((n, i)=> <li key={i}>
                                <Link to={n.path} className={`${pathname === n.path ? 'shadow-indigo-500/50 bg-blue-600 text-white duration-500' : 'text-[#030811] font-bold duration-200'}
                                 px-[16px] py-[10px] flex justify-start items-center gap-[10px] rounded-[5px] hover:translate-x-2  mb-1 w-full transition-all`}>
                                    <span>{n.icon}</span>
                                    <span>{n.title}</span>
                                </Link>
                            </li>)
                        }
                        <li>
                            <button className='text-[#030811] font-bold duration-200
                                 px-[16px] py-[10px] flex justify-start items-center gap-[10px] rounded-[5px] hover:translate-x-2  mb-1 w-full transition-all'>
                                    <span>
                                        <BiLogOutCircle />
                                    </span>
                                    <span>Logout</span>
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;