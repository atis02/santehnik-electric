import {
  Box,
  Button,
  Slide,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import {
  loftSwiper,
  modernSwiper,
  neoSwiper,
  sowrSwiper,
} from "./swiperData.mjs";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const TabButtons = () => {
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setChecked((prev) => !prev);
    setValue(newValue);
  };
  AOS.init({
    duration: 1500,
    offset: 0,
  });
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box
            sx={{
              p: 1,
              height: "100%",
            }}
            data-aos="flip-right"
            data-aos-once="true"
            data-aos-delay="900"
            data-aos-easing="ease-in-out"
          >
            {children}
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const TabData = [
    { value: 0, title: "Сантехнические услуги" },
    { value: 1, title: "Электрические услуги" },
  ];
  return (
    <Stack
      p={{
        lg: "20px 80px",
        md: "10px 60px",
        sm: "10px 30px",
        xs: "15px 15px",
      }}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Tabs
          variant="scrollable"
          allowScrollButtonsMobile
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {TabData.map((item) => (
            <Tab
              key={item.value}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="800"
              data-aos-easing="ease-in-out"
              label={
                <Typography
                  className="tabText"
                  sx={{
                    ...(value === item.value
                      ? {
                          color: "#fff",
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                        }
                      : {
                          background:
                            "linear-gradient(to right,  #336699, #0D99FF)",

                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          transition: "all ease-in-out 0.4s",
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                        }),
                  }}
                >
                  {item.title}
                </Typography>
              }
              {...a11yProps(0)}
              variant="outlined"
              sx={{
                ...(value == item.value
                  ? {
                      backgroundImage: `linear-gradient(to right,  #336699, #0D99FF)`,
                    }
                  : ""),
                borderImage: "linear-gradient(#336699 0%,#0D99FF 100%)30 ",
                borderWidth: "2px",
                borderStyle: "solid",
                borderImageSlice: "1",
                borderRadius: 0,
                textTransform: "capitalize",
                transition: "all ease 0.4s",
                "&:hover": {
                  borderImage: "linear-gradient(#336699 0%,#0D99FF 100%)30",
                  backgroundImage: `linear-gradient(to right,  #336699, #0D99FF)`,
                  transform: "scale(1.15)",
                  borderWidth: "2px",
                  borderRadius: 0,
                  borderImageSlice: "1",
                  borderStyle: "solid",
                },
                "&:hover .tabText": {
                  background: "linear-gradient(to right,  #fff, #fff)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
                m: "10px",
              }}
            />
          ))}
        </Tabs>
      </Stack>
      <CustomTabPanel value={value} index={0}>
        <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          alignItems="center"
          spacing={2}
          minHeight={600}
        >
          <Stack
            maxWidth={{ lg: 450, md: 400, sm: 300, xs: "100%" }}
            maxHeight={600}
            data-aos="flip-up"
            data-aos-once="true"
            data-aos-delay="600"
          >
            <img
              src="/images/Rectangle 9-min.png"
              style={{ width: "auto", height: "auto" }}
              alt=""
            />
          </Stack>

          <Stack
            spacing={3}
            width={{ lg: "60%", md: "60%", sm: "100%", xs: "100%" }}
          >
            <Typography
              fontFamily="Montserrat"
              fontWeight={600}
              fontSize={22}
              lineHeight="30px"
              color="#fff"
              textAlign={{
                lg: "start",
                md: "center",
                sm: "center",
                xs: "center",
              }}
              data-aos="zoom-out"
              data-aos-once="true"
              data-aos-delay="550"
              data-aos-easing="ease-in-out"
            >
              1. Сантехнические услуги:
            </Typography>
            <Typography
              color="#858585"
              fontFamily="Montserrat"
              fontWeight={500}
              fontSize={18}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="650"
              data-aos-easing="ease-in-out"
            >
              • Установка и замена трубопроводов <br /> • Монтаж и ремонт
              сантехнических приборов (унитазы, раковины, душевые кабины)
              <br /> • Устранение протечек <br />• Обслуживание и ремонт
              водонагревателей
              <br /> • Установка систем отопления и водоснабжения
            </Typography>
            <Stack
              direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
              spacing={4}
              alignItems="center"
              justifyContent="center"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="750"
            >
              <Swiper
                slidesPerView={isMobile ? 1 : 2.5}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                spaceBetween={1}
                style={{
                  width: "100%",
                  height: "auto",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="swiperNextButton"
              >
                {neoSwiper.map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <Stack
                      maxWidth={{ lg: 280, md: 210, sm: 260, xs: "100%" }}
                      maxHeight={{ lg: 280, md: 210, sm: 350, xs: "300px" }}
                      sx={{
                        transition: "all ease 0.5s",
                        ":hover": { transform: "scale(1.15)" },
                      }}
                      data-aos="flip-right"
                      data-aos-once="true"
                      data-aos-delay="1500"
                    >
                      <img
                        src={item.image}
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </Stack>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Stack>
          </Stack>
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          alignItems="center"
          justifyContent="center"
          minHeight={600}
          spacing={2}
        >
          <Stack
            maxWidth={{ lg: 400, md: 400, sm: 300, xs: "100%" }}
            maxHeight={600}
            data-aos="flip-right"
            data-aos-once="true"
            data-aos-delay="600"
          >
            <img
              src="/images/elektrik2.png"
              style={{ width: "auto", height: "auto" }}
              alt=""
            />
          </Stack>
          <Stack
            spacing={2}
            width={{ lg: "60%", md: "60%", sm: "100%", xs: "100%" }}
          >
            <Typography
              fontFamily="Montserrat"
              fontWeight={600}
              fontSize={22}
              lineHeight="30px"
              color="#fff"
              textAlign={{
                lg: "start",
                md: "center",
                sm: "center",
                xs: "center",
              }}
              data-aos="zoom-out-up"
              data-aos-once="true"
              data-aos-delay="550"
              data-aos-easing="ease-in-out"
            >
              2. Электрические услуги:
            </Typography>
            <Typography
              color="#858585"
              fontFamily="Montserrat"
              fontWeight={500}
              fontSize={18}
              data-aos="zoom-out-up"
              data-aos-once="true"
              data-aos-delay="600"
              data-aos-easing="ease-in-out"
            >
              • Монтаж и замена электрической проводки
              <br />
              • Установка розеток, выключателей и освещения
              <br />
              • Ремонт и обслуживание электрооборудования
              <br />
              • Устранение коротких замыканий и других неисправностей
              <br />• Консультации по вопросам энергосбережения
            </Typography>
            <Stack
              direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Swiper
                slidesPerView={isMobile ? 1 : 2.5}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                style={{
                  width: "100%",
                  height: "auto",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="swiperNextButton"
              >
                {sowrSwiper.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Stack
                      maxWidth={{ lg: 280, md: 210, sm: 260, xs: "100%" }}
                      maxHeight={{ lg: 280, md: 210, sm: 350, xs: "300px" }}
                      sx={{
                        transition: "all ease 0.5s",
                        ":hover": { transform: "scale(1.15)" },
                      }}
                      data-aos="flip-left"
                      data-aos-once="true"
                      data-aos-delay="1500"
                      data-aos-easing="ease-in-out"
                    >
                      <img
                        src={item.image}
                        style={{ width: "auto", height: "auto" }}
                        alt=""
                      />
                    </Stack>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Stack>
          </Stack>
        </Stack>
      </CustomTabPanel>
    </Stack>
  );
};

export default TabButtons;
