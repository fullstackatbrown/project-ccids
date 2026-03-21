import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
// Import your actual Navbar and Footer components here
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      {/* <Navbar /> */}

      <main className="flex-grow flex flex-col items-center px-6 py-12 md:py-20 w-full max-w-6xl mx-auto">
        
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#027BBF] mb-12">
          Events
        </h1>

        {/* Featured Event Section */}
        <section className="w-full mb-16 flex flex-col lg:flex-row items-center gap-8 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          {/* Flyer Image Placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Replace this div with your actual <img> or Next.js <Image /> tag */}
            <div className="w-full max-w-sm aspect-[3/4] bg-white rounded-xl flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-gray-300 shadow-sm">
              <span className="text-lg font-medium mb-1">Featured Flyer</span>
              <span className="text-sm">(Insert Image Here)</span>
            </div>
          </div>
          
          {/* Featured Event Details */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="inline-block bg-[#027BBF] text-white text-xs tracking-wider uppercase font-bold px-3 py-1 rounded-full w-max mb-4">
              Featured
            </div>
            <h2 className="text-3xl font-bold mb-4 text-black">
              Annual Tech Symposium 2026
            </h2>
            
            <div className="space-y-3 mb-6 text-gray-700">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-[#027BBF]" />
                <span>Friday, October 23, 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-[#027BBF]" />
                <span>6:00 PM - 9:00 PM EST</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#027BBF]" />
                <span>Main Campus Auditorium</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Join us for our biggest event of the year! Learn from industry leaders, participate in interactive workshops, and network with peers. Food and refreshments will be provided. 
            </p>
            
            <button className="bg-[#027BBF] hover:bg-[#026299] text-white font-bold py-3 px-8 rounded-lg transition-colors w-full sm:w-max shadow-sm">
              RSVP Now
            </button>
          </div>
        </section>

        {/* Google Calendar Embed Section */}
        <section className="w-full">
          <h2 className="text-3xl font-bold text-black mb-8">
            Full Events Calendar
          </h2>
          
          {/* Responsive iframe container */}
          <div className="w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-50">
            <iframe
              // Replace the src string below with your actual Google Calendar embed URL
              src="https://www.google.com/calendar/embed?color=%23cabdbf&mode=AGENDA&src=c_bfb1a6b5f0ca1f13ac9d1d002bda36ae849a2d8a3f8e6c238f1a1877321eb75c@group.calendar.google.com"
              style={{ border: 0, width: '100%', height: '100%' }}
              title="CCIDS Events Calendar"
            ></iframe>
          </div>
        </section>

      </main>

      {/* <Footer /> */}
    </div>
  );
}