import { useGetCategoriesQuery } from "../api/apiSlice"
import Badge from 'react-bootstrap/Badge'

export const CategoryContainer = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery()


    if (isLoading) return <p>Loading...</p>
    console.log(categories)
    return <div>
        <ul>
            {categories.map(category => (
                <Badge pill bg="primary">
                    {category.name}
                </Badge>
            ))}
        </ul>
    </div>

}