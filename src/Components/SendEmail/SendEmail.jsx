// service_znopyy7

import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const SendEmailModal = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    typeService: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

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
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Send an Email
          </Typography>
          <form onSubmit={handleSendEmail}>
            <TextField
              fullWidth
              label="Ваше Имя и Фамилия"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              fullWidth
              label="Ваш номер"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              fullWidth
              label="Тип услуги"
              name="typeService"
              value={formData.typeService}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />

            <TextField
              fullWidth
              label="Ваше сообщение"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
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
        </Box>
      </Modal>
    </div>
  );
};

export default SendEmailModal;
