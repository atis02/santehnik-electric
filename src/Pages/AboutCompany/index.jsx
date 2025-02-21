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
        height: { lg: "450px", md: "360px", sm: "300px", xs: "100%" },
        width: "100%",
        // backgroundImage: "url('/images/santehnik2.png')",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        color: "#000",
        display: "flex",
        alignItems: { lg: "center" },
        transition: " all ease 0.3s",
        scrollMarginTop: "70px",
        mt: { lg: "70px", md: "70px", sm: "70px", xs: "0px" },
        // opacity: 0.1,
        // background: "rgba(219, 219, 219, 0.3)",
      }}
      pt={{ lg: 0, md: 0, sm: 0, xs: 5 }}
    >
      <Stack
        height={{ lg: "470px", md: "360px", sm: "300px", xs: "140%" }}
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
            opacity: 0.15,
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
          <Typography fontSize={16} fontFamily="Montserrat" color="#0D99FF">
            Компания "Сантехник Питер" предлагает широкий спектр сантехнических
            услуг, обеспечивая надежность и комфорт в вашем доме или офисе. Наша
            команда опытных специалистов готова решить любые проблемы, связанные
            с водоснабжением и канализацией.
            <br />
            <strong style={{ fontFamily: "Montserrat" }}>
              Наши услуги:
            </strong>{" "}
            <br /> - Установка и замена сантехники: Мы профессионально
            устанавливаем и заменяем унитазы, раковины, ванны, душевые кабины и
            другие сантехнические приборы, гарантируя их безупречную работу.
            <br /> - Ремонт и обслуживание: Наша команда быстро и качественно
            устраняет протечки, проводит диагностику и ремонт систем
            водоснабжения и канализации, а также выполняет профилактическое
            обслуживание. <br />- Аварийные услуги: Мы готовы выехать на вызов в
            любое время дня и ночи для устранения срочных проблем. Наша цель —
            минимизировать ваши неудобства и восстановить комфорт в вашем
            помещении. <br />- Консультации и подбор оборудования: Мы поможем
            вам выбрать подходящее сантехническое оборудование в зависимости от
            ваших потребностей и бюджета, предоставляя профессиональные
            рекомендации.
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
