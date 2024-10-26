import dbConnect from "@/lib/mongoose";
import { Project } from "@/models/project.model";
import { NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function GET(
  request: any,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { message: "Project ID is required" },
        { status: 400 }
      );
    }

    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Project retrieved successfully",
        data: project,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { message: "Failed to retrieve project", error: errorMessage },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: any,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;
    const body = await request.json();

    if (!id) {
      return NextResponse.json(
        { message: "Project ID is required" },
        { status: 400 }
      );
    }

    const updatedProject = await Project.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Project updated successfully",
        data: updatedProject,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { message: "Failed to update project", error: errorMessage },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: any,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { message: "Project ID is required" },
        { status: 400 }
      );
    }

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Project deleted successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { message: "Failed to delete project", error: errorMessage },
      { status: 500 }
    );
  }
}
