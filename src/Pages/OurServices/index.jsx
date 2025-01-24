import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Tilt } from "react-tilt";

const index = () => {
  const data = [
    {
      title: "Устранение засоров",
      img: "/images/image 30.png",
      price: "от 1100",
    },
    {
      title: "Монтаж и замена сантехнических труб",
      img: "/images/image 30-1.png",
      price: "от 2000 руб",
    },
    {
      title: "Установка и ремонт унитаза",
      img: "/images/image 30-2.png",
      price: "от 3000 руб",
    },
    {
      title: "установка и замена смесителя",
      img: "/images/image 30-3.png",
      price: "от 1700 руб",
    },
    {
      title: "Замена стояков",
      img: "/images/image 30-4.png",
      price: "от 4000 руб",
    },
    {
      title: "Замена труб канализации",
      img: "/images/image 30-5.png",
      price: "от 1900- руб",
    },
    {
      title: "Устранение короткого замыкания",
      img: "/images/image 30-6.png",
      price: "от 1100 руб",
    },
    {
      title: "Ремонт освещения",
      img: "/images/image 30-7.png",
      price: "от 600 руб",
    },
    {
      title: "Демонтаж душевой кабины (без сохранения)",
      img: "/images/image 30-8.png",
      price: "от 2000 руб",
    },
    {
      title: "Установка патрона открытого",
      img: "/images/image 30-9.png",
      price: "от 500 руб",
    },
    {
      title: "Штробление стен под трубы водоснабжения(газоблок) м. п ",
      img: "/images/image 30-10.png",
      price: "от 1200 руб",
    },
    {
      title: "Демонтаж водонагревателя ",
      img: "/images/demontaz.jpg",
      price: "от 1200 руб",
    },
  ];
  return (
    <Box width="100%">
      <Typography
        fontSize={{ lg: 24, md: 22, xs: 20 }}
        fontWeight={700}
        data-aos="fade-up"
        data-aos-delay="200"
        fontFamily="Montserrat"
        textAlign="center"
        pt={{ lg: "50px", md: "30px", xs: "10px" }}
        className="title"
        mb={"20px"}
        mt={"20px"}
      >
        Наши  услуги 
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"center"}
        width="100%"
        flexWrap="wrap"
        gap={2}
      >
        {data.map((elem) => (
          <Tilt
            options={{
              scale: 1,
              max: 25,
              perspective: 1000,
            }}
          >
            <Stack
              key={elem.title}
              alignItems="center"
              justifyContent="space-between"
              bgcolor="#292929"
              width={{ lg: 300, md: 300, sm: 300, xs: 300 }}
              minHeight={350}
              p={2}
              borderRadius="20px"
              spacing={2}
            >
              <Stack sx={{ maxWidth: 230, maxHeight: 160 }}>
                <img
                  src={elem.img}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </Stack>
              <Typography
                color="#fff"
                fontFamily="Montserrat"
                fontWeight={600}
                fontSize={16}
                textAlign="center"
              >
                {elem.title}
              </Typography>
              <Typography
                color="#0D99FF"
                fontFamily="Montserrat"
                fontWeight={700}
                fontSize={16}
                textAlign="center"
              >
                {elem.price}
              </Typography>
              <Button
                sx={{
                  border: "1px solid #fff",
                  color: "#fff",
                  width: "90%",
                }}
              >
                <a
                  style={{
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    fontSize: 18,
                    color: "#fff",
                    lineHeight: "28px",
                    textDecoration: "none",
                  }}
                  href="tel:8 (800) 234-12-82"
                >
                  8 (800) 234-12-82
                </a>
              </Button>
            </Stack>
          </Tilt>
        ))}
      </Stack>
    </Box>
  );
};

export default index;
