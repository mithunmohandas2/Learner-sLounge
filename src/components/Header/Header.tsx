import './Header.css'
import { useState } from 'react'

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        // open the menu in mobile view
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="bg-slate-50 text-black sticky top-0 z-10">

            <section className="max-w-4xl ms-4 p-4 flex justify-between items-center">
                <a href="#banner" onClick={()=>setIsMenuOpen(false)}>
                    <div className="flex">
                        <img style={{ width: 35 }} src="/images/LL-Logo.png" alt="Logo" />
                        <span className="text-3xl font-medium ms-2  text-cyan-600">Learner's Lounge</span>
                    </div>
                </a>
                <div>
                    {/* Hamburger icon for mobile */}
                    <button id="mobileOpenButton" className="text-3xl sm:hidden focus:outline-none  text-cyan-600" onClick={toggleMenu}>
                        &#9776;
                    </button>

                    {/* expanded Nav for web */}
                    <nav className="hidden sm:block space-x-12 text-xl" aria-label="main">
                        <a href="#about" className="hover:opacity-70 lineEffect">About</a>
                        <a href="#courses" className="hover:opacity-70 lineEffect">Courses</a>
                        <a href="#contact" className="hover:opacity-70 lineEffect">Contact</a>
                    </nav>

                </div>

            </section>

            <section>
                {isMenuOpen && <div>
                    {/* expanded Nav for web */}
                    <nav aria-label="mobile" className=''>
                        <ul className='my-3 '>
                            <li className='py-3 text-center' >
                                <a href="#about" className="hover:opacity-70 lineEffect" onClick={toggleMenu}>About</a> 
                            </li>
                            <li className='py-3 text-center'>
                                <a href="#courses" className="hover:opacity-70 lineEffect mx-auto my-3" onClick={toggleMenu}>Courses</a>
                            </li>
                            <li className='py-3 text-center'>
                                <a href="#contact" className="hover:opacity-70 lineEffect mx-auto my-3" onClick={toggleMenu}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>}
            </section>
        </header>
    )
}

export default Header