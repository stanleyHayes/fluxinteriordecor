import {
    AppBar,
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Link,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import Mission from "../../components/shared/mission";
import ContactForm from "../../components/shared/contact-form";

import mission from "./../../assets/images/icons/mission.png";
import vision from "./../../assets/images/icons/vision.png";
import {UTILS} from "../../utils/utils";
import {LUXURY_MART_DATA} from "../../utils/data";
import Team from "../../components/shared/team";

import Carousel from "react-multi-carousel";
import {CallOutlined, LocationOnOutlined, MailOutlined} from "@mui/icons-material";
import {Element, Link as ScrollLink} from "react-scroll";
import CoreValue from "../../components/shared/core-value";
import banner from "./../../assets/images/banner/banner.jpg";
import service from "./../../assets/images/banner/service.jpg";
import idea from "./../../assets/images/banner/idea.jpg";
import competitors from "./../../assets/images/banner/competitors.jpg";
import marketing from "./../../assets/images/banner/marketing.jpg";
import about from "./../../assets/images/banner/about.jpg";
import Overlay from "../../components/shared/overlay";
import 'react-multi-carousel/lib/styles.css';

const LandingPage = () => {
    return (
        <Box>
            <Box id="top">
                <AppBar
                    color="transparent"
                    elevation={0}>
                    <Toolbar>
                        <Grid container={true} spacing={2} justifyContent="center">
                            <Grid item={true} xs="auto" md="auto">
                                <ScrollLink
                                    spy={true}
                                    to="home"
                                    delay={100}
                                    duration={2000}
                                    smooth={true}>
                                    <Typography
                                        sx={{
                                            color: "white",
                                            cursor: "pointer",
                                            "&:hover": {color: "#19ffb9", transition: "all 50ms 500ms ease-out"},
                                            fontSize: {xs: 12, lg: 16}
                                        }}
                                        variant="h6">
                                        Home
                                    </Typography>
                                </ScrollLink>
                            </Grid>
                            <Grid item={true} xs="auto" md="auto">
                                <ScrollLink
                                    spy={true}
                                    to="about"
                                    delay={100}
                                    duration={2000}
                                    smooth={true}>
                                    <Typography
                                        sx={{
                                            color: "white",
                                            cursor: "pointer",
                                            "&:hover": {color: "#19ffb9", transition: "all 50ms 500ms ease-out"},
                                            fontSize: {xs: 12, lg: 16}
                                        }}
                                        variant="h6">
                                        About
                                    </Typography>
                                </ScrollLink>
                            </Grid>
                            <Grid item={true} xs="auto" md="auto">
                                <ScrollLink
                                    spy={true}
                                    to="contact"
                                    delay={100}
                                    duration={2000}
                                    smooth={true}>
                                    <Typography
                                        sx={{
                                            color: "white",
                                            cursor: "pointer",
                                            "&:hover": {color: "#19ffb9", transition: "all 50ms 500ms ease-out"},
                                            fontSize: {xs: 12, lg: 16}
                                        }}
                                        variant="h6">
                                        Contact
                                    </Typography>
                                </ScrollLink>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>

            <Element>
                <Element id="home" name="home">
                    <Box>
                        <Overlay
                            children={
                                <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                                    <Container>
                                        <Typography variant="h2" sx={{color: 'white', mb: 2}}>
                                            Flux Interior
                                        </Typography>
                                        <Typography variant="h4" sx={{color: 'white'}}>
                                            Decor Services
                                        </Typography>
                                    </Container>
                                </Box>}
                            image={banner}
                            backgroundColor="#000000"/>
                    </Box>
                </Element>

                <Element id="about" name="about">
                    <Box
                        sx={{
                            minHeight: '30vh',
                            alignItems: 'center',
                            py: 8,
                            backgroundColor: "background.default"
                        }}>

                        <Container maxWidth="xl">
                            <Typography
                                align="center"
                                variant="h4"
                                sx={{color: 'secondary.main', mb: 4, textTransform: 'uppercase'}}>
                                Mission & Vision
                            </Typography>
                            <Grid container={true} spacing={4}>
                                <Grid item={true} xs={12} md={4}>
                                    <Mission
                                        title="Mission"
                                        description="We strive to be the strongest and the most reliable Interior decor company at the national level."
                                        icon={<img src={mission} alt="" style={{height: 100, width: 100}}/>}/>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Mission
                                        title="Vision"
                                        description="Our mission is to deliver the best technology, user experience, and products for home remodeling and decor."
                                        icon={<img src={vision} alt="" style={{height: 100, width: 100}}/>}/>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Mission
                                        title="Goals"
                                        description="To expand our work over the continent, and respond to customers’ needs. "
                                        icon={<img src={vision} alt="" style={{height: 100, width: 100}}/>}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Box pt={8} pb={8} sx={{backgroundColor: 'background.paper'}}>
                        <Container>
                            <Typography mb={2} variant="h4" align="center">Our Core Values</Typography>
                            <Grid container={true} spacing={2}>
                                {LUXURY_MART_DATA.CORE_VALUES.map((value, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={4}>
                                            <CoreValue value={value}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Container>
                    </Box>

                    <Box sx={{py: 8}}>
                        <Container>
                            <Grid container={true} spacing={4} justifyContent="space-between" alignItems="center">
                                <Grid item={true} xs={12} md={4}>
                                    <CardMedia
                                        component="img"
                                        src={about}
                                        sx={{
                                            borderBottomRightRadius: 32,
                                            borderTopRightRadius: 32,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            height: '100%',
                                            width: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}/>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Box>
                                        <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                            Who We Are?
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            My team and I did market research and some surveys and we discovered that
                                            students normally stay late on campus so we realized that providing grocery
                                            services will enable students to snack during the night and enable them to
                                            study for longer hours without getting too hungry</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

                    <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                        <Container>
                            <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                                <Grid item={true} xs={12} md={6}>
                                    <Box>
                                        <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                            What We Do?
                                        </Typography>
                                        <Stack spacing={2}>
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                A new perspective with Horizon App.
                                            </Typography> <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            Ability to purchase items from a diversity of choices.
                                        </Typography>
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                A team ready to respond to customers’ desires.
                                            </Typography>
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                Highest quality Interior decor provided.
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <CardMedia
                                        component="img"
                                        src={service}
                                        sx={{
                                            borderBottomRightRadius: 32,
                                            borderTopRightRadius: 32,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            height: '100%',
                                            width: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

                    <Box sx={{py: 8}}>
                        <Container>
                            <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                                <Grid item={true} xs={12} md={4}>
                                    <CardMedia
                                        component="img"
                                        src={idea}
                                        sx={{
                                            borderBottomRightRadius: 32,
                                            borderTopRightRadius: 32,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            height: '100%',
                                            width: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}/>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Box>
                                        <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                            Why this idea?
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                            Market analysis reveals a need for a new approach in terms of Decor
                                            Services.
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                            Flux Interior decor concept disrupts the e-commerce industry.
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                            Our business offers comprehensive and innovative Interior decor for homes
                                            and offices.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

                    <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                        <Container>
                            <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                                <Grid item={true} xs={12} md={6}>
                                    <Box>
                                        <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                            Marketing Strategies
                                        </Typography>
                                        <Stack spacing={2}>
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                Referrals from pleased clients.
                                            </Typography>
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                Exquisite videos of our interior decor ideas.
                                            </Typography>
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                A team ready to respond to customers’ desires. Promoting our work by
                                                collaborating with influencers.
                                            </Typography>
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                Suitable subscription through Horizon App with some amazing features.
                                            </Typography>
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                Develop our presence on social media.
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <CardMedia
                                        component="img"
                                        src={marketing}
                                        sx={{
                                            borderBottomRightRadius: 32,
                                            borderTopRightRadius: 32,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            height: '100%',
                                            width: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

                    <Box sx={{py: 8}}>
                        <Container>
                            <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                                <Grid item={true} xs={12} md={4}>
                                    <CardMedia
                                        component="img"
                                        src={competitors}
                                        sx={{
                                            borderBottomRightRadius: 32,
                                            borderTopRightRadius: 32,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            height: '100%',
                                            width: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}/>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Box>
                                        <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                            Competitors
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                            I Mobile App companies operating in the buying/selling of furniture.
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                            Interior decor services.
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                            Online design services.
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                            Do it yourself people.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

                    <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                        <Container maxWidth="xl">
                            <Box>
                                <Typography align="center" variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                    Our Team
                                </Typography>
                                <Carousel
                                    autoPlay={true}
                                    autoPlaySpeed={5000}
                                    infinite={true}
                                    partialVisible={true}
                                    keyBoardControl={true}
                                    pauseOnHover={true}
                                    responsive={UTILS.responsive}>{LUXURY_MART_DATA.TEAM.map((team, index) => {
                                    return (
                                        <Box key={index}>
                                            <Team team={team}/>
                                        </Box>
                                    )
                                })}
                                </Carousel>
                            </Box>
                        </Container>
                    </Box>
                </Element>

                <Element id="contact" name="contact">
                    <Box
                        sx={{
                            minHeight: '30vh',
                            alignItems: 'center',
                            py: 8,
                            backgroundImage: `url(${banner})`,
                        }}>
                        <Box sx={{mb: 8}}>
                            <Container maxWidth="xl">
                                <Typography variant="h5" align="center" sx={{color: 'text.primary', mb: 4}}>
                                    Contact Us
                                </Typography>
                                <Grid container={true} spacing={4}>
                                    <Grid item={true} xs={12} md={4}>
                                        <Link href="#" rel="noopener" underline="none">
                                            <Card
                                                variant="outlined"
                                                sx={{
                                                    borderBottomRightRadius: 32,
                                                    borderTopRightRadius: 32,
                                                    borderBottomLeftRadius: 32,
                                                    borderTopLeftRadius: 32,
                                                    height: '100%',
                                                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                                                    backdropFilter: "blur(10px)"
                                                }}>
                                                <CardContent>
                                                    <Stack direction="column" spacing={3}>
                                                        <Stack direction="row" justifyContent="center">
                                                            <LocationOnOutlined
                                                                color="secondary"
                                                                sx={{
                                                                    backgroundColor: 'light.secondary',
                                                                    padding: 1,
                                                                    fontSize: 36,
                                                                    borderBottomRightRadius: 4,
                                                                    borderTopRightRadius: 12,
                                                                    borderBottomLeftRadius: 12,
                                                                    borderTopLeftRadius: 4
                                                                }}/>
                                                        </Stack>
                                                        <Typography
                                                            variant="h6"
                                                            align="center"
                                                            sx={{color: 'text.primary'}}>
                                                            Address
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            align="center"
                                                            sx={{color: 'text.secondary'}}>
                                                            1 Agbogba – Ashongmang Rd Accra, Ghana
                                                        </Typography>
                                                    </Stack>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </Grid>

                                    <Grid item={true} xs={12} md={4}>
                                        <Link href="mailto:fluxinteriordecor@gmail.com" underline="none">
                                            <Card
                                                sx={{
                                                    borderBottomRightRadius: 32,
                                                    borderTopRightRadius: 32,
                                                    borderBottomLeftRadius: 32,
                                                    borderTopLeftRadius: 32,
                                                    height: '100%',
                                                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                                                    backdropFilter: "blur(10px)"
                                                }} variant="outlined">
                                                <CardContent>
                                                    <Stack direction="column" spacing={3}>
                                                        <Stack direction="row" justifyContent="center">
                                                            <MailOutlined
                                                                color="secondary"
                                                                sx={{
                                                                    backgroundColor: 'light.secondary',
                                                                    padding: 1,
                                                                    fontSize: 36,
                                                                    borderBottomRightRadius: 4,
                                                                    borderTopRightRadius: 12,
                                                                    borderBottomLeftRadius: 12,
                                                                    borderTopLeftRadius: 4
                                                                }}/>
                                                        </Stack>
                                                        <Typography
                                                            variant="h6"
                                                            align="center"
                                                            sx={{color: 'text.primary'}}>
                                                            Email
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            align="center"
                                                            sx={{color: 'text.secondary'}}>
                                                            fluxinteriordecor@gmail.com
                                                        </Typography>
                                                    </Stack>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </Grid>

                                    <Grid item={true} xs={12} md={4}>
                                        <Link href="tel:+233(0)502019234" underline="none">
                                            <Card
                                                sx={{
                                                    borderBottomRightRadius: 32,
                                                    borderTopRightRadius: 32,
                                                    borderBottomLeftRadius: 32,
                                                    borderTopLeftRadius: 32,
                                                    height: '100%',
                                                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                                                    backdropFilter: "blur(10px)"
                                                }} variant="outlined">
                                                <CardContent>
                                                    <Stack direction="column" spacing={3}>
                                                        <Stack direction="row" justifyContent="center">
                                                            <CallOutlined
                                                                color="secondary"
                                                                sx={{
                                                                    backgroundColor: 'light.secondary',
                                                                    padding: 1,
                                                                    fontSize: 36,
                                                                    borderBottomRightRadius: 4,
                                                                    borderTopRightRadius: 12,
                                                                    borderBottomLeftRadius: 12,
                                                                    borderTopLeftRadius: 4
                                                                }}/>
                                                        </Stack>
                                                        <Typography
                                                            variant="h6"
                                                            align="center"
                                                            sx={{color: 'text.primary'}}>
                                                            Phone
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            align="center"
                                                            sx={{color: 'text.secondary'}}>
                                                            +233 50 471 2602
                                                        </Typography>
                                                    </Stack>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>
                        <Box>
                            <ContactForm
                                title="Send Message"
                                caption="Send us a message and our customer support will help you find answers to your questions."
                            />
                        </Box>
                    </Box>
                </Element>
            </Element>
        </Box>
    )
}

export default LandingPage;
