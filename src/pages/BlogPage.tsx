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
    <div className="pb-20 sm:pb-24 overflow-hidden">
      <Breadcrumbs items={[{ label: "Blog" }]} onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="relative">
          <div className="absolute -top-12 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl space-y-4 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/60 text-cyan-400 text-xs font-medium tracking-wide">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>SEO & Link Building Field Notes</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display leading-[1.18] sm:leading-[1.15]">
              Actionable SEO Insights, Outreach Vetting &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                Technical Research
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
              In-depth guides authored by our senior strategists on manual link acquisition ethics, publisher evaluation, crawl engineering, and international search marketing.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 p-2.5 bg-[#080E24] border border-slate-800/80 rounded-2xl shadow-lg">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer capitalize min-h-[36px] flex items-center ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-md shadow-blue-900/40"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                {cat === "all" ? "All Articles" : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-auto">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 pl-8 pr-3 py-2 text-xs bg-[#050914] border border-slate-800/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 min-h-[38px]"
            />
          </div>
        </div>

        {/* Post Grid (1 on mobile, 2 on md+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post.id)}
              className="glass-panel p-5 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3.5 sm:space-y-4">
                {/* Unboxed metadata adhering to zero-pill rule */}
                <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
                  <span className="text-cyan-400 font-semibold tracking-wide uppercase text-[11px] font-mono">
                    {post.category}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{post.publishedDate}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-lg sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display leading-tight">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Key takeaways list preview */}
                <div className="pt-1">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5 font-mono">
                    Key Article Insights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {post.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold shrink-0">›</span>
                        <span className="line-clamp-1">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <div className="text-[11px] sm:text-xs text-slate-400 truncate">
                  By <span className="text-slate-200 font-medium">{post.author.name}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0">
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
