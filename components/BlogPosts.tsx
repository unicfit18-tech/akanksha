
import React from 'react';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  readTime: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "The Secret to Perfect Dum Biryani: A Chef's Perspective",
    excerpt: "Discover the ancient 'Dum' technique that makes our signature biryani a favorite at corporate galas across the city.",
    category: "Culinary Secrets",
    date: "May 12, 2024",
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "5 Trends Shaping Corporate Catering in 2025",
    excerpt: "From sustainable sourcing to interactive live stations, see how the landscape of professional dining is evolving.",
    category: "Event Trends",
    date: "April 28, 2024",
    imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "How to Design a Menu for Diverse International Teams",
    excerpt: "A guide on balancing regional authenticity with global palates for your next high-stakes board meeting.",
    category: "Planning Tips",
    date: "April 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    readTime: "6 min read"
  }
];

export const BlogPosts: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#006837] via-[#C1272D] to-[#006837] opacity-20"></div>
      
      <div className="w-[90%] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#C1272D]"></span>
              <span className="text-[#C1272D] font-bold uppercase tracking-[0.3em] text-[10px]">
                Latest Posts
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#006837] leading-tight">
              News, Stories & <br/>
              <span className="italic text-[#C1272D] relative inline-block">
                Culinary Inspiration
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="#C1272D" strokeWidth="2" fill="transparent" />
                </svg>
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-6 shadow-lg">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-[#C1272D] uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-4 text-[11px] text-gray-400 font-bold uppercase tracking-[0.15em] mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#006837] mb-4 leading-snug group-hover:text-[#C1272D] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-[#006837] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read Full Story
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Centered Bottom CTA */}
        <div className="flex justify-center pt-8 border-t border-gray-50">
          <button className="group px-12 py-5 border-2 border-[#006837] text-[#006837] rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#006837] hover:text-white transition-all shadow-xl hover:shadow-[#006837]/20 flex items-center gap-4">
            View All Posts
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};
