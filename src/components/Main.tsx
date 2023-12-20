import ContactForm from './ContactForm/ContactForm'
import CourseData from './CourseData';
function Main() {

    const backgroundImageStyle = {
        backgroundImage: `url('https://images.unsplash.com/photo-1634549709262-508c47d4c229?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBnb2xkfGVufDB8fDB8fHww')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    };
    return (
        <>
            <div className="container-fluid" style={backgroundImageStyle}>

                <div className="max-w-4xl mx-auto">
                    <section id="home" className="flex flex-col-reverse justify-center sm:flex-row p-6 pb-0 items-center gap-8 mb-12 scroll-mt-20">
                        <div className="sm:w-1/2">
                            <p className="max-w-md text-3xl my-4 text-center sm:text-left text-white">
                                Step into a potential commerce career !
                            </p>
                            <h2 className="max-w-md py-3 text-3xl sm:text-4xl font-bold text-center sm:text-left text-golden hover:opacity-80">
                                “Learn beyond the box with us.”
                            </h2>
                            <p className="max-w-md text-md my-4 text-center sm:text-left text-white">
                                Our goal is to provide practical-focused courses to commerce students and help them get jobs at top companies.
                            </p>
                        </div>

                        <img className="w-1/2 zoomEffect" src="/images/banner-no-bg.png" alt="Banner" />

                    </section>
                </div>

                {/* <section id="courses" className="py-6 my-12 scroll-mt-20" style={{ height: 600 }}>
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6  text-blue-800">
                            <span className='hover:opacity-80 text-white'>Courses</span>
                        </h2>
                        <br />
                        <CourseDetailCard />
                    </section> */}
            </div>

            <section id="courses" className="py-6 my-12 scroll-mt-16">
                <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-golden hover:opacity-70">
                    Courses
                </h2>
                <CourseData />
            </section>

            <section id="about" className="py-6 my-12 scroll-mt-20">
                <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-golden hover:opacity-70">
                    About Us
                </h2>
                <hr className="w-1/2 mx-auto" />
                <p className="text-1xl sm:mx-9 sm:px-9 justify-content text-justify p-10 text-white">
                    Learner's Lounge is an educational institution that offers commerce courses with a practical focus that bridges the divide between theory and application. We provide various courses like Diploma in Practical Accounting and Taxation, and also support all our students with practical training. Students are trained with the latest accounting software and technologies by experienced faculty members. We started our journey with a vision to train the career-focused youth in India and make them employable at affordable fees. As the industry demands skilled manpower, we have expanded our horizons to not just provide practical training to our students but also support them with placement at top companies. Each student reaching us leaves as a perfectly trained professional, ready to take on any accounting-related job with confidence.
                </p>
            </section>



            <section id="contact" className="p-6 my-12 scroll-mt-20">
                <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-golden hover:opacity-70">
                    Contact Us
                </h2>


                <ContactForm />


                <a href="https://wa.me/9188199166" target="_blank" className="fixed bottom-20 right-0 z-30" >
                    <img style={{ width: 80 }} src="https://cliply.co/wp-content/uploads/2021/08/372108180_WHATSAPP_ICON_400.gif" alt="Whatsapp" />
                </a>
            </section>

            <section style={{ background: '#080b05' }}>
                ---
            </section>

        </>
    )
}

export default Main