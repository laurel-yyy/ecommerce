import React from 'react';
import { FaList } from 'react-icons/fa';

const Header = ({showSidebar, setShowSidebar}) => {
    return (
        <div className='fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40'>
            <div className='ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#b1addf] px-5 transition-all' >
                <div onClick={()=> setShowSidebar(!showSidebar)} className='w-[35px] flex lg:hidden cursor-pointer h-[35px] rounded-sm bg-indigo-500 shadow-lg
                hover:shadow-indigo-500/50 duration-200 justify-center items-center'>
                    <span><FaList/></span>
                </div>
            </div>
        </div>
    );
};

export default Header;