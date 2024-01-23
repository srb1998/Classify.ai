import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="w-full max-w-7xl relative top-0 flex justify-between h-[60px] backdrop-blur-sm bg-opacity-90 bg-orange-400 md:p-6 p-4">
        <Link href="/" className="flex items-center mx-5">
            <p className="md:text-2xl text-xl text-white font-bold">Classify.ai</p>
        </Link>
    </nav>
  )
}

export default Navbar