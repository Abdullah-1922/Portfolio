/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import dbConnect from "@/lib/mongoose";
import { Blog } from "@/models/blog.model";
import { NextResponse } from "next/server";

// Create a new blog
export async function POST(request: any) {
  try {
    await dbConnect();
    const body = await request.json();
    const { title, content, image } = body;
    console.log(body);
    const blog = await Blog.create({ title, content, image });

    return NextResponse.json(
      { message: "Blog created successfully", data: blog, success: true },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { message: "Failed to create blog", error: errorMessage },
      { status: 500 }
    );
  }
}



// Update a blog by ID
export async function PUT(request: any) {
  try {
    await dbConnect();
    const body = await request.json();
    const { id, title, content, image } = body;

    if (!id) {
      return NextResponse.json(
        { message: "Blog ID is required" },
        { status: 400 }
      );
    }

    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, content, image },
      { new: true }
    );

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Blog updated successfully", data: blog, success: true },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { message: "Failed to update blog", error: errorMessage },
      { status: 500 }
    );
  }
}
// Get all blogs
export async function GET(request: any) {
  try {
    await dbConnect();
    const blogs = await Blog.find();

    return NextResponse.json(
      { message: "Blogs retrieved successfully", data: blogs, success: true },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { message: "Failed to retrieve blogs", error: errorMessage },
      { status: 500 }
    );
  }
}