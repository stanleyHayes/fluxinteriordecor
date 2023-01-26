import {Card, CardContent, Typography} from "@mui/material";

const CoreValue = ({value}) => {

    return (
        <Card
            variant="outlined"
            sx={{
                height: '100%',
                borderBottomRightRadius: 32,
                borderTopRightRadius: 32,
                borderBottomLeftRadius: 32,
                borderTopLeftRadius: 32,
                backgroundColor: "background.default"
            }}>
            <CardContent>
                <Typography
                    sx={{color: 'primary.secondary', textTransform: "capitalize"}}
                    variant="h5"
                    align="center">{value.name}</Typography>
            </CardContent>
        </Card>
    )
}

export default CoreValue;
