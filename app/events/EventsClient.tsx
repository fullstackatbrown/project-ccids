"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface CalendarEvent {
  summary: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end?: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
}

export interface SeminarEntry {
  speakers: string;
  title: string;
  date: string;
}

export default function EventsClient({ pastSeminars }: { pastSeminars: SeminarEntry[] }) {
  const [featuredEvent, setFeaturedEvent] = useState<CalendarEvent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setFeaturedEvent(data.items[0]);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const formatDate = (event: CalendarEvent) => {
    const dateStr = event.start.dateTime || event.start.date;
    if (!dateStr) return "Date TBD";
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (event: CalendarEvent) => {
    if (!event.start.dateTime) return null;
    const start = new Date(event.start.dateTime).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    if (event.end?.dateTime) {
      const end = new Date(event.end.dateTime).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      });
      return `${start} - ${end}`;
    }
    return start;
  };

  const cleanDescription = (html: string) => {
    let text = html
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
    text = text.replace(/\n{3,}/g, '\n\n').trim();
    return text;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      <main className="flex-grow flex flex-col items-center px-4 sm:px-6 py-8 md:py-20 w-full max-w-6xl mx-auto">

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#027BBF] mb-8 md:mb-12 text-center w-full"
        >
          Events
        </motion.h1>

        {/* Loading State */}
        {isLoading && (
          <div className="w-full flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#027BBF]"></div>
          </div>
        )}

        {/* Featured Event Section */}
        {!isLoading && featuredEvent && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full mb-12 md:mb-16 bg-gray-50 p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-block bg-[#027BBF] text-white text-[10px] sm:text-xs tracking-wider uppercase font-bold px-3 py-1 rounded-full w-max mb-3 sm:mb-4">
                Upcoming
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-black">
                {featuredEvent.summary}
              </h2>

              <div className="space-y-2 sm:space-y-3 mb-6 text-gray-700 w-full flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Calendar size={18} className="text-[#027BBF] shrink-0" />
                  <span className="text-sm sm:text-base">{formatDate(featuredEvent)}</span>
                </div>
                {formatTime(featuredEvent) && (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Clock size={18} className="text-[#027BBF] shrink-0" />
                    <span className="text-sm sm:text-base">{formatTime(featuredEvent)}</span>
                  </div>
                )}
                {featuredEvent.location && (
                  <div className="flex items-center gap-2 sm:gap-3 text-left">
                    <MapPin size={18} className="text-[#027BBF] shrink-0" />
                    <span className="text-sm sm:text-base">{featuredEvent.location}</span>
                  </div>
                )}
              </div>

              {featuredEvent.description && (
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-prose whitespace-pre-line">
                  {cleanDescription(featuredEvent.description)}
                </p>
              )}

              <a
                href="https://calget.com/e/ccids-may2026-seminar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#027BBF] hover:bg-[#026299] text-white font-bold py-3 px-8 rounded-lg transition-colors w-full sm:w-max shadow-sm text-sm sm:text-base inline-block text-center"
              >
                RSVP Now
              </a>
            </div>
          </motion.section>
        )}

        {/* Google Calendar Embed Section */}
        {!isLoading && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: featuredEvent ? 0.4 : 0.2 }}
            className="w-full flex flex-col items-center lg:items-start"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 text-center lg:text-left w-full">
              Full Events Calendar
            </h2>

            <div className="w-full h-[450px] sm:h-[600px] md:h-[700px] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-50">
              <iframe
                src="https://www.google.com/calendar/embed?color=%23cabdbf&mode=AGENDA&src=c_bfb1a6b5f0ca1f13ac9d1d002bda36ae849a2d8a3f8e6c238f1a1877321eb75c@group.calendar.google.com"
                style={{ border: 0, width: '100%', height: '100%' }}
                title="CCIDS Events Calendar"
              ></iframe>
            </div>
          </motion.section>
        )}

        {/* Past Events Section */}
        {!isLoading && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: featuredEvent ? 0.6 : 0.4 }}
            className="w-full mt-12 md:mt-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 text-center lg:text-left">
              Past Events
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#027BBF] mb-4">CCIDS Seminar Series</h3>
              <div className="space-y-4">
                {pastSeminars.map((seminar, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-[#027BBF] font-bold text-lg flex-shrink-0">&bull;</span>
                    <p className="text-base text-black leading-relaxed">
                      <strong>{seminar.speakers}</strong> &quot;{seminar.title}&quot; ({seminar.date})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

      </main>
    </div>
  );
}
