import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const EpisodesList = ({ item }) => {
    const windowWidth = window.innerWidth;

    return (
        <>
            <ListItem data-testid="ListItem">
                <ListItemText
                    primary="Episode"
                    secondary={
                        <>
                            <Typography
                                sx={{ display: 'block', fontSize: "1.3rem" }}
                                component="h3"
                                variant="div"
                            >
                                <Link data-testid="link" to={`/episode/${item.episode_id}`}>{item.title}</Link>


                            </Typography>

                            <Typography
                                sx={{ display: 'inline', fontSize: "1.3rem" }}
                                component="h3"
                                variant="div"
                            >
                                {item.air_date}

                            </Typography>
                        </>
                    }
                />
                <ListItemAvatar className="img-container" >
                    <Avatar sx={{ display: windowWidth < 460 ? "none" : "block", width: "70px", height: "70px" }} src="https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png" />
                </ListItemAvatar>
            </ListItem>

            <Divider />
        </>
    );
}
