import { SlidersHorizontal } from 'lucide-react';

interface Transaction {
  id: string;
  customerId: string;
  date: string;
  status: 'paid' | 'pending';
  amount: string;
}

export default function TransactionTable() {
  const transactions: Transaction[] = [
    { id: '1', customerId: '#6545', date: '01 Oct | 11:29 am', status: 'paid', amount: '$64' },
    { id: '2', customerId: '#5412', date: '01 Oct | 11:29 am', status: 'pending', amount: '$557' },
    { id: '3', customerId: '#6622', date: '01 Oct | 11:29 am', status: 'paid', amount: '$156' },
    { id: '4', customerId: '#6462', date: '01 Oct | 11:29 am', status: 'paid', amount: '$265' },
    { id: '5', customerId: '#6462', date: '01 Oct | 11:29 am', status: 'paid', amount: '$265' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] p-5 h-[420px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-dark">Transaction</h3>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
          <span className="text-sm">Filter</span>
          <SlidersHorizontal size={20} />
        </button>
      </div>

      <div className="border-b border-[#D1D1D1] pb-3 mb-4">
        <div className="grid grid-cols-5 gap-4 text-sm font-medium text-neutral-700">
          <div>No</div>
          <div>Id Customer</div>
          <div>Order Date</div>
          <div>Status</div>
          <div>Amount</div>
        </div>
      </div>

      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="grid grid-cols-5 gap-4 items-center py-2">
            <div className="text-sm font-medium text-black">{transaction.id}.</div>
            <div className="text-sm font-medium text-black">{transaction.customerId}</div>
            <div className="text-sm font-medium text-black">{transaction.date}</div>
            <div className="flex items-center gap-1">
              <div className={`w-2.5 h-2.5 rounded-full ${
                transaction.status === 'paid' ? 'bg-success-500' : 'bg-warning'
              }`} />
              <span className="text-sm font-medium text-black capitalize">
                {transaction.status}
              </span>
            </div>
            <div className="text-sm font-medium text-black">{transaction.amount}</div>
          </div>
        ))}
      </div>

      <button className="w-24 h-8 mt-6 rounded-full border border-primary-500 text-primary-500 text-base font-normal tracking-[-0.32px] leading-[26px] hover:bg-primary-50 transition-colors ml-auto block">
        Details
      </button>
    </div>
  );
}
