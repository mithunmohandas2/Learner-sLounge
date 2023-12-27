import { useState } from "react";

function FounderData() {
    const UserData = [
        {
            name: "Nithin Sethu K",
            degree: "B.Com, MBA",
            photo: "/images/nithinSethu-xs.jpg",
            exp: ["Marketing Associate & Accounting Supervisor: Satva Builders (2016-2017)",
                "Marketing & Sales Executive: Bridgeway Medical Systems (2017-2019)",
                "Associate (Hedge Fund Accounting): State Street Corporation (2019-2021)",
                "Marketing & Operations Manager: Swasta construction & Interior (2021-2023)"]
        },
        {
            name: "Aswin G",
            degree: "B.Com, Diploma in Management, PG Degree in Management (International Management Institute, Belgium)",
            photo: "/images/aswin-xs.jpg",
            exp: ["Assistant Manager: GnG Clinic & Medical Laboratory, Kozhikode (2014-2018)",
                "CEO: Hozzby Healthcare, Kozhikode (2019-2022)",
                "Co-Founder: Gencore Interactive, Kozhikode (2020-Present)"]
        },
        {
            name: "Sooraj T S",
            degree: "MBA(Marketing)",
            photo: "/images/soorajTS-xs.jpg",
            exp: ["8 years of experience in Automotive industry (Purchase/Operations Manager)",
                "4 years of Marketing experience in Medical & Automotive industries"]
        },
        {
            name: "Sree Lakshmi C",
            degree: "B.Com (Finance), CMA (Final)",
            photo: "/images/shreeLakshmi-xs.jpg",
            exp: ["5.5 years of teaching experience in CA/CMA/ACCA",
                "Comprehensive experience in the field of Marketing",
                "Served as Course Administrator"]
        }
    ]


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userSelected, setUserSelected] = useState(1)
    const openModal = (n: number) => {
        // userData Switch
        setUserSelected(n)
        setIsModalOpen(true)    // Function to open the modal
    }
    const closeModal = () => setIsModalOpen(false)  // Function to close the modal

    return (
        <>
            <div className="px-2 md:px-6 py-4  md:py-12 text-center sm:text-start">
                <h1 className="px-4 text-xl font-bold capitalize text-white lg:text-3xl">
                    OUR FOUNDERS
                </h1>
            </div>

            <div className="mx-auto max-w-7xl px-2 md:px-0 my-4">

                <div className="grid grid-cols-1 gap-[30px] md:grid-cols-4">

                    {/* Team Member - 1 */}

                    <div className="zoomEffect flex flex-col items-center text-start" onClick={() => openModal(0)}>
                        <div
                            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-black"
                            style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}
                        >
                            <img src="/images/nithinSethu.jpg" alt="team photo" className="z-0 h-full w-full rounded-[10px] object-cover" />
                            <div className="absolute bottom-4 left-4">
                                <h1 className="text-xl font-semibold text-white">Nithin Sethu K</h1>
                                <h6 className="text-base text-white">B.Com, MBA</h6>
                            </div>
                        </div>
                    </div>

                    {/* Team Member - 2 */}

                    <div className="zoomEffect flex flex-col items-center text-start" onClick={() => openModal(1)}>
                        <div
                            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-black"
                            style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}
                        >
                            <img src="/images/aswin.jpg" alt="team photo" className="z-0 h-full w-full rounded-[10px] object-cover" />
                            <div className="absolute bottom-4 left-4">
                                <h1 className="text-xl font-semibold text-white">Aswin G</h1>
                                <h6 className="text-base text-white">B.Com, PG Degree (Management)</h6>
                            </div>
                        </div>
                    </div>

                    {/* Team Member - 3 */}

                    <div className="zoomEffect flex flex-col items-center text-start" onClick={() => openModal(2)}>
                        <div
                            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-black"
                            style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}
                        >
                            <img src="/images/soorajTS.jpg" alt="team photo" className="z-0 h-full w-full rounded-[10px] object-cover" />
                            <div className="absolute bottom-4 left-4">
                                <h1 className="text-xl font-semibold text-white">Sooraj T S</h1>
                                <h6 className="text-base text-white">MBA (Marketing)</h6>
                            </div>
                        </div>
                    </div>

                    {/* Team Member - 4 */}

                    <div className="zoomEffect flex flex-col items-center text-start" onClick={() => openModal(3)}>
                        <div
                            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-black"
                            style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}
                        >
                            <img src="/images/shreeLakshmi.jpg" alt="team photo" className="z-0 h-full w-full rounded-[10px] object-cover" />
                            <div className="absolute bottom-4 left-4">
                                <h1 className="text-xl font-semibold text-white">Sree Lakshmi C</h1>
                                <h6 className="text-base text-white">B.Com (Finance), CMA (Final)</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex justify-center items-center z-40">
                    <div className="bg-transparent p-6">
                        {/* Close button */}
                        <div className="text-end">
                            <button className="absolute text-white hover:scale-150 focus:outline-none" onClick={closeModal}>
                                X
                            </button>
                        </div>
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-6">
                            <div className="md:flex ">
                                <div className="md:flex-shrink-0">
                                    <img className="h-72 w-full object-cover md:h-full md:w-48" src={UserData[userSelected].photo} alt="profile pic" />
                                </div>
                                <div className="p-8 bg-slate-900 text-gray-300">
                                    <div className="uppercase tracking-wide text-3xl text-golden font-bold">{UserData[userSelected].name}</div>
                                    <p className="my-4"><strong>Qualifications: </strong> {UserData[userSelected].degree}</p>

                                    {UserData[userSelected].exp.map((experience, index) => (
                                        <div key={index} className="flex">
                                            <h1>✦</h1>
                                         <p className="ms-3">{experience} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* -------------------- */}
                    </div>
                </div>
            )}
        </>
    )
}

export default FounderData