'use client'

import Table from "@/components/share/table";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PhotoGrid from "@/components/share/photoGrid";

const dummyData = [
  { no: 1, name: '홍길동', phone: '010-1234-5678', birth: '1990-01-01', consent: '동의', startTime: '2024-01-01 12:00' },
  { no: 2, name: '김철수', phone: '010-2345-6789', birth: '1992-02-02', consent: '동의', startTime: '2024-01-02 13:00' },
  { no: 3, name: '이영희', phone: '010-3456-7890', birth: '1995-03-03', consent: '비동의', startTime: '2024-01-03 14:00' },
  { no: 4, name: '박민수', phone: '010-4567-8901', birth: '1988-04-04', consent: '동의', startTime: '2024-01-04 15:00' },
  { no: 5, name: '정수진', phone: '010-5678-9012', birth: '1985-05-05', consent: '비동의', startTime: '2024-01-05 16:00' },
  { no: 6, name: '최영민', phone: '010-6789-0123', birth: '1999-06-06', consent: '동의', startTime: '2024-01-06 17:00' },
  { no: 7, name: '김하늘', phone: '010-7890-1234', birth: '1991-07-07', consent: '비동의', startTime: '2024-01-07 18:00' },
  { no: 8, name: '이민호', phone: '010-8901-2345', birth: '1983-08-08', consent: '동의', startTime: '2024-01-08 19:00' },
  { no: 9, name: '안지현', phone: '010-9012-3456', birth: '1996-09-09', consent: '비동의', startTime: '2024-01-09 20:00' },
  { no: 10, name: '장수원', phone: '010-0123-4567', birth: '1980-10-10', consent: '동의', startTime: '2024-01-10 21:00' },
  { no: 11, name: '오승민', phone: '010-4321-8765', birth: '1993-11-11', consent: '비동의', startTime: '2024-01-11 22:00' },
  { no: 12, name: '윤소라', phone: '010-8765-4321', birth: '1997-12-12', consent: '동의', startTime: '2024-01-12 23:00' },
];


const columns = [
  { key: 'no', header: 'No' },
  { key: 'name', header: '고객명' },
  { key: 'phone', header: '전화번호' },
  { key: 'birth', header: '생년월일' },
  { key: 'consent', header: '정보동의' },
  { key: 'startTime', header: '응모시작' },
];

