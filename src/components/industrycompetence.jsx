import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const IndustryCompetence = () => {
    const navigate = useNavigate();

  return (
    <section className="py-16 px-6 max-w-7xl max-auto">
     <div className="flex flex-col lg:flex-row gap-12 items-center">
      {/*Left image*/}
      <div className="lg:w-1/2 w-full">
      <img src="/images/trucks.jpg" alt="Truck-logistics" className='w-full h-auto object-cover shadow-md' />
      </div>
      {/*Text section*/}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Industry Specific <span className="text-orange-500">Expertise</span>
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
                      With decades of experience in transportation logistics, we've developed specialized 
                      knowledge to handle your most complex supply chain challenges.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Core Competencies</h3>

          <ul className="space-y-3">
            <li className="flex">
              <span className="text-blue-900 mr-2 mt-1 flex-shrink-0">
                <FaCheck className='text-sm'/>
              </span>
              <span className="text-gray-700"><strong> Regulatory Compliance</strong> Full adherence to DOT, FMCSA, and international shipping regulations.</span>
            </li>
            <li className="flex">
              <span className="text-blue-900 mr-2 mt-1 flex-shrink-0">
                <FaCheck className="text-sm"/>
              </span>
              <span className="text-gray-700"><strong> Route Optimization</strong> AI-powered logistics planning for fuel efficiency and timely deliveries.</span>
            </li>
            <li className="flex">
              <span className="text-blue-900 mr-2 mt-1 flex-shrink-0">
                 <FaCheck className="text-sm"/>
              </span>
              <span className="text-gray-700"><strong> Customs Brokerage:</strong> Streamlined international shipping with our in-house customs experts</span>
            </li>
            <li className="flex">
              <span className="text-blue-900 mr-2 mt-1 flex-shrink-0">
                 <FaCheck className="text-sm"/>
              </span>
              <span className="text-gray-700"><strong> Risk Management:</strong> Comprehensive cargo insurance and contingency planning</span>
            </li>
          </ul>
        </div>
        <button onClick={() => navigate('/learn-about')} className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 transition duration-300">
          Learn About Our Solutions
        </button>
        </div>
      </div>
    </section>
  );
};

export default IndustryCompetence;
