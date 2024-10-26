import dbConnect from "@/lib/mongoose";
import Skill from "@/models/skill.mode";

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
                { message: "Skill ID is required" },
                { status: 400 }
            );
        }

        const skill = await Skill.findById(id);

        if (!skill) {
            return NextResponse.json(
                { message: "Skill not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: "Skill retrieved successfully",
                data: skill,
                success: true,
            },
            { status: 200 }
        );
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json(
            { message: "Failed to retrieve skill", error: errorMessage },
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
                { message: "Skill ID is required" },
                { status: 400 }
            );
        }

        const updatedSkill = await Skill.findByIdAndUpdate(id, body, {
            new: true,
        });

        if (!updatedSkill) {
            return NextResponse.json(
                { message: "Skill not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: "Skill updated successfully",
                data: updatedSkill,
                success: true,
            },
            { status: 200 }
        );
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json(
            { message: "Failed to update skill", error: errorMessage },
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
                { message: "Skill ID is required" },
                { status: 400 }
            );
        }

        const deletedSkill = await Skill.findByIdAndDelete(id);

        if (!deletedSkill) {
            return NextResponse.json(
                { message: "Skill not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Skill deleted successfully", success: true },
            { status: 200 }
        );
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json(
            { message: "Failed to delete skill", error: errorMessage },
            { status: 500 }
        );
    }
}