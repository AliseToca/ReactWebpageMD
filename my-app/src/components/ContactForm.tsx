import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { sendContactForm, resetContactState } from "../store/contactSlice";

interface FormState {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const dispatch = useAppDispatch();
  const { loading, success, error } = useAppSelector((state) => state.contact);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [setView] = useState<"list" | "module" | "quilt" | null>("list");

  // form input handler
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(sendContactForm(form));
  };

  useEffect(() => {
    if (success) {
      setForm({ name: "", email: "", message: "" });
    }
  }, [success]);

  useEffect(() => {
    return () => {
      dispatch(resetContactState());
    };
  }, [dispatch]);

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight={500}>
        Contact Form
      </Typography>

      <Box sx={{ minHeight: 60, mb: 2 }}>
        {success && <Alert severity="success">Message sent successfully!</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          value={form.name}
          onChange={handleFormChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          type="email"
          label="Your Email"
          name="email"
          value={form.email}
          onChange={handleFormChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Project Details"
          name="message"
          value={form.message}
          onChange={handleFormChange}
          margin="normal"
          multiline
          rows={4}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ mt: 2 }}
          fullWidth
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Send Message"}
        </Button>
      </form>
    </Paper>
  );
}

export default ContactForm;
