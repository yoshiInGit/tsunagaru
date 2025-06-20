"use client"
import { Search } from 'lucide-react';
import React, { useState } from 'react';

// 開発用のためのギャラリーアイテムの型定義
// ここでは、画像のURLと代替テキストを含むオブjectを定義しています。
// 実際のアプリケーションでは、APIから取得するデータを使用
interface GalleryItem {
  id: number;
  imageUrl: string;
  altText: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, imageUrl: 'https://via.placeholder.com/300x200?text=Image+1', altText: 'Image 1' },
  { id: 2, imageUrl: 'https://via.placeholder.com/300x250?text=Image+2', altText: 'Image 2' },
  { id: 3, imageUrl: 'https://via.placeholder.com/300x180?text=Image+3', altText: 'Image 3' },
  { id: 4, imageUrl: 'https://via.placeholder.com/300x220?text=Image+4', altText: 'Image 4' },
  { id: 5, imageUrl: 'https://via.placeholder.com/300x280?text=Image+5', altText: 'Image 5' },
  { id: 6, imageUrl: 'https://via.placeholder.com/300x190?text=Image+6', altText: 'Image 6' },
  { id: 7, imageUrl: 'https://via.placeholder.com/300x230?text=Image+7', altText: 'Image 7' },
  { id: 8, imageUrl: 'https://via.placeholder.com/300x210?text=Image+8', altText: 'Image 8' },
  { id: 9, imageUrl: 'https://via.placeholder.com/300x260?text=Image+9', altText: 'Image 9' },
  { id: 10, imageUrl: 'https://via.placeholder.com/300x170?text=Image+10', altText: 'Image 10' },
  { id: 11, imageUrl: 'https://via.placeholder.com/300x240?text=Image+11', altText: 'Image 11' },
  { id: 12, imageUrl: 'https://via.placeholder.com/300x200?text=Image+12', altText: 'Image 12' },
];

const CommunityPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleBoxClick = (id: number, altText: string) => {
    alert(`Box ${id} (${altText}) clicked!`);
    // ここで詳細ページへの遷移など、クリック時の処理を記述
  };

  const filteredItems = galleryItems.filter(item =>
    item.altText.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* 検索ボックスのセクション */}
      <header className="fixed top-0 left-0 right-0  px-2 lg:px-16 py-4 z-10">
        <div className="container mx-auto flex justify-center align-center">
          <Search className='my-auto text-gray-700 ' size={32}/>
          <div className="w-4"/>
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-1 focus:gray-100/30"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </header>

      {/* ギャラリーのセクション */}
      <main className="pt-20 pb-4"> {/* ヘッダーの高さ分、コンテンツを下にずらす */}
        <div className="container mx-auto px-2 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => handleBoxClick(item.id, item.altText)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">{item.altText}</p>
                </div>
              </div>
            ))}
          </div>
          {filteredItems.length === 0 && (
            <p className="text-center text-gray-600 mt-8">No results found for "{searchTerm}"</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default CommunityPage;