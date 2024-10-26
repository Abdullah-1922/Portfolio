import dbConnect from "@/lib/mongoose";
import Skill from "@/models/skill.mode";

import { NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Create a new skill
export async function POST(request: any) {
    try {
        await dbConnect();
        const body = await request.json();
        console.log(body);
        const skill = await Skill.create(body);
        console.log(skill);
        return NextResponse.json(
            { message: "Skill created successfully", data: skill, success: true },
            { status: 201 }
        );
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json(
            { message: "Failed to create skill", error: errorMessage },
            { status: 500 }
        );
    }
}

// Get all skills
export async function GET(request: any) {
    try {
        await dbConnect();
        const skills = await Skill.find();

        return NextResponse.json(
            {
                message: "Skills retrieved successfully",
                data: skills,
                success: true,
            },
            { status: 200 }
        );
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json(
            { message: "Failed to retrieve skills", error: errorMessage },
            { status: 500 }
        );
    }
}