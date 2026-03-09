import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { Resend } from 'resend'; // 1. Import Resend

// 2. Initialize with your API key
const resend = new Resend('re_NPCuSRUs_AVoD82W9VHHkyyzpA4LxRxXp');

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.messages.create.path, async (req, res) => {
    try {
      // Validate the form input (name, email, message)
      const input = api.messages.create.input.parse(req.body);
      
      // Save the message to your database
      const message = await storage.createMessage(input);

      // 3. Send the email notification to yourself
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'theekshanann322@gmail.com',
        subject: `New Portfolio Message from ${input.name}`,
        html: `
          <h3>You have a new message from your website!</h3>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `
      });

      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error("Email/Server Error:", err);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  return httpServer;
}