// src/components/FloatingBlobsBackground.tsx
import React from 'react';

interface Props {
  // Optionally allow disabling or adjusting blob count on small screens
  reduceOnMobile?: boolean;
}

const FloatingBlobsBackground: React.FC<Props> = ({ reduceOnMobile = false }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`
          absolute
          top-10 left-10
          w-40 h-40
          sm:w-72 sm:h-72
          md:w-96 md:h-96
          bg-gradient-to-br
          from-gradient-start/30 to-gradient-end/30
          rounded-full
          filter blur-2xl
          opacity-50
          animate-float1
        `}
      />
      {/* Blob 2 */}
      <div
        className={`
          absolute
          top-1/3 left-1/3
          w-48 h-48
          sm:w-80 sm:h-80
          md:w-[28rem] md:h-[28rem]
          bg-gradient-to-br
          from-gradient-end/30 to-gradient-start/30
          rounded-full
          filter blur-2xl
          opacity-40
          animate-float2
        `}
      />
      {/* Blob 3 */}
      <div
        className={`
          absolute
          bottom-10 right-10
          w-32 h-32
          sm:w-64 sm:h-64
          md:w-80 md:h-80
          bg-gradient-to-br
          from-gradient-start/20 to-gradient-end/20
          rounded-full
          filter blur-xl
          opacity-30
          animate-float3
        `}
      />
      {/* Optional more blobs if desired */}
    </div>
  );
};

export default FloatingBlobsBackground;
