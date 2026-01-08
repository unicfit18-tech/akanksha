
import React, { useState } from 'react';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  readTime: string;
  author: string;
}

const allPosts: Post[] = [
  {
    id: 1,
    title: "The Secret to Perfect Dum Biryani: A Chef's Perspective",
    excerpt: "Discover the ancient 'Dum' technique that makes our signature biryani a favorite at corporate galas across the city.",
    category: "Culinary Secrets",
    date: "May 12, 2024",
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
    author: "Chef Arjun Khanna"
  },
  {
    id: 2,
    title: "5 Trends Shaping Corporate Catering in 2025",
    excerpt: "From sustainable sourcing to interactive live stations, see how the landscape of professional dining is evolving.",
    category: "Event Trends",
    date: "April 28, 2024",
    imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
    readTime: "4 min read",
    author: "Sarah D'Souza"
  },
  {
    id: 3,
    title: "How to Design a Menu for Diverse International Teams",
    excerpt: "A guide on balancing regional authenticity with global palates for your next high-stakes board meeting.",
    category: "Planning Tips",
    date: "April 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    readTime: "6 min read",
    author: "Vikram Sethi"
  },
  {
    id: 4,
    title: "Sustainable Sourcing: From Farm to Corporate Table",
    excerpt: "Our commitment to ethical sourcing and how it impacts the flavor and health profile of your corporate lunches.",
    category: "Culinary Secrets",
    date: "March 22, 2024",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
    readTime: "7 min read",
    author: "Priya Menon"
  },
  {
    id: 5,
    title: "Maximizing Productivity Through Employee Nutrition",
    excerpt: "The science of food and energy: why what your team eats for lunch determines their afternoon output.",
    category: "Event Trends",
    date: "March 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
    author: "Dr. Ananya Roy"
  },
  {
    id: 6,
    title: "Behind the Scenes: Catering for 10,000 Guests",
    excerpt: "A look into the logistics and precision required to execute massive industrial catering contracts without a single error.",
    category: "Company News",
    date: "February 28, 2024",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    readTime: "8 min read",
    author: "Operations Team"
  }
];

const categories = ["All", "Culinary Secrets", "Event Trends", "Planning Tips", "Company News"];

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Blog Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-[#C1272D]"></span>
            <span className="text-[#C1272D] font-bold uppercase tracking-[0.3em] text-xs">The Journal</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-serif text-[#006837] mb-8 leading-tight">
                Flavors, Stories & <br/> <span className="italic text-[#C1272D]">Expertise</span>
              </h1>
              <p className="text-gray-500 text-xl leading-relaxed">
                Exploring the intersection of culinary heritage, hospitality excellence, and the modern corporate world.
              </p>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-[#006837] text-white shadow-lg' 
                      : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post (First of filtered list) */}
        {filteredPosts.length > 0 && activeCategory === "All" && (
          <div className="mb-20 group cursor-pointer">
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#FEFAF6] rounded-[3rem] overflow-hidden p-8 lg:p-12 border border-red-50 hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
                <img 
                  src={filteredPosts[0].imageUrl} 
                  alt={filteredPosts[0].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <span className="text-[#C1272D] font-bold uppercase tracking-widest text-[10px] mb-4 block">Featured Article</span>
                <h2 className="text-3xl md:text-4xl font-serif text-[#006837] mb-6 group-hover:text-[#C1272D] transition-colors leading-tight">
                  {filteredPosts[0].title}
                </h2>
                <p className="text-gray-500 text-lg mb-10 line-clamp-3 leading-relaxed">
                  {filteredPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#006837]/10 flex items-center justify-center font-bold text-[#006837] text-xs">
                      {filteredPosts[0].author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 leading-none mb-1">{filteredPosts[0].author}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">{filteredPosts[0].date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#006837] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Story
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {(activeCategory === "All" ? filteredPosts.slice(1) : filteredPosts).map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col h-full">
              <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-8 shadow-lg">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-bold text-[#C1272D] uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 px-2">
                <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#006837] mb-4 leading-snug group-hover:text-[#C1272D] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">By {post.author}</p>
                   <div className="text-[#006837] group-hover:translate-x-2 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                   </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-32 bg-[#006837] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12">
             <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">Subscribe to the <span className="text-emerald-400">Journal</span></h2>
            <p className="text-emerald-100/70 text-lg mb-10 leading-relaxed">
              Get the latest recipes, catering tips, and corporate dining insights delivered straight to your inbox once a month.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-8 py-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all text-sm font-medium"
              />
              <button className="px-10 py-5 bg-[#C1272D] text-white rounded-full font-bold hover:bg-white hover:text-[#006837] transition-all shadow-xl uppercase tracking-widest text-xs">
                Join the List
              </button>
            </form>
            <p className="mt-6 text-[10px] text-white/30 uppercase tracking-widest">No spam. Only culinary excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
