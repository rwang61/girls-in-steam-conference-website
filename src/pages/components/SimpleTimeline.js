import React from 'react';
import './../styles/SimpleTimeline.css';
import { MdScience } from 'react-icons/md';
import { FaGear } from 'react-icons/fa6';
import { ImPlus } from 'react-icons/im';

const SimpleTimeline = () => {
  const timelineItems = [
    {
      time: '6:00AM - 7:00AM',
      title: '@ Simple Abdul Ladha Science Centre',
      content: 'Registration'
    },
    {
      time: '7:00AM - 7:15AM',
      title: '@ Large Lecture Hall',
      content: 'Opening Remarks'
    },
    {
      time: '7:15AM - 7:45AM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Opening Keynote'
    },
    {
      time: '7:45AM - 8:00AM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Coffee Break'
    },
    {
      time: '8:00AM - 8:45AM',
      title: '@ Large Lecture Hall',
      content: 'Panel 1: Science and Engineering'
    },
    {
      time: '8:45AM - 9:45AM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Lunch'
    },
    {
      time: '9:45AM - 10:45AM',
      title: '@ 2 Large Classrooms',
      content: 'STEAM Workshops Breakout'
    },
    {
      time: '10:45AM - 11:00AM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Coffee Break'
    },
    {
      time: '11:00AM - 12:00 PM',
      title: '@ 2 Large Classrooms',
      content: 'STEAM Workshops Breakout'
    },
    {
      time: '12:00PM - 12:15PM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Coffee Break'
    },
    {
      time: '12:15PM - 1:00PM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Panel 2: Tech & Maths'
    },
    {
      time: '1:00PM - 1:15PM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Closing Remarks'
    },
    {
      time: '1:15PM - 2:00PM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Networking & Mingling'
    }
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-items">
        {timelineItems.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-time">{item.time}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <ImPlus
        style={{
          position: 'absolute',
          bottom: '40%',
          right: '-5%',
          color: '#A795D6',
          fontSize: '60px',
          strokeWidth: '1px',
          filter: 'drop-shadow(0 0 10px white)',
          transform: 'rotate(20deg)'
        }}
      />
      <ImPlus
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '-40%',
          color: '#9F8AA9',
          opacity: '0.3',
          fontSize: '200px',
          strokeWidth: '1px',
          filter: 'drop-shadow(0 0 10px white)',
          transform: 'rotate(45deg)',
          overflow: 'hidden'
        }}
      />

      <FaGear
        style={{
          position: 'absolute',
          top: '5%',
          right: '-10%',
          fontSize: '120px',
          zIndex: 1,
          color: '#ABA0CE',
          filter: 'drop-shadow(0 0 10px white)', // Apply a white glow effect using filter,
          opacity: '0.8'
        }}
      />
      <MdScience
        style={{
          position: 'absolute',
          top: '15%',
          left: '-10%',
          fontSize: '120px',
          transform: 'rotate(-30deg)',
          color: '#B8B2DA',
          filter: 'drop-shadow(0 0 10px white)'
        }}
      />

      <MdScience
        style={{
          position: 'absolute',
          top: '35%',
          left: '-25%',
          fontSize: '600px',
          transform: 'rotate(-30deg)',
          color: '#AD83C2',
          opacity: '0.4'
        }}
      />
    </section>
  );
};

export default SimpleTimeline;
