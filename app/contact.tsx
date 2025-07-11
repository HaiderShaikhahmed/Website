export default function Contact() { 
    return ( 
        <div id="contact" >
            <>
  <section className="text-gray-100  bg-gray-900 body-font relative">
    <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-700 rounded-lg overflow-hidden sm:mr-6 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.726481528379!2d68.35443917403133!3d25.36357602494419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71e001d38e1d%3A0xd169f30b9d14b4e7!2sHaider%20Designing%20%7C%20Graphic%20Designing!5e1!3m2!1sen!2s!4v1750447732113!5m2!1sen!2s"
          style={{ filter: "grayscale(0) contrast(1.2) opacity(2)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="  text-gray-100 relative bg-gray-900  flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
             Gulshan-e-yaseen Latifabad unit no 9, Hyderabad Sindh, Pakistan
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold  tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-indigo-500 leading-relaxed">basicartgame@gmail.com</a>
            <h2 className="title-font font-semibold tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">+92 310 000 0</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-gray-900 text-white flex flex-col md:ml-auto w-full md:py-8 mt-5 md:mt-0">
        <h2 className=" px-4 text-lg sm:text-4xl mb-1 title-font font-bold">
Contact Us
        </h2>
        <p className="leading-relaxed mb-5 ml-4 text-gray-600 italic opacity-80">
          Bring your ideas to life with Haider Designing. Let's create something amazing together!
        </p>
       <div className="mx-3" >

         <div className="relative mb-4">
          {/* <label htmlFor="name" className="leading-7 text-sm text-gray-600 font-semibold flex items-center gap-2">
            
            Name
          </label> */}
          <input
          placeholder="Name"
            type="text"
            id="name"
            name="name"

            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out shadow-sm hover:shadow-md"
          />
          
        </div>
        <div className="relative mb-4">
          {/* <label htmlFor="name" className="leading-7 text-sm text-gray-600 font-semibold flex items-center gap-2">
             Email
          </label> */}
          <input
          placeholder="Email"
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out shadow-sm hover:shadow-md"
          />
        </div>
        <div className="relative mb-4">
          {/* <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label> */}
          <textarea
            id="message"
            placeholder="Message"
            name="message"
             className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out shadow-sm hover:shadow-md h-32 resize-none"
          
            defaultValue={""}
          />
        </div>
        
        </div>
        
          <button className="text-center font-bold w-auto mx-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Contact Us
          </button>

        <p className="text-xs italic opacity-50 text-center text-gray-500 mt-3">
          Your email address will not be published. 
        </p>
       </div>
      </div>
  
  </section>
  GitHub
</>

        </div>
     );
}