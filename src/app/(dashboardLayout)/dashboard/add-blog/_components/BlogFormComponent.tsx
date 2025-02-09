/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useState } from "react";

import ImageUpload from "@/components/ui/file-upload";

import { useRouter } from "next/navigation";

import {
  useCreateBlogMutation,
  useUpdateBlogMutation,
} from "@/redux/api/features/blog/blogApi";
import TextField from "@/components/form/TextField";
import { toast } from "react-toastify";

const ReactQuillEditor = dynamic(
  () => import("@/components/common/ReactQuill/ReactQuillEditor"),
  {
    ssr: false,
  }
);
const BlogFormComponent = ({ blog }: any) => {
  const [content, setContent] = useState("");

  // RTK Query

  const [createBlog, { isLoading: isCreatingBlog }] = useCreateBlogMutation();
  const [updateBlog, { isLoading: isUpdatingBlog }] = useUpdateBlogMutation();

  const router = useRouter();

  const form = useForm({
    // resolver: zodResolver(BlogSchema),
    mode: "onChange",
    defaultValues: {
      title: blog?.title || "",

      content: blog?.content || "",
      image: blog?.image || "",
    },
  });

  const onSubmit = async (data: any) => {
    const formData = { ...data, content: content };
 
    if (!data.image) {
      return toast("Image is required", {
        style: {
          backgroundColor: "red",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        },
      });
    }

    if (blog) {
      // Update blog
    
      const res = await updateBlog({ body: formData, id: blog._id });

      if (res?.error) {
        const error = res.error as any;
       
        toast((error.data?.message as string) || "Something went wrong");
      } else {
        if (res?.data?.success) {
          toast.success("Blog updated successfully");
          router.push(`/blog/${res.data.data._id}`);
        }
      }
      return;
    }

    const res = await createBlog(formData);

    if (res?.error) {
      const error = res.error as any;
      
      toast((error.data?.message as string) || "Something went wrong");
    }
  
    if (res?.data?.success) {
      toast.success("Blog added successfully");
      router.push(`/blog/${res.data.data._id}`);
    }
// reset form
    // form.reset();
  };

  const onError = (errors: any) => {
    console.log("Validation errors:", errors);
  };

  if (isCreatingBlog || isUpdatingBlog) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex justify-center ">
      <div className=" w-full  max-w-[800px] border p-2 md:p-5">
        <h1 className="text-2xl font-bold mb-4">
          {blog ? "Update Blog" : "Add Blog"}
        </h1>

        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onError)}>
              <LabelInputContainer className="mb-4">
                <TextField
                  control={form.control}
                  label="Title"
                  fieldName="title"
                  placeholder="Blog title"
                  type="text"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <div className="max-w-[800px]">
                  <p className="font-medium -mb-14">content of the blog:</p>
                  <ReactQuillEditor
                    toolbarId="editor-toolbar"
                    value={content || blog?.content || ""}
                    setValue={setContent}
                    defaultValue="Enter your blog details here..."
                  />
                </div>
              </LabelInputContainer>

              <div className="w-fit mb-4 mt-24 md:mt-10 lg:mt-5 mx-auto">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blog Image</FormLabel>
                      <FormControl>
                        <ImageUpload
                          onChange={(imageUrls: any) => {
                            field.onChange(imageUrls[0]);
                          }}
                          value={[field.value as string]}
                          disabled={isCreatingBlog || isUpdatingBlog}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <LabelInputContainer className="mt-5">
                <Button
                  disabled={isCreatingBlog || isUpdatingBlog}
                  className="bg-[#b66055] rounded-full "
                >
                  {blog ? "Update Blog" : "Add Blog"}
                </Button>
              </LabelInputContainer>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BlogFormComponent;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
