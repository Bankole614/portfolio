// src/components/FloatingBlobsBackground.tsx
import React from 'react';

interface Props {
  // Optionally allow disabling or adjusting blob count on small screens
  reduceOnMobile?: boolean;
}

const FloatingBlobsBackground: React.FC<Props> = ({ reduceOnMobile = false }) => {
  // If you want to conditionally render fewer blobs on small screens, 
  // you could detect window.innerWidth here or via a hook. For simplicity,
  // we'll always render all blobs; you can add logic if desired.
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <div
        className={`
          absolute
          top-10 left-1/4
          w-72 h-72
          sm:w-80 sm:h-80
          md:w-96 md:h-96
          bg-gradient-to-br
          from-gradient-start/30 to-gradient-end/30
          rounded-full
          filter blur-3xl
          opacity-50
          animate-float1
        `}
      />
      {/* Blob 2 */}
      <div
        className={`
          absolute
          top-1/3 left-2/3
          w-80 h-80
          sm:w-96 sm:h-96
          md:w-[28rem] md:h-[28rem]
          bg-gradient-to-br
          from-gradient-end/30 to-gradient-start/30
          rounded-full
          filter blur-3xl
          opacity-40
          animate-float2
        `}
      />
      {/* Blob 3 */}
      <div
        className={`
          absolute
          bottom-10 left-1/2
          w-64 h-64
          sm:w-72 sm:h-72
          md:w-80 md:h-80
          bg-gradient-to-br
          from-gradient-start/20 to-gradient-end/20
          rounded-full
          filter blur-2xl
          opacity-30
          animate-float3
        `}
      />
      {/* Optional more blobs if desired */}
    </div>
  );
};

export default FloatingBlobsBackground;
