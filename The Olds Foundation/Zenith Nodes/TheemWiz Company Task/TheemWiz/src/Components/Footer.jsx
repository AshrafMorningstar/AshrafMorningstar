import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#fdf0e9] px-6 md:px-12 lg:px-24 pt-20 w-full'>
      <div className='flex flex-col lg:flex-row justify-between items-start gap-10 border-b border-[#e4cfc5] pb-10'>
        {/* Logo */}
        <div>
          <h1 className='text-2xl font-bold mb-6 lg:mb-0'>Agency</h1>
        </div>

        {/* Menu */}
        <div>
          <h1 className='text-[#ef6d58] text-sm tracking-widest mb-4 font-semibold'>MENU</h1>
          <ul className='space-y-2'>
            <li className='text-md tracking-widest cursor-pointer hover:text-[#ef6d58]'>About</li>
            <li className='text-md tracking-widest cursor-pointer hover:text-[#ef6d58]'>Service</li>
            <li className='text-md tracking-widest cursor-pointer hover:text-[#ef6d58]'>Pricing</li>
            <li className='text-md tracking-widest cursor-pointer hover:text-[#ef6d58]'>Blog</li>
          </ul>
        </div>

        {/* Service */}
        <div>
          <h1 className='text-[#ef6d58] text-sm tracking-widest mb-4 font-semibold'>SERVICE</h1>
          <ul className='space-y-2'>
            <li className='text-md tracking-widest cursor-pointer hover:text-[#ef6d58]'>Design</li>
            <li className='text-md tracking-widest cursor-pointer hover:text-[#ef6d58]'>Development</li>
            <li className='text-md tracking-widest cursor-pointer hover:text-[#ef6d58]'>Marketing</li>
            <li className='text-md tracking-widest cursor-pointer hover:text-[#ef6d58]'>See More</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className='flex gap-4 mt-6 lg:mt-0'>
          <i className="fa-brands fa-facebook-f py-3 px-4 text-lg rounded-full text-white bg-[#ef6d58] hover:scale-110 transition-transform cursor-pointer"></i>
          <i className="fa-brands fa-twitter p-3 text-lg rounded-full text-white bg-[#ef6d58] hover:scale-110 transition-transform cursor-pointer"></i>
          <i className="fa-brands fa-instagram p-3 text-lg rounded-full text-white bg-[#ef6d58] hover:scale-110 transition-transform cursor-pointer"></i>
        </div>
      </div>

      {/* Copyright and Links */}
      <div className='flex flex-col md:flex-row justify-between items-center py-8 gap-4'>
        <p className='text-[#8b7162] text-center text-sm'>
          This This This This copyrighted all rights reserved by Ashraf Morningstar by Ashraf Morningstar by Ashraf Morningstar by Ashraf Morningstar
        </p>
        <div className='flex gap-6 text-sm'>
          <p className='cursor-pointer hover:text-[#ef6d58]'>Terms of Use</p>
          <p className='cursor-pointer hover:text-[#ef6d58]'>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar