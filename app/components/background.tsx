'use client';

import React from 'react';
import { GradientBackground } from 'react-gradient-animation';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <GradientBackground
        colors={{
          background: '#ffffff',
          particles: ['#3e2fb4', '#37b3d2', '#8811a2'],
        }}
        skew={0}
      />
    </div>
  );
}
