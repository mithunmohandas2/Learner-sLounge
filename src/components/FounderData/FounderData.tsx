import "./FounderData.css"

function FounderData() {
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

                    <div className="zoomEffect flex flex-col items-center text-start">
                        <div
                            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
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

                    <div className="zoomEffect flex flex-col items-center text-start">
                        <div
                            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
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

                    <div className="zoomEffect flex flex-col items-center text-start">
                        <div
                            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
                            style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}
                        >
                            <img src="/images/sooraj.png" alt="team photo" className="z-0 h-full w-full rounded-[10px] object-cover" />
                            <div className="absolute bottom-4 left-4">
                                <h1 className="text-xl font-semibold text-white">Sooraj T S</h1>
                                <h6 className="text-base text-white">MBA (Marketing)</h6>
                            </div>
                        </div>
                    </div>

                    {/* Team Member - 4 */}

                    <div className="zoomEffect flex flex-col items-center text-start">
                        <div
                            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
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

        </>
    )
}

export default FounderData