'use client';

import { useState, useEffect } from 'react';

const CHAPTER_SLUGS = [
  'mindset',
  'ai-basics', 
  'getting-started',
  'tool-selection',
  'business-applications',
  'daily-life'
];

function useQuizProgress() {
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);
  const [totalChapters] = useState(CHAPTER_SLUGS.length);

  // LocalStorageから完了済み章を読み込み
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completed = CHAPTER_SLUGS.filter(slug => 
        localStorage.getItem(`quiz-completed-${slug}`) === 'true'
      );
      setCompletedChapters(completed);
    }
  }, []);

  // 章完了時の処理
  const markChapterComplete = (chapterSlug: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`quiz-completed-${chapterSlug}`, 'true');
      setCompletedChapters(prev => {
        if (!prev.includes(chapterSlug)) {
          return [...prev, chapterSlug];
        }
        return prev;
      });
    }
  };

  // 進捗のリセット（開発・テスト用）
  const resetProgress = () => {
    if (typeof window !== 'undefined') {
      CHAPTER_SLUGS.forEach(slug => {
        localStorage.removeItem(`quiz-completed-${slug}`);
      });
      setCompletedChapters([]);
    }
  };

  // 特定の章が完了済みかチェック
  const isChapterCompleted = (chapterSlug: string): boolean => {
    return completedChapters.includes(chapterSlug);
  };

  // 進捗率の計算
  const progressPercentage = Math.round((completedChapters.length / totalChapters) * 100);

  return {
    completedChapters,
    totalChapters,
    completedCount: completedChapters.length,
    progressPercentage,
    markChapterComplete,
    resetProgress,
    isChapterCompleted
  };
}

export default useQuizProgress;