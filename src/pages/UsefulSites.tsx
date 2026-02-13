import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import contentRaw from '../../site_project/website_index.md?raw';
import { Search, ExternalLink, Hash, Globe, MousePointer2 } from 'lucide-react';

interface Site {
  name: string;
  link: string;
  urlDisplay: string;
  url: string;
  description: string;
  source?: {
    text: string;
    link?: string;
  };
}

interface Category {
  id: string;
  name: string;
  count: number;
  sites: Site[];
}

const UsefulSites: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const parseContent = (md: string) => {
      const cats: Category[] = [];
      
      // Split by level 2 headers (categories)
      const chunks = md.split(/^## /gm);
      
      // Skip the first chunk (Title, Intro, TOC)
      for (let i = 1; i < chunks.length; i++) {
        const chunk = chunks[i];
        const lines = chunk.split('\n');
        const headerLine = lines[0].trim();
        
        // Parse Category Name and Count
        // Format: "Category Name (Count)" or "Category Name (Count sites)"
        const headerMatch = headerLine.match(/^(.*?) \((\d+)(?: sites)?\)$/);
        
        if (headerMatch) {
          const catName = headerMatch[1].trim();
          const catCount = parseInt(headerMatch[2], 10);
          
          // Parse Sites
          const siteChunks = chunk.split(/^### /gm).slice(1); // Skip text before first site
          const sites: Site[] = [];
          
          siteChunks.forEach(siteChunk => {
            const siteLines = siteChunk.trim().split('\n');
            const titleLine = siteLines[0].trim();
            
            // Parse Title: [Name](link)
            const titleMatch = titleLine.match(/^\[(.*?)\]\((.*?)\)$/);
            if (!titleMatch) return;
            
            const name = titleMatch[1];
            const link = titleMatch[2];
            
            let urlDisplay = '';
            let url = '';
            let description = '';
            let source = undefined;
            
            // Find URL line
            const urlLineIndex = siteLines.findIndex(l => l.trim().startsWith('**URL:**'));
            if (urlLineIndex !== -1) {
               const urlLine = siteLines[urlLineIndex];
               const urlMatch = urlLine.match(/\[(.*?)\]\((.*?)\)/);
               if (urlMatch) {
                 urlDisplay = urlMatch[1];
                 url = urlMatch[2];
               }
            }
            
            // Find Source line (usually starts with *Source:)
            const sourceLineIndex = siteLines.findIndex(l => l.trim().startsWith('*Source:'));
            if (sourceLineIndex !== -1) {
              const sourceLine = siteLines[sourceLineIndex];
              // Extract text and link from *Source: [text](link)*
              const sourceMatch = sourceLine.match(/\*Source: \[(.*?)\]\((.*?)\)(?: \((.*?)\))?\*/);
              if (sourceMatch) {
                source = {
                  text: sourceMatch[1] + (sourceMatch[3] ? ` (${sourceMatch[3]})` : ''),
                  link: sourceMatch[2]
                };
              }
            }
            
            // Description is everything else between URL and Source/Separator
            const descStartIndex = urlLineIndex !== -1 ? urlLineIndex + 1 : 1;
            const descEndIndex = sourceLineIndex !== -1 ? sourceLineIndex : siteLines.length;
            
            const descLines = siteLines.slice(descStartIndex, descEndIndex)
              .filter(l => !l.trim().startsWith('---') && l.trim() !== '');
              
            description = descLines.join(' ').trim();
            
            sites.push({
              name,
              link,
              urlDisplay: urlDisplay || link,
              url: url || link,
              description,
              source
            });
          });
          
          cats.push({
            id: catName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
            name: catName,
            count: catCount,
            sites: sites
          });
        }
      }
      return cats;
    };

    const parsed = parseContent(contentRaw);
    setCategories(parsed);
    if (parsed.length > 0) {
      setSelectedCategory(parsed[0].id);
    }
  }, []);

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return categories;
    return categories.map(cat => ({
      ...cat,
      sites: cat.sites.filter(site => 
        site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        site.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(cat => cat.sites.length > 0);
  }, [categories, searchTerm]);

  const activeCategory = filteredCategories.find(c => c.id === selectedCategory) || filteredCategories[0];

  return (
    <div className="h-full flex flex-col animate-fade-in">
      {/* Header */}
      <div className="border-b border-terminal-dim/30 pb-4 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl text-terminal-cyan font-bold flex items-center gap-2">
            <Globe className="w-6 h-6" />
            Useful Sites Index
          </h1>
          <div className="text-terminal-dim text-xs mt-1">
            -- parsing /website_index.md ({categories.reduce((acc, c) => acc + c.count, 0)} sites loaded)
          </div>
        </div>
        
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search sites..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-terminal-dim/10 border border-terminal-dim/30 rounded px-3 py-1 text-sm text-terminal-text focus:outline-none focus:border-terminal-cyan placeholder-terminal-dim/50 pl-8"
          />
          <Search className="w-4 h-4 text-terminal-dim absolute left-2 top-1.5" />
        </div>
      </div>

      <div className="flex-grow flex flex-col md:flex-row gap-6 overflow-hidden min-h-0">
        {/* Sidebar - Categories */}
        <div className="w-full md:w-64 flex-shrink-0 overflow-y-auto custom-scrollbar border-r border-terminal-dim/30 pr-4">
          <div className="space-y-1">
            <h3 className="text-terminal-magenta font-bold text-sm mb-2 uppercase tracking-wider">Categories</h3>
            {filteredCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full text-left px-2 py-1.5 rounded text-sm flex justify-between items-center group transition-colors ${
                  activeCategory?.id === cat.id 
                    ? 'bg-terminal-cyan/10 text-terminal-cyan border-l-2 border-terminal-cyan' 
                    : 'text-terminal-dim hover:bg-terminal-dim/10 hover:text-terminal-text'
                }`}
              >
                <span className="truncate">{cat.name}</span>
                <span className={`text-xs ${activeCategory?.id === cat.id ? 'text-terminal-cyan' : 'text-terminal-dim group-hover:text-terminal-text'}`}>
                  {cat.sites.length}
                </span>
              </button>
            ))}
            {filteredCategories.length === 0 && (
              <div className="text-terminal-dim text-sm italic p-2">No categories found.</div>
            )}
          </div>
        </div>

        {/* Main Content - Sites Grid */}
        <div className="flex-grow overflow-y-auto custom-scrollbar">
          {activeCategory ? (
            <div className="space-y-6">
              <div className="flex items-baseline gap-2 border-b border-terminal-dim/20 pb-2">
                <h2 className="text-xl text-terminal-text font-bold">
                  <span className="text-terminal-magenta">#</span> {activeCategory.name}
                </h2>
                <span className="text-terminal-dim text-sm">({activeCategory.sites.length} items)</span>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {activeCategory.sites.map((site, idx) => (
                  <div 
                    key={idx}
                    className="group border border-terminal-dim/30 bg-terminal-dim/5 rounded p-4 hover:border-terminal-cyan/50 hover:bg-terminal-dim/10 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="text-lg font-bold text-terminal-cyan group-hover:underline decoration-terminal-cyan/50 underline-offset-4">
                        <a href={site.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          {site.name}
                          <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                        </a>
                      </h3>
                      <span className="text-xs text-terminal-dim font-mono bg-terminal-dim/20 px-2 py-0.5 rounded">
                        {new URL(site.url).hostname.replace('www.', '')}
                      </span>
                    </div>
                    
                    <p className="text-terminal-text/80 text-sm leading-relaxed mb-3">
                      {site.description}
                    </p>
                    
                    {site.source && (
                      <div className="text-xs text-terminal-dim flex items-center gap-1 mt-3 pt-3 border-t border-terminal-dim/10">
                        <Hash className="w-3 h-3 text-terminal-magenta" />
                        <span>Source:</span>
                        {site.source.link ? (
                          <a 
                            href={site.source.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-terminal-magenta hover:text-terminal-cyan transition-colors truncate max-w-[200px] md:max-w-md"
                          >
                            {site.source.text}
                          </a>
                        ) : (
                          <span>{site.source.text}</span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
             <div className="h-full flex flex-col items-center justify-center text-terminal-dim opacity-50">
               <MousePointer2 className="w-12 h-12 mb-4" />
               <p>Select a category to view sites</p>
             </div>
          )}
        </div>
      </div>

      <div className="pt-4 mt-auto border-t border-terminal-dim/30 flex justify-between items-center">
        <Link to="/" className="text-terminal-dim hover:text-terminal-cyan transition-colors text-sm">
          &lt; Back to Menu
        </Link>
        <div className="text-terminal-dim text-xs">
           keys: [1-9] navigate categories
        </div>
      </div>
    </div>
  );
};

export default UsefulSites;