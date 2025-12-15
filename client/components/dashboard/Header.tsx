import { Search, Bell, Sun } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-[266px] right-0 h-24 bg-white flex items-center justify-between px-8 z-10">
      <h1 className="text-[22px] font-bold text-[#023337] tracking-[0.11px]">
        Dashboard
      </h1>
      
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-1.5 h-12 px-4 rounded-[30px] border border-neutral-200 w-[407px]">
          <span className="flex-1 text-base text-black/60 tracking-[0.08px]">
            Search data, users, or reports
          </span>
          <Search size={24} className="text-neutral-500" />
        </div>
        
        <div className="flex items-center gap-5">
          <button className="relative">
            <Bell size={24} className="text-[#4B5563]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive-500 rounded-full" />
          </button>
          
          <button className="w-14 h-7 rounded-full bg-white shadow-[0_2px_2px_0_rgba(0,0,0,0.14)] flex items-center justify-center">
            <Sun size={16} className="text-black" />
          </button>
          
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/cbe5493d4305d7073ac8c1b9c81a8d2a23b46b66?width=80" 
              alt="User avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
