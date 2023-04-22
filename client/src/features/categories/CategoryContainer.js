import { useGetCategoriesQuery } from "../api/apiSlice"


export const CategoryContainer = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery()


    if (isLoading) return <p>Loading...</p>
    console.log(categories)
    return <div>
        <ul>
            {categories.map(c => <li key={c.id}><b>{c.name}</b><p>{c.description}</p></li>)}
        </ul>
    </div>

}