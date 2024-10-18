import placeholderImage from '../assets/placeholder-image.png';
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <>
        <div className="page">

            <div className='top-row-wrap'>
                <div className='bio-box'>
                    <p className='bio-text'>
                        Zachary Hanczyc. UW CS Class of 2027  
                    </p>
                </div>

                <div className="face-wrapper">
                    <img src={placeholderImage} className="face"/>

                </div>
            </div>

        </div>

        <div className='background'>
        </div>

        </>
    );
}