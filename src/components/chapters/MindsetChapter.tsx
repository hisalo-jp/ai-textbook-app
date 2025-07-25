'use client';

import React from 'react';
import QuizSection from '@/components/QuizSection';
import useQuizProgress from '@/hooks/useQuizProgress';

/**
 * 第1章: 生成AIと向き合うための心構え
 * 社会人が生成AIに対して持つ不安を解消し、適切な活用マインドセットを身につけるためのコンテンツ
 */
const MindsetChapter: React.FC = () => {
  const { markChapterComplete } = useQuizProgress();

  const quizQuestions = [
    {
      id: 1,
      question: "生成AIを活用する際の最も適切な心構えは何ですか？",
      options: [
        "AIに全て任せて人間は何もしない",
        "優秀なアシスタントとして協働する",
        "AIを全く信用せず従来の方法を続ける", 
        "AIの判断を常に疑って使わない"
      ],
      correctAnswer: 1,
      explanation: "生成AIは「優秀なアシスタント」として捉え、適切な指示を出し、結果を確認しながら協働することが重要です。"
    },
    {
      id: 2,
      question: "AIが苦手なことはどれですか？",
      options: [
        "文章の作成",
        "最新情報の正確な取得",
        "アイデア出し",
        "翻訳作業"
      ],
      correctAnswer: 1,
      explanation: "生成AIは学習データに基づいて動作するため、リアルタイムの最新情報を正確に取得することは苦手です。"
    },
    {
      id: 3,
      question: "人間にしかできないこととして適切でないものはどれですか？",
      options: [
        "創造的なアイデアの発想",
        "データの分析と整理",
        "倫理的な判断",
        "信頼関係の構築"
      ],
      correctAnswer: 1,
      explanation: "データの分析と整理は生成AIが得意とする分野です。創造性、倫理的判断、人間関係構築は人間の独自性が活かされる領域です。"
    },
    {
      id: 4,
      question: "効果的なプロンプト（指示）に必要な要素として最も重要なものはどれですか？",
      options: [
        "短く簡潔であること",
        "専門用語を多用すること",
        "具体的で明確であること",
        "丁寧語を使うこと"
      ],
      correctAnswer: 2,
      explanation: "効果的なプロンプトは5W1Hを意識した「具体的で明確な指示」が最も重要です。曖昧な指示では期待する結果が得られません。"
    }
  ];

  return (
    <div className="prose max-w-none">
      {/* なぜ今、生成AIを学ぶべきか */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
          なぜ今、生成AIを学ぶべきなのか
        </h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            生成AIは、私たちの働き方や日常生活を大きく変える可能性を秘めた技術です。
            しかし、「難しそう」「エンジニアでないと使えない」と感じる方も多いのではないでしょうか。
          </p>
          <p className="text-gray-700 leading-relaxed">
            実際には、生成AIは<strong className="text-blue-600">誰でも使える身近なツール</strong>になっています。
            メールの作成、資料の要約、アイデア出し など、日々の業務で活用できる場面は数多くあります。
          </p>
        </div>

        <h3 className="text-xl font-medium text-gray-800 mb-4">生成AIを学ぶメリット</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 p-5 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-2">⏰ 作業時間の短縮</h4>
            <p className="text-gray-700 text-sm">
              メール作成、文書校正、情報整理などの時間を大幅に削減できます
            </p>
          </div>
          <div className="bg-orange-50 p-5 rounded-lg">
            <h4 className="font-semibold text-orange-700 mb-2">💡 創造性の向上</h4>
            <p className="text-gray-700 text-sm">
              新しいアイデアの発想や、異なる視点からの提案を得られます
            </p>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="font-semibold text-purple-700 mb-2">📈 スキルアップ</h4>
            <p className="text-gray-700 text-sm">
              AIを活用できる人材として、職場での価値が高まります
            </p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🎯 質の向上</h4>
            <p className="text-gray-700 text-sm">
              より良い文章、より詳細な分析など、成果物の質が向上します
            </p>
          </div>
        </div>
      </section>

      {/* AIに仕事を奪われるという不安への向き合い方 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-red-200 pb-2">
          「AIに仕事を奪われる」という不安への向き合い方
        </h2>
        
        <div className="bg-red-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-medium text-red-700 mb-3">多くの人が抱く不安</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• 「自分の仕事がAIに取って代わられるのではないか」</li>
            <li>• 「AIを使えない人は置いていかれるのではないか」</li>
            <li>• 「人間の価値がなくなってしまうのではないか」</li>
          </ul>
        </div>

        <h3 className="text-xl font-medium text-gray-800 mb-4">現実的な視点で考えてみましょう</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 mb-3">1. AIは「置き換え」ではなく「協働」</h4>
          <div className="bg-gray-50 p-5 rounded-lg mb-4">
            <p className="text-gray-700 leading-relaxed mb-3">
              AIは人間の仕事を完全に置き換えるのではなく、<strong>人間と一緒に働くパートナー</strong>として機能します。
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-blue-400">
              <p className="text-sm text-gray-600 mb-2"><strong>例：営業職の場合</strong></p>
              <p className="text-sm text-gray-700">
                AI → 顧客データの分析、提案書の下書き作成<br/>
                人間 → 顧客との関係構築、最終的な判断、創造的な提案
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 mb-3">2. 人間にしかできないことがある</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🤝</div>
              <h5 className="font-medium text-yellow-700 mb-1">人間関係</h5>
              <p className="text-xs text-gray-600">信頼関係の構築、共感、チームワーク</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🎨</div>
              <h5 className="font-medium text-green-700 mb-1">創造性</h5>
              <p className="text-xs text-gray-600">独創的なアイデア、感性に基づく判断</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">⚖️</div>
              <h5 className="font-medium text-blue-700 mb-1">倫理的判断</h5>
              <p className="text-xs text-gray-600">道徳的な判断、責任ある意思決定</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="text-lg font-medium text-green-700 mb-3">✨ 前向きな考え方</h4>
          <p className="text-gray-700 leading-relaxed">
            AIを「脅威」ではなく「強力な武器」として捉えましょう。
            AIを使いこなせる人は、従来よりもはるかに高い生産性と創造性を発揮できるようになります。
            <strong className="text-green-600">早めに学んでおくことで、変化に対応できる準備ができます。</strong>
          </p>
        </div>
      </section>

      {/* AIを「賢いアシスタント」として活用する思考法 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
          AIを「賢いアシスタント」として活用する思考法
        </h2>
        
        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            生成AIを最も効果的に活用するコツは、<strong className="text-purple-600">「とても優秀なアシスタント」</strong>
            だと考えることです。人間のアシスタントと同じように、適切な指示を出し、結果を確認し、
            必要に応じて修正を依頼する、という流れになります。
          </p>
        </div>

        <h3 className="text-xl font-medium text-gray-800 mb-4">効果的な活用のための3つのポイント</h3>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-800 mb-2">明確で具体的な指示を出す</h4>
                <div className="mb-3">
                  <p className="text-sm text-gray-600 mb-2">❌ 悪い例：</p>
                  <div className="bg-red-50 p-3 rounded text-sm text-gray-700">
                    「メールを書いて」
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">✅ 良い例：</p>
                  <div className="bg-green-50 p-3 rounded text-sm text-gray-700">
                    「取引先へのプロジェクト進捗報告メールを書いて。件名、現在の進捗状況、次回のミーティング日程調整を含めて、丁寧な敬語で300文字程度でお願いします」
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4">
                <span className="text-green-600 font-bold text-lg">2</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-800 mb-2">結果を必ず確認・検証する</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  AIは非常に優秀ですが、時として間違いや不適切な内容を生成することがあります。
                  必ず内容を確認し、自分の判断で修正や調整を行いましょう。
                </p>
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>チェックポイント：</strong> 事実の正確性、トーンの適切性、目的との一致性
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-2 mr-4">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-800 mb-2">対話しながら改善していく</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  一回で完璧な結果が得られなくても大丈夫です。
                  「もっと具体的に」「別の表現で」「短くして」など、追加の指示を出して理想の結果に近づけていきましょう。
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm text-blue-800">
                    💡 <strong>コツ：</strong> 人間の部下に指示を出すような感覚で、自然に会話することが大切です
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">この章のまとめ</h2>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            生成AIは仕事を奪う「脅威」ではなく、私たちを支援する「パートナー」
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            人間にしかできない価値（創造性、人間関係、倫理的判断）は今後も重要
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            「優秀なアシスタント」として具体的な指示を出し、結果を確認・改善する
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            早めに学習することで、変化に対応できる準備を整える
          </p>
        </div>
      </section>

      {/* クイズセクション */}
      <QuizSection 
        chapterSlug="mindset"
        questions={quizQuestions}
        onComplete={() => markChapterComplete('mindset')}
      />
    </div>
  );
};

export default MindsetChapter;