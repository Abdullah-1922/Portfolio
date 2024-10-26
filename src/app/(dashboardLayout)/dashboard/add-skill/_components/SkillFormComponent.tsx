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
  useCreateSkillMutation,
  useUpdateSkillMutation,
} from "@/redux/api/features/skill/skillApi";
import TextField from "@/components/form/TextField";
import { toast } from "react-toastify";

const ReactQuillEditor = dynamic(
  () => import("@/components/common/ReactQuill/ReactQuillEditor"),
  {
    ssr: false,
  }
);
const SkillFormComponent = ({ skill }: any) => {
  const [content, setContent] = useState("");

  // RTK Query

  const [createSkill, { isLoading: isCreatingSkill }] =
    useCreateSkillMutation();
  const [updateSkill, { isLoading: isUpdatingSkill }] =
    useUpdateSkillMutation();

  const router = useRouter();

  const form = useForm({
    // resolver: zodResolver(SkillSchema),
    mode: "onChange",
    defaultValues: {
      name: skill?.name || "",

      image: skill?.image || "",
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

    if (skill) {
      // Update skill

      const res = await updateSkill({ body: formData, id: skill._id });

      if (res?.error) {
        const error = res.error as any;

        toast((error.data?.message as string) || "Something went wrong");
      } else {
        if (res?.data?.success) {
          toast.success("Skill updated successfully");
          router.push(`/dashboard/skill-management`);
        }
      }
      return;
    }

    const res = await createSkill(formData);

    if (res?.error) {
      const error = res.error as any;

      toast((error.data?.message as string) || "Something went wrong");
    }

    if (res?.data?.success) {
      toast.success("Skill added successfully");
      router.push(`/dashboard/skill-management`);
    }
    // reset form
    form.reset();
  };

  const onError = (errors: any) => {
    console.log("Validation errors:", errors);
  };

  if (isCreatingSkill || isUpdatingSkill) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex justify-center ">
      <div className=" w-full  max-w-[800px] border p-2 md:p-5">
        <h1 className="text-2xl font-bold mb-4">
          {skill ? "Update Skill" : "Add Skill"}
        </h1>

        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onError)}>
              <LabelInputContainer className="mb-4">
                <TextField
                  control={form.control}
                  label="Name"
                  fieldName="name"
                  placeholder="Skill name"
                  type="text"
                />
              </LabelInputContainer>

              <div className="w-fit mb-4 mt-24 md:mt-10 lg:mt-5 mx-auto">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skill Image</FormLabel>
                      <FormControl>
                        <ImageUpload
                          onChange={(imageUrls: any) => {
                            field.onChange(imageUrls[0]);
                          }}
                          value={[field.value as string]}
                          disabled={isCreatingSkill || isUpdatingSkill}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <LabelInputContainer className="mt-5">
                <Button
                  disabled={isCreatingSkill || isUpdatingSkill}
                  className="bg-[#b66055] rounded-full "
                >
                  {skill ? "Update Skill" : "Add Skill"}
                </Button>
              </LabelInputContainer>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SkillFormComponent;

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
