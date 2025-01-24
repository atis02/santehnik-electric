import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { Trans, useTranslation } from "react-i18next";

const About = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
    once: true,
  });
  const { t } = useTranslation();

  return (
    <Box
      id="about"
      sx={{
        height: { lg: "450px", md: "360px", sm: "300px", xs: "780px" },
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
      pt={{ lg: 0, md: 0, sm: 0, xs: 15 }}
    >
      <Stack
        height={{ lg: "470px", md: "360px", sm: "300px", xs: "680px" }}
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
            opacity: 0.07,
          }}
          alt=""
        />
      </Stack>

      <Stack
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction="column"
          maxWidth={{ lg: "50%", md: "50%", sm: "80%", xs: "90%" }}
        >
          <Typography
            textAlign="center"
            className="title"
            fontSize={{ lg: 24, md: 22, xs: 20 }}
            fontWeight={700}
            fontFamily="Montserrat"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            mb={2}
          >
            {/* {t("advantages")}
             */}
            O компании
          </Typography>
          <Typography fontSize={16} fontFamily="Montserrat" color="#fff">
            Мы- Компания "Сантехник-Электрик" предлагает широкий спектр услуг в
            области сантехники и электрики, обеспечивая надежные решения для
            вашего дома и бизнеса. Мы специализируемся на установке, ремонте и
            обслуживании сантехнических и электрических систем, гарантируя
            высокое качество работы и безопасность.
          </Typography>
        </Stack>
        <Stack
          height={{ lg: "460px", md: "360px", sm: "300px", xs: "360px" }}
          width={{ lg: "300px", md: "360px", sm: "300px", xs: "230px" }}
        >
          <img
            src="/images/expert.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              // opacity: 0.07,
              zIndex: 100,
            }}
            alt=""
          />
        </Stack>
        {/* <Stack>
          <img
            src="/images/expert.png"
            style={{ width: 250, height: 390, zIndex: 150 }}
            alt=""
          />
        </Stack> */}
      </Stack>
    </Box>
  );
};

export default About;
