'use client';
import { useRouter } from 'next/navigation'; import { useState } from 'react';
export default function SearchChatBox(){const [q,setQ]=useState('');const r=useRouter();return <div className='space-y-2'><textarea className='w-full border rounded p-3' rows={4} value={q} onChange={e=>setQ(e.target.value)} placeholder='Cari HP gaming 3 jutaan yang kameranya bagus' /><button onClick={()=>r.push(`/results?q=${encodeURIComponent(q)}`)} className='bg-indigo-600 text-white px-4 py-2 rounded'>Mulai Cari Produk</button></div>}
