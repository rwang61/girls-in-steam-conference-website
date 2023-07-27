import './../styles/OurValues.css';
import communityIcon from './../images/community-icon.svg';
import educationIcon from './../images/education-icon.svg';
import accessIcon from './../images/access-icon.svg';

export default function OurValues() {
  return (
    <div className='Our-Values'>
      <p>OUR VALUES</p>
      <div className='flexbox-container'>
        <div className='val-column-community'>
          <img className='val-icon' src={communityIcon} alt='community-icon'/>
          <h6 className='val-title'>COMMUNITY</h6>
          <p className='val-info'>Building vertical network & horizontal community amongst our program attendees.</p>
        </div>
        <div className='val-column-education'>
          <img className='val-icon' src={educationIcon} alt='education-icon'/>
          <h6 className='val-title'>EDUCATION</h6>
          <p className='val-info'>Connecting our program attendees with role models and exposing them to new knowledge.</p>
        </div>
        <div className='val-column-access'>
          <img className='val-icon' src={accessIcon} alt='access-icon'/>
          <h6 className='val-title'>ACCESS</h6>
          <p className='val-info'>Providing support, resources & educational programming through inclusive design spaces.</p>
        </div>
      </div>
    </div>
  );
}
