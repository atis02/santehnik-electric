import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { Trans, useTranslation } from "react-i18next";
import RussianPhoneField from "./InputPhoneNumber";

const About = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
    once: true,
  });
  const { t } = useTranslation();

  return (
    <Box
      id="aboutCompany"
      sx={{
        height: { lg: "350px", md: "360px", sm: "300px", xs: "380px" },
        width: "100%",
        // backgroundImage: "url('/images/santehnik2.png')",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        color: "#000",
        display: "flex",
        alignItems: { lg: "center" },
        transition: " all ease 0.3s",
        scrollMarginTop: "70px",
        mt: "70px",
        // opacity: 0.1,
        // background: "rgba(219, 219, 219, 0.3)",
      }}
    >
      <Stack
        height={{ lg: "350px", md: "360px", sm: "300px", xs: "380px" }}
        width="100%"
        position={"absolute"}
        zIndex={1}
      >
        <img
          src="/images/santehnik2.png"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.25,
          }}
          alt=""
        />
      </Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: {
            lg: "space-between",
            md: "space-between",
            sm: "center",
            xs: "center",
          },
          alignItems: "center",
          width: "100%",
          height: "auto",
          zIndex: 100,
          p: {
            lg: "3px 85px 7px 85px",
            md: "5px 70px 0 70px",
            xs: "4px 20px 10px 20px",
          },
        }}
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        spacing={3}
      >
        <Stack
          direction="column"
          width={{ lg: "50%", md: "50%", sm: "70%", xs: "100%" }}
          spacing={1}
        >
          <Typography
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            fontWeight="400"
            fontSize={{ lg: 45, md: 40, sm: 35, xs: 25 }}
            fontFamily="Impact"
            color="#0D99FF"
            letterSpacing="0.5px"
            lineHeight={{ lg: "45px", md: "35px", sm: "30px", xs: "30px" }}
          >
            Оставьте заявку и мы устраним неисправность уже сегодня!
          </Typography>
          <Typography fontFamily="Montserrat" fontSize={14} color="#0D99FF">
            Перезвоним в течение минуты
          </Typography>
        </Stack>
        <Stack
          direction="column"
          width={{ lg: "50%", md: "50%", sm: "70%", xs: "100%" }}
          spacing={1}
        >
          <RussianPhoneField />
          <Typography fontFamily="Montserrat" fontSize={14} color="#0D99FF">
            Нажимая, я принимаю условия{" "}
            <a
              href="/agreement.docx"
              download="/agreement.docx"
              style={{
                color: "#000",
                fontFamily: "Montserrat",
              }}
            >
              {" "}
              пользовательского соглашения
            </a>
            <span style={{ fontFamily: "Montserrat", marginLeft: 10 }}>и</span>
            <a
              href="/policy.docx"
              download="/agreement.docx"
              style={{
                color: "#000",
                fontFamily: "Montserrat",
                marginLeft: 10,
              }}
            >
              {" "}
              политика конфиденциальности
            </a>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
