import {Avatar, Card, CardContent, Stack, Typography} from "@mui/material";
import {UTILS} from "../../utils/utils";

const Team = ({team}) => {

    return (
        <Card
            variant="outlined"
            sx={{
                mx: 2,
                height: '100%',
                position: 'relative',
                borderBottomRightRadius: 0,
                borderTopRightRadius: 32,
                borderBottomLeftRadius: 32,
                borderTopLeftRadius: 0,
                '&:hover': {
                    '& .media': {
                        transform: 'scale(1.1)',
                        transition: 'transform 350ms ease-in-out'
                    }
                }
            }}>
            <CardContent>
                <Stack direction="row" justifyContent="center">
                    <Avatar variant="circular" sx={{
                        width: 100, height: 100, mb: 2,
                        backgroundColor: "light.secondary",
                        borderBottomRightRadius: 0,
                        borderTopRightRadius: 32,
                        borderBottomLeftRadius: 32,
                        borderTopLeftRadius: 0,
                    }}>
                        <Typography variant="h3" align="center" sx={{color: 'secondary.main', mb: 1}}>
                            {UTILS.getInitials(team.name)}
                        </Typography>
                    </Avatar>
                </Stack>

                <Typography variant="h6" align="center" sx={{color: 'text.primary', mb: 1}}>
                    {team.name}
                </Typography>
                <Typography variant="body2" align="center" sx={{color: 'text.secondary', mb: 1}}>
                    {team.role}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Team;
