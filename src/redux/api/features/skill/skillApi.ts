import { baseApi } from "../../baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSkill: builder.query({
      query: () => ({
        url: `/skill`,
        method: "GET",
      }),
      providesTags: ["skill"],
    }),
    getSingleSkill: builder.query({
      query: (id) => ({
        url: `/skill/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "SingleSkill", id }],
    }),
    createSkill: builder.mutation({
      query: (body) => ({
        url: `/skill`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["skill"],
    }),
    updateSkill: builder.mutation({
      query: ({ body, id }) => ({
        url: `/skill/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        "skill",
        { type: "SingleSkill", id },
      ],
    }),
    deleteSkill: builder.mutation({
      query: (id: string) => ({
        url: `/skill/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "skill",
        { type: "SingleSkill", id },
      ],
    }),
  }),
});

export const {
  useGetAllSkillQuery,
  useGetSingleSkillQuery,
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = skillApi;
