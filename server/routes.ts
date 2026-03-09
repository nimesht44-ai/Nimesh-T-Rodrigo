import type { Express, Request, Response } from "express";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(httpServer: any, app: Express) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    // FORCE IPv4 to stop the ENETUNREACH error
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000
  });

  app.post(api.messages.create.path, async (req: Request, res: Response) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);

      await transporter.sendMail({
        from: `"Portfolio" <${process.env.EMAIL_USER}>`,
        to: 'theekshanann322@gmail.com',
        subject: `Message from ${input.name}`,
        text: `From: ${input.email}\n\n${input.message}`
      });

      res.status(201).json(message);
    } catch (err) {
      console.error("Detailed Server Error:", err);
      res.status(500).json({ message: "Failed to send message" });
    }
  });
}