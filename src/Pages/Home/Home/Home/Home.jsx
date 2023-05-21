import React from 'react';


import Banner from '../../Banner/Banner';
import Category from '../../Category/Category';
import CommentSection from '../../CommentSection/CommentSection';
import Faq from '../../FAQ/Faq';
import GallerySection from '../../GallerySection/GallerySection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Category></Category>
            
            <Faq></Faq>
            <CommentSection></CommentSection>
            
          
        </div>
    );
};

export default Home;