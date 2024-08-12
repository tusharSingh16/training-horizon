import Image from "next/image";
const categories = [
    { name: 'Education', icon: '/images/education.png' },
    { name: 'Sports', icon: '/images/sports.png' },
    { name: 'Boxing', icon: '/images/boxing.png' },
    { name: 'Gymnastics', icon: '/images/gymnastics.png' },
    { name: 'Swimming', icon: '/images/swimming.png' },
    { name: 'Dance', icon: '/images/dance.png' },
    { name: 'Music', icon: '/images/music.png' },
    { name: 'Cycling', icon: '/images/cycling.png' },
    { name: 'Athletics', icon: '/images/atheletics.png' },
    { name: 'Martial Arts', icon: '/images/martial.png' },
  ];
  
  export default function Categories() {
    return (
      <section className="container mx-auto  w-full py-5 px-6">
        <div className="flex flex-wrap justify-between ">
            <h3 className="text-xl font-bold mb-6">Our Top Categories</h3>
            <div className="text-blue-400 text-lg">view all</div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="text-center p-4 bg-white shadow-xl rounded-xl">
              <Image src={category.icon} width ={150} height={150} alt={category.name} className="mx-auto mb-2" />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  