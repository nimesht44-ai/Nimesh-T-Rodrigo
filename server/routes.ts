import type { Express } from "express";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { Resend } from 'resend';

const resend = new Resend('re_NPCuSRUs_AVoD82W9VHHkyyzpA4LxRxXp');

export async function registerRoutes(httpServer: any, app: Express) {
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);

      // Send the email to your Gmail
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'theekshanann322@gmail.com',
        subject: `New Message from ${input.name}`,
        html: `<p><strong>Name:</strong> ${input.name}</p>
               <p><strong>Email:</strong> ${input.email}</p>
               <p><strong>Message:</strong> ${input.message}</p>`
      });

      res.status(201).json(message);
    } catch (err) {
      console.error("Server Error:", err);
      res.status(500).json({ message: "Failed to send message" });
    }
  });
}