"use client"

const Contact = () => {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
            Contact Us
          </h1>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl mb-8">
              If you have any questions or need further assistance, please feel free to reach out to us using the contact information below.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Email</h2>
              <p className="text-lg sm:text-xl mb-4">
                <a href="mailto:contact@jobadviser.com" className="text-green-500 hover:underline">
                  contact@jobadviser.com
                </a>
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Phone</h2>
              <p className="text-lg sm:text-xl mb-4">
                +1 (234) 567-8900
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Office Address</h2>
              <p className="text-lg sm:text-xl">
                1234 Jl Sukamakmur,<br />
                Banten,
                Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
