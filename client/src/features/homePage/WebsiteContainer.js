import { useGetWebsitesQuery } from "../api/apiSlice"
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from "react-redux";
import { Website } from "./Website";
import './websites.css'








export const WebsiteContainer = () => {

    const { data: websites = [], isLoading } = useGetWebsitesQuery()
    const selectedCategories = useSelector(state => state.uiReducer.selectedCategories)
    const selectedTags = useSelector(state => state.uiReducer.selectedTags)



    let filtWebsites = websites

    if (selectedCategories.length >= 1) {
        filtWebsites = filtWebsites.filter(website => website.categories.some(category => selectedCategories.includes(category.name)))
    }
    if (selectedTags.length >= 1) {
        filtWebsites = filtWebsites.filter(website => website.tags.some(tag => selectedTags.includes(tag.name)))
    }


    if (isLoading) return <Spinner animation="border" variant="primary" />
    console.log('websites', websites)



    return (<div className="conatiner mx-auto mt-4">
        <div className="row">
            {filtWebsites.map(website => <Website website={website} />)}
        </div>

    </div>)

}