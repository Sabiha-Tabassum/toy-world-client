import React, { useEffect } from 'react';
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const CommentSection = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);


    const handleSubmit = () => {
        setComments([...comments, comment])
        setComment('');

    }

    const handleTextArea = event => {
        setComment(event.target.value);

    }


    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <div className='lg:ml-40 mt-20 border-cyan-600'>
            <div className=''>
                <div data-aos="fade-right">
                    <h1 className='mb-4 text-cyan-800 font-bold'>Put Your Opinion Here............</h1>
                </div>
                <div  data-aos="fade-up-right">
                    <textarea value={comment}
                        onChange={handleTextArea}
                        className="textarea textarea-info w-80" placeholder="Bio"></textarea>
                    <div>
                        <button onClick={handleSubmit} className="btn btn-active btn-accent">Submit</button>
                    </div>
                </div>

            </div>
            <div className='mt-5'>

            </div>
            <div>
                {
                    comments.map((text, index) => (
                        <p key={index} className='h-20 w-80 bg-slate-200 break-all'>{text}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default CommentSection;