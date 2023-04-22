import { useGetWebsitesQuery } from "../api/apiSlice"


let WebsiteCard = ({ website }) => {
    return (
        <article className="post-excerpt" key={website.id}>
            <h3>{website.name}</h3>
            <div>
                <p>{website.url}</p>
            </div>
            <p className="post-content">{website.description.substring(0, 100)}</p>

        </article>
    )
}




export const WebsiteContainer = () => {

    const { data: websites, isLoading } = useGetWebsitesQuery()

    if (isLoading) return <p>Loading...</p>
    console.log(websites)
    return (<div>
        <h2>Websites</h2>
        {websites.map(website => <WebsiteCard key={website.id} website={website} />)}
    </div>)

}