import React, { useEffect, useState } from "react";
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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

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
    { title: "услуги" },
    { title: "цены" },
    { title: "о компании" },
    { title: "контакты" },
  ];
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
              boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.75)",
              backdropFilter: "blur(10px)",
              opacity: "95%",
              backgroundColor: "#1E1E1E",
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
        p={{
          lg: "3px 85px 7px 85px",
          md: "5px 70px 0 70px",
          xs: "4px 20px 10px 20px",
        }}
      >
        <Stack
          // width={{ lg: 70, md: 80, sm: 70, xs: 55 }}
          // height={{ lg: 80, md: 75, sm: 70, xs: 55 }}
          maxWidth="88%"
          sx={{
            display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
          }}
        >
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: 18,
              fontFamily: "Impact",
            }}
          >
            {/* <img
            src="/images/ReModel.jpg"
            style={{ width: "100%", height: "100%", pt: 5 }}
            alt="LOGO"
          /> */}
            <Typography
              color="#0D99FF"
              fontFamily="Impact"
              fontSize={18}
              fontWeight={400}
              lineHeight="44px"
            >
              Сантехник &{" "}
            </Typography>
            <span
              style={{
                color: "#FFD700",
                fontWeight: 400,
                lineHeight: "44px",
              }}
            >
              {" "}
              Электрик
            </span>
          </a>
          <Typography
            fontFamily="Roboto"
            fontWeight={300}
            fontSize={14}
            color="#fff"
            width="90%"
            lineHeight="17px"
          >
            УСЛУГИ САНТЕХНИКА В САНКТ - ПЕТЕРБУРГЕ И ЛЕНИНГРАДСКОЙ ОБЛАСТИ{" "}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          sx={{
            display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
          }}
        >
          <Stack
            // width={{ lg: 70, md: 80, sm: 70, xs: 55 }}
            // height={{ lg: 80, md: 75, sm: 70, xs: 55 }}
            maxWidth="28%"
          >
            <a
              href="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 2,
                fontSize: 34,
                fontFamily: "Impact",
              }}
            >
              {/* <img
            src="/images/ReModel.jpg"
            style={{ width: "100%", height: "100%", pt: 5 }}
            alt="LOGO"
          /> */}
              <Typography
                color="#0D99FF"
                fontFamily="Impact"
                fontSize={34}
                fontWeight={400}
                lineHeight="44px"
              >
                Сантехник &{" "}
              </Typography>
              <span
                style={{
                  color: "#FFD700",
                  fontWeight: 400,
                  lineHeight: "44px",
                }}
              >
                {" "}
                Электрик
              </span>
            </a>
            <Typography
              fontFamily="Roboto"
              fontWeight={300}
              fontSize={14}
              color="#fff"
              width="90%"
              lineHeight="17px"
            >
              УСЛУГИ САНТЕХНИКА В САНКТ - ПЕТЕРБУРГЕ И ЛЕНИНГРАДСКОЙ ОБЛАСТИ{" "}
            </Typography>
          </Stack>

          <Stack direction="column" width="22%">
            <Typography
              fontSize={16}
              textTransform="uppercase"
              fontFamily="Roboto"
              color="#fff"
            >
              ВЫЗОВ САНТЕХНИКА и Электрика
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
                В ЛЮБОЙ
              </span>
              <span
                style={{
                  color: "#0D99FF",
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: "16px",
                  fontFamily: "Roboto",
                  textTransform: "uppercase",
                  marginLeft: 5,
                }}
              >
                РАЙОН
              </span>
            </Typography>
            {/* <Stack direction="row" spacing={1}>
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
            В ЛЮБОЙ
          </span>
          <span
            style={{
              color: "#0D99FF",
              fontSize: 16,
              fontWeight: 600,
              lineHeight: "16px",
              fontFamily: "Roboto",
              textTransform: "uppercase",
            }}
          >
            РАЙОН
          </span>
        </Stack> */}
          </Stack>

          <Stack direction="column" width="18%">
            <Typography
              fontSize={16}
              textTransform="uppercase"
              fontFamily="Roboto"
              color="#fff"
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

          <Stack direction="column" width="18%">
            <Typography
              fontSize={16}
              textTransform="uppercase"
              fontFamily="Roboto"
              color="#fff"
            >
              Услуги Электрика
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
              с гарантией качества
            </span>
          </Stack>

          <Stack direction="column" width="17%">
            <a
              style={{
                fontWeight: 600,
                fontFamily: "Roboto",
                fontSize: 24,
                color: "#fff",
                lineHeight: "28px",
                textDecoration: "none",
              }}
              href="tel:+99363885234"
            >
              +7 (812) 220-11-43
            </a>
            <span
              style={{
                color: "#FFD700",
                fontSize: 13,
                fontWeight: 600,
                lineHeight: "16px",
                fontFamily: "Roboto",
                textTransform: "uppercase",
              }}
            >
              Заказать обратный звонок
            </span>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ ...(isMobile ? { display: "flex" } : { display: "none" }) }}
        >
          <IconButton
            onClick={toggleMobileMenu}
            sx={{
              width: 24,
              height: 24,
              p: 0,
            }}
          >
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>

          {/* <Language /> */}
        </Stack>

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
              <Button sx={{ color: "#fff" }} onClick={toggleMobileMenu}>
                <svg
                  fillRule="evenodd"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close"
                  width="1em"
                  height="1em"
                  fill="currentColor"
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
                    <Typography
                      fontSize={16}
                      fontFamily="Roboto"
                      fontWeight={500}
                      textTransform="uppercase"
                      color="#fff"
                      className="title"
                    >
                      {item.title}
                    </Typography>
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
          <Stack key={index}>
            {/* <NavLink></NavLink> */}
            <Typography
              fontSize={16}
              fontFamily="Roboto"
              fontWeight={500}
              textTransform="uppercase"
              color="#fff"
            >
              {item.title}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Navbar;
