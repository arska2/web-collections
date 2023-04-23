import { Badge, Spinner } from "react-bootstrap"
import { useGetTagsQuery } from "../api/apiSlice"
import { useDispatch, useSelector } from "react-redux"
import { addSelectedTag, removeSelectedTag } from "../../app/uiSlice"

export const TagContainer = () => {

    const { data: tags, isLoading } = useGetTagsQuery()
    const selectedTags = useSelector(state => state.uiReducer.selectedTags)
    const dispatch = useDispatch()


    const onTagClicked = (tagName) => {
        if (selectedTags.includes(tagName)) dispatch(removeSelectedTag(tagName))
        else dispatch(addSelectedTag(tagName))
    }


    if (isLoading) return <Spinner animation="border" variant="primary" />
    console.log('tags', tags)

    return (
        <div>
            <table>
                <tbody>
                    {tags.map(tag => <tr key={tag.id}>
                        <td><Badge pill bg={selectedTags.includes(tag.name) ? "info" : "dark"} onClick={() => onTagClicked(tag.name)}>{tag.name.toLowerCase()}</Badge></td>
                    </tr>)}
                </tbody>
            </table>

        </div>

    )
}