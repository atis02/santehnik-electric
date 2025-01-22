import React from "react";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { useTranslation } from "react-i18next";

const Footer = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          // background: "#2F2F2F",
          height: { lg: "220px", md: "100%", xs: "100%" },
          // backgroundImage: "url('/images/AboutHorizontal.png')",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // backgroundPositionY: "-100px",
          color: "#fff",
          bgcolor: "#292929",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          p: {
            lg: "3px 85px 7px 85px",
            md: "5px 70px 0 70px",
            xs: "4px 20px 10px 20px",
          },
          boxShadow: "0px -2px 24px -4px rgba(0,0,0,0.75)",
        }}
        id="Footer"
      >
        {/* <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            lg: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "start",
          },

          width: "100%",
        }}
      > */}
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={{ lg: 5, xs: 0 }}
          width={{ lg: "100%", md: "100%", sm: "100%", xs: "100%" }}
          // justifyContent={}
          mt={2}
          justifyContent="space-between"
        >
          <Stack
            spacing={{ lg: 3, sm: 2, md: 2.5, xs: 2 }}
            width={{ lg: "100%", md: "72%", sm: "82%", xs: "100%" }}
          >
            {/* <Stack
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
            </Stack> */}

            <Stack
              // direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
              direction="row"
              flexWrap="wrap"
              alignItems="start"
              // sx={{
              //   display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
              // }}
              width="100%"
              justifyContent="space-between"
            >
              <Stack
                // width={{ lg: 70, md: 80, sm: 70, xs: 55 }}
                // height={{ lg: 80, md: 75, sm: 70, xs: 55 }}
                maxWidth={{ lg: "48%", md: "48%", sm: "48%", xs: "95%" }}
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
                <Stack>
                  <Typography
                    fontFamily="Roboto"
                    fontWeight={300}
                    fontSize={14}
                    color="#fff"
                    width={{ lg: "60%", md: "60%", sm: "60%", xs: "90%" }}
                    lineHeight="17px"
                    textTransform="uppercase"
                  >
                    УСЛУГИ САНТЕХНИКА и Электрика В САНКТ - ПЕТЕРБУРГЕ И
                    ЛЕНИНГРАДСКОЙ ОБЛАСТИ{" "}
                  </Typography>
                  <Typography
                    fontFamily="Montserrat"
                    fontWeight={400}
                    fontSize={18}
                    color="#fff"
                    mt={{ lg: 5, xs: 2 }}
                    // width="57%"
                    width={{ lg: "60%", md: "60%", sm: "60%", xs: "90%" }}
                    lineHeight="27px"
                  >
                    © САНТЕХНИК И ЭЛЕКТРИК 2025, Все права защищены
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction="column"
                // width="27%"
                width={{ lg: "22%", md: "27%", sm: "50%", xs: "90%" }}
                mt={{ lg: 0, xs: 2 }}
              >
                <a
                  style={{
                    fontWeight: 400,
                    fontFamily: "Impact",
                    fontSize: 40,
                    color: "#fff",
                    lineHeight: "48px",
                    textDecoration: "none",
                  }}
                  href="tel:+99363885234"
                >
                  +7 (812) 220-11-43
                </a>
                <span
                  style={{
                    color: "#0D92F3",
                    textDecoration: "underline",
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: "16px",
                    fontFamily: "Montserrat",
                    textTransform: "uppercase",
                  }}
                >
                  Заказать обратный звонок
                </span>
                <Stack mt={{ lg: 5, xs: 3 }} mb={{ lg: 0, xs: 5 }} spacing={1}>
                  {/* <a href="mailto:support@example.com?subject=Support Request&body=Dear Support,&tag=support_ticket">Submit a Support Ticket</a> */}
                  <a
                    href="mailto:santehnikelektrik.pro@gmail.com"
                    style={{
                      fontFamily: "Montserrat",
                      color: "#fff",
                    }}
                  >
                    santehnikelektrik.pro@gmail.com
                  </a>
                  <a
                    href="mailto:santehnikelektrik.pro@yandex.ru"
                    style={{
                      fontFamily: "Montserrat",
                      color: "#fff",
                    }}
                  >
                    santehnikelektrik.pro@yandex.ru
                  </a>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Stack
        sx={{
          width: "100%",
          bgcolor: "gray",
          height: 1.1,
        }}
      ></Stack>
      <Typography
        bgcolor="#292929"
        fontFamily="Montserrat"
        fontWeight={400}
        fontSize={10}
        color="#fff"
        p={{
          lg: "10px 85px 7px 85px",
          md: "5px 70px 0 70px",
          xs: "4px 20px 10px 20px",
        }}
      >
        Копирование всех составляющих частей сайта в какой бы то ни было форме
        без письменного разрешения владельцев авторских прав запрещено. Сайт
        носит исключительно информативный характер, и не при каких условиях не
        является публичной офертой, определяемой положениями статьи 437(2)
        ГК.РФ. Опубликованные на сайте стоимости работ являются ориентировочными
        и носят информационный характер. Окончательную стоимость назначает
        мастер после диагностики. Нажимая, я принимаю условия пользовательского
        соглашения
      </Typography>
      <Stack bgcolor="#292929">
        <Typography
          width="100%"
          data-aos-once="true"
          data-aos="fade-down"
          data-aos-delay="1000"
          fontSize={{ lg: 14, md: 13, sm: 13, xs: 12 }}
          textAlign="center"
          fontFamily="Montserrat"
          color="#fff"
          fontWeight={500}
          p={1}
        >
          Copyright © {new Date().getFullYear()} САНТЕХНИК И ЭЛЕКТРИК | Powered
          by{" "}
          <a
            href="https://github.com/atis02"
            style={{
              color: "#fff",
              textDecoration: "underline",
              fontFamily: "Montserrat",
            }}
          >
            Atamyrat Dev
          </a>
        </Typography>
      </Stack>
    </>
  );
};

export default Footer;
