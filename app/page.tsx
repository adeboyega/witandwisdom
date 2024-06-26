import Link from "next/link";

// import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col gap-5 sm:w-[60%] w-[100%] bg-sky-400 p-5 rounded-md text-white h-[100vh] justify-center text-center">
     <h1 className=" text-2xl sm:text-4xl my-10 font-bold">QUOTE GENERATOR😎</h1>
     <div className="flex gap-4 w-full justify-center items-center">
     <Link href="/street" className="px-6 py-2 rounded-md bg-sky-600 hover:bg-sky-800 text-white text-center my-auto text-sm sm:text-xl">Street Quotes</Link>
     <Link href="/quotes" className="px-6 py-2 rounded-md bg-sky-600 hover:bg-sky-800 text-white text-center my-auto text-sm sm:text-xl">Normal Quotes</Link>
     </div>
    </main>
  );
}
