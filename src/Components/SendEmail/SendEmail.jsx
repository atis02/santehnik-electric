// service_znopyy7

import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import CloseIcon from "@mui/icons-material/Close";

const SendEmailModal = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    typeService: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChangePhone = (e) => {
    const input = e.target.value;

    // Ограничение длины номера (11 символов для формата 7XXXXXXXXXX)
    if (input.length > 11) {
      return;
    }

    // Разрешить только цифры
    if (/^\d*$/.test(input)) {
      setPhoneNumber(input);

      // Проверка, что номер начинается с 7 или 8
      if (input.length >= 1 && !/^[78]/.test(input)) {
        setError(true);
      } else {
        setError(false);
      }
    } else {
      setError(true);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_qrmj0hu", // Replace with your EmailJS Service ID
        "template_xyytx8n", // Replace with your EmailJS Template ID
        formData,
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

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#090909",
            borderRadius: 2,
            color: "#fff",
            boxShadow: 24,
            p: 2,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6" component="h2" gutterBottom>
              Оставьте заявку
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon
                sx={{
                  color: "#fff",
                }}
              />
            </IconButton>
          </Stack>

          <form onSubmit={handleSendEmail}>
            <TextField
              fullWidth
              label="Ваше Имя и Фамилия"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{
                mb: 2,
                "& .MuiInputLabel-root": { color: "#494949" }, // Label color
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#fff" }, // Border color
                  "&:hover fieldset": { borderColor: "#fff" }, // Border color on hover
                  "&.Mui-focused fieldset": { borderColor: "#fff" }, // Border color when focused
                  "& input": { color: "#fff" }, // Input text color
                },
              }}
            />
            <TextField
              fullWidth
              label="Ваш номер"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              sx={{
                mb: 2,
                "& .MuiInputLabel-root": { color: "#494949" }, // Label color

                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#fff" },
                  "&:hover fieldset": { borderColor: "#fff" },
                  "&.Mui-focused fieldset": { borderColor: "#fff" },
                  "& input": { color: "#fff" },
                },
              }}
              required
            />
            <TextField
              fullWidth
              label="Тип услуги"
              name="typeService"
              value={formData.typeService}
              onChange={handleChange}
              sx={{
                mb: 2,
                "& .MuiInputLabel-root": { color: "#494949" }, // Label color

                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#fff" },
                  "&:hover fieldset": { borderColor: "#fff" },
                  "&.Mui-focused fieldset": { borderColor: "#fff" },
                  "& input": { color: "#fff" },
                },
              }}
            />

            <TextField
              fullWidth
              label="Ваше сообщение"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              sx={{
                mb: 2,
                "& .MuiInputLabel-root": { color: "#494949" }, // Label color

                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#fff" },
                  "&:hover fieldset": { borderColor: "#fff" },
                  "&.Mui-focused fieldset": { borderColor: "#fff" },
                  "& textarea": { color: "#fff" }, // For multiline text area
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? "Отправляем..." : "Отправить "}
            </Button>
          </form>
          <Typography fontFamily="Montserrat" fontSize={14} color="#fff">
            Нажимая, вы соглашаетесь с условиями{" "}
            <a
              href="/agreement.docx"
              download="/agreement.docx"
              style={{
                color: "#0E93F4",
                fontFamily: "Montserrat",
              }}
            >
              {" "}
              пользовательского соглашения
            </a>
            <span style={{ fontFamily: "Montserrat", marginLeft: 10 }}>и</span>
            <a
              href="/policy.docx"
              download="/agreement.docx"
              style={{
                color: "#0E93F4",
                fontFamily: "Montserrat",
                marginLeft: 10,
              }}
            >
              {" "}
              политика конфиденциальности
            </a>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default SendEmailModal;
