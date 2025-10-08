"use client";

const token = localStorage.getItem('token').token ? JSON.parse(localStorage.getItem('token')).token : null;

export default function Product({ params }){
    const { id } = params;

    const getProduct = async () =>{

        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/yes4trade/{${id}}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if(!response.ok) return alert('Error not able to get specific product!');

        const data = await response.json();

        console.log(data);
    } 
}