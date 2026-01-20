import { useState } from 'react'
import { useCreateBlog } from '@/hooks/useBlogs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, CheckCircle2 } from 'lucide-react'

interface CreateBlogFormProps {
    onSuccess?: () => void
}

export function CreateBlogForm({ onSuccess }: CreateBlogFormProps) {
    const [title, setTitle] = useState('')
    const [categories, setCategories] = useState('')
    const [description, setDescription] = useState('')
    const [coverImage, setCoverImage] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)

    const { mutate: createBlog, isPending } = useCreateBlog()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const categoryArray = categories
            .split(',')
            .map((cat) => cat.trim().toUpperCase())
            .filter((cat) => cat.length > 0)

        createBlog(
            {
                title,
                category: categoryArray,
                description,
                coverImage,
                content,
                author,
            },
            {
                onSuccess: () => {
                    // Reset form
                    setTitle('')
                    setCategories('')
                    setDescription('')
                    setCoverImage('')
                    setContent('')
                    setAuthor('')

                    // Show success message
                    setShowSuccess(true)
                    setTimeout(() => setShowSuccess(false), 3000)

                    onSuccess?.()
                },
            }
        )
    }

    return (
        <div className="h-full overflow-y-auto">
            <Card className="max-w-4xl mx-auto m-6">
                <CardHeader>
                    <CardTitle className="text-2xl">Create New Blog</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title *</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter blog title"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="categories">Categories *</Label>
                            <Input
                                id="categories"
                                value={categories}
                                onChange={(e) => setCategories(e.target.value)}
                                placeholder="FINANCE, TECH (comma-separated)"
                                required
                            />
                            <p className="text-xs text-muted-foreground">
                                Separate multiple categories with commas
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description *</Label>
                            <Textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Brief description of your blog"
                                rows={3}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="coverImage">Cover Image URL *</Label>
                            <Input
                                id="coverImage"
                                type="url"
                                value={coverImage}
                                onChange={(e) => setCoverImage(e.target.value)}
                                placeholder="https://example.com/image.jpg"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="author">Author Name *</Label>
                            <Input
                                id="author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                placeholder="Enter author name"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content">Content *</Label>
                            <Textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Write your blog content here..."
                                rows={10}
                                required
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
                                {isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Creating...
                                    </>
                                ) : (
                                    'Create Blog'
                                )}
                            </Button>

                            {showSuccess && (
                                <div className="flex items-center text-green-500">
                                    <CheckCircle2 className="mr-2 h-5 w-5" />
                                    <span className="text-sm font-medium">Blog created successfully!</span>
                                </div>
                            )}
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
