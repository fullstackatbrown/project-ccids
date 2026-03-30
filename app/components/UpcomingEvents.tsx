"use client";
import { useState } from "react";
import { useEffect } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
export default function UpcomingEvents() {
  const detailStyle = {
    fontSize: "18px",
    fontWeight: "normal",
    marginBottom: "12px",
  };
  /*
  const events = [
    {
      type: "type1",
      title: "title1",
      date: "date1",
      time: "time1",
      address: "address1",
    },
    {
      type: "type2",
      title: "title2",
      date: "date2",
      time: "time2",
      address: "address2",
    },
    {
      type: "type3",
      title: "title3",
      date: "date3",
      time: "time3",
      address: "address3",
    },
  ]; */ // for later - change this to useState and fetch from backend
  const [events, setEvents] = useState<any[]>([]);
  useEffect(() => {
    // fetch events from google calendar api and set the events state
    const fetchEvents = async () => {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/c_bfb1a6b5f0ca1f13ac9d1d002bda36ae849a2d8a3f8e6c238f1a1877321eb75c@group.calendar.google.com/events?maxResults=3&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&timeMin=${new Date().toISOString()}&orderBy=startTime&singleEvents=true`,
      ); // set maxResults to 3 to only get the next 3 events
      const data = await response.json();
      console.log(data);
      const padded = [...(data.items || [])];
      while (padded.length < 3) {
        padded.push({ summary: "TBD", start: {}, location: "" });
      }
      setEvents(padded);
      // setEvents(data.items || []); // set events to the items array from the response, or an empty array if there are no items
    };
    fetchEvents();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      style={{ maxWidth: "1498px", margin: "40px auto" }}
    >
      {" "}
      {/*same width as everything else */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {" "}
        {/*flex-end pushes button to the right side */}
        {/* header and button div */}
        <button
          style={{
            backgroundColor: "var(--primary)",
            color: "white",
            width: "229px",
            height: "68px",
            borderRadius: "70px",
          }}
        >
          View All Events
        </button>
      </div>
      <div style={{ height: "40px" }}></div>
      <div style={{ display: "flex" }}>
        {" "}
        {/* flex for each event to make the aligned*/}
        {events.map((event, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              borderRight:
                index < events.length - 1 ? "1px solid #ccc" : "none",
              paddingRight: "30px",
              paddingLeft: "30px",
            }}
          >
            {" "}
            {/* flex: 1 means each event takes equal space */}
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              {event.summary}
            </h3>
            {event.start.dateTime && (
              <div
                style={{
                  ...detailStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
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
              <div
                style={{
                  ...detailStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
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
              <div
                style={{
                  ...detailStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <MapPin size={20} strokeWidth={3} />
                <p>{event.location}</p>
              </div>
            )}
            <div style={{ height: "100px" }}></div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
