import React from "react";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-purple-100"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_VERCEL_URL}/noise.png)`,
        }}
      />
    </div>
  )
}

