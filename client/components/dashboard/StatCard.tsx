import { MoreVertical, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value?: string;
  label?: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
  period?: string;
  previousValue?: string;
  variant?: 'single' | 'dual';
  stats?: Array<{
    label: string;
    value: string;
    subLabel?: string;
    change?: string;
    changeType?: 'increase' | 'decrease';
    color?: 'success' | 'error';
  }>;
}

export default function StatCard({
  title,
  value,
  label,
  change,
  changeType,
  period,
  previousValue,
  variant = 'single',
  stats
}: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] p-5 h-[222px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-dark tracking-[-0.36px] leading-[26px]">
          {title}
        </h3>
        <button className="text-neutral-500">
          <MoreVertical size={20} />
        </button>
      </div>
      
      {period && (
        <p className="text-sm text-neutral-500 tracking-[-0.28px] mb-3">
          {period}
        </p>
      )}
      
      {variant === 'single' ? (
        <>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[32px] font-bold text-neutral-900 leading-normal">
              {value}
            </span>
            
            {change && (
              <div className="flex items-end gap-1">
                <span className="text-base text-black">{label}</span>
                <div className="flex items-center">
                  {changeType === 'increase' ? (
                    <TrendingUp size={16} className="text-success-800 rotate-180" />
                  ) : (
                    <TrendingDown size={16} className="text-destructive-300" />
                  )}
                  <span className={`text-sm font-medium ${
                    changeType === 'increase' ? 'text-success-500' : 'text-destructive-300'
                  }`}>
                    {change}
                  </span>
                </div>
              </div>
            )}
          </div>
          
          {previousValue && (
            <p className="text-sm text-neutral-500 mb-8">
              Previous 7days <span className="font-bold text-primary-500">({previousValue})</span>
            </p>
          )}
          
          <button className="w-24 h-8 rounded-full border border-primary-500 text-primary-500 text-base font-normal tracking-[-0.32px] leading-[26px] hover:bg-primary-50 transition-colors">
            Details
          </button>
        </>
      ) : (
        <>
          <div className="flex items-center gap-5 mb-8">
            {stats?.map((stat, index) => (
              <div key={index} className="flex-1">
                <p className="text-sm text-black mb-1.5">{stat.label}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-[22px] font-bold ${
                    stat.color === 'error' ? 'text-destructive-500' : 'text-neutral-900'
                  }`}>
                    {stat.value}
                  </span>
                  {stat.subLabel && (
                    <span className="text-base text-success-700">{stat.subLabel}</span>
                  )}
                  {stat.change && (
                    <div className="flex items-center gap-0.5">
                      {stat.changeType === 'increase' ? (
                        <TrendingUp size={16} className="text-success-800 rotate-180" />
                      ) : (
                        <TrendingDown size={16} className="text-destructive-300" />
                      )}
                      <span className={`text-sm font-medium ${
                        stat.changeType === 'increase' ? 'text-success-500' : 'text-destructive-300'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-24 h-8 rounded-full border border-primary-500 text-primary-500 text-base font-normal tracking-[-0.32px] leading-[26px] hover:bg-primary-50 transition-colors ml-auto block">
            Details
          </button>
        </>
      )}
    </div>
  );
}
