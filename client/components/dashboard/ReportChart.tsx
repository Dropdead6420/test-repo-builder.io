import { MoreVertical } from 'lucide-react';

export default function ReportChart() {
  const tabs = [
    { label: '52k', subtitle: 'Customers', active: true },
    { label: '3.5k', subtitle: 'Total Products', active: false },
    { label: '2.5k', subtitle: 'Stock Products', active: false },
    { label: '0.5k', subtitle: 'Out of Stock', active: false },
    { label: '250k', subtitle: 'Revenue', active: false },
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const yAxisLabels = ['50k', '40k', '30k', '20k', '10k', '0k'];

  return (
    <div className="bg-white rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] p-5 h-[460px]">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-dark tracking-[-0.36px] leading-[26px]">
          Report for this week
        </h3>
        
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 text-xs font-medium text-[#3498DB] rounded-lg">
            This week
          </button>
          <button className="px-2 py-1 text-xs font-normal text-neutral-500 rounded-lg">
            Last week
          </button>
          <button className="ml-2 text-neutral-500">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      <div className="flex gap-5 mb-6">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex-1 flex flex-col justify-center gap-2 pb-3 ${
              tab.active ? 'border-b-2 border-blue' : 'border-b border-[#E9E7FD]'
            }`}
          >
            <span className="text-2xl font-bold text-dark leading-[22px]">
              {tab.label}
            </span>
            <span className="text-[13px] font-medium text-neutral-600 tracking-[-0.26px] leading-[18px]">
              {tab.subtitle}
            </span>
          </div>
        ))}
      </div>

      <div className="relative h-[210px] mt-8">
        <div className="absolute left-0 top-0 bottom-9 flex flex-col justify-between items-end pr-3 w-12">
          {yAxisLabels.map((label, index) => (
            <span key={index} className="text-sm text-neutral-900/50 leading-5">
              {label}
            </span>
          ))}
        </div>

        <div className="absolute left-16 right-0 top-0 bottom-9 border-l border-r border-black/20">
          <svg className="w-full h-full" viewBox="0 0 636 210" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3498DB" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3498DB" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <path
              d="M0 76L44 76C48 76 52 75 55 72L106 37C109 35 113 33 117 33H191C194 33 197 34 199 35L256 62C258 63 261 64 264 64H301C307 64 313 61 317 56L355 9C359 4 365 1 371 1H452C458 1 464 4 468 9L494 45C498 50 504 53 510 53H557C564 53 571 49 574 43L583 30C586 24 593 20 600 20H636"
              stroke="#4EA674"
              strokeWidth="2"
              fill="none"
            />
            
            <path
              d="M0 76L0 210L636 210L636 20L600 20C596 20 591 22 588 26L573 47C570 51 566 53 562 53H506C502 53 498 51 496 48L465 6C463 3 460 1 456 1H367C363 1 360 3 358 6L315 59C313 62 309 64 305 64H262C260 64 259 64 257 63L198 35C196 34 194 33 193 33H115C112 33 110 34 108 36L53 74C51 75 49 76 47 76L0 76Z"
              fill="url(#chartGradient)"
              stroke="#3498DB"
              strokeWidth="1"
            />
          </svg>

          <div className="absolute left-[42.3%] top-[28%]">
            <div className="relative">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#AAD6FA] border border-[#1F78C1] rounded-lg px-3 py-2 whitespace-nowrap shadow-sm">
                <div className="text-xs font-medium text-neutral-900 text-center">Thursday</div>
                <div className="text-xs font-medium text-neutral-900 text-center">14k</div>
              </div>
              
              <div className="w-2.5 h-2.5 rounded-full bg-[#AAD6FA] border-2 border-white" />
              
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-[75px] border-l-2 border-dashed border-[#AAD6FA]" />
            </div>
          </div>
        </div>

        <div className="absolute left-16 right-0 bottom-0 flex justify-between">
          {days.map((day, index) => (
            <span
              key={index}
              className={`text-xs ${
                index === 3 ? 'font-bold text-neutral-900' : 'font-normal text-neutral-900/50'
              }`}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
