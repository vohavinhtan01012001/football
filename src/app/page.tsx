'use client'

import Table from "@/components/share/table";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation'
const dummyData = [
  { no: 1, name: '홍길동', phone: '010-1234-5678', dob: '1990-01-01', consent: '동의', startTime: '2024-01-01 12:00' },
  { no: 2, name: '김철수', phone: '010-2345-6789', dob: '1992-02-02', consent: '동의', startTime: '2024-01-02 13:00' },
];

const columns = [
  { key: 'no', header: 'No' },
  { key: 'name', header: '고객명' },
  { key: 'phone', header: '전화번호' },
  { key: 'dob', header: '생년월일' },
  { key: 'consent', header: '정보동의' },
  { key: 'startTime', header: '응모시작' },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter()
  return (
    <div className="p-4 font-sans">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">
          <Image
            src="/images/logo.png"
            alt="Football Logo"
            width={120}
            height={60}
          />
        </div>
        <div className="flex items-end gap-3 flex-col">
          <h1 className="font-bold text-xl text-end">관리자님 환영합니다.</h1>
          <button onClick={() => router.push('/login')} className="text-sm text-gray-600 border px-3 py-2 border-gray-600">로그아웃</button>
        </div>
      </div>

      <div className="flex space-x-4 h-11 border-t border-b-2 border-b-black mb-8 justify-center ">
        <button className="pb-2 w-32 bg-black text-white flex items-center justify-center">QUIZ 1</button>
        <button className="pb-2 w-32 text-gray-500">QUIZ 2</button>
      </div>

      <h1 className="text-2xl font-bold text-center border-b pb-4 mb-4">QUIZ 1</h1>

      <div className="flex items-center my-8">
        <select className="border p-2 mr-2 w-52">
          <option>고객명</option>
        </select>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="border p-2 w-80 h-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="h-10 px-4 py-2 bg-gray-500 text-white">검색</button>
        </div>
      </div>

      <Table data={dummyData} columns={columns} />
    </div >
  );
}
