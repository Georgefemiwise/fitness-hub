import React from 'react'

export default function Section({children}) {
  return (
    <div className="pt-28 px-10 grid lg:grid-cols-3  md:grid-cols-2 xl:grid-cols-4  justify-center gap-5 bg-base-200">
      {children}
    </div>
  );
}
