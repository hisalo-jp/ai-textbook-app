'use client';

import React from 'react';

interface HeaderProps {
  onMenuToggle: () => void;
}

/**
 * 固定ヘッダーコンポーネント
 * 画面上部に固定表示され、アプリケーションのタイトルを表示する
 * モバイルでハンバーガーメニューボタンも表示
 */
const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white shadow-lg">
      <div className="flex items-center justify-between h-16 px-4">
        {/* ハンバーガーメニューボタン（モバイルのみ表示） */}
        <button
          onClick={onMenuToggle}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="メニューを開く"
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* タイトル */}
        <h1 className="text-xl font-bold flex-1 text-center md:text-center">
          生成AIの教科書
        </h1>

        {/* 右側のスペース（レイアウト調整用） */}
        <div className="w-8 md:hidden"></div>
      </div>
    </header>
  );
};

export default Header;