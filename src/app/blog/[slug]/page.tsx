import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

interface BlogPostProps {
    params: {
        slug: string;
    };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export function generateMetadata({ params }: BlogPostProps) {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | MeNext Blog`,
        description: post.excerpt,
    };
}

export default function BlogPostPage({ params }: BlogPostProps) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Header />

            <article className="flex-grow pt-32 pb-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
                    >
                        ← Back to Blog
                    </Link>

                    <header className="mb-12">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Article</span>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                            {post.title}
                        </h1>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mr-3">
                                {post.author.charAt(0)}
                            </div>
                            <span className="text-lg font-medium text-gray-900">{post.author}</span>
                        </div>
                    </header>

                    <div
                        className="prose prose-lg prose-blue max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-16 pt-8 border-t border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Share this article</h3>
                        <div className="flex space-x-4">
                            <span className="text-gray-500 italic">Share links would go here (Twitter, LinkedIn, Facebook)</span>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
