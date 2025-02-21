import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Rating,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import toast, { Toaster } from "react-hot-toast";
// Enable modules
// SwiperCore.use([Navigation, Pagination]);

const RatingsSwiper = () => {
  const [ratings, setRatings] = useState([
    {
      value: 4.5,
      desc: "Недавно мне понадобилась помощь сантехника для устранения протечки в ванной комнате. Я обратился к Сантехник Питер , и остался очень доволен оказанными услугами.Сантехник приехал точно в назначенное время, что очень приятно. Он был вежлив и профессионален.",
    },
    {
      value: 5,

      desc: "Хочу сказать спасибо за отличную работу! Мастер приехал вовремя, что очень приятно. Цены полностью соответствовали тем, что указаны на сайте, что также порадовало. Замена смесителя прошла быстро и качественно. Рекомендую услуги компании, а именно сантехника Евгения всем, кто ищет надежного специалиста!",
    },
    {
      value: 4.5,

      desc: "Хочу поблагодарить сантехника за быструю и качественную работу! В 21:07 я позвонил в компанию с проблемой засора, и всего через 43 минуты мастер уже был у меня дома. Он быстро устранил проблему, и я остался очень доволен сервисом",
    },
    {
      value: 5,

      desc: "Долго искала сантехника , обратилась в компанию Сантехник Питера. Мастер приехал в тот же день , заменил трубу в ванной , сам съездил в магазин купил все, принес чек что внушает еще больше доверия, подписали договор и плюс гарантия. Спасибо , рекомендую.",
    },
  ]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Fetch ratings from localStorage on component mount
  // useEffect(() => {
  //   const storedRatings = JSON.parse(localStorage.getItem("ratings")) || [];
  //   setRatings(storedRatings);
  // }, []);

  // Save new rating to localStorage
  // const addRating = () => {
  //   if (!newDescription.trim() || newRatingValue === 0) return; // Validate inputs
  //   const updatedRatings = [
  //     ...ratings,
  //     { value: newRatingValue, description: newDescription, name: user },
  //   ];
  //   setRatings(updatedRatings);
  //   localStorage.setItem("ratings", JSON.stringify(updatedRatings));
  //   setNewRatingValue(0); // Reset rating
  //   setNewDescription(""); // Clear input field
  //   setOpenModal(false); // Close modal
  //   toast.success("Успешно добавлен!");
  // };
  return (
    // <div style={{ maxWidth: "400px", margin: "auto" }}>
    //   <h2>Ratings</h2>
    //   {/* Input to add a new rating */}
    //   <div style={{ marginBottom: "1rem" }}>
    //     <input
    //       type="text"
    //       placeholder="Add a rating"
    //       value={newRating}
    //       onChange={(e) => setNewRating(e.target.value)}
    //       style={{
    //         padding: "0.5rem",
    //         border: "1px solid #ccc",
    //         borderRadius: "5px",
    //         width: "80%",
    //       }}
    //     />
    //     <button
    //       onClick={addRating}
    //       style={{
    //         marginLeft: "0.5rem",
    //         padding: "0.5rem 1rem",
    //         backgroundColor: "#007bff",
    //         color: "#fff",
    //         border: "none",
    //         borderRadius: "5px",
    //         cursor: "pointer",
    //       }}
    //     >
    //       Add
    //     </button>
    //   </div>

    //   {/* Swiper to display ratings */}
    //   <Swiper
    //     spaceBetween={10}
    //     slidesPerView={1}
    //     modules={[Navigation, Pagination]}
    //     navigation
    //     pagination={{ clickable: true }}
    //     style={{ overflow: "hidden" }}
    //   >
    //     {ratings.map((rating, index) => (
    //       <SwiperSlide key={index}>
    //         <div
    //           style={{
    //             padding: "1rem",
    //             background: "#f5f5f5",
    //             borderRadius: "10px",
    //             textAlign: "center",
    //             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    //           }}
    //         >
    //           {rating}
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
    <div style={{ maxWidth: "90%", margin: "auto", marginBottom: 30 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          fontSize={{ lg: 20, md: 18, xs: 15 }}
          fontWeight={700}
          data-aos="fade-up"
          data-aos-delay="200"
          fontFamily="Montserrat"
          pt={{ lg: "50px", md: "30px", xs: "10px" }}
          className="title"
          mb={isMobile ? "20px" : "40px"}
        >
          {/* {t("aboutCompany")} */}
          Посмотрите несколько положительных отзывов об услугах нашего
          сантехника.
        </Typography>
        <Toaster />
        {/* Button to open the modal */}
        {/* <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenModal(true)}
          style={{
            marginBottom: "1rem",
            height: 40,
            width: "250px",
            letterSpacing: "0.7px",
            lineHeight: 1.5,
          }}
        >
          Добавить отзыв
        </Button> */}
      </Stack>

      {/* Swiper to display ratings */}
      <Swiper
        spaceBetween={15}
        slidesPerView={isMobile ? 1.2 : 3.5}
        pagination={{ clickable: true }}
        style={{ overflow: "hidden" }}
        className="otzyw"
      >
        {ratings.map((rating, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                padding: "1rem",
                background: "#fff",
                border: "1px solid #0D92F3 ",
                color: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                minHeight: 265,
                maxHeight: 280,
                cursor: "pointer",
              }}
            >
              <Rating
                name="new-rating"
                defaultValue={rating.value}
                precision={0.5}
                // defaultValue={rating.value}
                size="large"
                sx={{
                  "& .MuiRating-iconFilled": { color: "#0D92F3" }, // Filled icon color
                  "& .MuiRating-iconHover": { color: "#0D92F3" }, // Hover color
                  "& .MuiRating-iconEmpty": { color: "#ccc" }, // Empty icon color
                }}
              />

              <Typography
                variant="body1"
                color="#0D92F3"
                style={{ marginTop: "0.5rem" }}
              >
                {rating.desc}
              </Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for adding a new rating */}
    </div>
  );
};

export default RatingsSwiper;
