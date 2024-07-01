import { ReactNode } from 'react';
import { Footer2 } from './Footer2';
import Navbar from './Navbar';

export default function InfoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#1D2631] min-h-screen">
      <div className="flex flex-col min-h-[calc(100vh-150px)] text-[#E1E1E1]">
        <div className="w-full sticky top-0 z-20">
          <Navbar />
        </div>
        {children}
        <div className="w-full sticky bottom-0 z-20">
          <Footer2 />
        </div>
      </div>
    </div>
  );
}
