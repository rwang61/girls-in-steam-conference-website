import React from 'react';
import './../styles/SimpleTimeline.css';
import catpic from '../images/catpic.jpg';

const ComplicatedTimeline = () => {
  const timelineItems = [
    {
      time: '6:00AM',
      title: '@ Complicated Abdul Ladha Science Centre',
      content: 'Registration'
    },
    {
      time: '7:00AM',
      title: '@ Large Lecture Hall',
      content: 'Opening Remarks\n\ndescription/details about the activity, what what will go over, etc. Can be as long or short as want. can be a sentence or a paragraph. what ever works.'
    },
    {
      time: '8:45AM',
      title: '@ Abdul Ladha Science Centre',
      image: catpic,
      content: 'Opening Keynote\n\n Speaker: \nFirst Last\nrole @ loc or title\ndescription/details about the activity, what what will go over, etc. Can be as long or short as want. can be a sentence or a paragraph. what ever works.',
    },
    {
      time: '7:45AM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Panel 1: Science and Engineering\nSpeakers:',
      //images: [catpic, catpic, catpic, catpic]
    },
    {
      time: '8:00AM',
      title: '@ Large Lecture Hall',
      content: 'Panel 1: Science and Engineering'
    },
    {
      time: '8:45AM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Lunch'
    },
    {
      time: '9:45AM',
      title: '@ 2 Large Classrooms',
      content: 'STEAM Workshops Breakout'
    },
    {
      time: '10:45AM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Coffee Break'
    },
    {
      time: '11:00AM',
      title: '@ 2 Large Classrooms',
      content: 'STEAM Workshops Breakout'
    },
    {
      time: '12:00PM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Coffee Break'
    },
    {
      time: '12:15PM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Panel 2: Tech & Maths'
    },
    {
      time: '1:00PM',
      title: '@ Abdul Ladha Science Centre',
      content: 'Closing Remarks'
    },
    {
      time: '1:15PM',
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
              {item.image && <img src={item.image} alt="Timeline event" className="timeline-image" />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComplicatedTimeline;
