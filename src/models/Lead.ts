import mongoose, { Schema, Document } from "mongoose";

export interface ILead extends Document {
  name: string;
  email: string;
  phone: string;
  pdfDownloaded: boolean;
  createdAt: Date;
}

const LeadSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  pdfDownloaded: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Lead = mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);
