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
        // if (selectedCategories.includes(categoryName)) dispatch(removeSelectedCategory(categoryName))
        // else dispatch(addSelectedCategory(categoryName))

        if (categoryName === selectedCategories[0]) {
            dispatch(removeSelectedCategory(selectedCategories[0]))
            return
        }
        dispatch(removeSelectedCategory(selectedCategories[0]))
        dispatch(addSelectedCategory(categoryName))



    }


    if (isLoading) return <Spinner animation="border" variant="primary" />
    console.log('categories', categories)

    return <div>

        {categories.map(category => (
            <h4 className="category-badge" key={category.id}>
                <Badge
                    text={selectedCategories.includes(category.name) ? "dark" : "light"}
                    bg={selectedCategories.includes(category.name) ? "primary" : "dark"}
                    onClick={() => onCategoryClicked(category.name)
                    }>
                    {category.name}
                </Badge>
            </h4>



        ))}

    </div>

}