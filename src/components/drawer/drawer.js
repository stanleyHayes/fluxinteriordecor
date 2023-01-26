import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box, Button,
    Container,
    Link as MUILink,
    Stack,
    Typography
} from "@mui/material";
import DrawerLink from "../shared/drawer-link";
import {Link, useLocation} from "react-router-dom";
import {
    ChevronRightOutlined,
    ContactPage,
    ContactPageOutlined,
    Home,
    HomeOutlined,
    Info,
    InfoOutlined,
    Subject
} from "@mui/icons-material";

const Drawer = () => {

    const {pathname} = useLocation();

    return (
        <Box
            sx={{
                minWidth: {xs: '90vw'},
                minHeight: "100vh",
                display: {xs: 'block', lg: 'none'},
                py: 2,
                backgroundColor: 'background.paper'
            }}>
            <Stack sx={{mb: 8}} direction="column" spacing={3}>
                <DrawerLink
                    link="/"
                    active={pathname === '/'}
                    icon={
                        pathname === '/' ?
                            (<Home color="secondary"/>) :
                            (<HomeOutlined sx={{color: 'text.secondary'}}/>)
                    }
                    label="Home"
                />

                <DrawerLink
                    link="/about"
                    active={pathname === '/about'}
                    icon={
                        pathname === '/about' ?
                            (<Info color="secondary"/>) :
                            (<InfoOutlined sx={{color: 'text.secondary'}}/>)
                    }
                    label="About Us"
                />

                <Accordion
                    disableGutters={true}
                    square={true}
                    sx={{
                        pl: 3,
                        backgroundColor: [
                            '/departments',
                            '/departments/preschool',
                            '/departments/primary',
                            '/departments/international',
                            '/departments/jhs',
                        ]
                            .includes(pathname) ? 'light.secondary' : false,
                        borderLeftWidth: [
                            '/departments',
                            '/departments/preschool',
                            '/departments/primary',
                            '/departments/international',
                            '/departments/jhs',
                        ]
                            .includes(pathname) ? 4 : 0,
                        borderLeftStyle: [
                            '/departments',
                            '/departments/preschool',
                            '/departments/primary',
                            '/departments/international',
                            '/departments/jhs',
                        ]
                            .includes(pathname) ? 'solid' : 'none',
                        borderLeftColor: [
                            '/departments',
                            '/departments/preschool',
                            '/departments/primary',
                            '/departments/international',
                            '/departments/jhs',
                        ]
                            .includes(pathname) ? 'secondary.main' : false
                    }}
                    elevation={0}
                    variant="elevation">
                    <AccordionSummary
                        sx={{ml: -1, borderRadius: 0}}
                        expandIcon={<ChevronRightOutlined/>}>
                        <Stack
                            sx={{width: "100%"}}
                            direction="row" alignItems="center" spacing={2}>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: [
                                        '/departments',
                                        '/departments/preschool',
                                        '/departments/primary',
                                        '/departments/international'
                                    ]
                                        .includes(pathname) ? 'secondary.main' : 'text.secondary'
                                }}>
                                Departments
                            </Typography>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={2}>
                            <DrawerLink
                                link="/departments"
                                path="/departments"
                                active={pathname === '/departments'}
                                label="Overview"
                            />
                            <DrawerLink
                                link="/departments/preschool"
                                path="/departments/preschool"
                                active={pathname === '/departments/preschool'}
                                label="Preschool"
                            />
                            <DrawerLink
                                link="/departments/primary"
                                path="/departments/primary"
                                active={pathname === '/departments/primary'}
                                label="Primary"
                            />
                            <DrawerLink
                                link="/departments/international"
                                path="/departments/international"
                                active={pathname === '/departments/international'}
                                label="International Secondary"
                            />
                        </Stack>
                    </AccordionDetails>
                </Accordion>


                <DrawerLink
                    link="/contact"
                    active={pathname === '/contact'}
                    icon={
                        pathname === '/contact' ?
                            (<ContactPage color="secondary"/>) :
                            (<ContactPageOutlined sx={{color: 'text.secondary'}}/>)
                    }
                    label="Contact Us"
                />

                <Accordion
                    disableGutters={true}
                    square={true}
                    sx={{
                        pl: 3,
                        backgroundColor: [
                            '/news',
                            '/news/facebook',
                            '/news/twitter',
                            '/news/instagram',
                            '/news/articles',
                        ]
                            .includes(pathname) ? 'light.secondary' : false,
                        borderLeftWidth: [
                            '/news',
                            '/news/facebook',
                            '/news/twitter',
                            '/news/instagram',
                            '/news/articles',
                        ]
                            .includes(pathname) ? 4 : 0,
                        borderLeftStyle: [
                            '/news',
                            '/news/facebook',
                            '/news/twitter',
                            '/news/instagram',
                            '/news/articles',
                        ]
                            .includes(pathname) ? 'solid' : 'none',
                        borderLeftColor: [
                            '/news',
                            '/news/facebook',
                            '/news/twitter',
                            '/news/instagram',
                            '/news/articles',
                        ]
                            .includes(pathname) ? 'secondary.main' : 'text.secondary'
                    }} elevation={0} variant="elevation">
                    <AccordionSummary
                        sx={{ml: -1}}
                        expandIcon={<ChevronRightOutlined sx={{
                            color: [
                                '/news',
                                '/news/facebook',
                                '/news/twitter',
                                '/news/instagram',
                                '/news/articles',
                            ]
                                .includes(pathname) ? 'secondary.main' : 'text.secondary'
                        }}/>}>
                        <Stack
                            sx={{
                                width: "100%",
                                borderRadius: 0,
                            }}
                            direction="row" alignItems="center" spacing={2}>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: [
                                        '/news',
                                        '/news/facebook',
                                        '/news/twitter',
                                        '/news/instagram',
                                        '/news/articles',
                                    ]
                                        .includes(pathname) ? 'secondary.main' : 'text.secondary'
                                }}>
                                News
                            </Typography>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={2}>
                            <DrawerLink
                                link="/news"
                                path="/news"
                                active={pathname === '/news'}
                                label="Overview"
                            />
                            <DrawerLink
                                path="/news/facebook"
                                link="/news/facebook"
                                active={pathname === '/news/facebook'}
                                label="Facebook"
                            />
                            <DrawerLink
                                link="/news/twitter"
                                path="/news/twitter"
                                active={pathname === '/news/primary'}
                                label="Twitter"
                            />
                            <DrawerLink
                                path="/news/instagram"
                                link="/news/instagram"
                                active={pathname === '/news/international'}
                                label="Instagram"
                            />
                            <DrawerLink
                                path="/news/articles"
                                link="/news/articles"
                                active={pathname === '/news/articles'}
                                label="Articles"
                            />
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <Stack spacing={3} sx={{px: 3}}>

                    <Link to="/departments" style={{textDecoration: 'none', width: "100%"}}>
                        <Button
                            fullWidth={true}
                            sx={{textTransform: 'capitalize'}}
                            disableElevation={true}
                            variant="contained"
                            color="secondary"
                            size="large">
                            Enroll Now
                        </Button>
                    </Link>

                    <MUILink
                        sx={{width: "100%"}}
                        underline="none"
                        href="https://portal.mothercareschool.com">
                        <Button
                            sx={{
                                textTransform: 'capitalize',
                                borderWidth: 2,
                                color: "secondary.main",
                                borderStyle: "solid",
                                borderColor: "secondary.main"
                            }}
                            fullWidth={true}
                            disableElevation={true}
                            variant="outlined"
                            color="secondary"
                            size="large">
                            Community Portal
                        </Button>
                    </MUILink>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Drawer;
