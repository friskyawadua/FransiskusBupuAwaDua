import { mockProducts } from '@/lib/mockProducts';
import { generateAffiliateLink } from '@/lib/affiliate';
import { RecommendationResult, SearchQuery } from '@/types/product';

export function getRecommendations(query: SearchQuery): RecommendationResult[] {
  const filtered=mockProducts.filter((p)=>{
    if(query.category && p.category!==query.category) return false;
    if(query.brand && p.brand.toLowerCase()!==query.brand.toLowerCase()) return false;
    if(query.budgetMax && p.price>query.budgetMax) return false;
    if(query.officialOnly && !p.isOfficialStore) return false;
    return true;
  });
  const pool=(filtered.length?filtered:mockProducts).slice(0,60);
  return pool.map((p)=>{
    const relevanceScore = query.category && p.category===query.category ? 100 : 65;
    const officialStoreScore = p.isOfficialStore ? 100 : 40;
    const priceScore = query.budgetMax ? Math.max(40, 100 - ((p.price/query.budgetMax)*100-70)) : 75;
    const reviewScore = Math.min(100, p.rating*20);
    const discountScore = Math.min(100, p.discountPercentage*5);
    const salesScore = Math.min(100, Math.log10(p.soldCount)*20);
    const availabilityScore = p.availabilityScore;
    const score = relevanceScore * 0.30 + officialStoreScore * 0.20 + priceScore * 0.15 + reviewScore * 0.15 + discountScore * 0.10 + salesScore * 0.05 + availabilityScore * 0.05;
    return {product:{...p,affiliateBaseUrl:generateAffiliateLink(p.marketplace,p.id,p.affiliateBaseUrl,'default')},score:Number(score.toFixed(2)),reason:`Cocok untuk ${query.category??'kebutuhan Anda'}, harga kompetitif, dan ${p.isOfficialStore?'official store':'rating kuat'}.`,scoreBreakdown:{relevanceScore,officialStoreScore,priceScore,reviewScore,discountScore,salesScore,availabilityScore}};
  }).sort((a,b)=>b.score-a.score).slice(0,10);
}
