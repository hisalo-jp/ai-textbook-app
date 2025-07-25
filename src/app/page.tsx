'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

/**
 * ホームページコンポーネント
 * レスポンシブレイアウトを実装し、ヘッダー、サイドバー、メインコンテンツを配置
 */
export default function Home() {
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
        <MainContent />
      </div>
    </div>
  );
}