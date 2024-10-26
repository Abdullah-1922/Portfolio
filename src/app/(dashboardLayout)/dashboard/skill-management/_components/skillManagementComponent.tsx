"use client";

import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  useDeleteSkillMutation,
  useGetAllSkillQuery,
} from "@/redux/api/features/skill/skillApi";

import { useRouter } from "next/navigation";

import { z } from "zod";
import { toast } from "react-toastify";

export const SkillSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  content: z.string({ required_error: "Description is required" }),
  image: z.string({ invalid_type_error: "Invalid type" }),
  createdAt: z.string({ invalid_type_error: "Invalid type" }),
});

interface SkillData {
  _id: string;

  name: string;

  image: string;
}

const SkillTable = () => {
  const { data, isLoading, error } = useGetAllSkillQuery(undefined);
  const skillData = data?.data;
  const [deleteSkillMutation] = useDeleteSkillMutation();

  const router = useRouter();

  const columns = useMemo<ColumnDef<SkillData>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },

      {
        header: "Image",
        cell: ({ row }) => (
          <Image
            alt={row.original.name}
            width={100}
            height={100}
            src={row.original.image}
          />
        ),
      },

      {
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleUpdate(row.original._id)}
            >
              Update
            </Button>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant="destructive" size="sm" className="">
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your skill and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => handleDelete(row.original._id)}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: skillData || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleUpdate = (id: string) => {
    router.push(`/dashboard/skill-management/${id}`);
  };

  const handleDelete = async (id: string) => {
    const res = await deleteSkillMutation(id);

    if (res.error) {
      console.log(res.error);
    }
    if (res.data?.success) {
      toast("Skill deleted successfully");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading skills.</div>;
  }

  return (
    <div className="overflow-x-auto mx-auto lg:w-[60%]">
      <table className="min-w-full  border border-gray-200">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 border-b-2 border-gray-300 text-left"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 border-b border-gray-200"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillTable;
