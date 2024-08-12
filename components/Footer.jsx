import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-white h-44 flex flex-col">
      <div className="flex flex-col">
        <div className="px-4 m-8 h-full flex flex-col justify-between md:flex-row items-center">
                <div className="flex flex-col m-5">
                  <div className="flex flex-wrap items-center md:items-start">
                    <img src="/images/logo.png" alt="Training Horizons Logo" className="w-16 h-16 mb-2" />
                    <h2 className="text-lg ml-2 font-semibold">TRAINING <br/> HORIZONS</h2>
                  </div>
                  <p className="text-gray-600 ml-5">Offline Batches and classes</p>
                </div>
  
                <div className="flex flex-col justify-evenly h-full m-5 text-center md:text-left">
                  <h3 className="font-bold  text-gray-800">ABOUT US</h3>
                  <Link href={"/"} className="text-gray-400 m-2">Who we are</Link>
                  <Link href={"/"} className="text-gray-400 m-2" >Work with us</Link>
                </div>
                <div className="flex flex-col justify-evenly h-full m-5 text-center md:text-left">
                      <h3 className="font-bold text-gray-800">EXPLORE</h3>
                      <Link href={"/"} className="text-gray-400 m-2">Batches and Classes</Link>
                      <Link href={"/"} className="text-gray-400 m-2" >Community</Link>
                </div>
                <div className="flex flex-col justify-evenly h-full m-5  text-center md:text-left">
                  <h3 className="font-bold text-gray-800">LEGAL</h3>
                  <Link href={"/"} className="text-gray-400 m-2">Privacy policy</Link>
                  <Link href={"/"} className="text-gray-400 m-2" >Terms & conditions</Link>
                </div>
                    
        
                <div className="flex flex-col h-full justify-evenly text-center m-5 ">
                  <h3 className="font-bold text-gray-800 ">CONTACT</h3>
                  <div className="flex flex-row items-center m-2">
                    <img src="/images/icon1.png" alt="phone" className="h-[14px] w-[14px]" />
                    <span className="text-gray-400">+922323092928</span>
                  </div>
                  <div className="flex flex-row justify-evenly m-2  space-x-8">
                     <img src="/images/icon4.png" alt="icon4"  className="h=[14px] w-[14px]"  />
                     <img src="/images/icon2.png" alt="icon2"  className="h=[14px] w-[14px]" />
                     <img src="/images/icon5.png" alt="icon5"  className="h=[14px] w-[14px]" />
                     <img src="/images/icon3.png" alt="icon3"  className="h=[14px] w-[14px]" />
                  </div>
                 </div>
             
                 
          </div>
                <div className=" flex items-center justify-center py-4 md:flex md:flex-col">
                     <p className="text-center text-gray-600">© 2022 All Rights Reserved</p>
                 </div> 
          </div>
      </footer>
    );
  }
