import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faClock, faBoxes } from '@fortawesome/free-solid-svg-icons';

const CompanyOverview = () => {
  const [count, setCount] = useState(0);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    let start = 0;
    const end = 20;
    const duration = 1000;
    const incrementTime = 50;

    const steps = Math.ceil(duration / incrementTime);
    const stepSize = Math.ceil(end / steps);

    const interval = setInterval(() => {
      start += stepSize;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(interval);
  }, []);

  const companyFeatures = [
    {
      icon: faUserTie,
      title: 'Experience And Expertise',
      description: '20+ years of industry knowledge and skilled professionals.',
      details:
        'Our team consists of certified logistics experts with specialized training in all transport modes.',
    },
    {
      icon: faClock,
      title: 'Reliability and Timeliness',
      description: 'On-time delivery guaranteed with 98.7% success rate.',
      details:
        'We utilize advanced tracking systems and contingency planning to ensure deadlines are met.',
    },
    {
      icon: faBoxes,
      title: 'Comprehensive Services',
      description: 'End-to-end solutions for all your transportation needs.',
      details:
        'From first-mile pickup to last-mile delivery, including customs clearance and warehousing.',
    },
  ];

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto overflow-hidden">
      {/* Main Content Section */}
      <div className="mb-16">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Providing <span className="text-orange-500">Full Range</span> of Transportation
        </h2>

        {/* Paragraph section */}
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Your transportation solution provider with 20+ years of industry experience.
        </p>

        {/* flex layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Text */}
          <div className="flex-1">
            <p className="text-start text-gray-700 mb-8 max-w-xl">
              We are dedicated to providing the best transportation services in the industry.
              <br />
              Our team is committed to ensuring your logistics are met with excellence.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowFeatures(!showFeatures)}
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
              >
                {showFeatures ? 'Hide Details' : 'Discover More'}
              </button>
              <button
                onClick={() => alert('Contact us at: (254) 712 345 678')}
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
              >
                Call Us
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex-1 flex justify-center items-center">
            {/* Large Image */}
            <div className="w-full">
              <img
                src="/images/air-1.jpg"
                alt="aircraft"
                className="w-[110%] h-80 object-cover shadow-lg border-4 rounded-lg -translate-x-8"
              />
            </div>

            {/* Small Image with Counter */}
         <div className="absolute top-6 right-8 shadow-lg border-4 border-white rounded-lg">
              <img
                src="/images/ship.jpg"
                alt="Cargo Ship"
                className="w-48 h-40 object-cover shadow-lg border-4 rounded-lg"
              />
              {/* Counter */}
              <div className="absolute top-32 right-[11rem] bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-xl text-center">
                <span className="text-2xl font-bold block">{count}+</span>
                <span className="text-sm">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Features Section (toggle) */}
      {showFeatures && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
          {companyFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              details={feature.details}
            />
          ))}
        </div>
      )}
    </section>
  );
};

// FeatureCard component
const FeatureCard = ({ icon, title, description, details }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      onClick={() => setShowMore(!showMore)}
      className="bg-white shadow-md p-6 cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col"
    >
      {/* Icon */}
      <div className="text-blue-600 text-4xl mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>

      {/* Toggle content */}
      {showMore && <div className="mt-2 text-sm text-gray-500">{details}</div>}

      <div className="mt-auto pt-2 text-blue-600 text-sm font-medium">
        {showMore ? 'Show less' : 'Learn more'}
      </div>
    </div>
  );
};

export default CompanyOverview;
