"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Scene3D from "@/components/Scene3D";
import { dapps, categories, types, type Dapp } from "@/data/dapps";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Dapp | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(true); // Audio ON by default
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayedRef = useRef(false);

  // Initialize audio
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/bugatti.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // Set volume to 50%
    
    // Handle audio events
    audioRef.current.addEventListener('ended', () => {
      // If loop didn't work, manually restart
      if (audioRef.current && audioEnabled) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(console.error);
      }
    });

    // Try to play audio after user interaction (only if audio is enabled)
    const handleUserInteraction = () => {
      if (!hasPlayedRef.current && audioRef.current && audioEnabled) {
        audioRef.current.play()
          .then(() => {
            console.log("✅ Audio started playing");
            hasPlayedRef.current = true;
          })
          .catch((error) => {
            console.log("❌ Audio autoplay prevented:", error);
          });
      }
    };

    // Listen for any user interaction (not once, so it can retry)
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [audioEnabled]);

  // Handle audio toggle
  useEffect(() => {
    if (audioRef.current) {
      if (audioEnabled) {
        // Try to play if not already playing
        if (hasPlayedRef.current) {
          audioRef.current.play().catch(console.error);
        }
      } else {
        // Pause audio
        audioRef.current.pause();
      }
    }
  }, [audioEnabled]);

  const filteredDapps = useMemo(() => {
    return dapps.filter((dapp) => {
      const matchesSearch =
        dapp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dapp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dapp.categories.some((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || dapp.categories.includes(selectedCategory);

      const matchesType = selectedType === "All" || dapp.type === selectedType;

      const matchesStatus = selectedStatus === "All" || dapp.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesType && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedType, selectedStatus]);

  const getStatusColor = (status: string) => {
    return status === "Live on Testnet" ? "text-green-500" : "text-yellow-500";
  };

  // Normalize URL to ensure it has a protocol
  const normalizeUrl = (url: string | undefined): string | null => {
    if (!url) return null;
    // If URL already has a protocol, return as is
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    // Add https:// if missing
    return `https://${url}`;
  };

  const handleProjectSelect = (dapp: Dapp) => {
    setSelectedProject(dapp);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 3D Scene */}
      <Scene3D filteredDapps={filteredDapps} onProjectSelect={handleProjectSelect} />

      {/* Overlay UI */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Filters - Monad Style */}
        <div className="pointer-events-auto absolute top-6 right-24 z-10">
          <div className="flex items-center gap-6 text-black">
            {/* Search */}
            <div className="relative">
              <Input
                placeholder="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 h-8 bg-transparent border-0 border-b border-black/20 text-black text-sm font-light tracking-wider placeholder:text-black/40 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-black/40 rounded-none px-0 pb-1 transition-colors uppercase"
              />
            </div>

            {/* Category */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-auto min-w-[100px] h-8 bg-transparent border-0 border-b border-black/20 text-black text-sm font-light tracking-wider focus-visible:ring-0 hover:border-black/40 rounded-none px-0 pb-1 transition-colors uppercase">
                <SelectValue placeholder="category" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-black/20">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="text-black font-light uppercase tracking-wider">
                    {category === "All" ? `all (${dapps.length})` : category.toLowerCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Type */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-auto min-w-[80px] h-8 bg-transparent border-0 border-b border-black/20 text-black text-sm font-light tracking-wider focus-visible:ring-0 hover:border-black/40 rounded-none px-0 pb-1 transition-colors uppercase">
                <SelectValue placeholder="type" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-black/20">
                {types.map((type) => (
                  <SelectItem key={type} value={type} className="text-black font-light uppercase tracking-wider">
                    {type === "All" ? `all (${dapps.length})` : type.toLowerCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear - Fixed space to prevent layout shift */}
            <div className="w-16 h-8 flex items-center">
              {(searchQuery || selectedCategory !== "All" || selectedType !== "All" || selectedStatus !== "All") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedType("All");
                    setSelectedStatus("All");
                  }}
                  className="h-8 px-2 text-black/60 text-sm font-light tracking-wider hover:text-black transition-colors uppercase border-0 border-b border-transparent hover:border-black/20 pb-1"
                >
                  clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="absolute top-6 left-6 pointer-events-auto z-10">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-light text-black tracking-[0.15em] uppercase leading-none">
              Monad
            </h1>
            <h2 className="text-lg font-extralight text-black/60 tracking-[0.25em] uppercase ml-0.5">
              Ecosystem  --- {filteredDapps.length} 
            </h2>
        
          </div>
        </div>

        {/* Sound Toggle */}
        <div className="absolute top-4 right-4 pointer-events-auto z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setAudioEnabled(!audioEnabled)}
            className="rounded-full bg-black/80 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 w-10 h-10 p-0"
            title={audioEnabled ? "Turn sound off" : "Turn sound on"}
          >
            {audioEnabled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Project Detail Dialog - Monad Style */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white border border-black/20 shadow-lg p-8">
          {selectedProject && (
            <>
              <DialogHeader className="mb-8">
                <DialogTitle className="text-4xl font-light text-black tracking-[0.15em] uppercase leading-none mb-2">
                  {selectedProject.name}
                </DialogTitle>
                <DialogDescription className="text-base font-extralight text-black/60 tracking-wider leading-relaxed">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Type */}
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-light text-black/60 tracking-wider uppercase min-w-[80px] border-b border-black/20 pb-1">
                    type
                  </span>
                  <span className="text-sm font-light text-black tracking-wider uppercase">
                    {selectedProject.type}
                  </span>
                </div>

                {/* Status */}
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-light text-black/60 tracking-wider uppercase min-w-[80px] border-b border-black/20 pb-1">
                    status
                  </span>
                  <span className={`text-sm font-light tracking-wider uppercase ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                </div>

                {/* Categories */}
                <div className="flex items-start gap-4">
                  <span className="text-sm font-light text-black/60 tracking-wider uppercase min-w-[80px] border-b border-black/20 pb-1">
                    categories
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.categories.map((category) => (
                      <span
                        key={category}
                        className="text-sm font-light text-black tracking-wider uppercase"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links Section */}
                <div className="pt-6 border-t border-black/20">
                  <div className="flex flex-col gap-4">
                    {normalizeUrl(selectedProject.website) ? (
                      <a
                        href={normalizeUrl(selectedProject.website) || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-black hover:text-black/60 transition-colors border-b border-black/20 pb-1 group"
                      >
                        <span className="text-sm font-light tracking-wider uppercase">website</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 text-black/40 border-b border-black/10 pb-1">
                        <span className="text-sm font-light tracking-wider uppercase">website</span>
                        <span className="text-xs font-extralight ml-auto">coming soon</span>
                      </div>
                    )}
                    {normalizeUrl(selectedProject.twitter) ? (
                      <a
                        href={normalizeUrl(selectedProject.twitter) || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-black hover:text-black/60 transition-colors border-b border-black/20 pb-1 group"
                      >
                        <span className="text-sm font-light tracking-wider uppercase">twitter</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 text-black/40 border-b border-black/10 pb-1">
                        <span className="text-sm font-light tracking-wider uppercase">twitter</span>
                        <span className="text-xs font-extralight ml-auto">coming soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <div className="absolute bottom-4 right-4 pointer-events-auto z-10">
        <a
          href="https://x.com/uday_dhorajiya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/80 hover:text-white transition-colors"
        >
          by @uday_dhorajiya
        </a>
      </div>
    </div>
  );
}
