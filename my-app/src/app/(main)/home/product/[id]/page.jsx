"use client";
import { useState } from "react";

const token = localStorage.getItem('token').token ? JSON.parse(localStorage.getItem('token')).token : null;

export default function Product({ params }){
    const { id } = params;
    const {items, setItems} = useState([]);

    const getProduct = async () =>{

        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/yes4trade/products/{${id}}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if(!response.ok) return alert('Error not able to get specific product!');

        const data = await response.json();

        setItems(data);
    } 

    return <>
        <h1>${items}</h1>
    </>
}