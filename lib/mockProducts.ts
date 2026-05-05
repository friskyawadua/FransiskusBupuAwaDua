import { Product, Category, Marketplace } from '@/types/product';
const categories: Category[]=['Smartphone','Laptop','Skincare','Mom & Baby','Fashion','Gaming','Home Living','Office Supplies'];
const marketplaces: Marketplace[]=['Shopee','Tokopedia','Blibli','Lazada'];
const brands=['Samsung','Xiaomi','ASUS','Acer','Wardah','Skintific','Nike','Adidas','MSI','Razer','Philips','Fantech'];
export const mockProducts: Product[] = Array.from({length:48},(_,i)=>{
  const category=categories[i%categories.length]; const marketplace=marketplaces[i%marketplaces.length];
  const base=150000+(i+1)*85000; const original=base+((i%5)+1)*50000;
  return {id:`p-${i+1}`,name:`${category} Pilihan ${i+1}`,marketplace,storeName:`${brands[i%brands.length]} ${i%2===0?'Official Store':'Partner Store'}`,
  isOfficialStore:i%3!==0,price:base,originalPrice:original,discountPercentage:Math.round((1-base/original)*100),rating:4+((i%10)/20),soldCount:500+i*73,
  reviewSummary:'Produk dinilai bagus untuk kebutuhan harian, value dan kualitas seimbang.',pros:['Harga kompetitif','Rating tinggi'],cons:['Stok warna terbatas','Pengiriman bisa bervariasi'],
  category,brand:brands[i%brands.length],imageUrl:'https://placehold.co/600x400?text=BelanjaPintar+AI',availabilityScore:70+(i%30),affiliateBaseUrl:`https://example.com/${marketplace.toLowerCase()}/product/${i+1}`};
});
// Compliance note: mockProducts is demo-only. Real marketplace data must come from official affiliate/partner APIs or approved legal feeds.
