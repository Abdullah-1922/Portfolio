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
  useDeleteBlogMutation,
  useGetAllBlogQuery,
} from "@/redux/api/features/blog/blogApi";

import { useRouter } from "next/navigation";

import { z } from "zod";
import { toast } from "react-toastify";


export const BlogSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  content: z.string({ required_error: "Description is required" }),
  image: z.string({ invalid_type_error: "Invalid type" }),
  createdAt: z.string({ invalid_type_error: "Invalid type" }),
});

interface BlogData {
  _id: string;

  blogCategory: string;
  title: string;
  content: string;
  image: string;

  createdAt: string;
}

const BlogTable = () => {
  const { data, isLoading, error } = useGetAllBlogQuery(undefined);
  const blogData = data?.data;
  const [deleteBlogMutation] = useDeleteBlogMutation();

  const router = useRouter();

  const columns = useMemo<ColumnDef<BlogData>[]>(
    () => [
      {
        header: "Title",
        accessorKey: "title",
      },
     
      {
        header: "Image",
        cell: ({ row }) => (
          <Image
            alt={row.original.title}
            width={100}
            height={100}
            src={row.original.image}
          />
        ),
      },

      {
        header: "CreatedAt",
        accessorKey: "createdAt",
      },
      {
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push(`/blog/${row.original._id}`)}
            >
              Details
            </Button>
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
                    your blog and remove your data from our servers.
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
    data: blogData || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleUpdate = (id: string) => {
    router.push(`/dashboard/blog-management/${id}`);
  };

  const handleDelete = async (id: string) => {
    const res = await deleteBlogMutation(id);

    if (res.error) {
      console.log(res.error);
    }
    if (res.data?.success) {
      toast("Blog deleted successfully");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading blogs.</div>;
  }

  return (
    <div className="overflow-x-auto ">
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

export default BlogTable;
