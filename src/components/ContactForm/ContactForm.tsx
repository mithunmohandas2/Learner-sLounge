import "./ContactForm.css"
function ContactForm() {
    return (

        <>
            <div className="max-w-4xl mx-auto">
                <section id="home" className="flex flex-col justify-center sm:flex-row p-6 pb-0 items-center gap-8 mb-12 scroll-mt-20">
                    <div className="sm:w-1/2">
                        <div className="card">
                            <div
                                className="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center"
                            >
                                <div
                                    className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16"
                                >
                                    <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
                                        We love to hear from you
                                    </p>
                                    <p className="px-10 text-[10px] sm:text-[12px] text-gray-700">
                                        Email us @ mail.learnerslounge@gmail.com
                                    </p>
                                    <p className="font-serif text-[10px] sm:text-[12px text-gray-700">
                                        Contact us @ +91 9188 199 166 or 8281 199 122
                                    </p>
                                    <p className="font-sans text-[10px] text-gray-700 pt-5">Learner's Lounge</p>
                                </div>
                                <button
                                    className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-10 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900"
                                >
                                    OPEN
                                </button>
                                <div
                                    className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
                                ></div>
                                <div
                                    className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
                                ></div>
                                <div
                                    className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
                                ></div>
                                <div
                                    className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
                                ></div>
                            </div>
                        </div>
                        <div className="max-w-sm my-4 flex flex-row items-center">

                            <a href="mailto:mail.learnerslounge@gmail.com" target='_blank' className='m-3'>
                                <button id="mailButton" className='bg-slate-200 p-4 text-slate-900 rounded-2xl hover:bg-slate-300 flex gap-2'> <img style={{ width: 25 }} src="https://cdn-icons-png.flaticon.com/512/888/888853.png" alt="Email" />
                                    <h5 id="mailText">mail.learnerslounge@gmail.com</h5>
                                </button>
                            </a>

                            <a href="tel:+919188199166" target='_blank' className='m-3' >
                                <button id="phoneButton" className='sm:w-fit bg-slate-200 p-4 text-slate-900 rounded-2xl hover:bg-slate-300 flex gap-2 w-fit'> <img style={{ width: 25 }} src="https://icon-library.com/images/red-phone-icon-png/red-phone-icon-png-21.jpg" alt="phone" />
                                    <h5 id="phoneText">+91 - 9188 199 166</h5>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex-row">
                        <iframe className="item-center justify-center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.184522525077!2d75.83155997378184!3d11.247832550324205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bbe50ea0b7d%3A0xc4e01eaa6234847e!2sHiLITE%20Business%20Park%2C%20Poovangal%2C%20Pantheeramkavu%2C%20Kerala%20673014!5e0!3m2!1sen!2sin!4v1703073850238!5m2!1sen!2sin" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <p className="text-white p-10 bg-gray-700 bg-opacity-50 rounded-xl my-3">
                            <span className="font-bold"> Address :</span>  <br />
                            LEARNERS LOUNGE, <br />
                            HiLite Business Park,<br />
                            Palazhi, Calicut - 673014 <br />
                            Ph: +91 9188 199 166
                        </p>

                    </div>

                </section>
            </div>

            {/* -------------------------- */}
            <div className="max-w-md  mx-auto my-4 flex flex-col items-center sm:justify-center sm:gap-3">

                <div className="container">
                    <div className="flex justify-center text-golden">
                        <a href="#home">▲ Top</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm