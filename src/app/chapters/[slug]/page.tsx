import { notFound } from 'next/navigation';
import ChapterLayout from '@/components/ChapterLayout';
import MindsetChapter from '@/components/chapters/MindsetChapter';
import AiBasicsChapter from '@/components/chapters/AiBasicsChapter';
import GettingStartedChapter from '@/components/chapters/GettingStartedChapter';
import ToolSelectionChapter from '@/components/chapters/ToolSelectionChapter';
import BusinessApplicationsChapter from '@/components/chapters/BusinessApplicationsChapter';
import DailyLifeChapter from '@/components/chapters/DailyLifeChapter';

/**
 * 章ページの情報を管理するオブジェクト
 * slug: URL パラメータ、title: ページタイトル、component: 表示するコンポーネント
 */
const chapters = {
  mindset: {
    title: '第1章: 生成AIと向き合うための心構え',
    component: MindsetChapter,
  },
  'ai-basics': {
    title: '第2章: 生成AIの基本的な仕組みと種類',
    component: AiBasicsChapter,
  },
  'getting-started': {
    title: '第3章: はじめての生成AI - 実際に使ってみよう',
    component: GettingStartedChapter,
  },
  'tool-selection': {
    title: '第4章: どのAIツールを選ぶべきか？',
    component: ToolSelectionChapter,
  },
  'business-applications': {
    title: '第5章: ビジネスシーンでの生成AI活用術',
    component: BusinessApplicationsChapter,
  },
  'daily-life': {
    title: '第6章: 日常生活での活用アイデア',
    component: DailyLifeChapter,
  },
} as const;

type ChapterSlug = keyof typeof chapters;

/**
 * 動的ルーティング用の章ページコンポーネント
 * URLのslugパラメータに基づいて適切な章コンテンツを表示する
 */
export default function ChapterPage({ params }: { params: { slug: string } }) {
  const chapter = chapters[params.slug as ChapterSlug];

  // 存在しない章の場合は404ページを表示
  if (!chapter) {
    notFound();
  }

  const ChapterComponent = chapter.component;

  return (
    <ChapterLayout title={chapter.title}>
      <ChapterComponent />
    </ChapterLayout>
  );
}

/**
 * 静的生成用のパラメータを生成
 * ビルド時に全ての章ページを事前生成する
 */
export function generateStaticParams() {
  return Object.keys(chapters).map((slug) => ({
    slug,
  }));
}