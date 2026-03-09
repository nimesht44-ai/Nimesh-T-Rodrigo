import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // 1. Setup the Email Transporter (using Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail
      pass: process.env.EMAIL_PASS  // Your App Password
    }
  });

  app.post(api.messages.create.path, async (req, res) => {
    try {
      // Validate input
      const input = api.messages.create.input.parse(req.body);
      
      // Save message to database
      const message = await storage.createMessage(input);

      // 2. Send the Email Notification to you
      const mailOptions = {
        from: input.email,
        to: 'theekshanann322@gmail.com', // Your Gmail
        subject: `New Portfolio Message: ${input.name}`,
        text: `You received a new message!\n\nName: ${input.name}\nEmail: ${input.email}\nMessage: ${input.message}`
      };

      await transporter.sendMail(mailOptions);

      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error("Server Error:", err);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  return httpServer;
}