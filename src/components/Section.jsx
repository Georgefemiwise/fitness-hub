import React from 'react'

export default function Section({children}) {
  return (
    <div className="px-10 grid grid-cols-4 justify-center gap-5 bg-base-200">
      {children}
    </div>
  );
}
