import { Category, SearchQuery } from '@/types/product';
const categoryMap: Record<string,Category>={hp:'Smartphone',smartphone:'Smartphone',laptop:'Laptop',skincare:'Skincare',stroller:'Mom & Baby',bayi:'Mom & Baby',sepatu:'Fashion',fashion:'Fashion',gaming:'Gaming',kamera:'Gaming',rumah:'Home Living',office:'Office Supplies',kantor:'Office Supplies'};
const brandList=['samsung','xiaomi','asus','acer','wardah','skintific','nike','adidas','msi','razer','philips','fantech'];
export function parseQuery(raw:string): SearchQuery{const q=raw.toLowerCase();
 let language:'id'|'en'|'mixed'='id'; const hasId=/(cari|yang|dan|resmi|jutaan|bawah)/.test(q); const hasEn=/(recommend|under|for|need|official|original|million)/.test(q); if(hasId&&hasEn) language='mixed'; else if(hasEn) language='en';
 const m=q.match(/(under|di bawah|<)?\s*(\d+(?:[\.,]\d+)?)\s*(juta|jutaan|million|jt)/); const budgetMax=m?Math.round(parseFloat(m[2].replace(',','.'))*1000000):undefined;
 const category=Object.entries(categoryMap).find(([k])=>q.includes(k))?.[1];
 const brand=brandList.find((b)=>q.includes(b)); const officialOnly=/(official|ori|original|resmi)/.test(q);
 return {rawQuery:raw,language,budgetMax,category,brand,officialOnly};}
