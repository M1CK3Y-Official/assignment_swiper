'use client';
import styles from './ourSwiper.module.css';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Swiper
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Swiper end

const OurSwiper = ({images}) => {

    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    

    useEffect(() => {

        register();

    }, [])

    // Listen for event
    useEffect(() => {

        swiperRef.current.addEventListener('swiperslidechange', (e) => {
            const [swiper] = e.detail;
            setCurrentIndex(swiper.activeIndex)
        });

    }, [])

    const nextSlide = () => {

        swiperRef.current.swiper.slideNext();

    }

    const prevSlide = () => {

        swiperRef.current.swiper.slidePrev();

        // Alternative speed
        // swiperRef.current.swiper.slidePrev(4000);
    }

    const slideTo = (index) => {
        setCurrentIndex(index)
        swiperRef.current.swiper.slideTo(index);

        // Alternative speed
        // swiperRef.current.swiper.slideTo(index, 1000);
    }

    return (
        <div className={styles.ourContainer}>
            <div className={styles.ourSwiper}>

                <swiper-container

                ref={swiperRef} 
                // effect={'fade'}
                space-between={100}
                slides-per-view={1}
                keyboard
                speed={3000}
                autoplay
                // pagination
                // navigation
                // loop
                // reverse-direction

                >


                {
                // For hvert image i images arrayet, returner en swiper-slide
                images.map( (image) => {

                    return <swiper-slide key={image._id}>
                        
                        {/* Vores slide */}
                        <div className={styles.ourSlide}>
                            <div className={styles.ourHeader}>
                            <h1>{image.author}</h1>
                            <p>{image.gallery}</p>
                            </div>
                            <Image src={image.path} alt={image.name} width={image.width} height={image.height}></Image>
                        </div>

                    </swiper-slide>
            

                })}


                </swiper-container>


            </div>

            <div className={styles.ourControls}>

                <div onClick={prevSlide} className={styles.ourCtrlBtn}>
                        PREV
                </div> 
                <div className={styles.ourCtrlPaging}>
                {images.map( (image, index) => {

                    return <span className={`${styles.ourDot} ${index === currentIndex ? styles.active : null}`} key={image._id} onClick={() => slideTo(index)}></span>

                })}
                </div>
                <div onClick={nextSlide} className={styles.ourCtrlBtn}>
                        NEXT
                </div> 

            </div>
        </div>
    )

};
export default OurSwiper