"use client";
import { useState } from "react";

export default function UpcomingEvents() {
  const detailStyle = {
    fontSize: "16px",
    fontWeight: "normal",
    marginBottom: "12px",
  };
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
  ]; // for later - change this to useState and fetch from backend
  return (
    <div style={{ maxWidth: "1498px", margin: "40px auto" }}>
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
              {event.type}: {event.title}
            </h3>
            <p style={detailStyle}>{event.date}</p>
            <p style={detailStyle}>{event.time}</p>
            <p style={detailStyle}>{event.address}</p>
            <div style={{ height: "100px" }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
