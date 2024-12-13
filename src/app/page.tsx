'use client'

import Table from "@/components/share/table";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import PhotoGrid from "@/components/share/photoGrid";

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
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState<"table" | "video">("table"); // State to toggle view
  const router = useRouter();

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

      {currentPage === "table" ? (
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center border-b pb-4 mb-4">응모자 정보</h1>
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
          <div>
            <Table data={dummyData} columns={columns} />
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
