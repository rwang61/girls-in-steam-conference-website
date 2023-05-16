import './OurValues.css';
import commimg from './assets/CommunityImage.png';
import edimg from './assets/EducationImage.png';
import accimg from './assets/AccessImage.png';

export default function OurValues() {
    return (
        <div className='Our-values'>
          <p>OUR VALUES</p>
          <div className='flexbox-container'>
            <img className='CommImg' src={commimg} alt='Community'/>
            <img className='EdImg' src={edimg} alt='Education'/>
            <img className='AccImg' src={accimg} alt='Access'/>
          </div>
        </div>
    );
}