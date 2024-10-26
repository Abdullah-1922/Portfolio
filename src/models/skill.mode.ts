import mongoose, { Schema, Document } from "mongoose";

interface ISkill extends Document {
  name: string;
  image: string;
}

const SkillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const Skill =
  mongoose.models.Skill || mongoose.model<ISkill>("Skill", SkillSchema);

export default Skill;
