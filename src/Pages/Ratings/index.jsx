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
  const [ratings, setRatings] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newRatingValue, setNewRatingValue] = useState(4);
  const [newDescription, setNewDescription] = useState("");
  const [user, setUser] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Fetch ratings from localStorage on component mount
  useEffect(() => {
    const storedRatings = JSON.parse(localStorage.getItem("ratings")) || [];
    setRatings(storedRatings);
  }, []);

  // Save new rating to localStorage
  const addRating = () => {
    if (!newDescription.trim() || newRatingValue === 0) return; // Validate inputs
    const updatedRatings = [
      ...ratings,
      { value: newRatingValue, description: newDescription, name: user },
    ];
    setRatings(updatedRatings);
    localStorage.setItem("ratings", JSON.stringify(updatedRatings));
    setNewRatingValue(0); // Reset rating
    setNewDescription(""); // Clear input field
    setOpenModal(false); // Close modal
    toast.success("Успешно добавлен!");
  };
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
        <Button
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
        </Button>
      </Stack>

      {/* Swiper to display ratings */}
      <Swiper
        spaceBetween={15}
        slidesPerView={isMobile ? 1 : 3.5}
        pagination={{ clickable: true }}
        style={{ overflow: "hidden", minHeight: 200 }}
        className="otzyw"
      >
        {ratings.map((rating, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                padding: "1rem",
                background: "#292929",
                border: "1px solid #0D92F3 ",
                color: "#fff",
                // textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                minHeight: 200,
              }}
            >
              <Rating
                name="new-rating"
                value={rating.value}
                size="large"
                sx={{
                  "& .MuiRating-iconFilled": { color: "#0D92F3" }, // Filled icon color
                  "& .MuiRating-iconHover": { color: "#0D92F3" }, // Hover color
                  "& .MuiRating-iconEmpty": { color: "#ccc" }, // Empty icon color
                }}
              />
              <Typography variant="h6" color="#0D92F3 ">
                {rating.name}
              </Typography>
              <Typography variant="body1" style={{ marginTop: "0.5rem" }}>
                {rating.description}
              </Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for adding a new rating */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="add-rating-modal"
        aria-describedby="modal-to-add-rating-and-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#292929",
            borderRadius: "8px",
            boxShadow: 24,
            p: 2,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              id="add-rating-modal"
              color="#fff"
              variant="h6"
              component="h2"
            >
              Добавьте отзыв!
            </Typography>
            <IconButton onClick={() => setOpenModal(false)}>
              <CloseIcon sx={{ color: "#ffff" }} />
            </IconButton>
          </Stack>

          {/* Rating Input */}
          <Rating
            name="new-rating"
            value={newRatingValue}
            onChange={(event, newValue) => setNewRatingValue(newValue)}
            size="large"
            sx={{
              "& .MuiRating-iconFilled": { color: "#0D92F3" }, // Filled icon color
              "& .MuiRating-iconHover": { color: "#0D92F3" }, // Hover color
              "& .MuiRating-iconEmpty": { color: "#ccc" }, // Empty icon color
            }}
          />

          {/* Description Input */}
          <TextField
            fullWidth
            label="Имя"
            // multiline
            // rows={3}
            value={user}
            onChange={(e) => setUser(e.target.value)}
            sx={{
              marginTop: 2,
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                "& fieldset": {
                  borderColor: "white", // Border color
                },
                "&:hover fieldset": {
                  borderColor: "white", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Border color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "white", // Label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white", // Label color when focused
              },
            }}
          />
          <TextField
            fullWidth
            label="Oписание"
            multiline
            rows={3}
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            sx={{
              marginTop: 2,
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                "& fieldset": {
                  borderColor: "white", // Border color
                },
                "&:hover fieldset": {
                  borderColor: "white", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Border color when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "white", // Label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white", // Label color when focused
              },
            }}
          />

          {/* Add Button */}
          <Stack alignItems="end">
            <Button
              variant="contained"
              color="primary"
              onClick={addRating}
              sx={{ marginTop: 3 }}
            >
              Добавить
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default RatingsSwiper;
