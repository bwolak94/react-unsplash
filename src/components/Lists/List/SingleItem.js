import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const SingleItem = (props) => {
    return (
        <Grid item xs={12} sm={4} onClick={()=> props.click(props.object)}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.description}
                        height="140"
                        image={props.urlImage}
                        title={props.description}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <span>By {props.userName}</span>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

    );
};

export default SingleItem;
