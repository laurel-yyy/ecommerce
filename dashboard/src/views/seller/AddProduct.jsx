import React, { useState } from 'react';
import { IoMdImage, IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const AddProduct = () => {

    const categorys = [
        {
            id: 1,
            name: 'Sports'
        },
        {
            id: 2,
            name: 'TShirt'
        },
        {
            id: 3,
            name: 'Mobile'
        },
        {
            id: 4,
            name: 'Computer'
        },
        {
            id: 5,
            name: 'Watch'
        },
        {
            id: 6,
            name: 'Pant'
        },
    ]

    const [state, setState] = useState({
        name: '',
        description: '',
        discount: '',
        price: '',
        brand: '',
        stock: '',
    })

    const inputHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const [cateShow, setCateShow] = useState(false);
    const [category, setCategory] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [allCategory, setAllCategory] = useState(categorys);

    const categorySearch = (e) => {
        setSearchValue(e.target.value);
        const search = categorys.filter(c => c.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setAllCategory(search);
    }
    
    const [images, setImages] = useState([]);
    const [imageShow, setImageShow] = useState([]);

    const imageHandler = (e) => {
        const files = e.target.files 
        const length = files.length;
        if (length > 0) {
            setImages([...images, ...files])
            let imageUrl = []
            for (let i = 0; i < length; i++) {
                imageUrl.push({url: URL.createObjectURL(files[i])}) 
            }
            setImageShow([...imageShow, ...imageUrl])
        }
    }

    const changeImage = (img, index) => {
        if (img) {
            let tempUrl = imageShow
            let tempImages = images

            tempImages[index] = img
            tempUrl[index] = {url : URL.createObjectURL(img)}
            setImageShow([...tempUrl])
            setImages([...tempImages])

        }
    }

    const removeImage = (i) => {
        const filterImage = images.filter((img,index) => index !== i)
        const filterImageUrl = imageShow.filter((img, index) => index !== i )

        setImages(filterImage)
        setImageShow(filterImageUrl)
    }

    return (
        <div className='px-2 lg:p-7 pt-5'>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h1 className='text-[#d0d2d6] font-semibold text-lg'>
                        Add Product
                    </h1>
                    <Link to='/seller/dashboard/products' className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg
                     text-white rounded-sm px-7 py-2 my-2'>All Product</Link> 
                </div>
                <div>
                    <form>
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='name'>Product Name</label>
                                <input onChange={inputHandler} value={state.name} type='text' id='name' name='name' className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' placeholder='Product Name'></input>
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='brand'>Brand Name</label>
                                <input onChange={inputHandler} value={state.brand} type='text' id='brand' name='brand' className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' placeholder='Brand Name'></input>
                            </div>
                        </div>
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1 relative'>
                                <label htmlFor='category'>Category</label>
                                <input readOnly onClick={()=>setCateShow(!cateShow)} onChange={inputHandler} value={category}
                                type='text' id='category' name='category' className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' placeholder='Select Category'></input>
                                <div className={`absolute top-[101%] bg-[#475569] transition-all ${cateShow ? 'scale-100':'scale-0'} w-full rounded-md shadow-md`}>
                                    <div className='w-full px-4 py-2 fixed'>
                                        <input onChange={categorySearch} className='w-full px-3 py-1 focus:border-indigo-200 outline-none bg-transparent border border-slate-700 
                                        overflow-hidden rounded-md' type='text' placeholder='Search'/>
                                    </div>
                                    <div className='pt-14'>
                                        <div className='flex flex-col justify-start items-start h-[200px] overflow-x-scrool '>
                                            {
                                                allCategory.map((c,i) => 
                                                <span className={`w-full px-3 py-1 hover:bg-slate-400 cursor-pointer ${category === c.name && 'bg-slate-400'}`} onClick={() =>{
                                                    setCateShow(false)
                                                    setCategory(c.name)
                                                    setSearchValue('')
                                                    setAllCategory(categorys)
                                                }}>{c.name}</span>)
                                            }

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='stock'>Product Stock</label>
                                <input onChange={inputHandler} value={state.stock} type='text' id='stock' name='stock' 
                                className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' placeholder='Stock'></input>
                            </div>
                        </div>
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='price'>Price</label>
                                <input onChange={inputHandler} value={state.price} type='number' id='price' name='price' className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' placeholder='Price'></input>
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='discount'>Discount</label>
                                <input onChange={inputHandler} value={state.discount} type='number' id='discount' name='discount' className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' placeholder='Discount by %'></input>
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-5'>
                                <label className='text-[#d0d2d6]' htmlFor='description'>Description</label>
                                <textarea cols={10} rows={5} onChange={inputHandler} value={state.description} id='description' name='description'
                                className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' 
                                placeholder='Description'></textarea>
                        </div>
                        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 
                        sm:gap-4 md:gap-4 w-full text-[#d0d2d6] mb-4 mt-3'>
                            {
                                imageShow.map((img,i) => <div className='h-[180px] relative'>
                                    <label htmlFor={i}>
                                        <img className='w-full h-full rounded-sm' src={img.url} alt="" />
                                    </label>
                                    <input onChange={(e)=> changeImage(e.target.files[0],i) } type="file" id={i} className='hidden'/>
                                    <span onClick={()=>removeImage(i)} className='p-2 z-10 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-slate-400/50 text-white absolute top-1 right-1 rounded-full'><IoMdCloseCircle /></span>
                                </div> )
                            }
                            <label htmlFor='image' className='flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed border-white
                            hover:border-red-500 rounded-md w-full '>
                                <span><IoMdImage /></span>
                                <span>Select Image</span>
                            </label>
                            <input multiple className='hidden' onChange={imageHandler} type='file' name='image' id='image'></input>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default AddProduct;