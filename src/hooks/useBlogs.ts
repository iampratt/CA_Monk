import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchBlogs, fetchBlogById, createBlog, type CreateBlogInput } from '@/lib/api'

export function useBlogs() {
    return useQuery({
        queryKey: ['blogs'],
        queryFn: fetchBlogs,
    })
}

export function useBlog(id: number | null) {
    return useQuery({
        queryKey: ['blog', id],
        queryFn: () => fetchBlogById(id!),
        enabled: id !== null,
    })
}

export function useCreateBlog() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (blog: CreateBlogInput) => createBlog(blog),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] })
        },
    })
}
