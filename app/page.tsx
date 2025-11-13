"use client";

import { useState, useMemo } from "react";
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "App":
        return "text-blue-500";
      case "Infra":
        return "text-purple-500";
      case "App/Infra":
        return "text-pink-500";
      default:
        return "text-gray-500";
    }
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
        {/* Top Bar - Filters */}
        <div className="pointer-events-auto absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-3 rounded-lg bg-black/80 backdrop-blur-sm p-4 text-white">
            <div className="w-64">
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[140px] bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[120px] bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {(searchQuery || selectedCategory !== "All" || selectedType !== "All" || selectedStatus !== "All") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedType("All");
                  setSelectedStatus("All");
                }}
                className="text-white hover:bg-white/20"
              >
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Title */}
        <div className="absolute top-4 left-4 pointer-events-auto z-10">
          <h1 className="text-2xl font-bold text-purple-500 drop-shadow-lg">
            Monad Ecosystem
          </h1>
          <p className="text-sm text-white/80">
            {filteredDapps.length} projects
          </p>
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white dark:bg-black border border-slate-200 dark:border-slate-800 shadow-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <DialogTitle className="text-2xl">{selectedProject.name}</DialogTitle>
                </div>
                <DialogDescription className="text-base pt-2">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Type:</span>
                  <Badge variant="outline" className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                    {selectedProject.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Status:</span>
                  <Badge variant="outline" className={`${getStatusColor(selectedProject.status)} bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800`}>
                    {selectedProject.status}
                  </Badge>
                </div>
                <div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Categories:</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedProject.categories.map((category) => (
                      <Badge
                        key={category}
                        variant="outline"
                        className="text-sm bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Links Section - Always show */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col gap-3">
                    {selectedProject.website ? (
                      <a
                        href={selectedProject.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          />
                        </svg>
                        <span className="font-medium">Website</span>
                        <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        <span className="font-medium">Website - Coming soon</span>
                      </div>
                    )}
                    {selectedProject.twitter ? (
                      <a
                        href={selectedProject.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <span className="font-medium">X (Twitter)</span>
                        <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <span className="font-medium">X (Twitter) - Coming soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
