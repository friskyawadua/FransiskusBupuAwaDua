import { Marketplace } from '@/types/product';
export default function MarketplaceBadge({marketplace}:{marketplace:Marketplace}){return <span className='px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs'>{marketplace}</span>;}
