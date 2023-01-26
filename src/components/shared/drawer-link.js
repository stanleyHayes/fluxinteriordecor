import {Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";

const DrawerLink = ({icon, label, link, active}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(UI_ACTION_CREATORS.toggleDrawer(false));
    }

    return (
        <Link onClick={handleClick} to={link} style={{textDecoration: 'none'}}>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Typography
                    variant="body1"
                    sx={{color: active ? 'text.primary' : 'text.secondary', pl: 4}}>
                    {label}
                </Typography>
            </Stack>
        </Link>
    )
}

export default DrawerLink;
