"use client";

import { useState, Suspense, useEffect } from "react";
import { Image, Text, Billboard } from "@react-three/drei";
import * as THREE from "three";

interface ProjectLogoProps {
  name: string;
  id: string;
}

// Known logo mappings for projects - only include verified logos
const logoMap: { [key: string]: string } = {
  "0x": "https://logo.clearbit.com/0x.org",
  "alchemy": "https://logo.clearbit.com/alchemy.com",
  "balancer": "https://logo.clearbit.com/balancer.fi",
  "band-protocol": "https://logo.clearbit.com/bandprotocol.com",
  "biconomy": "https://logo.clearbit.com/biconomy.io",
  "birdeye": "https://logo.clearbit.com/birdeye.so",
  "bitget-wallet": "https://logo.clearbit.com/bitget.com",
  "blockdaemon": "https://logo.clearbit.com/blockdaemon.com",
  "dune": "https://logo.clearbit.com/dune.com",
  "euler": "https://logo.clearbit.com/euler.finance",
  "farcaster": "https://logo.clearbit.com/farcaster.xyz",
  "flipside-crypto": "https://logo.clearbit.com/flipsidecrypto.xyz",
};

// Function to get project logo URL - only return if we have a verified mapping
const getProjectLogoUrl = (name: string, id: string): string | null => {
  // Only use known logo mappings to avoid errors
  return logoMap[id] || null;
};

// Function to get fallback initial
const getInitial = (name: string): string => {
  const words = name.split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase().replace(/[^A-Z]/g, "A");
};

// Safe Image component that handles errors gracefully
function SafeImage({ url, onError }: { url: string; onError: () => void }) {
  const [shouldLoad, setShouldLoad] = useState(true);

  useEffect(() => {
    // Pre-validate image before loading in 3D
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    
    const handleLoad = () => {
      setShouldLoad(true);
    };
    
    const handleError = () => {
      setShouldLoad(false);
      onError();
    };
    
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = url;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [url, onError]);

  if (!shouldLoad) {
    return null;
  }

  return <Image url={url} scale={[0.9, 0.9]} transparent />;
}

export default function ProjectLogo({ name, id }: ProjectLogoProps) {
  const [imageError, setImageError] = useState(false);
  const logoUrl = getProjectLogoUrl(name, id);
  const initial = getInitial(name);

  // Fallback text component
  const FallbackText = (
    <Text
      fontSize={0.35}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
      fontWeight="bold"
      outlineWidth={0.01}
      outlineColor="#000000"
    >
      {initial}
    </Text>
  );

  // If no logo URL or error occurred, show initials
  if (!logoUrl || imageError) {
    return (
      <Billboard position={[0, 0, 0]}>
        {FallbackText}
      </Billboard>
    );
  }

  // Try to load the logo
  return (
    <Billboard position={[0, 0, 0]}>
      <Suspense fallback={FallbackText}>
        <SafeImage
          url={logoUrl}
          onError={() => setImageError(true)}
        />
        {imageError && FallbackText}
      </Suspense>
    </Billboard>
  );
}
