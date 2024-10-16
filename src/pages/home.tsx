import placeholderImage from '../assets/placeholder-image.png';
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <>
                {/* <Navbar />  */}
        <div className="page">
        </div>

        <div className="face-wrapper">
                <img src={placeholderImage} className="face"/>
            </div>
            <div className="face-wrapper">
                <img src={placeholderImage} className="face"/>
            </div>
            <div className="face-wrapper">
                <img src={placeholderImage} className="face"/>
            </div>
            <div className="face-wrapper">
                <img src={placeholderImage} className="face"/>
            </div>
            <div className="face-wrapper">
                <img src={placeholderImage} className="face"/>
            </div>
        </>
    );
}