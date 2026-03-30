import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      {/* <Navbar /> */}

      <main className="flex-grow flex flex-col items-center px-4 sm:px-6 py-8 md:py-20 w-full max-w-6xl mx-auto">
        
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#027BBF] mb-8 md:mb-12 text-center w-full">
          Events
        </h1>

        {/* Featured Event Section */}
        <section className="w-full mb-12 md:mb-16 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 bg-gray-50 p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          
          {/* Flyer Image Placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* max-w-[280px] ensures it doesn't bleed off small screens like the iPhone SE */}
            <div className="w-full max-w-[280px] sm:max-w-sm aspect-[3/4] bg-white rounded-xl flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-gray-300 shadow-sm">
              <span className="text-base sm:text-lg font-medium mb-1 text-center px-2">Featured Flyer</span>
              <span className="text-xs sm:text-sm text-center">(Insert Image Here)</span>
            </div>
          </div>
          
          {/* Featured Event Details */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-2 lg:mt-0">
            <div className="inline-block bg-[#027BBF] text-white text-[10px] sm:text-xs tracking-wider uppercase font-bold px-3 py-1 rounded-full w-max mb-3 sm:mb-4">
              Featured
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-black">
              Annual Tech Symposium 2026
            </h2>
            
            <div className="space-y-2 sm:space-y-3 mb-6 text-gray-700 w-full flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-2 sm:gap-3">
                <Calendar size={18} className="text-[#027BBF] shrink-0" />
                <span className="text-sm sm:text-base">Friday, October 23, 2026</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Clock size={18} className="text-[#027BBF] shrink-0" />
                <span className="text-sm sm:text-base">6:00 PM - 9:00 PM EST</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-left">
                <MapPin size={18} className="text-[#027BBF] shrink-0" />
                <span className="text-sm sm:text-base">Main Campus Auditorium</span>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-prose">
              Join us for our biggest event of the year! Learn from industry leaders, participate in interactive workshops, and network with peers. Food and refreshments will be provided. 
            </p>
            
            <button className="bg-[#027BBF] hover:bg-[#026299] text-white font-bold py-3 px-8 rounded-lg transition-colors w-full sm:w-max shadow-sm text-sm sm:text-base">
              RSVP Now
            </button>
          </div>
        </section>

        {/* Google Calendar Embed Section */}
        <section className="w-full flex flex-col items-center lg:items-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 text-center lg:text-left w-full">
            Full Events Calendar
          </h2>
          
          {/* Responsive iframe container: Shorter on mobile to prevent scroll trapping */}
          <div className="w-full h-[450px] sm:h-[600px] md:h-[700px] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-50">
            <iframe
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