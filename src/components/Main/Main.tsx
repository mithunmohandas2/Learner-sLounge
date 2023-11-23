import '../Header/Header.css'
import ContactForm from '../ContactForm'
import CourseDetailCard from '../CourseDetails/CourseDetail'
function Main() {
    return (
        <div className="container-fluid  bg-slate-200">

            <div className="max-w-4xl mx-auto">

                <section id="banner" className="flex flex-col-reverse justify-center sm:flex-row p-6 pb-0 items-center gap-8 mb-12 scroll-mt-20">
                    <div className="sm:w-1/2">
                        <h2 className="max-w-md text-3xl font-bold text-center sm:text-4xl sm:text-left text-slate-900">
                            Gateway to Excellence
                        </h2>
                        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700">
                            "Empowering Futures, Nurturing Skills: Your Gateway to Practical Excellence"
                        </p>
                        <p className="max-w-md text-2xl mt-4 pb-6 text-center sm:text-left text-slate-700">
                            Learn at your convinience
                        </p>
                    </div>

                    <img className="w-1/2" src="/images/banner-no-bg.png" alt="Banner" />

                </section>

                <section id="about" className="py-6 my-12 bg-cyan-600 rounded-2xl shadow-xl scroll-mt-20">
                    <h2 className="text 4xl font-bold text-center sm:text-5xl mb-6 text-white hover:opacity-70">
                        About us
                    </h2>
                    <hr className="w-1/2 mx-auto" />
                    <p className="text-1xl sm:text-2xl justify-content p-8 text-white">
                        Learner's Lounge is an educational institution providing job-oriented courses in commerce We are providing various courses like Diploma in Practical Accounting & Taxation. We also provide practical training to all our students. Experienced faculties train the students with the latest accounting software and technologies.

                        We started our journey with a vision to train the job-focused youth in India and make them employable at affordable fees. As the industry demands ‘skilled manpower’, we too, expanded our horizon to not just provide practical training to our students but also support them with placement at top companies. Mere theoretical knowledge is good for nothing; you should be practically adept as well. Each student reaching us leaves as a perfectly trained Professional ready to take up any Accounting-related job with confidence.
                    </p>

                </section>

                <section id="courses" className="p-6 my-12 scroll-mt-20" style={{height: 600}}>
                    <h2 className="text 4xl font-bold text-center mb-6 sm:text-5xl text-slate-900">
                        <span className='lineEffect'>Courses</span>
                    </h2>
                    <br />
                    <CourseDetailCard />

                    {/* <h5 className="text-1xl sm:text-2xl">
                        Diploma in Practical Accounting is fully a Practical Accounting course. <br />
                        3 months online training program.
                    </h5>
                    <p className="text-1xl sm:text-2xl justify-content p-8 ">
                        The core topics we are offering are mentioned below <br />
                        1. Basic account - Theory Part.<br />
                        2. Practical business accounting<br />
                        3. GST Practical training<br />
                        4. Income tax online Practical training<br />
                        5. Balance sheet reading<br />
                        6. TDS & TCS.<br />
                        7. Budgeting, Forecasting, exp management<br />
                        8. Cash flow & and fund flow.<br />
                        9. Payroll management<br />
                        10. Accounting software (Tally, Zoho, Excell, Quick books)<br />
                    </p> */}

                </section>
            </div>

            <section id="contact" className="p-6 my-12 bg-white container-fluid scroll-mt-20">
                <h2 className="text 4xl font-bold text-center sm:text-5xl mb-6 text-slate-900">
                    <span className='lineEffect'>Contact us</span>
                </h2>

                <ContactForm />

                <hr className="w-1/2 mx-auto my-5" />

                <p className='text-center'>Copyright © Learner's Lounge | All Rights Reserved</p>
                <a href="https://wa.me/9846232252" target="_blank" className="absolute z-20 mt-10">
                    <img className="w-1/4" src="https://cliply.co/wp-content/uploads/2021/08/372108180_WHATSAPP_ICON_400.gif" alt="Whatsapp Logo" />
                </a>
            </section>

        </div>
    )
}

export default Main