const videoData = [
  {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/9d769cf4877c4f4ea33a04c3596eef18_1701673510?lk3s=b59d6b55&x-expires=1734235200&x-signature=KAwKPRGPAC9FT0ukfhzUrEw8xy4%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@tvn.asia/video/7308632037978606850",
  },
  {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/ogAHMOAVvBOaAzE81TiZZpjziA1UBW7VIOAEY?lk3s=b59d6b55&x-expires=1734235200&x-signature=LIQ7B0PjqKdKpYPKVEFzmgA1YtA%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@jeonjgkk_97/video/7445296175093140744",
  },
  {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/o0np36BwIEaaJs6Bt3nEqDkBKIysUAIfgAfFMR?lk3s=b59d6b55&x-expires=1734238800&x-signature=0NPzF3EUNYu9TWq9%2FV9UqjmTmso%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@warnermusicjapan.intl/video/7433998455225273618",
  },
  {
    thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/oAEvEAAuEhti30ugWwyCazmADIXHk2mNoAuf4I?lk3s=b59d6b55&x-expires=1734238800&x-signature=rhKIrzuLMGugsflXbZr%2FuRhZpGM%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@mehkhjon1235/video/7213291497247018246",
  },
  {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/9d769cf4877c4f4ea33a04c3596eef18_1701673510?lk3s=b59d6b55&x-expires=1734235200&x-signature=KAwKPRGPAC9FT0ukfhzUrEw8xy4%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@tvn.asia/video/7308632037978606850",
  },
  {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/ogAHMOAVvBOaAzE81TiZZpjziA1UBW7VIOAEY?lk3s=b59d6b55&x-expires=1734235200&x-signature=LIQ7B0PjqKdKpYPKVEFzmgA1YtA%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@jeonjgkk_97/video/7445296175093140744",
  },
  {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/o0np36BwIEaaJs6Bt3nEqDkBKIysUAIfgAfFMR?lk3s=b59d6b55&x-expires=1734238800&x-signature=0NPzF3EUNYu9TWq9%2FV9UqjmTmso%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@warnermusicjapan.intl/video/7433998455225273618",
  },
  {
    thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/oAEvEAAuEhti30ugWwyCazmADIXHk2mNoAuf4I?lk3s=b59d6b55&x-expires=1734238800&x-signature=rhKIrzuLMGugsflXbZr%2FuRhZpGM%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@mehkhjon1235/video/7213291497247018246",
  },
  {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/9d769cf4877c4f4ea33a04c3596eef18_1701673510?lk3s=b59d6b55&x-expires=1734235200&x-signature=KAwKPRGPAC9FT0ukfhzUrEw8xy4%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@tvn.asia/video/7308632037978606850",
  },
  {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/ogAHMOAVvBOaAzE81TiZZpjziA1UBW7VIOAEY?lk3s=b59d6b55&x-expires=1734235200&x-signature=LIQ7B0PjqKdKpYPKVEFzmgA1YtA%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@jeonjgkk_97/video/7445296175093140744",
  },
  {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/o0np36BwIEaaJs6Bt3nEqDkBKIysUAIfgAfFMR?lk3s=b59d6b55&x-expires=1734238800&x-signature=0NPzF3EUNYu9TWq9%2FV9UqjmTmso%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@warnermusicjapan.intl/video/7433998455225273618",
  },
  {
    thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/oAEvEAAuEhti30ugWwyCazmADIXHk2mNoAuf4I?lk3s=b59d6b55&x-expires=1734238800&x-signature=rhKIrzuLMGugsflXbZr%2FuRhZpGM%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@mehkhjon1235/video/7213291497247018246",
  },
  {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/9d769cf4877c4f4ea33a04c3596eef18_1701673510?lk3s=b59d6b55&x-expires=1734235200&x-signature=KAwKPRGPAC9FT0ukfhzUrEw8xy4%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@tvn.asia/video/7308632037978606850",
  },
  {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/ogAHMOAVvBOaAzE81TiZZpjziA1UBW7VIOAEY?lk3s=b59d6b55&x-expires=1734235200&x-signature=LIQ7B0PjqKdKpYPKVEFzmgA1YtA%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@jeonjgkk_97/video/7445296175093140744",
  },
  {
    thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/o0np36BwIEaaJs6Bt3nEqDkBKIysUAIfgAfFMR?lk3s=b59d6b55&x-expires=1734238800&x-signature=0NPzF3EUNYu9TWq9%2FV9UqjmTmso%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@warnermusicjapan.intl/video/7433998455225273618",
  },
  {
    thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/oAEvEAAuEhti30ugWwyCazmADIXHk2mNoAuf4I?lk3s=b59d6b55&x-expires=1734238800&x-signature=rhKIrzuLMGugsflXbZr%2FuRhZpGM%3D&shp=b59d6b55&shcp=-",
    embedUrl: "https://www.tiktok.com/@mehkhjon1235/video/7213291497247018246",
  },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"table" | "video">("table");
  const router = useRouter();
  const [filterColumn, setFilterColumn] = useState(columns[1].key);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filteredData = dummyData.filter((item: any) =>
    item[filterColumn]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">
          <Image src="/images/logo.png" alt="Football Logo" width={120} height={60} />
        </div>
        <div className="flex items-end gap-3 flex-col">
          <h1 className="font-bold text-xl text-end">관리자님 환영합니다.</h1>
          <button onClick={() => router.push('/login')} className="text-sm text-gray-600 border px-3 py-2 border-gray-600">로그아웃</button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 h-11 border-t border-b-2 border-b-black mb-8 justify-center">
        <button
          className={`py-2 w-32 h-full flex items-center justify-center ${currentPage === "table" ? "bg-black text-white" : "text-gray-500"}`}
          onClick={() => setCurrentPage("table")}
        >
          응모자 정보
        </button>
        <button
          className={`py-2 w-32 h-full flex items-center justify-center ${currentPage === "video" ? "bg-black text-white" : "text-gray-500"}`}
          onClick={() => setCurrentPage("video")}
        >
          동영상
        </button>
      </div>

      {/* Content */}
      {currentPage === "table" ? (
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center border-b pb-4 mb-4">응모자 정보</h1>
          <div className="flex items-center my-8">
            <select
              className="border p-2 mr-2 w-52"
              value={filterColumn}
              onChange={(e) => setFilterColumn(e.target.value)}
            >
              {columns.slice(1).map((col) => (
                <option key={col.key} value={col.key}>
                  {col.header}
                </option>
              ))}
            </select>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="border p-2 w-80 h-10"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                className="h-10 px-4 py-2 bg-gray-500 text-white"
                onClick={() => setSearchTerm(searchInput)}
              >
                검색
              </button>
            </div>
          </div>
          <div>
            <Table data={filteredData} columns={columns} />
          </div>
        </div>
      ) : (
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center border-b pb-4 mb-4">동영상</h1>
          <PhotoGrid videos={videoData} />
        </div>
      )}
    </div>
  );
}
