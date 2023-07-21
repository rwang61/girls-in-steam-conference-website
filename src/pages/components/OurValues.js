import './../styles/OurValues.css';
import commimg from './../images/CommunityImage.png';
import edimg from './../images/EducationImage.png';
import accimg from './../images/AccessImage.png';

export default function OurValues() {
  return (
    <div className='Our-Values'>
      <p>OUR VALUES</p>
      <div className='flexbox-container'>
        <img className='CommImg' src={commimg} alt='Community' />
        <img className='EdImg' src={edimg} alt='Education' />
        <img className='AccImg' src={accimg} alt='Access' />
      </div>
    </div>
  );
}
