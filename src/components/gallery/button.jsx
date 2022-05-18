import { Link } from 'react-router-dom';

const GalleryButton = (props) => {

    return (
        <div>
            <Link to="/galleri">
                <button
                    className="border-2 border-primary text-primary rounded-full px-8 py-1 hover:bg-primary hover:text-white font-normal"
                    onClick={props.toggleCloseOpen}>
                    Galleri
                </button>
            </Link>
        </div>
    )
}

export default GalleryButton;