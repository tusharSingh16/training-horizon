
import Image from "next/image";

export default function VacationCourses() {
  const courses = [
    {
      id: 1,
      title: "Mathematics",
      grade: "Grade 7",
      description: "Get course completion certificates and prizes for 7th-grade students participating now.",
      label: "Handicapped",
      imageUrl: "/images/maths.png", 
      icon: "/images/handicaped.png",
    },
    {
      id: 2,
      title: "Science",
      grade: "Grade 7",
      description: "Get course completion certificates and prizes for 7th-grade students participating now.",
      label: "Boys & Girls",
      imageUrl: "/images/science.png",
      icon: "/images/handicaped.png",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-10 bg-white mt-10 bg-no-repeat bg-right-bottom bg-contain h-auto" style={{backgroundImage:`url('/images/bg.png')`}} >
      <div className="flex flex-wrap mx-auto">
        <div className="flex flex-col md:flex-row pt-5 w-full">
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Image
              src="/images/demo.png"
              alt="Decorative image"
              width={200}
              height={200}
              className="h-full"
            />
          </div>
          <div className="flex flex-col ml-0 md:ml-8 justify-center items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Summer Bummer Vacations</h3>
            <p className="text-gray-600 mb-4 md:mb-6">
              Some recent classes and webinars near your location.
            </p>
            <button className="bg-blue-400 text-white py-3 px-8 rounded mb-8 hover:bg-blue-600 shadow-xl">
              Learn Mathematics with Best Teachers
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full mt-8 md:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="p-4 rounded-lg bg-white border border-gray-300"
              >
                <div className="flex flex-col sm:flex-row items-center mb-4">
                  <div className="bg-blue-400 hidden sm:flex h-40 w-[5px] sm:w-[15px] rounded-r-lg"></div>
                  <Image
                    src={course.imageUrl}
                    alt={course.title}
                    width={150}
                    height={150}
                    className="mb-4 sm:mb-0 sm:ml-3"
                  />
                  <div className="flex flex-col items-center sm:items-start justify-between ml-0 sm:ml-8 text-center sm:text-left">
                    <div className="px-2 py-1 mt-3 mb-3 w-28 flex flex-row text-center bg-blue-400 text-white text-xs rounded-xl">
                      <Image
                        src={course.icon}
                        width={14}
                        height={14}
                        className="mr-2"
                        alt={course.label}
                      />
                      {course.label}
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">{course.title}</h4>
                      <p className="text-sm text-gray-500 sm:ml-4">{course.grade}</p>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{course.description}</p>
                    <button className="bg-blue-400 mt-8 mb-5 text-white py-2 px-4 rounded hover:bg-blue-600 shadow-xl">
                      Learn {course.title} with Best Teachers
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
