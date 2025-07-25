'use client';

import React from 'react';
import QuizSection from '@/components/QuizSection';
import useQuizProgress from '@/hooks/useQuizProgress';

const AiBasicsChapter: React.FC = () => {
  const { markChapterComplete } = useQuizProgress();

  const quizQuestions = [
    {
      id: 1,
      question: "従来のAIと生成AIの最も大きな違いは何ですか？",
      options: [
        "処理速度の違い",
        "新しいコンテンツを創り出す能力",
        "使用する電力量の違い",
        "開発コストの違い"
      ],
      correctAnswer: 1,
      explanation: "生成AIの最大の特徴は、既存のデータを分析・分類するだけでなく、新しいコンテンツ（文章、画像、音声など）を創り出すことができる点です。"
    },
    {
      id: 2,
      question: "ハルシネーション（幻覚）とは何ですか？",
      options: [
        "AIが処理できないデータ形式",
        "AIが事実でない情報を事実として回答すること",
        "AIが動作を停止する現象",
        "AIが学習に時間がかかること"
      ],
      correctAnswer: 1,
      explanation: "ハルシネーションとは、生成AIが事実ではない情報を、まるで事実であるかのように自信を持って回答してしまう現象です。重要な情報は必ず事実確認が必要です。"
    },
    {
      id: 3,
      question: "画像生成AIの主要サービスに含まれないものはどれですか？",
      options: [
        "DALL-E",
        "Midjourney", 
        "ChatGPT",
        "Stable Diffusion"
      ],
      correctAnswer: 2,
      explanation: "ChatGPTは主にテキスト生成AIです。DALL-E、Midjourney、Stable Diffusionは画像生成AIの代表的なサービスです。"
    },
    {
      id: 4,
      question: "生成AIを企業で利用する際に最も注意すべきことは何ですか？",
      options: [
        "電力使用量の管理",
        "個人情報や機密情報の入力を避ける",
        "利用時間の制限",
        "社員全員に利用を義務付ける"
      ],
      correctAnswer: 1,
      explanation: "企業利用では、顧客情報や社内機密情報を生成AIに入力しないことが最も重要です。入力した情報が学習データとして使われる可能性があるためです。"
    }
  ];

  return (
    <div className="prose max-w-none">
      <section className="mb-12">
        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            「生成AI」という言葉をよく耳にするけれど、実際にはどんな技術なのでしょうか？
            ここでは、<strong className="text-purple-600">技術的な難しい話は避けて</strong>、
            社会人の皆様が理解しやすいように、生成AIの基本的な仕組みと種類について解説します。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
          生成AIってどんな技術？
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-800 mb-4">従来のAIと生成AIの違い</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
              <h4 className="font-semibold text-gray-700 mb-3">🤖 従来のAI</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>特徴：</strong> 決められたルールに従って判断</p>
                <p><strong>例：</strong> 写真を見て「犬」か「猫」かを判別</p>
                <p><strong>できること：</strong> 分類、予測、認識</p>
              </div>
              <div className="bg-white p-3 rounded mt-3 text-xs text-gray-600">
                💡 人間が設定したルールの範囲内で動作
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-700 mb-3">✨ 生成AI</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>特徴：</strong> 新しいコンテンツを創り出す</p>
                <p><strong>例：</strong> 自然な文章、画像、音声を生成</p>
                <p><strong>できること：</strong> 創作、対話、変換</p>
              </div>
              <div className="bg-white p-3 rounded mt-3 text-xs text-blue-800">
                💡 膨大なデータから学習し、創造的な出力を生成
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-800 mb-4">「学習」と「生成」の仕組み</h3>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
            <h4 className="font-medium text-gray-800 mb-4">📚 料理のレシピ本で例えてみましょう</h4>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                  <span className="text-green-600 font-bold text-sm">1</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-800 mb-2">学習フェーズ</h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    AIは何億冊もの料理本、ブログ、レシピサイトを読み込みます。
                    「どんな材料を使うと美味しくなるか」「どんな手順が一般的か」などのパターンを覚えていきます。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-800 mb-2">生成フェーズ</h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    「トマトを使った簡単な料理を教えて」と聞かれると、学習した知識を組み合わせて、
                    新しいオリジナルレシピを作り出します。既存のレシピの丸写しではありません。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg">
            <h4 className="font-medium text-yellow-700 mb-3">🤔 なぜ人間らしい文章が書けるの？</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              生成AIは「次にどの言葉が来る確率が高いか」を計算しています。
              例えば「おはよう」の後には「ございます」「ございました」などが続く確率が高いことを学習し、
              自然で文脈に合った文章を組み立てています。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
          主な生成AIの種類
        </h2>

        <div className="space-y-8">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-700">テキスト生成AI</h3>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                文章の作成、翻訳、要約、質問回答など、文字に関する様々な作業を得意とします。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="font-medium text-blue-700 mb-2">主要サービス</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• ChatGPT</li>
                  <li>• Google Gemini</li>
                  <li>• Microsoft Copilot</li>
                  <li>• Claude</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <h4 className="font-medium text-green-700 mb-2">得意な作業</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• メール作成</li>
                  <li>• 文章の要約</li>
                  <li>• 翻訳</li>
                  <li>• アイデア出し</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <h4 className="font-medium text-orange-700 mb-2">ビジネス活用</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• 提案書作成</li>
                  <li>• 会議議事録</li>
                  <li>• 企画書の下書き</li>
                  <li>• 顧客対応文面</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-700">画像生成AI</h3>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                テキストの指示から画像やイラストを自動生成します。デザインの知識がなくても、言葉で説明するだけで画像を作成できます。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <h4 className="font-medium text-purple-700 mb-2">主要サービス</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• DALL-E</li>
                  <li>• Midjourney</li>
                  <li>• Stable Diffusion</li>
                  <li>• Adobe Firefly</li>
                </ul>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg text-center">
                <h4 className="font-medium text-pink-700 mb-2">得意な作業</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• イラスト作成</li>
                  <li>• 写真加工</li>
                  <li>• ロゴデザイン</li>
                  <li>• アイコン作成</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg text-center">
                <h4 className="font-medium text-indigo-700 mb-2">ビジネス活用</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• プレゼン資料</li>
                  <li>• SNS投稿画像</li>
                  <li>• 商品イメージ</li>
                  <li>• 広告素材</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-700">音声・動画生成AI</h3>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                音声の合成、動画の自動生成、音楽の作成など、マルチメディアコンテンツの制作を支援します。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-medium text-orange-700 mb-2">🎤 音声AI</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• ナレーション生成</li>
                  <li>• 多言語音声合成</li>
                  <li>• 音声の文字起こし</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-medium text-red-700 mb-2">🎬 動画AI</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• 短編動画の自動生成</li>
                  <li>• 字幕の自動作成</li>
                  <li>• 動画編集の自動化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-red-200 pb-2">
          生成AIが得意なこと・苦手なこと
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 className="text-lg font-semibold text-green-700 mb-4">✅ 得意なこと</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-green-600 mb-2">📝 文章作成・編集</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• メール、報告書、提案書の作成</li>
                  <li>• 文章の要約・校正</li>
                  <li>• 異なるトーンでの書き直し</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-green-600 mb-2">🔄 翻訳・変換</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 多言語翻訳</li>
                  <li>• 技術用語の解説</li>
                  <li>• データの整理・分析</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-green-600 mb-2">💡 アイデア・企画</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ブレインストーミング</li>
                  <li>• 企画の骨子作成</li>
                  <li>• 問題解決のアプローチ提案</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h3 className="text-lg font-semibold text-red-700 mb-4">❌ 苦手なこと</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-red-600 mb-2">📅 最新情報</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• リアルタイムの情報取得</li>
                  <li>• 最新のニュースや動向</li>
                  <li>• 個人的な最新情報</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">※ Geminiなど一部は対応</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-red-600 mb-2">🔢 正確な計算</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 複雑な数学計算</li>
                  <li>• 統計的な厳密性</li>
                  <li>• 金融計算の精度</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-red-600 mb-2">🎯 事実確認</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 情報の正確性保証</li>
                  <li>• 出典の明確化</li>
                  <li>• 専門的な事実関係</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
          <h3 className="text-lg font-semibold text-yellow-700 mb-4">⚠️ ハルシネーション（幻覚）について</h3>
          <div className="text-sm text-gray-700 leading-relaxed space-y-3">
            <p>
              生成AIは時として、<strong>事実ではない情報を、まるで事実であるかのように自信を持って回答</strong>することがあります。
              これを「ハルシネーション」と呼びます。
            </p>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-800 mb-2"><strong>例：</strong></p>
              <p className="text-gray-700">
                「○○会社の2023年の売上高は？」と質問すると、実際には公開されていない数字を、
                具体的で説得力のある形で回答してしまうことがあります。
              </p>
            </div>
            <p className="text-yellow-800">
              <strong>対策：</strong> 重要な情報は必ず複数の信頼できるソースで確認することが大切です。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
          社会人が知っておくべき注意点
        </h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">1. 情報の正確性確認の重要性</h3>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                生成AIの回答は「参考情報」として活用し、重要な判断材料にする前は必ず事実確認を行いましょう。
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-600 mb-2">確認すべき項目</h4>
                <ul className="space-y-1">
                  <li>• 数値データの正確性</li>
                  <li>• 法律・規制に関する情報</li>
                  <li>• 企業の具体的な情報</li>
                  <li>• 専門的な技術情報</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-green-400 shadow-sm">
            <h3 className="text-lg font-semibold text-green-700 mb-4">2. 著作権・プライバシーへの配慮</h3>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-600 mb-2">✅ 適切な使用</h4>
                  <ul className="space-y-1">
                    <li>• アイデアの下書きとして活用</li>
                    <li>• 自分なりの表現に書き直す</li>
                    <li>• 参考資料として利用</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-600 mb-2">❌ 避けるべき使用</h4>
                  <ul className="space-y-1">
                    <li>• そのまま転用・公開</li>
                    <li>• 個人情報の入力</li>
                    <li>• 機密情報の共有</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400 shadow-sm">
            <h3 className="text-lg font-semibold text-orange-700 mb-4">3. 企業での利用時の注意事項</h3>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-medium text-orange-600 mb-3">確認すべきポイント</h4>
                <div className="space-y-2">
                  <p>• <strong>社内規定の確認：</strong> 会社でのAI利用ポリシーを事前に確認</p>
                  <p>• <strong>情報の取り扱い：</strong> 顧客情報や社内情報の入力は避ける</p>
                  <p>• <strong>最終責任：</strong> AI生成コンテンツも、最終的な責任は人間が負う</p>
                  <p>• <strong>品質管理：</strong> 重要な文書は必ず人間がチェック・修正する</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">この章のまとめ</h2>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-start">
            <span className="text-purple-500 mr-2">✓</span>
            生成AIは<strong>新しいコンテンツを創り出す</strong>技術で、従来のAIとは異なる
          </p>
          <p className="flex items-start">
            <span className="text-purple-500 mr-2">✓</span>
            テキスト、画像、音声など<strong>様々な種類</strong>が存在し、それぞれ得意分野が違う
          </p>
          <p className="flex items-start">
            <span className="text-purple-500 mr-2">✓</span>
            <strong>得意なこと・苦手なこと</strong>を理解して適切に活用することが重要
          </p>
          <p className="flex items-start">
            <span className="text-purple-500 mr-2">✓</span>
            情報の正確性確認、著作権への配慮、企業での利用ルールの遵守が必要
          </p>
          <p className="flex items-start">
            <span className="text-purple-500 mr-2">✓</span>
            <strong>ハルシネーション</strong>に注意し、重要な情報は必ず事実確認を行う
          </p>
        </div>
      </section>

      {/* クイズセクション */}
      <QuizSection 
        chapterSlug="ai-basics"
        questions={quizQuestions}
        onComplete={() => markChapterComplete('ai-basics')}
      />
    </div>
  );
};

export default AiBasicsChapter;