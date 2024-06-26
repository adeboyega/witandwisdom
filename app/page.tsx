import Link from "next/link";

// import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col gap-5 sm:w-[40%] w-[60%] bg-sky-400 p-5 rounded-md text-white h-[100vh] justify-center text-center">
     <h1 className="text-4xl my-10">😎QUOTE GENERATOR 😎</h1>
     <div className="flex gap-4 w-full justify-center items-center">
     <Link href="/street" className="px-6 py-2 rounded-md bg-sky-600 hover:bg-sky-800 text-white h-12 text-center my-auto">Street Quotes</Link>
     <Link href="/quotes" className="px-6 py-2 rounded-md bg-sky-600 hover:bg-sky-800 text-white h-12 text-center my-auto">Normal Quotes</Link>
     </div>
    </main>
  );
}
