"use client";

import { IoLogInOutline } from "react-icons/io5";
import { RiAccountCircle2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Input from "../../(components)/Input.jsx";
import Button from "../../(components)/Button.jsx";
import Link from "next/link";
import { useRouter } from "next/navigation.js";

export default function Login(){
    
    
    const router = useRouter();

    useEffect(() => {
        document.title = 'YES4TRADE-login';
    }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setError] = useState(false);

    const submitAccount = async () => {

        console.log(process.env.NEXT_PUBLIC_API_URL);
        console.log(process.env.NEXT_PUBLIC_LOCAL_API_URL);

        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/yes4trade/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if(!response.ok){
            setError(true);
            setMessage(data.message);
            return;
        }

        localStorage.setItem('token', JSON.stringify(data));
        return router.push("/home");

    }

    const error = (errors) => {
        if(errors){
            return <>
                <p className="text-red-600 font-bold text-sm mt-2">{message}</p>
            </>
        }
    }

    return <>
        <section className="border border-gray-600 shadow-[5px_5px_10px_white] rounded-lg bg-gray-600 w-250 h-150 grid grid-cols-2 gap-1 font-mono">
            <div className="flex flex-col justify-center content-center items-center">
                <div className="flex flex-row justify-center items-center gap-1 mb-5">
                    <IoLogInOutline />
                    <Link href="/login">
                    <h1 className="text-sm font-bold mr-5 cursor-pointer hover:scale-110">Login</h1>
                    </Link>
                    <RiAccountCircle2Line className="ml-5"/>
                    <Link href="/sign-up">
                    <h1 className="text-sm font-bold cursor-pointer hover:scale-110">Sign Up</h1>
                    </Link>
                </div>
                <h1 className="text-3xl">Welcome!</h1>
                <p className="text-sm">Please enter your details to login</p>
                <div className="self-start ml-15 mt-5 flex flex-col text-sm">
                    <Input label="Enter your Email: " onChange={(e) => setUsername(e.target.value)} titleClassName="text-sm" inputClassName="outline-none border-b rounded-sm py-1 px-2 w-90 text-xs mt-2"
                    type="email" placeholder="Enter you SLSU email" />
                </div>
                <div className="self-start ml-15 mt-5 flex flex-col text-sm">
                    <Input titleClassName="text-sm" inputClassName="border-b outline-none rounded-sm py-1 px-2 w-90 text-xs mt-2" type="password" placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)} label="Enter your Password: "/>
                    {error(errors)}
                </div>
                <div className="self-start ml-15 mt-3 flex flex-col text-sm">
                    <Button onClick={submitAccount} className="border cursor-pointer hover:scale-110 bg-gray-800 border-gray-800 shadow-[3px_3px_7px_white] rounded-lg p-2 w-90" type="submit" label="Login" />
                </div>
                <Link href="/forgot-password">
                <p className="text-sm mt-10 cursor-pointer hover:border-b">Forgot password? </p>
                </Link>
            </div>
            <img className="w-full h-full rounded-lg brightness-75" src='https://res.cloudinary.com/dkacxbbwh/image/upload/v1758947795/slsu_lpnqvl.jpg'></img>
        </section>
    </>
}