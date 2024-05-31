"use client"

import { useEffect, useState } from "react";
import logo from "@/assets/icons/byumba-holding-logo.svg";
import Image from "next/image";

export default function Loading({children}) {
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        setIsloading(false);
    }, []);

    if(isLoading){
        return (
            <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-white flex items-center justify-center">
                <Image
                src={logo}
                alt="Byumba holding logo icon"
                className="w-28 md:w-auto"
                priority
                />
            </div>
        )
    }

    return children;
   
  }