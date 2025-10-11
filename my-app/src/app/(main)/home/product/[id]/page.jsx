"use client";
import { useState, useEffect } from "react";
import React from 'react';
import Button from "@/app/(components)/Button";

export default function Product({ params }) {
    const { id } = React.use(params);
    const [items, setItems] = useState([]);
    const [token, setToken] = useState(null);
    const [description, setDescription] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const email = localStorage.getItem('email') ? JSON.parse(localStorage.getItem('email')) : null;

    useEffect(() => {
        const stored = localStorage.getItem("token");
        if (stored) {
        try {
            const parsed = JSON.parse(stored);
            setToken(parsed.token);
        } catch (e) {
            console.error("Invalid token format:", e);
        }
        }
    }, []);

    useEffect(() => {
        const getProduct = async () => {
        if (!token) return; 
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/yes4trade/products/${id}`, {
                method: "GET",
                headers: {
                Authorization: `Bearer ${token}`,
                },
            }
            );
            const data = await response.json();
            setItems(data);
        } catch (err) {
            console.error("Failed to fetch product:", err);
        }
        };

        getProduct();
    }, [id, token]);

    const method = (method, requirement, price) => {
        if(method === 'Trade'){
            return <>
                <h1 className="mt-3">
                    Trade For:
                </h1>
                <p>{requirement}</p>
            </>
        }
        return  <>
                <h1 className="mt-3">
                    Price:
                </h1>
                <p>₱{price}</p>
            </>
    }

    const sendEmail = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/yes4trade/products/send-email`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: items.email,
                from: email,
                message: description
            })
        });

        if(!response.ok){
            return alert('Not able to send email error!');
        }

        setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);
    }

    return (
        <>
        <section className="flex font-mono">
            <div>
                <img src={items.url} alt={items.title} className="border rounded-lg w-90 h-90 m-10" ></img>
            </div>
            <div className="inline-block">
                <h1 className="mt-10">Product name:</h1>
                <p>{items.title}</p>
                <h1 className="mt-3">Type:</h1>
                <p>{items.types}</p>
                <h1 className="mt-3">College Program:</h1>
                <p>{items.programs}</p>
                <h1 className="mt-3">Methods:</h1>
                <p>{items.methods}</p>
                {method(items.methods, items.requirements, items.price)}
            </div>
            <div className="inline-block ml-25">
                <h1 className="mt-10">Description:</h1>
                <textarea className="w-150 h-53" onChange={(e) => setDescription(e.target.value)} placeholder="Enter your description for trader to see"></textarea>
            </div>
            <div>
                <Button onClick={sendEmail} label="Send Email" className="font-mono absolute right-65 top-110
                    cursor-pointer font-bold mx-auto block border rounded-lg px-7 py-2 text-3xl"/>
            </div>
        </section>
        {showPopup && (
            <div
                className="fixed top-10 right-10 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-2xl font-medium
                            transform transition-all duration-500 ease-out animate-slideDownFadeIn"
            >
                Email sent successfully!
            </div>
        )}
        </>
    );
}