import { useState } from 'react'
import { BlogList } from '@/components/BlogList'
import { BlogDetail } from '@/components/BlogDetail'
import { CreateBlogForm } from '@/components/CreateBlogForm'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

type View = 'detail' | 'create'

function App() {
    const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)
    const [currentView, setCurrentView] = useState<View>('detail')

    const handleSelectBlog = (id: number) => {
        setSelectedBlogId(id)
        setCurrentView('detail')
    }

    const handleCreateSuccess = () => {
        setCurrentView('detail')
        setSelectedBlogId(null)
    }

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <div className="py-12 md:py-20 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">CA Monk Blog</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
                        Stay updated with the latest trends in finance, accounting, and career growth
                    </p>
                </div>

                <div className="container mx-auto px-4 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Sidebar - Latest Articles */}
                        <div className="lg:col-span-4 xl:col-span-3">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-bold text-primary">Latest Articles</h2>
                                <Button
                                    size="sm"
                                    onClick={() => setCurrentView('create')}
                                    variant="outline"
                                    className="gap-2"
                                >
                                    <PlusCircle className="h-4 w-4" />
                                    New
                                </Button>
                            </div>
                            <div className="space-y-6">
                                <BlogList
                                    selectedBlogId={selectedBlogId}
                                    onSelectBlog={handleSelectBlog}
                                />
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-8 xl:col-span-9">
                            {currentView === 'detail' ? (
                                <BlogDetail blogId={selectedBlogId} />
                            ) : (
                                <CreateBlogForm onSuccess={handleCreateSuccess} />
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default App
