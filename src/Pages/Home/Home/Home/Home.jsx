import React from 'react';


import Banner from '../../Banner/Banner';
import Category from '../../Category/Category';

import Faq from '../../FAQ/Faq';
import GallerySection from '../../GallerySection/GallerySection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Category></Category>
            
            <Faq></Faq>
           
            
          
        </div>
    );
};

export default Home;