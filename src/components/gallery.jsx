import logoLightText from '../logo/vinderup-logo-light-text.svg';
import React, { useCallback, useState, useEffect } from 'react';
import ScrollToTopButton from './scroll-to-top-button';
import { Link } from 'react-router-dom';
import Main from './main'

const Gallery = () => {

    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalImg, setModalImg] = useState('')
    const [modalImgAltText, setModalImgAltText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        fetch('./gallery/gallery.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    /* Toggles modal */
    const toggleModal = () => {
        setShowModal(!showModal,)
    }

    if (showModal) {
        document.body.classList.add('disable-scroll')
    } else {
        document.body.classList.remove('disable-scroll')
    }

    /* Opens modal when img is clicked */
    const openModal = useCallback((event) => {
        const index = parseInt(event.target.dataset.index)
        setModalImg(data[index].large)
        setModalImgAltText(data[index].alt)
        setShowModal(true)
        setCurrentIndex(index)
    }, [data])

    useEffect(() => {
        /* Prevents it from trying to find a index, before the API call is done */
        if (data.length === 0) {
            return
        }
        setModalImg(data[currentIndex].large)
        setModalImgAltText(data[currentIndex].alt)
    }, [currentIndex, data]);

    /* Handles next slide */
    const handleNextSlide = useCallback(() => {
        if (currentIndex + 1 >= data.length) {
            setCurrentIndex(0);
            return
        }
        setCurrentIndex(currentIndex + 1);
    }, [currentIndex, data])

    /* Handles prev slide */
    const handlePrevSlide = useCallback(() => {
        if (currentIndex === 0) {
            setCurrentIndex(data.length - 1);
            return
        }
        setCurrentIndex(currentIndex - 1);
    }, [currentIndex, data])

    return (
        <>
            {/* Modal overlay */}
            <section
                id="modal"
                className={(showModal ? 'flex opacity-100' : 'invisible opacity-0') + ' bg-black bg-opacity-95 fixed top-0 left-0 w-full h-full z-50 flex flex-col transition-all'}>

                {/* Close button */}
                <div className="z-10 absolute right-[2%] top-[2%] ">
                    <button onClick={toggleModal}>
                        <i className={'las la-times text-white text-4xl p-2'}></i>
                    </button>
                </div>

                <div className="h-full w-full flex items-center justify-center ">
                    <section className="grid grid-cols-12 w-full">

                        {/* Prev slider button */}
                        <button onClick={handlePrevSlide} className="grid col-span-1 justify-center items-center cursor-pointer hover:bg-primary hover:bg-opacity-25 transition-all">
                            <i className="las la-angle-left text-4xl text-white"></i>
                        </button>

                        {/* Image container */}
                        <div className="flex flex-col h-full justify-center items-center grid  col-span-10">
                            <img
                                className={(showModal ? 'opacity-100' : 'opacity-0') + ' object-contain h-[80vh] p-2 transition-04'}
                                src={modalImg}
                                alt={modalImgAltText}
                            />
                            <div className="flex w-full  relative justify-center">

                            </div>
                        </div>

                        {/* Next slider button */}
                        <button onClick={handleNextSlide} className="grid col-span-1 justify-center items-center cursor-pointer hover:bg-primary hover:bg-opacity-25 transition-all ">
                            <i className="las la-angle-right text-4xl text-white"></i>
                        </button>
                    </section>
                </div>
            </section>

            <nav className="flex justify-between items-center w-full md:px-9 h-16 top-0 left-0 z-3 fixed bg-secondary px-4">
                <Link to="/">
                    <img
                        src={logoLightText}
                        className="w-32"
                        alt="Billede af logo" />
                </Link>

                <Link to="/">
                    <button className="border-2 border-primary text-primary rounded-full px-8 py-1 hover:bg-primary hover:text-white font-normal ">
                        Tilbage
                    </button>
                </Link>
            </nav>

            <Main>
                <h1 className="font-permanent-marker text-primary md:text-9xl xsm:text-8xl text-6xl text-center pt-24">
                    Galleri
                </h1>

                <section className="pt-4 xsm:pt-8 grid mdlg:grid-cols-3 xsm:grid-cols-2 grid-cols-1 place-items-center gap-5">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="overflow-hidden">
                                <img
                                    src={item.thumb}
                                    data-index={index}
                                    className="cursor-pointer filter transform grayscale hover:filter-none transition-300 hover:scale-105"
                                    onClick={openModal}
                                    width="500"
                                    height="500"
                                    alt={item.alt} />
                            </div>
                        )
                    })}
                </section>
                <ScrollToTopButton />
            </Main>
        </>
    );
}

export default Gallery;
