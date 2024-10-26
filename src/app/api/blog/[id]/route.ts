/* eslint-disable @typescript-eslint/no-explicit-any */
import dbConnect from "@/lib/mongoose";
import { Blog } from "@/models/blog.model";

import { NextResponse } from "next/server";

export async function GET(
  request: any,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { message: "Blog ID is required" },
        { status: 400 }
      );
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog retrieved successfully", data: blog, success: true },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { message: "Failed to retrieve blog", error: errorMessage },
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
        { message: "Blog ID is required" },
        { status: 400 }
      );
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, body, { new: true });

    if (!updatedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog updated successfully", data: updatedBlog, success: true },
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

export async function DELETE(
  request: any,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { message: "Blog ID is required" },
        { status: 400 }
      );
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { message: "Failed to delete blog", error: errorMessage },
      { status: 500 }
    );
  }
}
