import { useGetWebsitesQuery } from "../api/apiSlice"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
let WebsiteCard = ({ website }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={website.image} />
            <Card.Body>
                <Card.Title>{website.name}</Card.Title>
                <Card.Text>
                    {website.description}
                </Card.Text>
                <Button variant="primary" href={website.url}>Visit Site</Button>
            </Card.Body>
        </Card>
    )
}




export const WebsiteContainer = () => {

    const { data: websites, isLoading } = useGetWebsitesQuery()

    if (isLoading) return <p>Loading...</p>
    console.log('websites', websites)
    return (<div>
        <CardGroup>
            {websites.map(website => <WebsiteCard key={website.id} website={website} />)}
        </CardGroup>

    </div>)

}