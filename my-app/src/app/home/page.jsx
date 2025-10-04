"use client";

import Books from '../(components)/Home.jsx';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation.js';

export default function Home(){
  const router = useRouter();

  useEffect(() => {

    const token = JSON.parse(localStorage.getItem('token'));

    if(!token){
      router.push('/login');
    }
  }, [router])

  return (
    <>
      <Books />
    </>
  );
}
