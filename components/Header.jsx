import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-100 py-2 shadow">
      <div className="flex flex-row justify-between items-center py-3 px-6">
        
        <nav className="hidden sm:block mx-auto">
          <ul className="flex space-x-6">
            <Link href={"/"} className="text-gray-600 ">Home</Link>
            <Link href={"/"} className="text-gray-600 ">Courses</Link>
            <Link href={"/"} className="text-gray-600 ">About Us</Link>
            <Link href={"/"} className="text-gray-600 ">Contact</Link>
          </ul>
        </nav>
        
         <div className="flex justify-between gap-4 ">
            <div className="hidden sm:flex space-x-4">
              <Link href={"/"} className="text-black py-2 px-4 rounded">Join as a teacher</Link>
              <Link href={"/"} className="text-black py-2 px-4 hover:bg-gray-400 hover:shadow-md rounded">Log In</Link>
            </div>
           
            <div className="flex sm:ml-auto ">
              <Link href={"/"} className="bg-yellow-400 hover:bg-yellow-600 text-black py-2 px-4 hover:shadow-md rounded">
                Sign Up
              </Link>
            </div>
         </div>
      
      </div>
    </header>
  );
}
