import {Avatar, Card, CardContent, Rating, Stack, Typography} from "@mui/material";
import currencyFormatter from "currency-formatter";
import {UTILS} from "../../utils/utils";

const Product = ({product}) => {

    return (
        <Card
            sx={{
                borderTopRightRadius: 32,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 32,
                borderTopLeftRadius: 32,
                height: "100%"
            }}
            elevation={0}>
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
                            {UTILS.getInitials(product.name)}
                        </Typography>
                    </Avatar>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <Typography align="center" variant="h5" sx={{color: 'text.primary'}}>{product.name}</Typography>
                    <Stack direction="row" justifyContent="center">
                        <Rating
                            precision={0.1}
                            readOnly={true}
                            value={product.rating.average}
                            size="large"
                        />
                    </Stack>
                    <Typography align="center" variant="h5" sx={{color: 'text.secondary'}}>
                        {currencyFormatter.format(product.price.amount, {code: product.price.currency})}
                    </Typography>
                    <Typography
                        align="center"
                        variant="body1"
                        sx={{color: 'text.secondary', textTransform: "capitalize"}}>
                        {product.description}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Product;
