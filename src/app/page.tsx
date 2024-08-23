import AddBooks from "@/components/add&searchBook";
import BookCards from "@/components/bookCards";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
      <main className=""> 
        {/* <AddBooks/> */}
        
        <BookCards/>
      </main>
  );
}
