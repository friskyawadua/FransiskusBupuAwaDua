import { Marketplace } from '@/types/product';
export const generateAffiliateLink=(marketplace:Marketplace,productId:string,originalProductUrl:string,campaignId='default')=>`/redirect?marketplace=${encodeURIComponent(marketplace.toLowerCase())}&productId=${encodeURIComponent(productId)}&campaign=${encodeURIComponent(campaignId)}&to=${encodeURIComponent(originalProductUrl)}`;
// Compliance note: For production, use only official affiliate APIs, approved partner APIs, legal product feeds, or authorized ecommerce providers.
