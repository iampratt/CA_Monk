import { useBlogs } from '@/hooks/useBlogs'
import { Skeleton } from '@/components/ui/skeleton'

interface BlogListProps {
    selectedBlogId: number | null
    onSelectBlog: (id: number) => void
}

export function BlogList({ selectedBlogId, onSelectBlog }: BlogListProps) {
    const { data: blogs, isLoading, error } = useBlogs()

    if (isLoading) {
        return (
            <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="space-y-3">
                        <Skeleton className="h-32 w-full" />
                    </div>
                ))}
            </div>
        )
    }

    if (error) {
        return (
            <div className="p-4 text-destructive bg-destructive/10 rounded-lg">
                Error loading blogs
            </div>
        )
    }

    if (!blogs || blogs.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-center">
                <h3 className="text-lg font-semibold mb-2">No blogs found</h3>
                <p className="text-sm text-muted-foreground">
                    Create your first blog to get started
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {blogs?.map((blog) => (
                <div
                    key={blog.id}
                    onClick={() => onSelectBlog(blog.id)}
                    className={`
                        group cursor-pointer p-4 rounded-xl border transition-all duration-200 hover:shadow-md
                        ${selectedBlogId === blog.id
                            ? 'bg-primary/5 border-primary shadow-sm'
                            : 'bg-card border-transparent hover:border-gray-200'}
                    `}
                >
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-blue-600 uppercase tracking-wider">
                                {blog.category}
                            </span>
                            <span className="text-muted-foreground">
                                {new Date(blog.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>

                        <h3 className={`font-bold text-base leading-tight group-hover:text-blue-700 transition-colors ${selectedBlogId === blog.id ? 'text-primary' : 'text-foreground'}`}>
                            {blog.title}
                        </h3>

                        <p className="text-sm text-muted-foreground line-clamp-2">
                            {blog.description}
                        </p>

                        <div className="pt-2 flex items-center gap-2">
                            <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                {blog.category}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
