import { Spinner } from "react-bootstrap"
import { useGetCategoriesQuery } from "../api/apiSlice"
import Badge from 'react-bootstrap/Badge'
import { useDispatch, useSelector } from "react-redux"
import { addSelectedCategory, removeSelectedCategory } from "../../app/uiSlice"

export const CategoryContainer = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery()
    const selectedCategories = useSelector(state => state.uiReducer.selectedCategories)
    const dispatch = useDispatch()
    console.log('selected', selectedCategories)

    const onCategoryClicked = (categoryName) => {
        if (selectedCategories.includes(categoryName)) dispatch(removeSelectedCategory(categoryName))
        else dispatch(addSelectedCategory(categoryName))

    }


    if (isLoading) return <Spinner animation="border" variant="primary" />
    console.log('categories', categories)

    return <div>
        <ul>
            {categories.map(category => (
                <Badge bg={selectedCategories.includes(category.name) ? "success" : "primary"} key={category.id} onClick={() => onCategoryClicked(category.name)}>
                    {category.name}
                </Badge>
            ))}
        </ul>
    </div>

}