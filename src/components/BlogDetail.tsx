import { useQuery } from '@tanstack/react-query'
import { Blog } from '@/types'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertCircle, Share2, ThumbsUp, MessageSquare, Clock } from 'lucide-react'

// Placeholder function to simulate fetching a blog
const fetchBlog = async (id: number): Promise<Blog> => {
    const response = await fetch(`http://localhost:3001/blogs/${id}`)
    if (!response.ok) {
        throw new Error('Failed to fetch blog')
    }
    return response.json()
}

interface BlogDetailProps {
    blogId: number | null
}

export function BlogDetail({ blogId }: BlogDetailProps) {
    const { data: blog, isLoading, isError, error } = useQuery({
        queryKey: ['blog', blogId],
        queryFn: () => fetchBlog(blogId!),
        enabled: !!blogId,
    })

    if (!blogId) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <h3 className="text-2xl font-semibold mb-2">Welcome to CA Monk Blog</h3>
                <p className="text-muted-foreground">
                    Select a blog from the list to read, or create a new one
                </p>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="space-y-6 p-6">
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-8 w-3/4" />
                <div className="flex gap-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-20" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <AlertCircle className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-lg font-semibold mb-2">Failed to load blog</h3>
                <p className="text-sm text-muted-foreground">
                    {error instanceof Error ? error.message : 'An error occurred'}
                </p>
            </div>
        )
    }

    if (!blog) {
        return null
        return <div className="p-12 text-center text-muted-foreground">Loading article...</div>
    }

    if (isError) {
        return <div className="p-12 text-center text-destructive">Failed to load article</div>
    }

    if (!blog) return null

    return (
        <div className="bg-white min-h-full">
            {/* Cover Image Placeholder */}
            <div className="w-full h-64 md:h-96 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden group">
                {blog.coverImage ? (
                    <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        {/* Abstract Pattern if no image */}
                        <div className="text-white text-9xl font-bold opacity-10 select-none">CA MONK</div>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 -mt-20 relative z-[2]">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">

                    {/* Header Meta */}
                    <div className="flex items-center gap-4 text-sm font-medium text-blue-600 mb-4">
                        <span className="uppercase tracking-wider">{blog.category}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> 5 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    <Button className="bg-[#5c54e5] hover:bg-[#4d45c6] text-white gap-2 rounded-lg mb-10 shadow-lg shadow-indigo-200">
                        <Share2 className="w-4 h-4" />
                        Share Article
                    </Button>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                            <span className="block text-xs uppercase text-gray-500 tracking-wider mb-1">Category</span>
                            <span className="font-semibold text-gray-900">{blog.category}</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                            <span className="block text-xs uppercase text-gray-500 tracking-wider mb-1">Read Time</span>
                            <span className="font-semibold text-gray-900">5 Mins</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                            <span className="block text-xs uppercase text-gray-500 tracking-wider mb-1">Date</span>
                            <span className="font-semibold text-gray-900">
                                {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600">
                        <p className="lead text-xl text-gray-600 mb-8 leading-relaxed">
                            {blog.description}
                        </p>

                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p>
                                {blog.content}
                            </p>
                        </div>
                    </div>

                    <hr className="my-10 border-gray-100" />

                    {/* Author Section */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                                {blog.author ? blog.author.charAt(0) : 'A'}
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-0.5">Written by</p>
                                <p className="font-bold text-gray-900">{blog.author || 'Arjun Mehta'}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
