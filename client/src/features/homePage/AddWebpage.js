import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { forwardRef, useState } from "react"
import { useGetCategoriesQuery, useGetTagsQuery } from '../api/apiSlice';
import { Button, Badge } from 'react-bootstrap';
import { Grid } from '@mui/material';



const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export const AddWebpage = ({ open, handleClose }) => {


    const { data: tags = [], isLoading: isLoadingTags } = useGetTagsQuery()
    const { data: categories = [], isLoading: isLoadingCategories } = useGetCategoriesQuery()
    const [newTags, setNewTags] = useState([])
    const [newCategories, setNewCategories] = useState([])

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


    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Add new website"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Fill in the data to add a new website
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Link"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    label="Title"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    label="Description"
                    fullWidth
                    variant="standard"
                />
                <Grid container>
                    {categories.map(category => <Grid item onClick={() => onCategoryClicked(category)}><Badge>{category.name}</Badge></Grid>)}
                </Grid>

                <Grid container>
                    {tags.map(tag => <Grid item key={tag.id} onClick={() => onTagClicked(tag)}><Badge>{tag.name}</Badge></Grid>)}


                </Grid>




            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
            </DialogActions>
        </Dialog>)
}