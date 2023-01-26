import {Box, Button, Card, CardContent, Container, Grid, TextField, Typography} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";
import "yup-phone";

const ContactForm = ({title, caption}) => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
        validateOnChange: true,
        onSubmit: (values, {resetForm}) => {

        },
        validationSchema: yup.object().shape({
            firstName: yup.string().required('First name required'),
            lastName: yup.string().required('Last name required'),
            email: yup.string().email('Invalid email').required('email required'),
            phone: yup.string().phone('Invalid phone').required('Phone name required'),
            subject: yup.string().required('Subject required'),
            message: yup.string().required('Message required'),
        })
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Container maxWidth="md">
                <Card
                    variant="outlined"
                    sx={{
                        borderBottomRightRadius: 32,
                        borderTopRightRadius: 32,
                        borderBottomLeftRadius: 32,
                        borderTopLeftRadius: 32,
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        backdropFilter: "blur(10px)"
                    }}>
                    <CardContent>

                        <Typography variant="h4" align="center" sx={{color: 'text.primary', mb: 2}}>
                            {title}
                        </Typography>
                        <Typography variant="body2" align="center" sx={{color: 'text.secondary', mb: 4}}>
                            {caption}
                        </Typography>

                        <Box sx={{mb: 2}}>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={6}>
                                    <TextField
                                        fullWidth={true}
                                        placeholder="First Name"
                                        required={true}
                                        label="First Name"
                                        variant="outlined"
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                        name="firstName"
                                        error={Boolean(formik.touched.firstName && formik.touched.firstName)}
                                        size="medium"
                                        color="secondary"
                                        sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <TextField
                                        fullWidth={true}
                                        placeholder="Last Name"
                                        required={true}
                                        label="Last Name"
                                        variant="outlined"
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                        name="lastName"
                                        error={Boolean(formik.touched.lastName && formik.touched.lastName)}
                                        size="medium"
                                        color="secondary"
                                        sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{mb: 2}}>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={6}>
                                    <TextField
                                        fullWidth={true}
                                        placeholder="Email"
                                        required={true}
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        helperText={formik.touched.email && formik.errors.email}
                                        name="email"
                                        error={Boolean(formik.touched.email && formik.touched.email)}
                                        size="medium"
                                        color="secondary"
                                        sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <TextField
                                        fullWidth={true}
                                        placeholder="Phone Number"
                                        required={true}
                                        label="Phone Number"
                                        type="tel"
                                        variant="outlined"
                                        helperText={formik.touched.phone && formik.errors.phone}
                                        name="phone"
                                        error={Boolean(formik.touched.phone && formik.touched.phone)}
                                        size="medium"
                                        color="secondary"
                                        sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{mb: 2}}>
                            <TextField
                                fullWidth={true}
                                placeholder="Subject"
                                required={true}
                                label="Subject"
                                type="text"
                                variant="outlined"
                                helperText={formik.touched.subject && formik.errors.subject}
                                name="subject"
                                error={Boolean(formik.touched.subject && formik.touched.subject)}
                                size="medium"
                                color="secondary"
                                sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Box>
                        <Box sx={{mb: 2}}>
                            <TextField
                                fullWidth={true}
                                placeholder="Message"
                                required={true}
                                label="Message"
                                type="text"
                                variant="outlined"
                                helperText={formik.touched.message && formik.errors.message}
                                name="message"
                                error={Boolean(formik.touched.message && formik.touched.message)}
                                size="medium"
                                color="secondary"
                                sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                multiline={true}
                                minRows={5}
                            />
                        </Box>
                        <Grid container={true} justifyContent="center">
                            <Grid item={true} xs={12} md={6} lg={4}>
                                <Button
                                    fullWidth={true}
                                    type="submit"
                                    color="secondary"
                                    disableElevation={true}
                                    variant="contained"
                                    sx={{textTransform: 'capitalize'}}
                                    size="large">
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </form>
    )
}

export default ContactForm;
