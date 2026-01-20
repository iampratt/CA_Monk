import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Blog } from '@/lib/api'

interface BlogCardProps {
    blog: Blog
    onClick: () => void
    isSelected: boolean
}

export function BlogCard({ blog, onClick, isSelected }: BlogCardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    return (
        <Card
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 ${isSelected ? 'border-primary shadow-lg' : 'border-border'
                }`}
            onClick={onClick}
        >
            <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-wrap gap-1">
                        {blog.category.map((cat) => (
                            <Badge key={cat} variant="secondary" className="text-xs">
                                {cat}
                            </Badge>
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                        {formatDate(blog.date)}
                    </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                    {blog.description}
                </p>
            </CardContent>
        </Card>
    )
}
