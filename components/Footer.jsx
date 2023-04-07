import React from 'react';

const Footer = () => {
  return (
    <div className='container mx-auto px-10 mb-8 mt-20'>
        <div className="border-t w-full inline-block border-blue-400 py-8">
            <div className="md:float-left block">
                    <span className='cursor-pointer font-bold text-xl text-white'>
                        FutmxNews
                    </span>
            </div>
            <div className="hidden md:float-left md:contents">
                <span className='md:float-right mt-2 align-middle text-white ml-4 cursor-pointer'>
                    &#169;  Adeshina Rofiat, Computer Science department, Federal University of Technology Minna
                </span>
            </div>
        </div>
    </div>
  );
}

export default Footer;