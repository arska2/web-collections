import { useState } from "react"
import { Button, Form, Badge, Popover, OverlayTrigger, ListGroup } from 'react-bootstrap';

import { useSelector } from "react-redux"
import { useGetCategoriesQuery, useGetTagsQuery } from "../api/apiSlice";


export const EditWebsite = () => {
    const { data: tags = [], isLoading: isLoadingTags } = useGetTagsQuery()
    const { data: categories = [], isLoading: isLoadingCategories } = useGetCategoriesQuery()
    const website = useSelector(state => state.uiReducer.selectedWebsite)
    console.log(website)
    const [title, onTitleChanged] = useState(website.name)
    const [description, onDescriptionChanged] = useState(website.description)
    const [newTags, setNewTags] = useState(website.tags.map(t => t.name))
    const [newCategories, setNewCategories] = useState(website.categories.map(c => c.name))





    const onSaveWebsiteClicked = () => {

        console.log('clicked')
    }

    const onTagClicked = (tag) => {
        const currentTags = newTags
        console.log('currentTags', currentTags)
        if (currentTags.includes(tag.name)) {
            setNewTags(currentTags.filter(t => t !== tag.name))
        } else {
            setNewTags([...currentTags, tag.name])
        }
    }

    const onCategoryClicked = (category) => {
        const currentCategories = newCategories
        if (currentCategories.includes(category.name)) {
            setNewCategories(currentCategories.filter(c => c !== category.name))
        } else {
            setNewCategories([...currentCategories, category.name])
        }
    }


    if (Object.keys(website).length === 0 || isLoadingCategories || isLoadingTags) return <p>Something went wrong</p>

    return (<>
        <div style={{ backgroundColor: "white" }}>
            <h1>Edit Information About Website: {website.url}</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><h2><b>Title</b></h2></Form.Label>
                    <Form.Control type="text" placeholder="Enter new website title" value={title} onChange={onTitleChanged} />
                    <Form.Text className="text-muted">
                        Edit website title
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><h2><b>Description</b></h2></Form.Label>
                    <Form.Control type="textarea" placeholder="Enter new description" value={description} onChange={onDescriptionChanged} />
                    <Form.Text className="text-muted">
                        Edit website description
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Text>
                        <OverlayTrigger
                            trigger="click"
                            key={'bottom'}
                            placement={'bottom'}
                            overlay={
                                <Popover id={`popover-positioned-${'bottom2'}`}>
                                    <Popover.Header as="h3">Select Categories</Popover.Header>
                                    <Popover.Body>
                                        <ListGroup as="ul">
                                            {categories.map(category => <ListGroup.Item active={newCategories.includes(category.name) ? true : false} as="li" key={category.id} onClick={() => onCategoryClicked(category)}>{category.name}</ListGroup.Item>)}
                                        </ListGroup>

                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <Button variant="success">Edit Categories</Button>
                        </OverlayTrigger>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Text>
                        <OverlayTrigger
                            trigger="click"
                            key={'bottom'}
                            placement={'bottom'}
                            overlay={
                                <Popover id={`popover-positioned-${'bottom'}`}>
                                    <Popover.Header as="h3">Select tags</Popover.Header>
                                    <Popover.Body>
                                        <ListGroup as="ul">
                                            {tags.map(tag => <ListGroup.Item active={newTags.includes(tag.name) ? true : false} as="li" key={tag.id} onClick={() => onTagClicked(tag)}>{tag.name}</ListGroup.Item>)}
                                        </ListGroup>

                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <Button variant="success">Edit Tags</Button>
                        </OverlayTrigger>


                    </Form.Text>
                </Form.Group>



                <Button variant="primary" onClick={onSaveWebsiteClicked}>
                    Save Website Information
                </Button>
            </Form>
        </div>

    </>
    )

}