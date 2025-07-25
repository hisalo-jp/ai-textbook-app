import React from 'react';

/**
 * メインコンテンツエリアコンポーネント
 * 中央のコンテンツ表示エリア。現在は「ようこそ！」という見出しを表示
 */
const MainContent: React.FC = () => {
  return (
    <main className="mt-16 p-4 md:p-8 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          ようこそ！
        </h1>
        <div className="text-gray-600">
          生成AIの教科書へようこそ。このアプリケーションでは、社会人の皆様を対象とした
          生成AIの基礎から実践的な活用法まで、分かりやすく学習できます。
        </div>
      </div>
    </main>
  );
};

export default MainContent;