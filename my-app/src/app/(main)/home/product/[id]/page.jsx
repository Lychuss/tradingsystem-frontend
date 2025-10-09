"use client";
import { useState, useEffect } from "react";
import React from 'react';

export default function Product({ params }) {
    const { id } = React.use(params);
    const [items, setItems] = useState([]);
    const [token, setToken] = useState(null);

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

    return (
        <div className="p-10">
        <h1>Product ID: {items.email}, {items.title}</h1>
        <img src={items.url}></img>
        </div>
    );
}
