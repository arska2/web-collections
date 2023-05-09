import { Badge } from "react-bootstrap"
import { useSelector } from "react-redux"


export const EditWebsite = () => {
    const website = useSelector(state => state.uiReducer.selectedWebsite)
    console.log(website)

    if (Object.keys(website).length == 0) return <p>Something went wrong</p>
    return (<>
        <article className="" key={website.id} >
            <header style={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={{ whiteSpace: 'nowrap', display: 'inline-block', marginRight: '1rem' }}>{website.name}</h2>

            </header>
            <main>
                <div
                    className=""
                    style={{
                        backgroundImage: `url(/images/${website.url.split('//')[1].replace('www.', '').split('.')[0] + ".png"})`
                    }}
                ></div>
                <div className="">
                    <p>{website.description}</p>
                </div>
            </main>
            <footer style={{ backgroundColor: 'lightgray' }}>{website.tags.map(tag => <Badge pill bg="secondary" key={"" + website.id + tag.id}>{tag.name}</Badge>)}</footer>
        </article>
    </>)

}