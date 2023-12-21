function CourseData() {

    const backgroundImageStyle = {
        // backgroundImage: `url('../../public/images/course.jpg')`,
        backgroundImage: `url('/images/course.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundOpacity: 40,
    };
    return (
        <>
            <div className="px-2 py-7 md:px-6 md:py-12" style={backgroundImageStyle}>
                {/* <h1 className="px-3 text-3xl sm:text-4xl font-bold capitalize text-white lg:text-3xl">
                    Diploma in Practical Accounting
                </h1>
                <p className="px-3 my-2 text-white text-opacity-80">
                    Basic Accounting - The foundational principles and concepts that underpin the accounting process <br />
                    3-month online training program
                </p> */}
                <h1 className="px-4 text-xl font-bold capitalize text-white lg:text-3xl">
                    WHO IS THIS COURSE AIMED AT?
                </h1>
                <p className="px-4 my-2 text-white text-opacity-80">
                    Working/non-working individuals who are: <br />
                    ✦ Commerce graduates/postgraduates <br />
                    ✦ Qualified: CA/CMA/ACCA <br />
                    ✦ Semi-qualified: CA/CMA/ACCA
                </p>
                {/* <hr /> */}
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">

                    <div className="space-y-3 p-8 bg-slate-600 bg-opacity-40 zoomEffect rounded-lg">
                        <span className="inline-block rounded-full bg-golden p-3 text-white">
                            <h1 className="px-2 font-bold text-black">1</h1>
                        </span>
                        <h1 className="text-xl font-semibold capitalize text-white">
                            Practical Business Accounting
                        </h1>
                        <p className="text-sm text-white text-opacity-80">
                            A range of skills and concepts that are directly applicable to real-world financial management.
                        </p>
                    </div>

                    <div className="space-y-3 p-8 bg-slate-600 bg-opacity-40 zoomEffect rounded-lg">
                        <span className="inline-block rounded-full bg-golden p-3 text-white">
                            <h1 className="px-2 font-bold  text-black">2</h1>
                        </span>
                        <h1 className="text-xl font-semibold capitalize text-white">
                            GST Practical Training
                        </h1>
                        <p className="text-sm text-white text-opacity-80">
                            Covers a range of topics related to the implementation, compliance, and practical application of GST in a business context.
                        </p>
                    </div>

                    <div className="space-y-3 p-8 bg-slate-600 bg-opacity-40 zoomEffect rounded-lg">
                        <span className="inline-block rounded-full bg-golden p-3 text-white">
                            <h1 className="px-2 font-bold  text-black">3</h1>
                        </span>
                        <h1 className="text-xl font-semibold capitalize text-white">
                            Income tax online Practical Training
                        </h1>
                        <p className="text-sm text-white text-opacity-80">
                            Explores a range of topics related to understanding, preparing, and filing income tax returns.
                        </p>
                    </div>

                    <div className="space-y-3 p-8 bg-slate-600 bg-opacity-40 zoomEffect rounded-lg">
                        <span className="inline-block rounded-full bg-golden p-3 text-white">
                            <h1 className="px-2 font-bold  text-black">4</h1>
                        </span>
                        <h1 className="text-xl font-semibold capitalize text-white">
                            Balance Sheet Reading
                        </h1>
                        <p className="text-sm text-white text-opacity-80">
                            Covers the principles and techniques necessary to analyze and interpret information presented in balance sheets.
                        </p>
                    </div>

                    <div className="space-y-3 p-8 bg-slate-600 bg-opacity-40 zoomEffect rounded-lg">
                        <span className="inline-block rounded-full bg-golden p-3 text-white">
                            <h1 className="px-2 font-bold  text-black">5</h1>
                        </span>
                        <h1 className="text-xl font-semibold capitalize text-white">
                            TDS & TCS
                        </h1>
                        <p className="text-sm text-white text-opacity-80">
                            A comprehensive understanding of the tax implications on income and transactions in the context of the Indian income tax system.
                        </p>
                    </div>

                    <div className="space-y-3 p-8 bg-slate-600 bg-opacity-40 zoomEffect rounded-lg">
                        <span className="inline-block rounded-full bg-golden p-3 text-white">
                            <h1 className="px-2 font-bold  text-black">6</h1>
                        </span>
                        <h1 className="text-xl font-semibold capitalize text-white">
                            Budgeting, Forecasting & Expense Management
                        </h1>
                        <p className="text-sm text-white text-opacity-80">
                            A range of topics to equip learners with the skills and knowledge needed to effectively manage financial resources within an organization.
                        </p>
                    </div>

                    <div className="space-y-3 p-8 bg-slate-600 bg-opacity-40 zoomEffect rounded-lg">
                        <span className="inline-block rounded-full bg-golden p-3 text-white">
                            <h1 className="px-2 font-bold  text-black">7</h1>
                        </span>
                        <h1 className="text-xl font-semibold capitalize text-white">
                            Cash flow & fund flow
                        </h1>
                        <p className="text-sm text-white text-opacity-80">
                            To analyze and interpret financial statements, make informed financial decisions, and contribute to effective financial management within an organization.
                        </p>
                    </div>

                    <div className="space-y-3 p-8 bg-slate-600 bg-opacity-40 zoomEffect rounded-lg">
                        <span className="inline-block rounded-full bg-golden p-3 text-white">
                            <h1 className="px-2 font-bold  text-black">8</h1>
                        </span>
                        <h1 className="text-xl font-semibold capitalize text-white">
                            Payroll Management
                        </h1>
                        <p className="text-sm text-white text-opacity-80">
                            Explore the topics that are related to the administration and processing of employee compensation within an organization.
                        </p>
                    </div>

                    <div className="space-y-3 p-8 bg-slate-600 bg-opacity-40 zoomEffect rounded-lg">
                        <span className="inline-block rounded-full bg-golden p-3 text-white">
                            <h1 className="px-2 font-bold  text-black">9</h1>
                        </span>
                        <h1 className="text-xl font-semibold capitalize text-white">
                            Accounting Software
                        </h1>
                        <p className="text-sm text-white text-opacity-80">
                            (Tally, Zoho Books, Microsoft Excel & QuickBooks)
                            To equip individuals with the skills needed for effective financial management and reporting.
                        </p>
                    </div>

                </div>
            </div>


        </>
    )
}

export default CourseData