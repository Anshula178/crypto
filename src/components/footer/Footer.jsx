import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#060608] pt-8 pb-8">
      <div className="md:container md:mx-auto">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-14 p-20 rounded-lg">
          <div className="px-8 flex flex-col gap-y-6">
            <h4 className="text-slate-100 text-4xl font-semibold">Cryypto</h4>
            <p className="text-slate-300 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
            </p>
          </div>
          <div className="px-8 flex flex-col gap-y-6">
            <h4 className="text-slate-100 text-2xl font-medium">Contact us</h4>
            <p className="text-slate-300 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
              <br />
              Call Us: 000000000
              <br />
              demo@company.com
            </p>
          </div>
          <div className="px-8 flex flex-col gap-y-6">
            <h4 className="text-slate-100 text-2xl font-medium">Sign up to newsletter</h4>
            <div className="relative">
              <input
                type="text"
                className="bg-zinc-900/50 p-3 rounded-full w-[70%]"
                placeholder="Your email"
              />
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 md:px-4 py-2 rounded-full text-slate-100 font-medium absolute right-0 top-0 transform translate-x-[-50%]">
                Subscribe
              </button>
              <p className="text-slate-300 leading-6 text-sm mt-4">
                Sign up with your email address to receive news and updates
              </p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-slate-500/10 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300">Copyright ©2024 Cryypto. All rights reserved.</p>
            <ul className="flex gap-x-5 mt-4 md:mt-0">
              <li><a href="/" className="text-slate-300 text-sm">Home</a></li>
              <li><a href="/" className="text-slate-300 text-sm">About Us</a></li>
              <li><a href="/" className="text-slate-300 text-sm">Our Team</a></li>
              <li><a href="/" className="text-slate-300 text-sm">Shop</a></li>
              <li><a href="/" className="text-slate-300 text-sm">Blog</a></li>
              <li><a href="/" className="text-slate-300 text-sm">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
