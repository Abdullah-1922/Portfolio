/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import TextField from "@/components/form/TextField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useState } from "react";

import { X } from "lucide-react";
import { Input } from "@/components/ui/input";

import ImageUpload from "@/components/ui/file-upload";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  useCreateProjectMutation,
  useUpdateProjectMutation,
} from "@/redux/api/features/project/projectApi";
import { addProjectSchema } from "./addProjectSchema";

const ReactQuillEditor = dynamic(
  () => import("@/components/common/ReactQuill/ReactQuillEditor"),
  {
    ssr: false,
  }
);

const ProjectFormComponent = ({ project }: any) => {
  const [content, setContent] = useState(project?.description || "");

  
  const [skills, setSkill] = useState<{ name: string }[]>(
    project?.skills || []
  );
  const [newSkill, setNewSkill] = useState("");

  const [createProject, { isLoading: isCreatingProject }] =
    useCreateProjectMutation();
  const [updateProject, { isLoading: isUpdatingProject }] =
    useUpdateProjectMutation();

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(addProjectSchema),
    mode: "onChange",
    defaultValues: {
      name: project?.name || "",

      skills: project?.skills || skills,
      readyIn: project ? project?.readyIn : 1,
      isTeamProject: project?.isTeamProject || false,
      description: project?.description || "",

      category: project?.category || "E-commerce",

      projectImage: project?.projectImage || "",
      liveLink: project?.liveLink || "",
      githubLink: project?.githubLink || "",
    },
  });


  const onSubmit = async (data: any) => {
    console.log('onsiubmit clicked');
    const formData = { ...data, description: content, skills };

    if (!data.projectImage) {
      return toast("projectImage is required", {
        style: {
          backgroundColor: "red",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        },
      });
    }

    if (project) {
      // Update project
    
      const res = await updateProject({ body: formData, id: project._id });
      console.log(res.data);
      if (res?.error) {
        const error = res.error as any;
        console.log(res.error);
        toast((error.data?.message as string) || "Something went wrong");
      } else {
        if (res?.data?.success) {
          router.push(`/project/${res?.data?.data._id}`);
          toast("Project updated successfully");
        }
      }
      return;
    }

    const res = await createProject(formData);
    console.log(res);
    if (res?.error) {
      const error = res.error as any;
      console.log(res.error);
      toast((error.data?.message as string) || "Something went wrong");
    }

    if (res?.data?.success) {
      router.push(`/project/${res?.data?.data._id}`);
      toast("Project added successfully");
    }

    // form.reset();
  };

  const onError = (errors: any) => {
    console.log("Validation errors:", errors);
  };

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkill([...skills, { name: newSkill.trim() }]);
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
    const updatedSkill = skills.filter((_, i) => i !== index);
    setSkill(updatedSkill);
  };

  return (
    <div className="flex justify-center ">
      <div className=" w-full  max-w-[800px] border p-2 md:p-5">
        <h1 className="text-2xl font-bold mb-4">
          {project ? "Update Project" : "Add Project"}
        </h1>

        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onError)}>
              <div className="flex items-center gap-4">
                <LabelInputContainer className="mb-4 w-[80%]">
                  <TextField
                    control={form.control}
                    label="Name"
                    fieldName="name"
                    placeholder="Project name"
                    type="text"
                  />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4 ml-4 mt-4">
                  <div className="flex  items-center mt-4">
                    <input
                      type="checkbox"
                      id="isTeamProject"
                      {...form.register("isTeamProject")}
                      className="mr-2 w-6 h-6" // Increased width and height for a bigger checkbox
                    />
                    <label htmlFor="isTeamProject" className="font-medium">
                      <p> Is TeamProject</p>
                    </label>
                  </div>
                </LabelInputContainer>
              </div>

              <LabelInputContainer className="mb-4 ">
                  <TextField
                    control={form.control}
                    label="Live Link"
                    fieldName="liveLink"
                    placeholder="Project Live Link"
                    type="text"
                  />
                </LabelInputContainer>
              <LabelInputContainer className="mb-4 ">
                  <TextField
                    control={form.control}
                    label="GitHub Link"
                    fieldName="githubLink"
                    placeholder="Project github Link"
                    type="text"
                  />
                </LabelInputContainer>
              <div className="mb-4 flex flex-row gap-3 items-center">
                <LabelInputContainer className="mb-4 ">
                  <div>
                    <TextField
                      control={form.control}
                      label="ReadyIn ( In days )"
                      fieldName="readyIn"
                      placeholder="Input in days..."
                      type="number"
                    />
                  </div>
                </LabelInputContainer>
              </div>
              <div className="flex justify-center gap-3 -mt-5 items-center">
                <LabelInputContainer className="mb-4">
                  <p className="text-[14px]  font-medium">Category</p>
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full mt-7 rounded-full">
                          <SelectValue placeholder="Select meal type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="E-commerce">E-commerce</SelectItem>
                          <SelectItem value="Blog">Blog</SelectItem>
                          <SelectItem value="Landing Page">
                            Landing Page
                          </SelectItem>
                          <SelectItem value="Services">Services</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </LabelInputContainer>
              </div>

              <LabelInputContainer className="mb-4">
                <label htmlFor="skill" className="font-medium">
                  Skill
                </label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    id="skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add an skill"
                    className="flex-grow"
                  />
                  <Button
                    type="button"
                    onClick={addSkill}
                    className="bg-[#b66055] rounded-full"
                  >
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className=" border-2 rounded-full px-3 py-1 flex items-center"
                    >
                      <span>{skill.name}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill(index)}
                        className="ml-2 text-gray-600 hover:text-gray-800"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <div className="max-w-[800px]">
                  <p className="font-medium -mb-14">Project details :</p>
                  <ReactQuillEditor
                    toolbarId="editor-toolbar"
                    value={content || project?.description || ""}
                    setValue={setContent}
                    defaultValue="Enter your project details here..."
                  />
                </div>
              </LabelInputContainer>
              <div className="w-fit   mb-4 mt-24 md:mt-10 lg:mt-5 mx-auto">
                <FormField
                  control={form.control}
                  name="projectImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Image Image</FormLabel>
                      <FormControl>
                        <ImageUpload
                          onChange={(imageUrls: any) => {
                            field.onChange(imageUrls[0]);
                          }}
                          value={[field.value as string]}
                          disabled={isCreatingProject || isUpdatingProject}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <LabelInputContainer className="mt-5">
                <Button
                  disabled={isCreatingProject || isUpdatingProject}
                  className="bg-[#b66055] rounded-full "
                >
                  {project ? "Update Project" : "Add Project"}
                </Button>
              </LabelInputContainer>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProjectFormComponent;

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
