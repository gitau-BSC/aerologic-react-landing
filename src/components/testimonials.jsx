import { useState } from "react";
import T1 from "../assets/t1.jpg";
import T2 from "../assets/t2.jpg";
import T3 from "../assets/t3.jpg";
import T4 from "../assets/t4.jpg";

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      image: T1,
      name: "Jacob Suleiman",
      role: "Assistant Manager-Travels@Buupass",
      shortText: "Great service! Highly recommended.",
      fullText: "Working with this team has been an absolute pleasure. Their attention to detail and customer service is unmatched in the industry. I would recommend them to anyone looking for reliable travel solutions."
    },
    {
      id: 2,
      image: T2,
      name: "George Karanja",
      role: "Advisor-Travels@Buupass",
      shortText: "Efficient and professional.",
      fullText: "The efficiency and professionalism displayed by this team is remarkable. They've consistently delivered beyond our expectations, making our travel coordination seamless and stress-free."
    },
    {
      id: 3,
      image: T3,
      name: "Emily Akasa",
      role: "Co-ordinator-Travels@Buupass",
      shortText: "Top-notch experience!",
      fullText: "From start to finish, the experience was flawless. Their innovative approach to travel management has significantly improved our operations. The team is responsive, knowledgeable, and a joy to work with."
    },
    {
      id: 4,
      image: T4,
      name: "Bridget Muthoni",
      role: "Your Trainer-Travels@Buupass",
      shortText: "Exceptional training program.",
      fullText: "The training program they offer is comprehensive and tailored to our specific needs. Our staff has gained invaluable skills that have directly improved our service delivery to clients."
    }
  ];

  const handleCardClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex m-20 ssm:flex-col lg:flex-row gap-4">
      {testimonials.map((testimonial) => (
        <div 
          key={testimonial.id} 
          className="relative rounded-xl overflow-auto p-8 cursor-pointer hover:animate-pulse"
          onClick={() => handleCardClick(testimonial)}
        >
          <div className="overflow-hidden relative max-w-mxl mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img 
              src={testimonial.image} 
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg object-cover border-2 border-white"
              alt={testimonial.name}
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                {testimonial.name}
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                {testimonial.role}
              </div>
              <div className="text-slate-600 text-sm mt-1 dark:text-slate-300">
                {testimonial.shortText}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modal Popup */}
      {isModalOpen && selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative dark:bg-slate-800">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex items-center gap-6 mb-6">
              <img 
                src={selectedTestimonial.image} 
                className="w-20 h-20 rounded-full shadow-lg object-cover border-2 border-white"
                alt={selectedTestimonial.name}
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200">
                  {selectedTestimonial.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  {selectedTestimonial.role}
                </p>
              </div>
            </div>
            
            <div className="text-slate-700 dark:text-slate-300">
              <p className="mb-4">{selectedTestimonial.fullText}</p>
              <div className="flex justify-end">
                <button 
                  onClick={closeModal}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;