import { useState } from "react"
import { Button, Form, Badge } from 'react-bootstrap';

import { useSelector } from "react-redux"


export const EditWebsite = () => {
    const website = useSelector(state => state.uiReducer.selectedWebsite)
    console.log(website)
    const [title, onTitleChanged] = useState(website.name)
    const [description, onDescriptionChanged] = useState(website.description)
    const [categories, setCategories] = useState(website.categories)
    const [tags, setTags] = useState(website.tags)
    const onSaveWebsiteClicked = () => {
        console.log('clicked')
    }

    if (Object.keys(website).length == 0) return <p>Something went wrong</p>
    return (<>
        <div style={{ backgroundColor: "white" }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter new website title" value={title} onChange={onTitleChanged} />
                    <Form.Text className="text-muted">
                        Edit website title
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter new description" value={description} onChange={onDescriptionChanged} />
                    <Form.Text className="text-muted">
                        Edit website description
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Categories</Form.Label>
                    <Form.Text>

                        <h3 className="category-badge" >
                            {categories.map(category => <><Badge pill text={"light"} bg={"dark"} key={category.id}>{category.name.toLowerCase()}</Badge>
                                <h6><Badge bg={"danger"}>remove</Badge></h6></>)}

                        </h3>

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tags</Form.Label>
                    <Form.Text>
                        <h5 className="category-badge">
                            {tags.map(tag => <Badge pill text={"light"} bg={"secondary"} >{tag.name.toLowerCase()}</Badge>)}
                        </h5>

                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={onSaveWebsiteClicked}>
                    Save Website Information
                </Button>
            </Form>
        </div>

    </>
    )

}