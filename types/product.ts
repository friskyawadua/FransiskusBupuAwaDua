export type Marketplace = 'Shopee' | 'Tokopedia' | 'Blibli' | 'Lazada';
export type Category = 'Smartphone'|'Laptop'|'Skincare'|'Mom & Baby'|'Fashion'|'Gaming'|'Home Living'|'Office Supplies';
export interface Product {id:string;name:string;marketplace:Marketplace;storeName:string;isOfficialStore:boolean;price:number;originalPrice:number;discountPercentage:number;rating:number;soldCount:number;reviewSummary:string;pros:string[];cons:string[];category:Category;brand:string;imageUrl:string;availabilityScore:number;affiliateBaseUrl:string;}
export interface SearchQuery {rawQuery:string;language:'id'|'en'|'mixed';budgetMax?:number;category?:Category;brand?:string;officialOnly:boolean;marketplaceFilter?:Marketplace[];}
export interface RecommendationResult {product:Product;score:number;reason:string;scoreBreakdown:Record<string,number>;}
export interface AffiliateClick {id:string;productId:string;marketplace:Marketplace;campaignId:string;timestamp:string;}
export interface AdminAnalytics {totalSearches:number;totalClicks:number;ctr:number;topSearchedCategories:Record<string,number>;marketplaceClicks:Record<Marketplace,number>;estimatedGmv:number;estimatedCommission:number;languageUsage:{id:number;en:number;mixed:number};}
