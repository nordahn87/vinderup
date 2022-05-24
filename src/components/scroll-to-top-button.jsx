import { useState } from 'react';

const ScrollToTopButton = (prop) => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () =>
        window.scrollTo({
            top: 0      
        });

    window.addEventListener('scroll', toggleVisible);

    return (
        <button
            id="to-top-button"
            className="fixed bottom-11 right-12 bg-primary w-12 h-12 z-3 rounded-full"
            onClick={scrollToTop}
            style={{ display: visible ? 'block' : 'none' }} >
            <i className="las la-lg la-angle-up text-white"></i>
        </button>

    );
}

export default ScrollToTopButton;
