'use client';

import React from 'react';
import QuizSection from '@/components/QuizSection';
import useQuizProgress from '@/hooks/useQuizProgress';

const ToolSelectionChapter: React.FC = () => {
  const { markChapterComplete } = useQuizProgress();

  const quizQuestions = [
    {
      id: 1,
      question: "ビジネス用途において最も推奨されるAIツールはどれですか？", 
      options: [
        "ChatGPT",
        "Gemini",
        "Copilot",
        "Claude"
      ],
      correctAnswer: 1,
      explanation: "Geminiは広範な情報アクセスと高度な推論能力を持ち、リアルタイム検索やDeep Research機能により、ビジネス用途で特に優れた性能を発揮します。"
    },
    {
      id: 2,
      question: "GeminiのDeep Research機能の特徴として正しいものはどれですか？",
      options: [
        "画像を自動生成する機能",
        "複数のウェブサイトから情報を収集し包括的な調査レポートを作成する機能",
        "音声を文字に変換する機能",
        "プログラムコードを自動修正する機能"
      ],
      correctAnswer: 1,
      explanation: "Deep Research機能は、複数のウェブサイトから情報を収集し、包括的な調査レポートを自動作成する機能です。市場調査や競合分析などに活用できます。"
    },
    {
      id: 3,
      question: "ChatGPTの主な長所として適切でないものはどれですか？",
      options: [
        "汎用性が高く様々な用途に対応",
        "豊富なプラグインエコシステム",
        "リアルタイムでの最新情報アクセス",
        "創造的な文章作成が得意"
      ],
      correctAnswer: 2,
      explanation: "ChatGPTの短所の一つが「最新情報へのアクセスが制限的」であることです。リアルタイムでの最新情報アクセスはChatGPTの弱点の一つです。"
    },
    {
      id: 4,
      question: "Microsoft Copilotの特徴として最も適切なものはどれですか？",
      options: [
        "Google検索との深い連携",
        "画像生成に特化している",
        "Microsoft Officeとの深い統合",
        "音声合成機能が優秀"
      ],
      correctAnswer: 2,
      explanation: "Microsoft CopilotはMicrosoft Officeとの深い統合が最大の特徴です。Word、Excel、PowerPointなどのOffice製品との連携が強みです。"
    }
  ];

  return (
    <div className="prose max-w-none">
      <section className="mb-12">
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            現在、多くの生成AIツールが利用可能になっていますが、どれを選べばよいか迷う方も多いでしょう。
            ここでは、主要な3つのツール（ChatGPT、Gemini、Copilot）の特徴を比較し、
            <strong className="text-blue-600">ビジネス用途での最適な選択</strong>について解説します。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
          主要AIツールの特徴比較
        </h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left font-semibold">項目</th>
                <th className="border border-gray-300 p-3 text-center font-semibold text-green-700">ChatGPT</th>
                <th className="border border-gray-300 p-3 text-center font-semibold text-blue-700">Gemini</th>
                <th className="border border-gray-300 p-3 text-center font-semibold text-orange-700">Copilot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-medium bg-gray-50">開発元</td>
                <td className="border border-gray-300 p-3 text-center">OpenAI</td>
                <td className="border border-gray-300 p-3 text-center">Google</td>
                <td className="border border-gray-300 p-3 text-center">Microsoft</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium bg-gray-50">料金（月額）</td>
                <td className="border border-gray-300 p-3 text-center">無料〜$20</td>
                <td className="border border-gray-300 p-3 text-center">無料〜$20</td>
                <td className="border border-gray-300 p-3 text-center">無料〜$20</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium bg-gray-50">情報の最新性</td>
                <td className="border border-gray-300 p-3 text-center">制限あり</td>
                <td className="border border-gray-300 p-3 text-center bg-blue-50">
                  <strong>リアルタイム検索</strong>
                </td>
                <td className="border border-gray-300 p-3 text-center">Bing連携</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium bg-gray-50">推論・分析能力</td>
                <td className="border border-gray-300 p-3 text-center">良い</td>
                <td className="border border-gray-300 p-3 text-center bg-blue-50">
                  <strong>極めて優秀</strong>
                </td>
                <td className="border border-gray-300 p-3 text-center">良い</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium bg-gray-50">特徴的機能</td>
                <td className="border border-gray-300 p-3 text-center">プラグイン</td>
                <td className="border border-gray-300 p-3 text-center bg-blue-50">
                  <strong>Deep Research</strong>
                </td>
                <td className="border border-gray-300 p-3 text-center">Office統合</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
          各ツールの長所・短所
        </h2>

        <div className="grid gap-8">
          <div className="bg-white border-2 border-blue-300 rounded-lg p-6 shadow-md relative">
            <div className="absolute top-2 right-2 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
              推奨
            </div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold text-lg">G</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-700">Gemini</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-600 mb-2">✅ 長所</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>リアルタイムでの情報アクセス</strong></li>
                  <li>• <strong>高度な推論・分析能力</strong></li>
                  <li>• <strong>Deep Research機能による詳細調査</strong></li>
                  <li>• Googleサービスとの優れた連携</li>
                  <li>• 日本語の理解と生成が非常に自然</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-red-600 mb-2">❌ 短所</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• プラグインエコシステムが限定的</li>
                  <li>• 一部の創作分野でやや保守的</li>
                  <li>• Googleアカウント必須</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 mb-2">🔍 Deep Research機能とは？</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Geminiの最新機能で、複数のウェブサイトから情報を収集し、包括的な調査レポートを自動作成します。
                市場調査、競合分析、業界動向の把握など、ビジネスで必要な詳細な調査作業を大幅に効率化できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
          ビジネス用途での推奨：なぜGeminiなのか
        </h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            広範な情報アクセスと高度な推論能力でGeminiが最適
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            ビジネス環境では、<strong>正確で最新の情報</strong>と<strong>高度な分析能力</strong>が不可欠です。
            Geminiは以下の点で、ビジネス用途において他のツールを上回る性能を発揮します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400 shadow-sm">
            <h4 className="font-semibold text-blue-700 mb-3">1. リアルタイム情報アクセス</h4>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              市場動向、競合情報、最新のニュースなど、ビジネス判断に必要な最新情報を即座に取得・分析できます。
            </p>
            <div className="bg-blue-50 p-3 rounded text-xs text-blue-800">
              例：「今週の円相場の動向と、輸出企業への影響を分析して」→ 最新データで即座に回答
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-green-400 shadow-sm">
            <h4 className="font-semibold text-green-700 mb-3">2. 高度な推論・分析能力</h4>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              複雑なビジネス課題に対して、多角的な視点から論理的な分析と提案を行います。
            </p>
            <div className="bg-green-50 p-3 rounded text-xs text-green-800">
              例：売上データから収益改善案を導出、リスク要因の特定と対策の提案など
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">この章のまとめ</h2>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            ChatGPT、Gemini、Copilotはそれぞれ異なる強みを持つ
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            <strong>Geminiはビジネス用途で最も優れた性能を発揮</strong>
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            リアルタイム情報アクセスとDeep Research機能が決定的な差別化要因
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            高度な推論能力により、複雑なビジネス課題にも対応可能
          </p>
        </div>
      </section>

      {/* クイズセクション */}
      <QuizSection 
        chapterSlug="tool-selection"
        questions={quizQuestions}
        onComplete={() => markChapterComplete('tool-selection')}
      />
    </div>
  );
};

export default ToolSelectionChapter;