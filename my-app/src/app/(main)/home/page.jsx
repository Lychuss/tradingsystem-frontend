"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation.js';

export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    document.title = 'YES4TRADE-Home';

    const storedToken = localStorage.getItem('token');
    console.log('Stored token:', storedToken);

    if (!storedToken) {
      router.push('/login');
      return;
    }

    setToken(storedToken);
  }, [router]);

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


  useEffect(() => {
    if (!token) return; 

    const fetchBook = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/yes4trade/products`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: 'include',
          }
        );

        const data = await response.json();

        if (!response.ok) {
          router.push('/login');
          return;
        }

        setItems(data);
      } catch (error) {
        console.error('Fetch error:', error);
        router.push('/login');
      }
    };

    fetchBook();
  }, [token, router]);

  return (
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
  );
}
