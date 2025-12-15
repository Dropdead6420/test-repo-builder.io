import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import StatCard from '../components/dashboard/StatCard';
import ReportChart from '../components/dashboard/ReportChart';
import UsersWidget from '../components/dashboard/UsersWidget';
import SalesByCountry from '../components/dashboard/SalesByCountry';
import TransactionTable from '../components/dashboard/TransactionTable';
import TopProducts from '../components/dashboard/TopProducts';
import BestSellingProduct from '../components/dashboard/BestSellingProduct';
import AddNewProduct from '../components/dashboard/AddNewProduct';

export default function Index() {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ml-[266px]">
        <Header />
        
        <main className="flex-1 p-5 pt-[116px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
            <StatCard
              title="Total Sales"
              value="$350K"
              label="Sales"
              change="10.4%"
              changeType="increase"
              period="Last 7 days"
              previousValue="$235"
            />
            
            <div className="lg:col-span-2">
              <StatCard
                title="Pending & Canceled"
                period="Last 7 days"
                variant="dual"
                stats={[
                  {
                    label: 'Pending',
                    value: '509',
                    subLabel: 'user 204',
                    color: 'success'
                  },
                  {
                    label: 'Canceled',
                    value: '94',
                    change: '14.4%',
                    changeType: 'decrease',
                    color: 'error'
                  }
                ]}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
            <div className="lg:col-span-2">
              <ReportChart />
            </div>
            
            <div className="space-y-5">
              <UsersWidget />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
            <div className="lg:col-span-2">
              <TransactionTable />
            </div>
            
            <TopProducts />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <BestSellingProduct />
            </div>
            
            <AddNewProduct />
          </div>
        </main>
      </div>
    </div>
  );
}
