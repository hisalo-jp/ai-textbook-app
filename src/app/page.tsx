import HomeLayout from '@/components/HomeLayout';
import MainContent from '@/components/MainContent';

/**
 * ホームページコンポーネント
 * レスポンシブレイアウトを実装し、ヘッダー、サイドバー、メインコンテンツを配置
 */
export default function Home() {
  return (
    <HomeLayout>
      <MainContent />
    </HomeLayout>
  );
}