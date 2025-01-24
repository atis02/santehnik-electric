import React, { useState } from "react";
import { TextField, Button, Box, CircularProgress } from "@mui/material";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const RussianPhoneField = () => {
  const [phoneNumber, setPhoneNumber] = useState("+");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;

    // Ограничение длины номера (12 символов, включая "+7" или "+8")
    if (input.length > 12) {
      return;
    }

    // Разрешить только цифры, пробелы, скобки и дефисы
    if (/^\+[\s\d()-]*$/.test(input)) {
      setPhoneNumber(input);

      // Проверка, что номер начинается с "+7" или "+8"
      if (input.length >= 2 && !/^\+(7|8)/.test(input)) {
        setError(true);
      } else {
        setError(false);
      }
    } else {
      setError(true);
    }
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Убедиться, что номер корректен
    if (phoneNumber.length !== 12 || !/^\+(7|8)/.test(phoneNumber) || error) {
      toast.error(
        "Введите действительный номер телефона (+7 или +8 и 10 цифр)."
      );
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_qrmj0hu", // Замените на ваш EmailJS Service ID
        "template_ziwr7wu", // Замените на ваш EmailJS Template ID
        { phoneNumber: phoneNumber },
        "166v_1yD2m1Uci00R" // Замените на ваш EmailJS Public Key
      )
      .then((result) => {
        console.log("Email sent successfully!", result.text);
        toast.success("Успешно отправлено!");
        setPhoneNumber("+"); // Сброс номера
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Ошибка отправки. Попробуйте снова.");
        setLoading(false);
      });
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
          error={error}
          helperText={
            error
              ? "Номер должен начинаться с +7 или +8 и содержать 10 цифр."
              : "Формат: +7 (XXX) XXX-XX-XX"
          }
          InputProps={{
            inputMode: "tel",
            placeholder: "+7 (XXX) XXX-XX-XX",
          }}
          sx={{
            width: "300px",
            "& .MuiOutlinedInput-root": {
              borderColor: error ? "red" : "white",
              backgroundColor: "white",
              height: { lg: 50, md: 50, sm: 45, xs: 45 },
              width: "95%",
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: error ? "red" : "white",
              },
              "& fieldset": {
                borderColor: error ? "red" : "white",
              },
            },
            "& .MuiInputLabel-root": {
              color: error ? "red" : "#0D92F3",
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            height: { lg: 53, md: 50, sm: 45, xs: 45 },
            width: "150px",
            bgcolor: "#0D92F3",
            color: "#fff",
            fontFamily: "Montserrat",
            mb: 3,
            fontWeight: 400,
            fontSize: { lg: 16, md: 16, sm: 14, xs: 12 },
            "&:hover": {
              bgcolor: "#0A7FBC",
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
