import Link from "next/link";

// import Image from "next/image";
export default function Home() {
  return (
    <main className="flex gap-5 sm:w-[40%] w-[60%] bg-sky-400 p-5 rounded-md text-white h-[60%] justify-center text-center">
      <Link href="/street" className="px-6 py-2 rounded-md bg-sky-600 hover:bg-sky-800 text-white">Street Quotes</Link>
      <Link href="/quotes" className="px-6 py-2 rounded-md bg-sky-600 hover:bg-sky-800 text-white">Normal Quotes</Link>
    </main>
  );
}
