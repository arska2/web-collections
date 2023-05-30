import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { setSelectedWebsite } from "../../app/uiSlice"



export const Website = ({ website }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onEditClicked = () => {
        dispatch(setSelectedWebsite(website))
        navigate('/edit')
    }
    const {
        name,
        url = "default",
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
                    <a href={url} className="btn me-2" target="_blank"><b className="fas fa-link">Visit Site</b></a>
                    <a href={'tmp'} className="btn me-2" target="_blank"><b className="fab fa-like">Add to Favorites</b></a>
                    <a className="btn me-2" onClick={onEditClicked}><b className="fab fa-edit">Edit</b></a>

                </div>
            </div>
        </div>
    </>
    )

}