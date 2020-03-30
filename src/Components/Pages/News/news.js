import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
//import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
//import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
import {withRouter} from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "600px",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function NewsTemplate(articles) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return articles.map( (article, index) => {
    return(
    <Grid item md={6} key={index}>
    <Card className={classes.root}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={article.title}
        subheader={(<div>Author:{article.author} <br/> Published:{article.publishedAt}</div>)}
      />
      {article.urlToImage? (
        <CardMedia
        className={classes.media}
        image={article.urlToImage}
        title="Image"
        />
      ) : (
        <CircularProgress/>
      )}

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {article.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {article.content}
          </Typography>
          <Typography variant="caption">
            <Link href={article.url} rel="noopener noreferrer" target="_blank">
              Read more
            </Link>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  )})
}

const News = (props) => {
  const articles = props.newsArticles
  return(
    <div>
      <Typography variant="h5" gutterBottom>
        Latest News
      </Typography>
      <Grid container spacing={2}>
        {NewsTemplate(articles)}
      </Grid>
    </div>
  )
}
export default withRouter(News)
