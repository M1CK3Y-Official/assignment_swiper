'use client';
import { useEffect, useState } from 'react';
import styles from './ourAuthorSection.module.css'
import Image from 'next/image';
import OurSwiper from '../ourSwiper/ourSwiper';
const OurAuthorSection = ({author, children}) => {



    const [sliderImages, setSliderImages] = useState([]);
    const [coverImage, setCoverImage] = useState([]);


    useEffect(() => {

     
    fetch('/api/images?author=' + author).then(res => res.json()).then(data => {
        console.log('DATA', data)
        setSliderImages(data);
        setCoverImage(data[0]);
    });
    
   
    }, [])

    return <section className={styles.container} style={{backgroundImage: `url(${coverImage.path})`}}>

        <button className={styles.imageBox}>{children}</button>

        <OurSwiper author={author}/>

    </section>

}

export default OurAuthorSection;