import React, { useEffect, useRef, useState } from "react";
import {
  MenuItem,
  Box,
  Button,
  Stack,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  Menu,
} from "@mui/material";
import Language from "../../Components/Language/Language";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const sectionRef = useRef(null);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { t } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navBottomData = [
    { title: "услуги", link: "services" },
    { title: "цены", link: "price" },
    { title: "о компании", link: "about" },
    { title: "контакты", link: "contacts" },
  ];
  const scrollToSection = () => {
    console.log("test");

    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      position="sticky"
      top={0}
      zIndex="1000"
      backgroundColor="transparent"
      sx={{
        ...(scrolled
          ? {
              boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.75)",
              backdropFilter: "blur(10px)",
              opacity: "95%",
              backgroundColor: "#fff",
            }
          : {
              boxShadow: "0",
              backgroundColor: "transparent",
            }),
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        position="sticky"
        top={0}
        zIndex="1000"
        backgroundColor="transparent"
        width="100%"
        // p={{
        //   lg: "3px 85px 7px 85px",
        //   md: "5px 70px 0 70px",
        //   xs: "4px 20px 10px 20px",
        // }}
      >
        {isMobile && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            p="0 10px"
          >
            <Stack>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  // gap: 2,
                  fontSize: 16,
                  fontFamily: "Impact",
                }}
              >
                <img
                  src="/images/logoSantehnik.png"
                  style={{ width: 60, height: 30, pt: 5 }}
                  alt="LOGO"
                />

                <Typography
                  color="#0D99FF"
                  fontFamily="Impact"
                  fontSize={12}
                  fontWeight={600}
                  lineHeight="44px"
                  mt={-1.5}
                >
                  Сантехник Питер
                </Typography>
              </a>
            </Stack>
            <Typography
              color="#0D99FF"
              fontFamily="Impact"
              fontSize={22}
              fontWeight={600}
              lineHeight="44px"
              ml={-2}
            >
              <a
                style={{
                  fontWeight: 600,
                  color: "#0D99FF",
                  textDecoration: "none",
                }}
                href="tel:8 (800) 234-12-82"
              >
                8 (800) 234-12-82
              </a>
            </Typography>
            <Stack>
              <IconButton
                onClick={toggleMobileMenu}
                sx={{
                  width: 24,
                  height: 24,
                  p: 0,
                  pr: 2,
                }}
              >
                <MenuIcon sx={{ color: "#0D99FF" }} />
              </IconButton>
            </Stack>
          </Stack>
        )}

        {/* <Typography
            fontFamily="Roboto"
            fontWeight={300}
            fontSize={12}
            color="#0D99FF"
            width="80%"
            lineHeight="17px"
            mt={-2}
            ml={5}
          >
            УСЛУГИ САНТЕХНИКА В САНКТ - ПЕТЕРБУРГЕ И ЛЕНИНГРАДСКОЙ ОБЛАСТИ{" "}
          </Typography> */}
        {!isMobile && (
          <Stack
            direction="row"
            alignItems="center"
            width="100%"
            p={{ lg: "0 90px", md: "0 70px", sm: "0 30px", xs: "0 20px" }}
            justifyContent="space-between"
          >
            <Stack direction="column">
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  // gap: 2,
                  fontSize: 16,
                  fontFamily: "Impact",
                }}
              >
                <img
                  src="/images/logoSantehnik.png"
                  style={{ width: 160, height: 60, pt: 5 }}
                  alt="LOGO"
                />
                <Typography
                  color="#0D99FF"
                  fontFamily="Impact"
                  fontSize={20}
                  fontWeight={400}
                  lineHeight="44px"
                  mt={-1}
                >
                  Сантехник - Питер
                </Typography>
              </a>
              {/* <a
              href="/"
              style={{
                textDecoration: "none",
                display: "flex",
                fontSize: 34,
                fontFamily: "Impact",
                // marginLeft: 60,
              }}
            >
              <img
                src="/images/logo (3).png"
                style={{ width: 160, height: 80, pt: 5 }}
                alt="LOGO"
              />
            </a> */}
            </Stack>

            <Stack
              direction="column"
              sx={{
                display: { lg: "flex", md: "flex", sm: "none" },
              }}
            >
              <Typography
                fontSize={16}
                textTransform="uppercase"
                fontFamily="Roboto"
                fontWeight="600"
                color="#0D99FF"
              >
                ВЫЗОВ САНТЕХНИКА
              </Typography>
              <span
                style={{
                  color: "#FFD700",
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: "16px",
                  fontFamily: "Roboto",
                  textTransform: "uppercase",
                  marginLeft: 5,
                }}
              >
                В ЛЮБОЙ РАЙОН
              </span>
            </Stack>

            <Stack
              direction="column"
              sx={{
                display: { lg: "flex", md: "flex", sm: "none" },
              }}
            >
              <Typography
                fontSize={16}
                textTransform="uppercase"
                fontFamily="Roboto"
                color="#0D99FF"
                fontWeight={600}
              >
                Сантехник на дом
              </Typography>
              <span
                style={{
                  color: "#FFD700",
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: "16px",
                  fontFamily: "Roboto",
                  textTransform: "uppercase",
                }}
              >
                дешево и быстро
              </span>
            </Stack>

            <Stack
              direction="column"
              sx={{
                display: { lg: "flex", md: "flex", sm: "none" },
              }}
              maxWidth="25%"
            >
              <Typography
                fontSize={16}
                fontWeight={600}
                textTransform="uppercase"
                fontFamily="Roboto"
                color="#0D99FF"
              >
                УСЛУГИ САНТЕХНИКА В
              </Typography>
              <span
                style={{
                  color: "#FFD700",
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: "16px",
                  fontFamily: "Roboto",
                  textTransform: "uppercase",
                }}
              >
                САНКТ - ПЕТЕРБУРГЕ И ЛЕНИНГРАДСКОЙ ОБЛАСТИ
              </span>
            </Stack>

            <Stack direction="column">
              <a
                style={{
                  fontWeight: 600,
                  fontFamily: "Roboto",
                  fontSize: 28,
                  color: "#0D99FF",
                  lineHeight: "28px",
                  textDecoration: "none",
                }}
                href="tel:8 (800) 234-12-82"
              >
                8 (800) 234-12-82
              </a>
            </Stack>
          </Stack>
        )}

        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
          sx={{
            "& .MuiDrawer-paper": {
              width: "60%",
              backgroundColor: "transparent",
              backdropFilter: "blur(5px)",
            },
          }}
        >
          <Box
            className="mobile-menu"
            sx={{
              bg: "#fff",
              height: "100%",
              mt: "150px",
              padding: "16px 0",
            }}
          >
            <Stack
              spacing={2}
              direction="column"
              height="35px"
              alignItems="center"
            >
              <Button sx={{ color: "#0D99FF" }} onClick={toggleMobileMenu}>
                <svg
                  fillRule="evenodd"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close"
                  width="1em"
                  height="1em"
                  fill="#0D99FF"
                  aria-hidden="true"
                >
                  <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
                </svg>
              </Button>
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                width="100%"
                gap="10px"
                pt={9}
                minHeight={{ lg: 30, md: 30, sm: 28, xs: 20 }}
              >
                {navBottomData.map((item, index) => (
                  <Stack key={index}>
                    {/* <NavLink></NavLink> */}
                    {/* <Typography
                      fontSize={16}
                      fontFamily="Roboto"
                      fontWeight={500}
                      textTransform="uppercase"
                      color="#fff"
                      className="title"
                    >
                      {item.title}
                    </Typography> */}
                    <Link
                      className="title"
                      to={item.link}
                      smooth={true}
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 16,
                        fontWeight: 500,
                        textTransform: "uppercase",
                        cursor: "pointer",
                      }}
                      duration={500}
                      offset={-120} // Adjust if you have a fixed header
                      onClick={toggleMobileMenu}
                    >
                      {item.title}
                    </Link>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Drawer>
      </Stack>
      <Stack
        bgcolor="#0D99FF"
        direction="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        gap="100px"
        sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "none" } }}
        minHeight={{ lg: 30, md: 30, sm: 28, xs: 20 }}
      >
        {navBottomData.map((item, index) => (
          <Stack key={index} onClick={scrollToSection}>
            {/* <NavLink></NavLink> */}
            {/* <NavLink
              className="nav-links"
              // style={navStyle}
              to="/about"
              // onClick={() => {
              //   setMobileMenuOpen(false);
              //   window.scrollTo(0, 0);
              //   setOpenDropdown2(false);
              //   setOpenDropdownServices2(false);
              // }}
            >
              {t("about")}
            </NavLink> */}
            <Link
              className="nav-links"
              to={item.link}
              smooth={true}
              style={{
                fontFamily: "Roboto",
                fontSize: 16,
                fontWeight: 500,
                textTransform: "uppercase",
                cursor: "pointer",
              }}
              duration={500}
              offset={-120} // Adjust if you have a fixed header
              // onClick={() => {
              //   setMobileMenuOpen(false); // Optional actions
              //   setOpenDropdown2(false);
              //   setOpenDropdownServices2(false);
              // }}
            >
              {item.title}
            </Link>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Navbar;
