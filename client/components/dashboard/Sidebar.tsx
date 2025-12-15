import { Home, TrendingUp, ChevronDown, Package, Grid3x3, Archive, ShoppingCart, XCircle, DollarSign, Users, Star, Tag, Image as ImageIcon, FileText, Palette, Settings, Truck, CreditCard, Mail, MessageSquare, Plug, Shield, Sitemap, Receipt, Wrench } from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export default function Sidebar() {
  const navSections: NavSection[] = [
    {
      title: 'Main menu',
      items: [
        { icon: <Home size={20} />, label: 'Dashboard', active: true },
        { icon: <TrendingUp size={20} />, label: 'Analytics' },
      ]
    },
    {
      title: 'Catalogue Management',
      items: [
        { icon: <Package size={16} />, label: 'Products' },
        { icon: <Grid3x3 size={20} />, label: 'Categories' },
        { icon: <Archive size={20} />, label: 'Inventory' },
      ]
    },
    {
      title: 'Sales & Orders',
      items: [
        { icon: <ShoppingCart size={20} />, label: 'Orders' },
        { icon: <XCircle size={16} />, label: 'Abandoned Cart' },
        { icon: <DollarSign size={16} />, label: 'Transactions' },
      ]
    },
    {
      title: 'Customer Management',
      items: [
        { icon: <Users size={20} />, label: 'Customers' },
        { icon: <Star size={20} />, label: 'Review' },
      ]
    },
    {
      title: 'Marketing',
      items: [
        { icon: <Tag size={20} />, label: 'Coupons & Discount' },
        { icon: <ImageIcon size={18} />, label: 'Hero Slider' },
        { icon: <FileText size={20} />, label: 'Blog' },
      ]
    },
    {
      title: 'Operation',
      items: [
        { icon: <Truck size={20} />, label: 'Delivery Partner' },
        { icon: <CreditCard size={16} />, label: 'Payment Gateway' },
      ]
    },
    {
      title: 'Communication',
      items: [
        { icon: <Mail size={20} />, label: 'Email Templates' },
        { icon: <MessageSquare size={20} />, label: 'SMS Integration' },
        { icon: <MessageSquare size={20} />, label: 'WhatsApp Integration' },
      ]
    },
    {
      title: 'Content Management',
      items: [
        { icon: <FileText size={20} />, label: 'Dynamic Pages' },
      ]
    },
    {
      title: 'Appearance',
      items: [
        { icon: <Palette size={20} />, label: 'Themes' },
      ]
    },
    {
      title: 'System',
      items: [
        { icon: <Shield size={20} />, label: 'Roles & Permission' },
        { icon: <Plug size={20} />, label: 'Plugins & Integrations' },
        { icon: <Receipt size={20} />, label: 'Audit Logs' },
        { icon: <Sitemap size={20} />, label: 'Sitemap' },
        { icon: <Receipt size={20} />, label: 'Billing Plans' },
        { icon: <Wrench size={20} />, label: 'Maintenance Mode' },
        { icon: <Settings size={20} />, label: 'Settings' },
      ]
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-[266px] bg-white shadow-[0_3px_4px_0_rgba(0,0,0,0.12)] overflow-y-auto">
      <div className="h-16 flex items-center px-4" />
      
      <nav className="px-3 pb-8">
        {navSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <div className="flex items-center gap-2 px-3 mb-2">
              <span className="text-[15px] text-neutral-500">{section.title}</span>
              {section.title === 'Main menu' && (
                <ChevronDown size={12} className="text-neutral-500" />
              )}
              {section.title === 'Catalogue Management' && (
                <ChevronDown size={12} className="text-neutral-500" />
              )}
              {section.title === 'Sales & Orders' && (
                <ChevronDown size={12} className="text-neutral-500" />
              )}
              {section.title === 'Customer Management' && (
                <ChevronDown size={12} className="text-neutral-500" />
              )}
              {section.title === 'Marketing' && (
                <ChevronDown size={12} className="text-neutral-500" />
              )}
              {section.title === 'Operation' && (
                <ChevronDown size={12} className="text-neutral-500" />
              )}
              {section.title === 'Communication' && (
                <ChevronDown size={12} className="text-neutral-500" />
              )}
              {section.title === 'Content Management' && (
                <ChevronDown size={12} className="text-neutral-500" />
              )}
              {section.title === 'Appearance' && (
                <ChevronDown size={12} className="text-neutral-500" />
              )}
              {section.title === 'System' && (
                <ChevronDown size={12} className="text-neutral-500" />
              )}
            </div>
            
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-left transition-colors ${
                    item.active
                      ? 'bg-primary-500 text-white'
                      : 'text-neutral-500 hover:bg-neutral-50'
                  }`}
                >
                  <span className={item.active ? 'text-white' : 'text-neutral-500'}>
                    {item.icon}
                  </span>
                  <span className={`flex-1 text-[16px] leading-[22px] ${item.active ? 'font-bold' : 'font-normal'}`}>
                    {item.label}
                  </span>
                  {item.hasSubmenu && (
                    <ChevronDown size={12} className="text-neutral-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
