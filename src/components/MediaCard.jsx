import React, { useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, makeStyles, Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
})

export default function MediaCard(props) {
    const [showDescription, setShowDescription] = useState(props.showDescription)
    const [saved, setSaved] = useState(props.saved)
    const [id, setId] = useState(props.id)
    const [addedAlert, setAddedAlert] = useState(false)
    const [removedAlert, setRemovedAlert] = useState(false)

    const { title } = props
    const { href } = props
    const { description } = props
    const classes = useStyles()

    const savePicToDB = async () => {
        const newId = await props.savePicToDB({ title: title, href: href, description: description })
        setId(newId);
        setAddedAlert(true)
        setSaved(true)
    }

    const removePicFromDB = () => {
        props.removePicFromDB(id)
        setRemovedAlert(true)
        setSaved(false)
    }

    const changeDescription = () => setShowDescription(!showDescription)

    const handleClose = () => {
        setAddedAlert(false)
        setRemovedAlert(false)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Link to={'/favourites/' + id} onClick={props.movePage} style={!id ? { pointerEvents: "none" } : null}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        className={classes.media}
                        image={href}
                        title="Contemplative Reptile"
                    />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    {showDescription ?
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography> :
                        null}
                </CardContent>
            </CardActionArea>
            <CardActions>
                {saved === false ?
                    <Button size="large" color="default" onClick={savePicToDB}>
                        <i className="far fa-thumbs-up"> </i>
                            Like
                        </Button> : saved ?
                        <Button size="large" color="secondary" onClick={removePicFromDB}>
                            <i className="far fa-thumbs-down"></i>
                            DisLike
                        </Button> :
                        null}
                {showDescription ?
                    <Button size="large" color="primary" onClick={changeDescription}>
                        hide
                        </Button> :
                    <Button size="large" color="primary" onClick={changeDescription}>
                        Learn More
                        </Button>}
            </CardActions>

            <Snackbar open={addedAlert} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">Saved successfully</Alert>
            </Snackbar>

            <Snackbar open={removedAlert} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">Removed successfully</Alert>
            </Snackbar>
        </Card>
    );
}