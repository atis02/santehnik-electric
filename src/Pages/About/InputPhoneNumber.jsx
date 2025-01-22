import React, { useState } from "react";
import { TextField, Button, Box, CircularProgress } from "@mui/material";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const RussianPhoneField = () => {
  const [phoneNumber, setFormData] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("+7 ");

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_qrmj0hu", // Replace with your EmailJS Service ID
        "template_ziwr7wu", // Replace with your EmailJS Template ID
        { phoneNumber: phoneNumber },
        "166v_1yD2m1Uci00R" // Replace with your EmailJS Public Key
      )
      .then((result) => {
        console.log("Email sent successfully!", result.text);
        toast.success("Успешно отправлено!");
        setFormData({ name: "", message: "" });
        setOpen(false);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast("Failed to send email. Please try again.");
        setLoading(false);
      });
  };

  // const handleChange = (event) => {
  //   const input = event.target.value;

  //   setValue(input);
  // };

  const handleSubmit = () => {
    if (!error && value) {
      alert("Phone number submitted: " + value);
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <form
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
        onSubmit={handleSendEmail}
      >
        <TextField
          fullWidth
          label="Ваш номер"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          required
          InputProps={{
            inputMode: "tel",
            placeholder: "+7 (__) __-___  ",
          }}
          type="number"
          sx={{
            width: "300px",
            "& .MuiOutlinedInput-root": {
              borderColor: "white", // Set border color to white
              backgroundColor: "white",
              height: { lg: 50, md: 50, sm: 45, xs: 45 },
              width: "95%",
              "&:hover fieldset": {
                borderColor: "white", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // Focused border color
              },
              "& fieldset": {
                borderColor: "white", // Set the fieldset border color to white
              },
            },
            "& .MuiInputLabel-root": {
              color: "#0D92F3", // Set label color to #0D92F3
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          // disabled={loading}
          sx={{
            // minHeight: 46,
            height: { lg: 53, md: 50, sm: 45, xs: 45 },
            width: "150px",
            bgcolor: "#0D92F3", // Submit button background color
            color: "#fff", // Text color inside button
            fontFamily: "Montserrat",
            fontWeight: 400,
            fontSize: { lg: 16, md: 16, sm: 14, xs: 12 },
            "&:hover": {
              bgcolor: "#0A7FBC", // Darker color on hover
            },
          }}
        >
          {loading ? <CircularProgress sx={{ color: "#fff" }} /> : "Отправить "}
        </Button>
      </form>
    </Box>
  );
};

export default RussianPhoneField;
