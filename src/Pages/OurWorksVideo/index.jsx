import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
// import "~swiper/swiper-bundle.min.css";

import { Image } from "mui-image";
import { Trans, useTranslation } from "react-i18next";
import ReactPlayer from "react-player";

const Models = () => {
  const { t } = useTranslation();

  const slideData = [
    {
      mainTitle: "Стоимость услуги Сантехника:",
      items: [
        { price: "1100p", title: "Устранение протечки " },
        { price: "900p", title: "Установка сифона " },
        { price: "1100p", title: "Установка смесителя  " },
        { price: "1100p", title: "Засор " },
        { price: "900p", title: "Установка водонагревателя " },
        { price: "1500p", title: "Установка радиатора " },
        { price: "1500p", title: "Установка бытовой техники " },
        { price: "3000p", title: "Установка унитаза " },
        { price: "3000p", title: "Установка ванной " },
        { price: "3000p", title: "Установка раковины " },
        { price: "900p", title: "Ремонт инсталляции " },
        { price: "900p", title: "Ремонт унитаза " },
        { price: "900p", title: "Канализация " },
        { price: "900p", title: "Трубопровод ГВС, ХВС" },
      ],
      pdfUrl: "/Сантехник.pdf",
    },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        // background: "#2F2F2F",
        height: "100%",
        p: "15px 6px",
        color: "#d6d6d6",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        scrollMarginTop: "50px",
      }}
      id="price"
    >
      <Typography
        fontSize={{ lg: 30, md: 28, xs: 25 }}
        fontWeight={700}
        data-aos="fade-up"
        data-aos-delay="200"
        fontFamily="Montserrat"
        pt={{ lg: "50px", md: "30px", xs: "10px" }}
        className="title"
        mb="40px"
      >
        {/* {t("aboutCompany")} */}
        Стоимость  услуги
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Swiper
          pagination={{ clickable: true }}
          // loop={true}
          navigation
          // autoplay={{ delay: 6000, disableOnInteraction: false }}
          modules={[
            Pagination,
            Autoplay,
            Navigation,
            Scrollbar,
            // A11y,
            // EffectCoverflow,
          ]}
          // effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          // coverflowEffect={{
          //   rotate: 70,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: false,
          // }}
          style={{
            paddingBottom: "40px",
            width: isMobile ? "100%" : "60%",

            minHeight: "auto",
            backgroundColor: "#0D99FF",
            boxShadow: "3px 3px 3px 3px #4D4D4D80",
          }}
        >
          {slideData.map((item) => (
            <SwiperSlide
              key={item.mainTitle}
              style={{
                paddingBottom: "20px",
                width: isMobile ? "90%" : "50%",
                height: isMobile ? "540px" : "660px",
                backgroundColor: "#fff",
                color: "#0D99FF",
                padding: isMobile ? 10 : 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack
                direction={{ lg: "row", md: "row", xs: "column" }}
                alignItems="center"
                justifyContent="space-between"
                spacing={{ lg: 6, md: 4, xs: 3 }}
                // pl={2}
                mb={2}
                mt={2}
                width="100%"
              >
                <Stack
                  sx={{
                    width: "100%",
                    // height: { lg: 690, md: 390, xs: 280 },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="single-service2"
                >
                  <Typography
                    fontFamily="Montserrat"
                    fontSize={{ lg: 18, md: 16, sm: 15, xs: 14 }}
                    fontWeight={600}
                    mb={isMobile ? 2 : 3}
                  >
                    {item.mainTitle}
                  </Typography>
                  <Stack
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                  >
                    {item.items?.map((elem) => (
                      <Stack
                        key={elem.title}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="start"
                        width="90%"
                        spacing={{ lg: 2, xs: 1 }}
                      >
                        <Typography
                          fontFamily="Montserrat"
                          fontSize={{ lg: 14, md: 14, sm: 13, xs: 10 }}
                          fontWeight={500}
                          textAlign="justify"
                        >
                          {elem.title}
                        </Typography>
                        <Typography
                          flex={2}
                          borderBottom={{
                            lg: "3px dashed #ccc",
                            xs: "1.5px dashed #ccc",
                          }}
                          margin="0 20px"
                          height={15}
                        ></Typography>
                        <Typography
                          fontFamily="Montserrat"
                          fontSize={{ lg: 16, md: 14, sm: 13, xs: 10 }}
                          fontWeight={600}
                          color="#0D99FF"
                          textAlign="start"
                          minWidth="20%"
                        >
                          от {elem.price}
                        </Typography>
                      </Stack>
                    ))}
                    <Stack direction="row" alignItems="center">
                      <a
                        href={item.pdfUrl}
                        style={{ color: "#0D99FF", fontFamily: "Montserrat" }}
                        download={item.pdfUrl}
                      >
                        Скачать прайс-лист
                      </a>
                      <img
                        src="/images/pdfIcon.png"
                        style={{ width: 24, height: 24 }}
                        alt=""
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Stack
        direction="row"
        flexWrap="wrap"
        mt={6}
        justifyContent="space-around"
        width="100%"
        gap={2}
        padding={isMobile ? 2 : 0}
      >
        {/* <Stack gap="40px">
          
          <Typography color="#fff" fontFamily="Montserrat" fontSize={16}>
            В случае отказа от рaбот клиент оплачивает выезд мастера - 900P
          </Typography>
        </Stack> */}

        <Stack gap="10px" direction="row" alignItems="center">
          <Typography color="#0D99FF" fontFamily="Montserrat" fontSize={16}>
            Принимаем оплату любым удобным для вас способом
          </Typography>
          <Stack alignItems="end">
            <img
              src="/images/visa.png"
              style={{ width: 220, height: 40 }}
              alt=""
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Models;
