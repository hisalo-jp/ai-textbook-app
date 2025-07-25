'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

interface ChapterLayoutProps {
  title: string;
  children: React.ReactNode;
}

/**
 * 章ページ用のレイアウトコンポーネント
 * モバイルメニューの状態管理を含む
 */
const ChapterLayout: React.FC<ChapterLayoutProps> = ({ title, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 固定ヘッダー */}
      <Header onMenuToggle={toggleMobileMenu} />
      
      {/* サイドバー */}
      <Sidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      
      {/* メインコンテンツエリア（レスポンシブ対応） */}
      <div className="md:ml-64">
        <main className="mt-16 p-4 md:p-8 min-h-screen bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              {title}
            </h1>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChapterLayout;