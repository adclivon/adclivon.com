import React, { useState } from "react";
import { BLOG_POSTS } from "../data/blogData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, BookOpen, Search } from "lucide-react";

interface BlogPageProps {
  onNavigate: (path: string) => void;
  onSelectPost: (postId: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onSelectPost }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", "Guest Posting", "Link Insertion", "Technical SEO", "Strategy"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-24">
      <Breadcrumbs items={[{ label: "Blog" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">
            SEO & Link Building Field Notes
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Actionable SEO Insights, Outreach Vetting & Technical Research
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            In-depth guides authored by our senior strategists on link acquisition ethics, publisher evaluation, crawl engineering, and international search marketing.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="flex flex-wrap items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer capitalize ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat === "all" ? "All Articles" : cat}
              </button>
            ))}
          </div>

          <div className="px-2">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 px-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post.id)}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Unboxed metadata adhering to zero-pill rule */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-blue-400 font-medium">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors font-display">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Key takeaways list preview */}
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Article Insights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {post.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">›</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  By <span className="text-slate-200 font-medium">{post.author.name}</span> · {post.author.role}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
