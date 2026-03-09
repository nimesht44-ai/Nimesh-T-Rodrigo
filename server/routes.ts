import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { Resend } from "resend"; // 1. Added this import

// 2. Initialize Resend with your API Key (stored in Render)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);

      // 3. This block sends the email to your Gmail
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: 'Portfolio <onboarding@resend.dev>',
          to: 'theekshanann322@gmail.com',
          subject: `New Message from ${input.name}`,
          text: `You have a new message!\n\nName: ${input.name}\nEmail: ${input.email}\nMessage: ${input.message}`,
        });
      }

      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}