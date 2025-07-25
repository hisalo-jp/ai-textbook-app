'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useQuizProgress from '@/hooks/useQuizProgress';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * 章の情報を管理する配列
 * 各章のslug、タイトル、アイコンを定義
 */
const chapters = [
  {
    slug: 'mindset',
    title: '第1章: 生成AIと向き合うための心構え',
    shortTitle: '心構え',
    icon: '🧠',
  },
  {
    slug: 'ai-basics',
    title: '第2章: 生成AIの基本的な仕組みと種類',
    shortTitle: 'AI基礎',
    icon: '🤖',
  },
  {
    slug: 'getting-started',
    title: '第3章: はじめての生成AI - 実際に使ってみよう',
    shortTitle: '実践編',
    icon: '🚀',
  },
  {
    slug: 'tool-selection', 
    title: '第4章: どのAIツールを選ぶべきか？',
    shortTitle: 'ツール比較',
    icon: '⚖️',
  },
  {
    slug: 'business-applications',
    title: '第5章: ビジネスシーンでの生成AI活用術',
    shortTitle: 'ビジネス活用',
    icon: '💼',
  },
  {
    slug: 'daily-life',
    title: '第6章: 日常生活での活用アイデア', 
    shortTitle: '日常活用',
    icon: '🏠',
  },
];

/**
 * 左側サイドバーコンポーネント
 * 学習チャプターのナビゲーションリンクを提供
 * モバイルではオーバーレイとして表示
 */
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { completedCount, totalChapters, progressPercentage, isChapterCompleted } = useQuizProgress();

  return (
    <>
      {/* モバイル用オーバーレイ背景 */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* サイドバー */}
      <aside className={`fixed left-0 top-16 bottom-0 w-64 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        
        {/* モバイル用閉じるボタン */}
        <div className="md:hidden flex justify-end mb-4">
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-800"
            aria-label="メニューを閉じる"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          学習チャプター
        </h2>
        
        {/* ホームページへのリンク */}
        <div className="mb-6">
          <Link 
            href="/"
            onClick={onClose}
            className={`block p-3 rounded-lg transition-colors duration-200 ${
              pathname === '/' 
                ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center">
              <span className="text-lg mr-3">🏠</span>
              <span className="font-medium">ホーム</span>
            </div>
          </Link>
        </div>

        {/* 章のリスト */}
        <div className="space-y-2">
          {chapters.map((chapter) => {
            const isActive = pathname === `/chapters/${chapter.slug}`;
            const isCompleted = isChapterCompleted(chapter.slug);
            
            return (
              <Link
                key={chapter.slug}
                href={`/chapters/${chapter.slug}`}
                onClick={onClose}
                className={`block p-3 rounded-lg transition-colors duration-200 relative ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-lg mr-3">{chapter.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium">{chapter.shortTitle}</div>
                    <div className="text-xs text-gray-500 mt-1 leading-tight">
                      {chapter.title}
                    </div>
                  </div>
                  {isCompleted && (
                    <div className="ml-2">
                      <span className="text-green-500 text-lg">✅</span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* 学習進捗の表示エリア */}
        <div className="mt-8 pt-6 border-t border-gray-300">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">学習進捗</h3>
          <div className="bg-white p-3 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">完了した章</span>
              <span className="text-sm font-medium text-blue-600">{completedCount}/{totalChapters}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-center mt-2">
              <span className="text-xs text-gray-500">{progressPercentage}% 完了</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;