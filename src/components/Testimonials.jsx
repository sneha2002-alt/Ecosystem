import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "“This is a section of some simple filler text, also known as placeholder text. This is a section of some simple filler text, also known as placeholder text. This is a section of some simple filler text, also known as placeholder text”",
      name: "John McCulling",
      position: "CEO / Datadrift",
      image:
        "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112",
    },
    {
      id: 2,
      text: "“This is a section of some simple filler text, also known as placeholder text. This is a section of some simple filler text, also known as placeholder text. This is a section of some simple filler text, also known as placeholder text”",
      name: "Kate Berg",
      position: "CFO / Dashdash",
      image:
        "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112",
    },
    {
      id: 3,
      text: "“This is a section of some simple filler text, also known as placeholder text. This is a section of some simple filler text, also known as placeholder text. This is a section of some simple filler text, also known as placeholder text”",
      name: "Alex Doe",
      position: "CTO / Techcorp",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&q=75&fit=crop&w=112",
    },
    {
      id: 4,
      text: "“This is a section of some simple filler text, also known as placeholder text. This is a section of some simple filler text, also known as placeholder text. This is a section of some simple filler text, also known as placeholder text”",
      name: "Jane Smith",
      position: "COO / InnovateX",
      image:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&q=75&fit=crop&w=112",
    },
    {
      id: 5,
      text: "“This is a section of some simple filler text, also known as placeholder text. This is a section of some simple filler text, also known as placeholder text. This is a section of some simple filler text, also known as placeholder text”",
      name: "Michael Johnson",
      position: "CEO / TechSolutions",
      image:
        "https://images.unsplash.com/photo-1531746020798-7121294509c6?auto=format&q=75&fit=crop&w=112",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePageChange = (pageIndex) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
    }
  };

  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <div className="bg-neutral-900  py-4 sm:pt-10 lg:pt-12 w-full relative lg:h-screen">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-20">
        <h5 className="text-center text-lime-500 py-6 md:text-sm text-xs">
          What Does our Client Say
        </h5>
        <h2 className="mb-8 text-center text-3xl font-semibold md:mb-12 lg:text-5xl">
          Testimonials
        </h2>

        <div className=" flex items-center">
          {/* Left Arrow */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="absolute left-0 z-10 ml-4 p-2 shadow-md focus:outline-none lg:block hidden"
            aria-label="Previous"
          >
            <GoArrowLeft className="w-9 h-9" />
          </button>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mx-auto my-8">
            {displayedTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col items-center gap-4 bg-black px-8 py-6 md:gap-6"
              >
                <div className="max-w-md text-center text-gray-400 lg:text-md">
                  {testimonial.text}
                </div>

                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                    <img
                      src={testimonial.image}
                      loading="lazy"
                      alt={`Photo of ${testimonial.name}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div>
                    <div className="text-center text-sm font-bold text-indigo-50 md:text-base">
                      {testimonial.name}
                    </div>
                    <p className="text-center text-sm text-gray-400 md:text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="absolute right-0 z-10 mr-4 p-2 shadow-md focus:outline-none lg:block hidden"
            aria-label="Next"
          >
            <GoArrowRight className="w-9 h-9" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="my-8 flex justify-center space-x-2 md:py-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`h-3 w-3 rounded-full ${
                currentPage === index ? "bg-[#14C10E]" : "bg-lime-100"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
