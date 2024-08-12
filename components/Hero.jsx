export default function Hero() {
    return (
      <section className="bg-blue-400 h-[700px] text-white flex flex-col items-center justify-center text-center py-20">
        <div className="flex flex-col items-center justify-center mx-auto px-6">
          <h2 className="text-7xl font-bold mb-2 drop-shadow-[4px_-4px_0px_rgba(0,0,0,0.5)] " >Get your skills </h2>
          <h2 className="text-7xl font-bold mb-4 drop-shadow-[4px_-4px_0px_rgba(0,0,0,0.5)]" >upgraded with us</h2>
          <p className="mb-6 drop-shadow-[2px_0.5px_0px_rgba(0,0,0,0.5)]" >Transform your productivity and deliver high quality solutions customers <br/>want,and respond to threats and opportunities.</p>
          <button className="bg-yellow-400 hover:bg-yellow-600 hover:shadow-md text-black py-3 px-8 rounded">Register to get Exclusive offers</button>
          <div className="flex flex-wrap items-center justify-center">   
                <p className="font-bold mt-4">500+</p> 
                <p className="mt-4 ml-2">Free and paid courses</p>
          </div>
        </div>
      </section>
    );
  }
  