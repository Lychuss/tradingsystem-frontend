"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation.js';


export default function Home(){
  const router = useRouter();

  useEffect(() => {

    document.title = 'YES4TRADE-Home';

    const token = JSON.parse(localStorage.getItem('token'));

    console.log(token);

    if(!token){
      router.push('/login');
    }
  }, [router])

    const [items, setItems] = useState([]);

    const methods = (method, type1, type2) => {
        if(method === 1 ){
            if(type1.length > 10) {
                return <p>Requirements: {type1.slice(0, 10)}...</p>
            } 
            return <p>Requirements: {type1}</p>
        }
        return <p>Price: ₱{type2}</p>;
    }

    useEffect(() => {

        document.title = 'YES4TRADE-Home';

        const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).token : null;

        const fetchBook = async () => {

            const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/yes4trade/products`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                credentials: 'include'
        });

            if(!response.ok){
                return router.push('/login');
            }

            const data = await response.json();

            console.log(data);

            setItems(data);
    }

        fetchBook();

    }, []);

    console.log(items);

     return (
                <>
                <div className="flex flex-wrap">
                    {items.map((item) => (
                    <section
                        key={item.product_id}
                        className="flex flex-col p-2 my-6 space-x-10 w-83 items-center"
                    >
                        <div>
                        <img
                            className="w-70 h-70 rounded-3xl object-cover"
                            src={item.url}
                            alt={item.title}
                        />
                        <div className="font-mono m-2 flex inline-block">
                            <h1 className="font-bold">{item.title}</h1>
                            {methods(item.methods, item.requirements, item.price)}
                        </div>
                            <button onClick={() => router.push(`/home/product/${item.product_id}`)}
                            className="font-bold border border-black rounded-lg px-4 py-2 my-2 bg-green-700 
                            cursor-pointer mx-auto block"
                            >
                            Trade
                            </button>
                        </div>
                    </section>
                    ))}
                </div>
                </>

    );
}
