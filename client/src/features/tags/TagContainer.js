import { useGetTagsQuery } from "../api/apiSlice"


export const TagContainer = () => {

    const { data: tags, isLoading } = useGetTagsQuery()

    if (isLoading) return <p>loading...</p>
    console.log('tags', tags)
    return (
        <div>
            <table>
                <tbody>
                    {tags.map(tag => <tr key={tag.id}>
                        <td>{tag.name.toLowerCase()}</td>
                    </tr>)}
                </tbody>
            </table>

        </div>

    )
}