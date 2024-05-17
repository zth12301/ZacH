import placeholderImage from '../assets/placeholder-image.png';

export default function Home() {
    return (
        <div className="page">
            <div className="face-wrapper">
                <img src={placeholderImage} className="face"/>
            </div>
        </div>
    );
}