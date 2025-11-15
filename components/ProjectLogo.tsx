"use client";

import React, { useState, Suspense, useEffect, useCallback } from "react";
import { Image, Text, Billboard } from "@react-three/drei";
import { projectLogos } from "@/data/logoMap";

interface ProjectLogoProps {
  name: string;
  id: string;
  website?: string;
}

// Function to get project logo URL from logoMap
const getProjectLogoUrl = (id: string): string | null => {
  const normalizedId = id.toLowerCase();
  
  // Try exact match first
  if (projectLogos[normalizedId]) {
    return projectLogos[normalizedId];
  }
  
  // Try with underscores replaced by hyphens (most common format in logoMap)
  const hyphenId = normalizedId.replace(/_/g, '-');
  if (projectLogos[hyphenId]) {
    return projectLogos[hyphenId];
  }
  
  // Try with hyphens replaced by underscores
  const underscoreId = normalizedId.replace(/-/g, '_');
  if (projectLogos[underscoreId]) {
    return projectLogos[underscoreId];
  }
  
  // Try removing dots and special chars
  const cleanId = normalizedId.replace(/[._-]/g, '-');
  if (projectLogos[cleanId]) {
    return projectLogos[cleanId];
  }
  
  return null;
};

// Function to get fallback initial
const getInitial = (name: string): string => {
  const words = name.split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase().replace(/[^A-Z]/g, "A");
};
  
// SafeImage component removed - using Image directly now

// Simple error boundary for catching drei Image errors
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // Silently handle errors - don't log to console
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return <>{this.props.fallback}</>;
    }
    return <>{this.props.children}</>;
  }
}

export default function ProjectLogo({ name, id }: ProjectLogoProps) {
  const [imageError, setImageError] = useState(false);
  const [showText, setShowText] = useState(true);
  const logoUrl = getProjectLogoUrl(id);
  const initial = getInitial(name);
  
  // Debug: log logo URL for first few projects
  useEffect(() => {
    if (logoUrl && id === "0x") {
      console.log("Logo URL for", id, ":", logoUrl);
    }
  }, [logoUrl, id]);
  
  // Hide text after a delay if image is loading successfully
  // This gives time for the image to load, then hides the text
  useEffect(() => {
    if (logoUrl && !imageError) {
      const timer = setTimeout(() => {
        setShowText(false);
      }, 1000); // Hide text after 1 second if no error (gives time for image to load)
      return () => clearTimeout(timer);
    }
  }, [logoUrl, imageError]);
  
  // Memoize the error handler to prevent infinite loops
  const handleImageError = useCallback(() => {
    console.log("Image error for", id, logoUrl);
    setImageError(true);
    setShowText(true); // Show text if image errors
  }, [id, logoUrl]);

  // Fallback text component - only show when logo fails
  const FallbackText = (
    <Text
      fontSize={0.25}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
      fontWeight="bold"
      outlineWidth={0.01}
      outlineColor="#000000"
      renderOrder={0}
    >
      {initial}
    </Text>
  );

  // Always show something - logo or initials
  // If no logo URL, show initials immediately
  if (!logoUrl) {
    return (
      <Billboard position={[0, 0, 0]}>
        {FallbackText}
      </Billboard>
    );
  }

  // Validate logo URL - must be an image URL, not a website
  const isValidImageUrl = logoUrl && (
    logoUrl.includes('.webp') || 
    logoUrl.includes('.png') || 
    logoUrl.includes('.jpg') || 
    logoUrl.includes('.jpeg') || 
    logoUrl.includes('.svg') ||
    logoUrl.includes('cdn.prod.website-files.com')
  );

  // If image error or invalid URL, show text only
  if (imageError || !isValidImageUrl) {
    return (
      <Billboard position={[0, 0, 0]}>
        {FallbackText}
      </Billboard>
    );
  }

  // Try to load the logo - only show text if image fails to load
  return (
    <Billboard position={[0, 0, 0]}>
      {/* Only show text if image errored or while loading */}
      {showText && (
        <group position={[0, 0, 0.1]}>
          {FallbackText}
        </group>
      )}
      {/* Try to render image - if it fails, show fallback */}
      <ErrorBoundary
        fallback={null}
        onError={handleImageError}
      >
        <Suspense fallback={null}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image 
            url={logoUrl} 
            scale={[0.6, 0.6]} 
            transparent={true}
            position={[0, 0, 0.1]}
          />
        </Suspense>
      </ErrorBoundary>
    </Billboard>
  );
}
