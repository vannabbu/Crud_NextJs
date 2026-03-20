import React from 'react'
export default async function page() {


    const data = await fetch("https://api.escuelajs.co/api/v1/users");
    const posts = await data.json();

     if (!posts) {
    return <p className="text-center p-10"></p>
  }
  return (
    <div>
        <h2 className='p-10 text-center'>Fect data all item in server side </h2>
        <div className='flex flex-wrap '>
             {posts.map((post)=>(
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
