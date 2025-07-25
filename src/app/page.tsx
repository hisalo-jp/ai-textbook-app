import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

/**
 * ホームページコンポーネント
 * レスポンシブレイアウトを実装し、ヘッダー、サイドバー、メインコンテンツを配置
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 固定ヘッダー */}
      <Header />
      
      {/* サイドバーとメインコンテンツのコンテナ */}
      <div className="flex">
        {/* レスポンシブ対応のサイドバー（デスクトップのみ表示） */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        {/* メインコンテンツエリア（レスポンシブ対応） */}
        <div className="flex-1 md:ml-64">
          <MainContent />
        </div>
      </div>
    </div>
  );
}