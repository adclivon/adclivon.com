import express, { Request, Response } from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface LeadRecord {
  id: string;
  fullName: string;
  businessEmail: string;
  companyWebsite: string;
  serviceRequired: string;
  monthlyBudget: string;
  projectDetails: string;
  targetMarket?: string;
  submittedAt: string;
  status: string;
  serverTimestamp?: string;
}

const capturedLeads: LeadRecord[] = [];

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API endpoint for consultation and contact form submissions
  app.post("/api/contact", (req: Request, res: Response) => {
    try {
      const data = req.body as LeadRecord;
      if (!data || !data.fullName || !data.businessEmail || !data.companyWebsite) {
        res.status(400).json({
          success: false,
          error: "Required contact fields missing (fullName, businessEmail, companyWebsite)",
        });
        return;
      }

      const record: LeadRecord = {
        ...data,
        serverTimestamp: new Date().toISOString(),
      };
      capturedLeads.unshift(record);

      res.status(200).json({
        success: true,
        message: "Consultation request recorded successfully",
        leadId: record.id,
        totalLeadsCaptured: capturedLeads.length,
      });
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      res.status(500).json({ success: false, error: errorMsg });
    }
  });

  // API endpoint to retrieve consultation leads
  app.get("/api/leads", (_req: Request, res: Response) => {
    res.json({
      success: true,
      total: capturedLeads.length,
      leads: capturedLeads,
    });
  });

  // Health check endpoint
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const isProduction = process.env.NODE_ENV === "production";

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Digital Marketing Agency app running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
