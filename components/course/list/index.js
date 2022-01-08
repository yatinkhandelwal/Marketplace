
import Image from "next/image"
import Link from "next/link"


export default function List() {
  return (
    <section className="grid md:grid-cols-1 lggrid-cols-2 gap-4 mb-5">
      { courses.map(course =>
        <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="flex h-full">
            <div className="flex h-full">
              <Image 
                className="object-cover" 
                src="{course.coverImage}"
                layout="fixed"
                height="200"
                width="230" 
                alt="{course.title}"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{course.type}</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{course.title}</a>
              <p className="mt-2 text-gray-500">{course.desciption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
