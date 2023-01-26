import {Card, CardContent, Stack, Typography} from "@mui/material";

const Mission = ({icon, title, description}) => {
    return (
        <Card
            sx={{
                height: "100%",
                borderBottomRightRadius: 32,
                borderTopRightRadius: 32,
                borderBottomLeftRadius: 32,
                borderTopLeftRadius: 32,
            }} elevation={0} variant="elevation">
            <CardContent>
                <Stack sx={{mb: 4}} direction="row" spacing={4} alignItems="center" justifyContent="center">
                    {icon}
                </Stack>
                <Stack spacing={2}>
                    <Typography align="center" variant="h4" sx={{color: 'text.primary'}}>
                        {title}
                    </Typography>
                    <Typography align="center" variant="body1" sx={{color: 'text.primary'}}>
                        {description}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Mission;
