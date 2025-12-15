import { MoreVertical } from 'lucide-react';

export default function UsersWidget() {
  const barHeights = [35, 17, 22, 9, 28, 22, 17, 31, 6, 14, 22, 9, 28, 4, 19, 25, 14, 28, 22, 6, 22, 11, 28, 35, 14, 22, 6, 25, 35, 11, 22, 14, 6, 14, 35, 8, 19, 11, 14, 35, 17, 4, 8, 22, 17];
  
  return (
    <div className="bg-white rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] p-5 h-[460px]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-primary-500 tracking-[-0.28px] mb-2">
            Users in last 30 minutes
          </p>
          <h3 className="text-[32px] font-bold text-dark tracking-[-0.64px] leading-8">
            21.5K
          </h3>
        </div>
        <button className="text-neutral-500">
          <MoreVertical size={20} />
        </button>
      </div>

      <p className="text-sm font-medium text-neutral-500 tracking-[-0.28px] mb-3">
        Users per minute
      </p>

      <div className="flex items-end justify-start gap-[3px] h-[35px] mb-8">
        {barHeights.map((height, index) => (
          <div
            key={index}
            className="w-2 bg-primary-500 rounded-sm"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-dark tracking-[-0.36px] leading-[26px]">
          Sales by Country
        </h4>
        <span className="text-lg font-semibold text-dark tracking-[-0.36px] leading-[26px]">
          Sales
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/cbe5493d4305d7073ac8c1b9c81a8d2a23b46b66?width=80" 
            alt="US Flag" 
            className="w-[34px] h-[34px] rounded-full"
          />
          
          <div className="flex-1">
            <div className="text-sm font-semibold text-neutral-800 leading-5">30k</div>
            <div className="text-xs text-neutral-600">US</div>
          </div>

          <div className="w-[179px]">
            <div className="flex items-center gap-0.5 mb-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.38037 8.45072L6.76065 5.07043L10.1409 8.45072" stroke="#28C76F" strokeWidth="1.1831" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[10px] font-semibold text-success-600 leading-[14px]">25.8%</span>
            </div>
            <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full w-[42%] bg-primary-500 rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/b77d60f6fccb3b02c659b2db075c4bcf71edc8b6?width=68" 
            alt="Brazil Flag" 
            className="w-[34px] h-[34px] rounded-full"
          />
          
          <div className="flex-1">
            <div className="text-sm font-semibold text-neutral-800 leading-5">30k</div>
            <div className="text-xs text-neutral-600">Brazil</div>
          </div>

          <div className="w-[179px]">
            <div className="flex items-center gap-0.5 mb-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10.1409 5.07041L6.76059 8.45069L3.38031 5.07041" stroke="#EF4343" strokeWidth="1.1831" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[10px] font-semibold text-destructive-500 leading-[14px]">15.8%</span>
            </div>
            <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full w-[30%] bg-primary-500 rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/d1da4042630da21aab5642c69729cb21d9bf0d98?width=112" 
            alt="Australia Flag" 
            className="w-[34px] h-[34px] rounded-full"
          />
          
          <div className="flex-1">
            <div className="text-sm font-semibold text-neutral-800 leading-5">25k</div>
            <div className="text-xs text-neutral-600">Australia</div>
          </div>

          <div className="w-[179px]">
            <div className="flex items-center gap-0.5 mb-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.38037 8.45072L6.76065 5.07043L10.1409 8.45072" stroke="#28C76F" strokeWidth="1.1831" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[10px] font-semibold text-success-600 leading-[14px]">35.8%</span>
            </div>
            <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full w-[50%] bg-primary-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <button className="w-full h-8 mt-6 rounded-full border border-primary-500 text-primary-500 text-sm font-normal tracking-[-0.28px] hover:bg-primary-50 transition-colors">
        View Insight
      </button>
    </div>
  );
}
