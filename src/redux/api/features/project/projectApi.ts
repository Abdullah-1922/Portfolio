import { baseApi } from "../../baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProject: builder.query({
      query: () => ({
        url: `/project`,
        method: "GET",
      }),
      providesTags: ["project"],
    }),
    getSingleProject: builder.query({
      query: (id) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "SingleProject", id }],
    }),
    togglePublishStatus: builder.mutation({
      query: (id) => ({
        url: `/project/toggle-status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["project"],
    }),

    createProject: builder.mutation({
      query: (body) => ({
        url: `/project`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["project"],
    }),

    deleteProject: builder.mutation({
      query: (id: string) => ({
        url: `/project/${id}`,
        method: "DELETE",
      }),
      // Here, we need to use the `id` correctly
      invalidatesTags: (result, error, id) => [
        "project",
        { type: "SingleProject", id },
      ],
    }),
    updateProject: builder.mutation({
      query: ({ body, id }) => {
        console.log(body);
        return {
          url: `/project/${id}`,
          method: "PUT",
          body,
        };
      },
      // Make sure `id` is destructured correctly here
      invalidatesTags: (result, error, { id }) => [
        "project",
        { type: "SingleProject", id },
      ],
    }),
  }),
});

export const {
  useGetAllProjectQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useGetSingleProjectQuery,
  useUpdateProjectMutation,

  useTogglePublishStatusMutation,
} = projectApi;
