"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BuyProduct(){
    const router = useRouter();

    const [items, setItems] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {
        const stored = localStorage.getItem('token');
        if(stored){
            setToken(stored);
        } else {
            return router.push('/login');
        }
    }, [])

    useEffect(() => {

        if(!token) return;

       const fetchBook = async () => { 
        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/yes4trade/trades/products`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();

        console.log(data.data);

        const refreshToken = response.headers.get('x-refresh-token');

        if(refreshToken){
            localStorage.setItem('token', refreshToken);
        }

        if(!response.ok){
            return alert(data.message);
        }

        setItems(data.data);

    }

    fetchBook();

    }, [token]);

    const button = (method, product_id) => {
    if(method === 1){
      return <button
              onClick={() => router.push(`/home/product/${product_id}`)}
              className="font-bold border border-black rounded-lg px-4 py-2 my-2 bg-green-700 cursor-pointer mx-auto block"
            >
              Trade
            </button>
    }
      return <button
          onClick={() => router.push(`/home/product/${product_id}`)}
          className="font-bold border border-black rounded-lg px-4 py-2 my-2 bg-green-700 cursor-pointer mx-auto block"
        >
          Buy
        </button>
  }

    const methods = (method, type1, type2) => {
        if (method === 1) {
            return (
                <p>
                Requirements: {type1.length > 10 ? `${type1.slice(0, 10)}...` : type1}
                </p>
            );
        }
        return <p>Price: ₱{type2}</p>;
    };



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
                        {button(item.methods, item.product_id)}
                        </div>
                    </section>
                    ))}
                </div>
                </>

    );
}