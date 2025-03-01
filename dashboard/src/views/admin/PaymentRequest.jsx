import React, { forwardRef } from 'react';
import { FixedSizeList as List } from 'react-window';

function handleOnWheel ({deltaY}) {
    console.log('handelOnWheel', deltaY);
}

const outerElementType = forwardRef((props, ref)=> (<div ref={ref} onWheel={handleOnWheel} {...props}>
    </div>));

const PaymentRequest = () => {

    const array = [1,2,3,4,5,6,7,8,9,10]

    const Row = ({index, style})=> {
        return (
            <div style={style} className='flex text-sm text-white font-medium'>
                <div className='w-[25%] p-2 whitespace-nowrap'>{index + 1}</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>$3232</div>
                <div className='w-[25%] p-2 whitespace-nowrap'><span className='py-[1px] px-[5px] bg-slate-300 text-blue-500 rounded-md text-sm' >Pending</span></div>
                <div className='w-[25%] p-2 whitespace-nowrap'>24, Dec, 2023</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>
                    <button className='shadow-lg bg-indigo-300 hover:shadow-indigo-500/50 px-3 py-[2px] rounded-md cursor-pointer text-white'>Confirm</button>
                </div>

            </div>
        )
    }

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full bg-[#6a5fdf] p-4 rounded-md'>
                <h2 className='text-xl font-medium pb-5 text-[#d0d2d6]'>Withdraw Request</h2>
                <div className='w-full'>
                    <div className='w-full overflow-x-auto'>
                        <div className='flex bg-[#a7a3de] uppercase text-xs min-w-[340px] font-bold rounded-md'>
                            <div className='w-[25%] p-2'>No</div>
                            <div className='w-[25%] p-2'>Amount</div>
                            <div className='w-[25%] p-2'>Status</div>
                            <div className='w-[25%] p-2'>Date</div>
                            <div className='w-[25%] p-2'>Action</div>
                        </div>

                        {
                            <List style={{minWidth: '340px'}} 
                            className='List' 
                            height={350} 
                            itemCount={10} 
                            itemSize={35} width='100%' 
                            outerElementType={outerElementType}>
                                {Row}
                            </List>

                        }

                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default PaymentRequest;