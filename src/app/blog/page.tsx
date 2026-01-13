import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const metadata = {
    title: 'Blog | MeNext.ca - Insights for Canadian Medical Clinics',
    description: 'Latest updates, features, and insights on modernizing Canadian medical practices with MeNext.',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <div className="bg-blue-600 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">MeNext Blog</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Insights, updates, and strategies for modernizing your medical practice.
                    </p>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
                        >
                            <div className="p-8 flex-grow">
                                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-2">
                                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Article</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-900">{post.author}</span>
                                <span className="text-sm text-gray-500">{post.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
