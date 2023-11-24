import { useEffect, useState } from 'react'
import './slideEffect.css'
function ContactForm() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const card = document.getElementById('animatedCard');
            if (!card) return;

            const cardPosition = card.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 200;

            setIsVisible(cardPosition < triggerPoint);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  
    return (
        <div className="max-w-md mx-auto my-4">

            <button className='bg-slate-200 p-4 text-slate-900 rounded-2xl hover:bg-slate-300'>Email : learnerslounge@gmail.com</button>        
           
            <div className="container">
                <div className={`card ${isVisible ? 'visible' : ''}`} id="animatedCard">
                    <a href="#banner">
                        <p>▲ Top</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactForm