'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

interface HomeLayoutProps {
  children: React.ReactNode;
}

/**
 * ホームページ用のレイアウトコンポーネント
 * モバイルメニューの状態管理を含む
 */
const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
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
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;