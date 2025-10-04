"use client";

import { IoLogInOutline } from "react-icons/io5";
import { RiAccountCircle2Line } from "react-icons/ri";
import { useState } from "react";
import Input from "../../(components)/Input.jsx";
import Button from "../../(components)/Button.jsx";
import Link from "next/link";
import { SelectCollege1 } from "@/app/(components)/Select.jsx";
import { useRouter } from "next/navigation.js";

export const metadata = {
    title: 'Sign-Up'
};

export default function SignUp(){
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [studentId, setStudentId] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [college, setCollege] = useState('');

    const signUp = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/yes4trade/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                studentId: studentId,
                firstname: firstname,
                lastname: lastname,
                password: password,
                program: college
            })
        });

        const data = await response.json();

        if(!response.ok){
            return alert(data.message);
        }

        return router.push('/login');

    }
 
        return <>
        <section className="border border-gray-600 shadow-[5px_5px_10px_white] rounded-lg bg-gray-600 w-250 h-200 grid grid-cols-2 gap-1 font-mono">
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
                    <Input label="Enter your Email: " onChange={(e) => setUsername(e.target.value)} titleClassName="text-sm" inputClassName="border-b outline-none rounded-sm py-1 px-2 w-90 text-xs mt-2"
                    type="email" placeholder="Enter you SLSU email" required />
                    <error />
                </div>
                <div className="self-start ml-15 mt-5 flex flex-col text-sm">
                    <Input label="Enter your Student ID: " onChange={(e) => setStudentId(e.target.value)} titleClassName="text-sm" inputClassName="border-b outline-none rounded-sm py-1 px-2 w-90 text-xs mt-2"
                    type="email" placeholder="ex. 24L-00001" required />
                    <error />
                </div>
                <div className="self-start ml-15 mt-5 flex flex-col text-sm">
                    <Input label="Enter your Firstname: " onChange={(e) => setFirstname(e.target.value)} titleClassName="text-sm" inputClassName="border-b outline-none rounded-sm py-1 px-2 w-90 text-xs mt-2"
                    type="text" placeholder="Enter you firstname" required />
                    <error />
                </div>
                <div className="self-start ml-15 mt-5 flex flex-col text-sm">
                    <Input label="Enter your Lastname: " onChange={(e) => setLastname(e.target.value)} titleClassName="text-sm" inputClassName="border-b outline-none rounded-sm py-1 px-2 w-90 text-xs mt-2"
                    type="text" placeholder="Enter you lastname" required />
                    <error />
                </div>
                <div className="self-start ml-15 mt-5 flex flex-col text-sm">
                    <Input titleClassName="text-sm" inputClassName="border-b outline-none rounded-sm py-1 px-2 w-90 text-xs mt-2" type="password" placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)} label="Enter your Password: " required />
                    <error />
                </div>
                <SelectCollege1 onChange={(e) => setCollege(e.target.value)}/>
                <div className="self-start ml-15 mt-7 flex flex-col text-sm">
                    <Button onClick={signUp} className="border cursor-pointer hover:scale-110 bg-gray-800 border-gray-800 shadow-[3px_3px_7px_white] rounded-lg p-2 w-90" type="submit" label="Sign Up" />
                </div>
            </div>
            <img className="w-full h-full rounded-lg brightness-75" src='https://res.cloudinary.com/dkacxbbwh/image/upload/v1758947795/slsu_lpnqvl.jpg'></img>
        </section>
    </>
}