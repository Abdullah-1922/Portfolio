import dbConnect from "@/lib/mongoose";
import { Project } from "@/models/project.model";

import { NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Create a new project
export async function POST(request: any) {
  try {
    await dbConnect();
    const body = await request.json();
    // const { name, description, image,skills,readyIn,isTeamProject,category,projectImage } = body;
    // console.log(body);
    console.log(body);
    const project = await Project.create(body);
    console.log(project);
    return NextResponse.json(
      { message: "Project created successfully", data: project, success: true },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { message: "Failed to create project", error: errorMessage },
      { status: 500 }
    );
  }
}

// Get all projects
export async function GET(request: any) {
  try {
    await dbConnect();
    const projects = await Project.find();

    return NextResponse.json(
      {
        message: "Projects retrieved successfully",
        data: projects,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { message: "Failed to retrieve projects", error: errorMessage },
      { status: 500 }
    );
  }
}
