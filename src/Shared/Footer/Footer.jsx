import React from 'react';
import logo from '../../images/car-logo.png';

const Footer = () => {
    return (
        <div className='bg-sky-500 text-white'>
            <footer className="footer p-10 ">
                <div>
                    <img className='h-14' src={logo} alt="" />
                    <p>Kids Toys Industries Ltd.<br />Providing reliable tech since 2023</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

                <div>
                    <span className="footer-title">Address</span>
                    <p>Level-5,Khilgaon,Dhaka,Bangladesh</p>
                    <p>Helpline: <a className="link link-hover">012345678</a></p>
                    <p>(Available : Sat - Thu, 9:00 AM to 7:00 PM)</p>
                </div>

            </footer>
            <div className='text-center'>
                <p>
                    Copyright © 2023 - All right reserved by Kids Toys Industries Ltd

                </p>
            </div>
        </div>
    );
};

export default Footer;