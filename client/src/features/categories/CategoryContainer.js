import { useGetCategoriesQuery } from "../api/apiSlice"
import Badge from 'react-bootstrap/Badge'

export const CategoryContainer = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery()


    if (isLoading) return <p>Loading...</p>
    console.log('categories', categories)
    return <div>
        <ul>
            {categories.map(category => (
                <Badge pill bg="primary" key={category.id}>
                    {category.name}
                </Badge>
            ))}
        </ul>
    </div>

}