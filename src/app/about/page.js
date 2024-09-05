"use client"

const About = () => {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            About Us
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl mb-8">
              Welcome to Job Adviser. Our platform is dedicated to helping you find the most relevant training and courses tailored to your career. We understand that navigating the world of professional development can be challenging, which is why we`ve created a space where you can easily discover opportunities that match your interests and goals.
            </p>
            
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Why We Created This Website
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              In today’s fast-paced job market, staying updated with the latest skills and knowledge is crucial. We noticed a gap in easily accessible, personalized training recommendations, and aimed to bridge this gap with our platform. Job Adviser was created to offer tailored advice and help you advance your career with confidence.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              Our mission is to empower professionals by providing curated training recommendations that align with their career goals. We strive to make professional development more accessible and relevant, ensuring that you have the resources needed to succeed.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Contact Us
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              If you have any questions or need assistance, feel free to <a href="/contact" className="text-green-500 hover:underline">contact us</a>. We are here to help and support you on your professional journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;