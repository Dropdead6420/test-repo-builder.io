import { Search } from 'lucide-react';

interface Product {
  name: string;
  itemCode: string;
  price: string;
  image: string;
}

export default function TopProducts() {
  const products: Product[] = [
    {
      name: 'Apple iPhone 13',
      itemCode: '#FXZ-4567',
      price: '$999.00',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/4821bd3d508660cf998ce88978e205c34cf52aa4?width=112'
    },
    {
      name: 'Nike Air Jordan',
      itemCode: '#FXZ-4567',
      price: '$72.40',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/d1da4042630da21aab5642c69729cb21d9bf0d98?width=112'
    },
    {
      name: 'T-shirt',
      itemCode: '#FXZ-4567',
      price: '$35.40',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/bd5c91f6d1b25f0e65cf1dacd6877d5c87bd18e3?width=112'
    },
    {
      name: 'Assorted Cross Bag',
      itemCode: '#FXZ-4567',
      price: '$80.00',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/197688a2a6acd58d9b1bbdff2c9a4109ac8d0c96?width=112'
    },
    {
      name: 'Fur Pom Gloves',
      itemCode: '#FXZ-4567',
      price: '$20.00',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/d9aacbbd31d84f5d2592c12c4f92eae788f740a1?width=112'
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] p-5 h-[420px] flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-dark">Top Products</h3>
        <button className="text-xs text-primary-500">All product</button>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 border border-neutral-200 rounded-lg mb-4">
        <Search size={20} className="text-neutral-500" />
        <span className="text-sm text-neutral-500">Search</span>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto">
        {products.map((product, index) => (
          <div key={index} className="flex items-center gap-4 pb-4 border-b border-[#D1D1D1] last:border-0">
            <div className="w-14 h-14 rounded-xl bg-white border border-neutral-200 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-[15px] font-medium text-neutral-900 tracking-[-0.15px] truncate">
                {product.name}
              </h4>
              <p className="text-xs text-neutral-600">
                Item: {product.itemCode}
              </p>
            </div>
            
            <div className="text-[15px] font-bold text-neutral-900 leading-[22px]">
              {product.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
