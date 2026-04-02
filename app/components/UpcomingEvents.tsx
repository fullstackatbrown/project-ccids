"use client";
import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function UpcomingEvents() {
  const [events, setEvents] = useState<any[]>([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        const padded = [...(data.items || [])];
        while (padded.length < 3) {
          padded.push({ summary: "TBD", start: {}, location: "" });
        }
        setEvents(padded);
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([
          { summary: "TBD", start: {}, location: "" },
          { summary: "TBD", start: {}, location: "" },
          { summary: "TBD", start: {}, location: "" },
        ]);
      }
    };
    fetchEvents();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-[1498px] mx-auto my-6 md:my-10 px-6 md:px-0"
    >
      <div className="flex justify-end items-center">
        <button className="bg-[var(--primary)] text-white w-[180px] md:w-[229px] h-[50px] md:h-[68px] rounded-full text-sm md:text-base">
          View All Events
        </button>
      </div>
      <div className="h-6 md:h-10" />
      <div className="flex flex-col md:flex-row">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex-1 px-4 md:px-8 py-4 md:py-0 ${
              index < events.length - 1
                ? "border-b md:border-b-0 md:border-r border-gray-300"
                : ""
            }`}
          >
            <h3 className="text-xl md:text-3xl font-bold mb-3">
              {event.summary}
            </h3>
            {event.start.dateTime && (
              <div className="flex items-center gap-2 mb-3 text-sm md:text-lg">
                <Calendar size={20} strokeWidth={3} />
                <p>
                  {new Date(event.start.dateTime).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            )}
            {event.start.dateTime && (
              <div className="flex items-center gap-2 mb-3 text-sm md:text-lg">
                <Clock size={20} strokeWidth={3} />
                <p>
                  {new Date(event.start.dateTime).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            )}
            {event.location && (
              <div className="flex items-center gap-2 mb-3 text-sm md:text-lg">
                <MapPin size={20} strokeWidth={3} />
                <p>{event.location}</p>
              </div>
            )}
            <div className="h-8 md:h-[100px]" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
