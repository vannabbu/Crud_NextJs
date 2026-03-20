'use client'
import { use, useEffect, useState } from 'react';

export default function Page({ params }) {
  const { id } = use(params);

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

   if (!user) {
    return <p className="text-center p-10"></p>;
  }


  return (
    <div>
      <h2 className='p-10 text-center'>Fect data by id  item in clent side  </h2>
        <div className='flex flex-wrap '>
                <div key={user.id} className="max-w-sm w-[200px] h-[200px] bg-gray-700 rounded-lg shadow-md overflow-hidden p-10 m-10">
                    <div className='flex justify-center'>
                        <img src={user.avatar} alt="User Avatar" width={50}  height={50} className='rounded-[50%]'
                    />
                    </div>
                    <div className='text-center'>{user.name}</div>
                    <div className='text-center'>{user.email}</div>
            </div>
        </div> 
    </div>
  );
}