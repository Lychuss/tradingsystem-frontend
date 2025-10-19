"use client";
import { useRouter } from "next/navigation"

export default function Filter(){
    const router = useRouter();

    const handlePage = (e) => {
        if(e.target.value === ""){
            return router.push('/home');
        } else if (e.target.value === "Trade"){
            return router.push('/home/products/trade');
        } else {
            return router.push('/home/products/buy');
        }
    }

    return  <select onChange={handlePage} className="text-4 border rounded-lg border-white py-1 px-5 cursor-pointer">
              <option value="" className="bg-black">SELECT</option>
              <option value="Trade" className="bg-black">TRADE</option>
              <option value="Buy" className="bg-black">BUY</option>
            </select>
}