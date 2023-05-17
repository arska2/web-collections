import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { setSelectedWebsite } from "../../app/uiSlice"




const buttonTexts = [
    "Check it out!",
    "Visit Website",
    "Go to site",
    "See it in action",
    "Explore",
    "Learn more",
    "Discover",
    "Experience it now",
    "Start browsing",
    "Take a look",
    "Get started",
    "Try it out",
    "Enter",
    "Join the fun",
    "Get to know it",
    "Experience now",
    "Explore more",
    "Take a tour",
    "Learn about it",
    "Begin now",
];

export const Website = ({ website }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onEditClicked = () => {
        dispatch(setSelectedWebsite(website))
        navigate('/edit')
    }
    const {
        name,
        url,
        description,
        categories,
        tags
    } = website


    return (<>

        <div className="col-md-3">
            <div className="card">
                <img src={`/images/${url.split('//')[1].replace('www.', '').split('.')[0] + ".png"}`} className="card-img-top" alt="website image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle">{url}</h6>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn mr-2"><i className="fas fa-link">Visit Site</i></a>
                    <a href={url} className="btn mr-2"><i className="fab fa-like">Like</i></a>
                </div>
            </div>
        </div>
    </>
    )

}