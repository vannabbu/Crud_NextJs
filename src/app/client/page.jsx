'use client'
import  { useEffect, useState } from 'react'

export default function Page() {
    const [data , setData] = useState([]);
    
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/users")
        .then((respson)=>respson.json())
        .then((data)=>{
            setData(data);
        })
    },[]);

    if (!data) {
    return <p className="text-center p-10"></p>;
  }
  return (
     <div>
        <h2 className='p-10 text-center'>Fect data all item in clent side  </h2>
        <div className='flex flex-wrap '>
             {data.map((post)=>(
                <div key={post.id} className="max-w-sm w-[200px] h-[200px] bg-gray-700 rounded-lg shadow-md overflow-hidden p-10 m-10">
                    <div className='flex justify-center'>
                        <img src={post.avatar} alt="User Avatar" width={50}  height={50} className='rounded-[50%]'
                    />
                    </div>
                    <div className='text-center'>{post.name}</div>
                    <div className='text-center'>{post.email}</div>
                </div>
            ))}
        </div>    
    </div>
  )
}
