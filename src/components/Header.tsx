import React from 'react';

/**
 * 固定ヘッダーコンポーネント
 * 画面上部に固定表示され、アプリケーションのタイトルを表示する
 */
const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white shadow-lg">
      <div className="flex items-center justify-center h-16 px-4">
        <h1 className="text-xl font-bold text-center">
          生成AIの教科書
        </h1>
      </div>
    </header>
  );
};

export default Header;