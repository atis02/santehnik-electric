import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import EastIcon from "@mui/icons-material/East";
import ReactPlayer from "react-player";
import { Tilt } from "react-tilt";
import SendEmailModal from "../../Components/SendEmail/SendEmail";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [hiddenText, setHiddenText] = useState(false);

  const { t } = useTranslation();
  Aos.init({
    duration: 1000,
    offset: 0,
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const dataMainPage = [
    { title: "Выезд мастера в течении 1 часа" },
    {
      title:
        "15% скидка пенсионерам , многодетным , ветераном ВОВ, участникам СВО ",
    },
    {
      title:
        "Сантехники и Электрики сертифицированные с опытом работы более 10 лет",
    },
    { title: "Гарантия на выполненные работы" },
    // { title: "Мы работаем с 09:00-22:00" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        zIndex: "100",
        // position: "sticky",
        p: {
          lg: "3px 85px 7px 85px",
          md: "5px 70px 0 70px",
          xs: "4px 20px 10px 20px",
        },
      }}
    >
      <SendEmailModal open={open} setOpen={setOpen} />
      <Stack
        direction={{
          lg: "row",
          md: "row",
          sm: "row",
          xs: "column",
        }}
        alignItems="start"
        width="auto"
        // maxHeight="255px"
        justifyContent="center"
        height={{ lg: "auto", md: "auto", sm: "auto", xs: "60vh" }}
        mb={{ lg: 0, md: 0, sm: 0, xs: 20 }}
      >
        <Stack
          alignItems="start"
          spacing={{ lg: 3, md: 3, sm: 3, xs: 2 }}
          color="#fff"
          width={{ lg: "90%", md: "95%", xs: "100%" }}
          pb={{ lg: 0, md: 0, xs: 1 }}
          mt={10}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            width={{ lg: "95%", md: "80%", sm: "70%", xs: "100%" }}
            height={35}
            pb={{ lg: "25px", md: "23px", sm: "18px", xs: "15px" }}
          >
            <Typography
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              width="90%"
              fontWeight="600"
              fontSize={{ lg: 40, md: 40, sm: 35, xs: 25 }}
              className="title"
              fontFamily="Montserrat"
              letterSpacing="0.5px"
              lineHeight={{ lg: "45px", md: "35px", sm: "30px", xs: "30px" }}
            >
              {isMobile
                ? "Вызвать Cантехника и Электрика в Санкт-Петербурге"
                : "Профессиональные услуги Сантехника и Электрика в Санкт-Петербурге "}
            </Typography>

            {/* <Divider
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="100"
              sx={{ width: "1px", height: "95px", background: "#fff" }}
            />
            <Typography
              data-aos="fade-up"
              data-aos-once="true"
              fontFamily="Montserrat"
              data-aos-delay="100"
              fontSize={16}
            >
              Сантехник & Электрик
            </Typography> */}
          </Stack>
          <Stack width="100%">
            <Typography
              fontSize={{ lg: 17, md: 16, sm: 15, xs: 12 }}
              width="80%"
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="100"
              fontFamily="Montserrat"
              fontWeight={400}
              mt="30px"
            >
              Профессиональные услуги сантехников и электриков для дома , офиса
              или коммерческих объектов.
            </Typography>
          </Stack>
          <Toaster />
          <a
            href="tel:8 (800) 234-12-82"
            className="button"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="800"
            // onClick={() => setOpen(true)}
          >
            <span className="button-background"></span>
            <span
              className="button-text"
              style={{ flexDirection: "column", lineHeight: "15px" }}
            >
              {" "}
              Вызвать мастера
              <span
                style={{
                  display: isMobile ? "flex" : "none",
                  fontFamily: "Montserrat",
                  fontSize: 12,
                }}
              >
                8 (800) 234-12-82
              </span>
              {/* <EastIcon /> */}
            </span>
          </a>
        </Stack>
        <Stack
          width={{ lg: "80%", md: "100%", sm: "100%", xs: "60%" }}
          // maxHeight={{ lg: "70%", md: "70%", sm: "60%", xs: "60%" }}
          maxHeight={200}
          sx={{
            ...(isMobile ? { display: "none" } : ""),
          }}
          direction="row"
          justifyContent="space-between"
          alignItems="start"
          pt={4}
          gap="30px"
          flexWrap="wrap"
        >
          {/* <img
              src="/images/about.png"
              style={{
                width: "80%",
                height: "100%",
                borderRadius: "100px",
              }}
              alt="aa"
            /> */}
          <Stack
            border="2px solid #0D99FF"
            direction="row"
            alignItems="center"
            spacing={1}
            maxHeight={80}
            minWidth="47%"
            p="20px"
            boxShadow="0px 0px 10px 0px #0D99FF"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <img
              src="/images/image 8.png"
              style={{ width: 40, height: 40 }}
              alt=""
            />
            <Typography color="#0D99FF" fontSize={18} fontWeight={600}>
              Приезд в течении часа
            </Typography>
          </Stack>
          <Stack
            border="2px solid #0D99FF"
            direction="row"
            alignItems="center"
            spacing={1}
            maxHeight={80}
            minWidth="47%"
            p="20px"
            boxShadow="0px 0px 10px 0px #0D99FF"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <img
              src="/images/image 9.png"
              style={{ width: 40, height: 40 }}
              alt=""
            />
            <Typography color="#0D99FF" fontSize={18} fontWeight={600}>
              Приезд в течении часа
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              border="2px solid #0D99FF"
              direction="row"
              alignItems="center"
              spacing={1}
              maxHeight={80}
              width="65%"
              p="20px"
              boxShadow="0px 0px 10px 0px #0D99FF"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <img
                src="/images/image 10.png"
                style={{ width: 40, height: 40 }}
                alt=""
              />
              <Typography color="#0D99FF" fontSize={18} fontWeight={600}>
                Низкие цены - найдете дешевле? Договоримся!
              </Typography>
            </Stack>
            <Stack
              border="2px solid #0D99FF"
              direction="row"
              alignItems="center"
              spacing={1}
              maxHeight={80}
              width="30%"
              p="20px"
              boxShadow="0px 0px 10px 0px #0D99FF"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <img
                src="/images/working-time.svg"
                style={{ width: 40, height: 60 }}
                alt=""
              />
              <Typography color="#0D99FF" fontSize={14} fontWeight={600}>
                Мы работаем с 09:00-22:00
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack mt={6}>
        <Typography
          textAlign="center"
          className="title"
          fontSize={{ lg: 24, md: 22, xs: 20 }}
          fontWeight={700}
          fontFamily="Montserrat"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          {/* {t("advantages")}
           */}
          Преимущества нашей службы
        </Typography>
        <Stack
          direction="row"
          mt={{ lg: 5, md: 4, sm: 3, xs: 2 }}
          flexWrap="wrap"
          justifyContent="space-around"
          gap={{ lg: 7, md: 5, sm: 3, xs: 2 }}
        >
          {dataMainPage.map((elem) => (
            <Stack
              key={elem.title}
              direction="row"
              alignItems="center"
              spacing={{ lg: 3, md: 3, sm: 3, xs: 1 }}
              border="1px solid #336699"
              width={{ lg: "40%", md: "40%", sm: "80%", xs: "100%" }}
              bgcolor="#104871"
              position="relative"
              height={{ lg: 50, md: 40, sm: 30, xs: 45 }}
              boxShadow="0px 4px 8px 0px #0D99FF"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <Stack
                sx={{
                  height: { lg: 60, md: 60, sm: 50, xs: 40 },
                  width: { lg: 60, md: 60, sm: 50, xs: 40 },
                  alignItems: "center",
                  justifyContent: "center",
                  border: "5px solid #336699",
                  transform: "rotate(45deg)",
                  bgcolor: "#104871",
                  position: "absolute",
                  left: { lg: -40, md: -40, sm: -30, xs: -20 },
                }}
              >
                <img
                  src="/images/plus.png"
                  style={{
                    width: "70%",
                    height: "70%",
                    transform: "rotate(45deg)",
                  }}
                  alt=""
                />
              </Stack>
              <Typography
                fontFamily="Montserrat"
                fontSize={{ lg: 16, md: 16, sm: 14, xs: 12 }}
                color="#fff"
                fontWeight={500}
                pl={5}
              >
                {elem.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
