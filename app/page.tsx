import NavMenu from '@/components/ui/NavMenu';
import React from 'react';
import backgroundVideo from '../public/assests/BackgroundVideo/backgroundVideo.mp4'; // Import the video file
import Footer from '@/components/ui/Footer';

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavMenu />
     
      <div className="relative flex-shrink-0 h-[100vh]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          muted
          loop
        />
      </div>

      <div className="bg-green-800 py-12 flex-grow text-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col justify-center items-center md:items-start">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-lg">
          We offer top-notch banking solutions tailored to your needs. Our innovative technology, personalized service, and commitment to security set us apart. With us, you can enjoy seamless and efficient banking that keeps your financial goals at the forefront.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start">
        <h2 className="text-2xl font-bold mb-4">Our Key Benefits</h2>
        <ul className="list-disc list-inside text-lg">
          <li>24/7 Customer Support</li>
          <li>Advanced Security Features</li>
          <li>Easy and Convenient Online Banking</li>
          <li>Competitive Interest Rates</li>
          <li>Customizable Financial Products</li>
        </ul>
      </div>
    </div>
  </div>
</div>

       <Footer/>
     
    </div>
  );
}

export default Home;
