'use client';

import React from 'react';
import QuizSection from '@/components/QuizSection';
import useQuizProgress from '@/hooks/useQuizProgress';

/**
 * 第6章: 日常生活での活用アイデア
 * 社会人が日常生活で直面する具体的なシナリオで生成AIを活用する方法をステップバイステップで解説
 */
const DailyLifeChapter: React.FC = () => {
  const { markChapterComplete } = useQuizProgress();

  const quizQuestions = [
    {
      id: 1,
      question: "住宅ローンの返済計画を立てる際に、AIに質問するべき最も重要な情報はどれですか？",
      options: [
        "購入予定価格、頭金、年収、返済期間の希望",
        "物件の築年数と立地条件",
        "銀行の営業担当者の名前",
        "近隣の相場価格のみ"
      ],
      correctAnswer: 0,
      explanation: "住宅ローンの返済計画を立てるには、購入予定価格、頭金、年収、返済期間の希望など、基本的な金融情報を包括的に伝えることが最も重要です。"
    },
    {
      id: 2,
      question: "旅行プランをAIに依頼する際の効果的な質問方法として適切でないものはどれですか？",
      options: [
        "目的地、期間、予算、参加者を明確に伝える",
        "興味のあるアクティビティを具体的に説明する",
        "「楽しい旅行プランを作って」とだけ伝える",
        "交通手段の希望も含めて依頼する"
      ],
      correctAnswer: 2,
      explanation: "「楽しい旅行プランを作って」だけでは情報が不十分です。目的地、期間、予算、参加者、興味のあるアクティビティなど具体的な情報を伝える必要があります。"
    },
    {
      id: 3,
      question: "献立提案をAIに依頼する際に注意すべき点として最も重要なものはどれですか？",
      options: [
        "料理の写真を事前に用意する",
        "アレルギーや健康上の制限がある場合は専門医に相談する",
        "必ず高級食材を使った料理を依頼する",
        "調理時間は気にせず複雑な料理を依頼する"
      ],
      correctAnswer: 1,
      explanation: "食物アレルギーや健康上の制限がある場合は、AIの提案を参考にする前に必ず専門医に相談することが最も重要です。健康に関わる事項は慎重に扱う必要があります。"
    },
    {
      id: 4,
      question: "日常生活でAIを活用する際の基本的な心構えとして最も適切なものはどれですか？",
      options: [
        "AIの回答をそのまま実行する",
        "具体的で詳細な情報を伝えて段階的に質問を深める",
        "簡潔な質問だけで十分な回答を期待する",
        "専門的な判断もすべてAIに任せる"
      ],
      correctAnswer: 1,
      explanation: "日常生活でAIを最大限活用するには、具体的で詳細な情報を伝え、段階的に質問を深めることが重要です。AIを優秀なアシスタントとして活用する姿勢が大切です。"
    }
  ];

  return (
    <div className="prose max-w-none">
      {/* 導入部 */}
      <section className="mb-12">
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            生成AIは仕事だけでなく、私たちの日常生活でも大いに役立ちます。
            ここでは、<strong className="text-green-600">住宅ローンの返済計画</strong>、
            <strong className="text-green-600">旅行プランの作成</strong>、
            <strong className="text-green-600">献立の提案</strong>など、
            社会人が実際に直面する場面での活用法を、具体的なステップとともに解説します。
          </p>
        </div>
      </section>

      {/* 住宅ローンの返済計画シミュレーション */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
          💰 住宅ローンの返済計画シミュレーション
        </h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-blue-700 mb-3">こんな時に役立ちます</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• マイホーム購入を検討している</li>
            <li>• 借り換えを考えている</li>
            <li>• 繰り上げ返済の効果を知りたい</li>
            <li>• 金利変動の影響を理解したい</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
          <h3 className="text-xl font-medium text-gray-800 mb-4">ステップバイステップガイド</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">基本情報を整理する</h4>
                <div className="bg-gray-50 p-4 rounded text-sm">
                  <p className="text-gray-700 mb-2"><strong>準備する情報：</strong></p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 購入予定価格（または借入希望額）</li>
                    <li>• 頭金の金額</li>
                    <li>• 返済期間の希望</li>
                    <li>• 年収・月収</li>
                    <li>• 現在の貯蓄額</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-blue-600 font-bold text-sm">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">AIに具体的な質問をする</h4>
                <div className="bg-green-50 p-4 rounded">
                  <p className="text-sm text-gray-600 mb-2"><strong>質問例：</strong></p>
                  <div className="bg-white p-3 rounded border text-sm text-gray-700">
                    「4000万円のマンションを購入予定です。頭金800万円、年収600万円、35年ローンを検討しています。
                    金利1.5%（固定）と0.8%（変動）の場合の月々の返済額と総返済額を比較して、
                    それぞれのメリット・デメリットも教えてください。また、繰り上げ返済を年100万円行った場合の効果も算出してください。」
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-blue-600 font-bold text-sm">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">結果を分析・検証する</h4>
                <div className="bg-yellow-50 p-4 rounded">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>確認ポイント：</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 月々の返済額が手取り収入の25%以内か</li>
                    <li>• ボーナス払いの有無とリスク</li>
                    <li>• 金利上昇時の影響度</li>
                    <li>• 繰り上げ返済の現実性</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-blue-600 font-bold text-sm">4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">追加の質問で深掘りする</h4>
                <div className="bg-purple-50 p-4 rounded">
                  <p className="text-sm text-gray-600 mb-2"><strong>追加質問例：</strong></p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <li>• 「子供の教育費を月3万円積み立てる場合の家計バランスは？」</li>
                    <li>• 「転職で年収が100万円下がった場合の対処法は？」</li>
                    <li>• 「金利が2%まで上昇した場合の返済額の変化は？」</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 旅行プランの作成 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
          ✈️ 旅行プランの作成
        </h2>
        
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-green-700 mb-3">こんな時に役立ちます</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• 家族旅行の計画を立てたい</li>
            <li>• 限られた予算で最大限楽しみたい</li>
            <li>• 現地の詳しい情報が欲しい</li>
            <li>• 効率的な観光ルートを知りたい</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
          <h3 className="text-xl font-medium text-gray-800 mb-4">ステップバイステップガイド</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-green-600 font-bold text-sm">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">旅行の基本条件を決める</h4>
                <div className="bg-gray-50 p-4 rounded text-sm">
                  <p className="text-gray-700 mb-2"><strong>整理する項目：</strong></p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 目的地（国内・海外）</li>
                    <li>• 期間（○泊○日）</li>
                    <li>• 予算の上限</li>
                    <li>• 参加者（大人○名、子供○名など）</li>
                    <li>• 興味のあるアクティビティ</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-green-600 font-bold text-sm">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">詳細な旅行プランを依頼する</h4>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm text-gray-600 mb-2"><strong>質問例：</strong></p>
                  <div className="bg-white p-3 rounded border text-sm text-gray-700">
                    「京都に3泊4日の家族旅行（大人2名、小学生1名）を計画しています。予算は1人10万円以内。
                    伝統文化体験と美味しい食事を重視したいです。効率的な観光ルート、おすすめの宿泊先、
                    子供も楽しめるスポット、必要な予算の詳細を教えてください。交通手段は新幹線を利用予定です。」
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-green-600 font-bold text-sm">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">具体的な詳細を確認する</h4>
                <div className="bg-yellow-50 p-4 rounded">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>追加で確認すべき項目：</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 各観光地の営業時間・定休日</li>
                    <li>• 予約が必要な施設・レストラン</li>
                    <li>• 雨天時の代替プラン</li>
                    <li>• 現地での移動手段と所要時間</li>
                    <li>• 子供向けの設備・サービス</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-green-600 font-bold text-sm">4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">持ち物リストと注意事項を確認</h4>
                <div className="bg-purple-50 p-4 rounded">
                  <p className="text-sm text-gray-600 mb-2"><strong>追加質問例：</strong></p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <li>• 「京都旅行で必要な持ち物リストを作成して」</li>
                    <li>• 「小学生連れで注意すべきポイントは？」</li>
                    <li>• 「現地での緊急時の連絡先も教えて」</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <h4 className="font-medium text-green-700 mb-2">💡 プロのコツ</h4>
          <p className="text-sm text-gray-700">
            旅行プランは「1日目のみ詳細に」「食事の予算配分」「現地の天気予報」など、
            段階的に質問を細かくしていくことで、より実用的なプランが得られます。
          </p>
        </div>
      </section>

      {/* 献立の提案 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-orange-200 pb-2">
          🍽️ 献立の提案
        </h2>
        
        <div className="bg-orange-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-orange-700 mb-3">こんな時に役立ちます</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• 毎日の献立を考えるのが大変</li>
            <li>• 栄養バランスを考慮したい</li>
            <li>• 家族の好みに合わせたい</li>
            <li>• 食材を無駄なく使いたい</li>
            <li>• 時短料理のレシピを知りたい</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
          <h3 className="text-xl font-medium text-gray-800 mb-4">ステップバイステップガイド</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-orange-600 font-bold text-sm">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">家族の情報を整理する</h4>
                <div className="bg-gray-50 p-4 rounded text-sm">
                  <p className="text-gray-700 mb-2"><strong>確認する項目：</strong></p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 家族構成（大人○名、子供○歳など）</li>
                    <li>• アレルギーや苦手な食材</li>
                    <li>• 健康上の配慮（減塩、糖質制限など）</li>
                    <li>• 料理にかけられる時間</li>
                    <li>• 1週間の食費予算</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-orange-600 font-bold text-sm">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">1週間の献立を依頼する</h4>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm text-gray-600 mb-2"><strong>質問例：</strong></p>
                  <div className="bg-white p-3 rounded border text-sm text-gray-700">
                    「4人家族（大人2名、小学生2名）の1週間の献立を作成してください。
                    子供が野菜嫌いなので、野菜を食べやすく工夫したメニューを中心に。
                    平日は30分以内で作れる時短料理、週末は少し手の込んだ料理も含めて。
                    食費は週1万円以内。栄養バランスと買い物リストも一緒にお願いします。」
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-orange-600 font-bold text-sm">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">レシピの詳細を確認する</h4>
                <div className="bg-yellow-50 p-4 rounded">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>詳しく聞くべき項目：</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 具体的な調理手順</li>
                    <li>• 食材の代替案</li>
                    <li>• 作り置きできるメニュー</li>
                    <li>• 冷凍保存の方法</li>
                    <li>• 栄養価の詳細情報</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-orange-600 font-bold text-sm">4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">食材の活用法を学ぶ</h4>
                <div className="bg-purple-50 p-4 rounded">
                  <p className="text-sm text-gray-600 mb-2"><strong>応用質問例：</strong></p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <li>• 「余った野菜で作れる簡単なおかずは？」</li>
                    <li>• 「子供が喜ぶお弁当のおかずのアイデアは？」</li>
                    <li>• 「疲れた日の15分で作れる夕食メニューは？」</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-medium text-red-700 mb-2">🚨 注意点</h4>
            <p className="text-sm text-gray-700">
              食物アレルギーや健康上の制限がある場合は、必ず専門医に相談してから献立を参考にしてください。
            </p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg">
            <h4 className="font-medium text-orange-700 mb-2">💡 活用のコツ</h4>
            <p className="text-sm text-gray-700">
              季節の食材や特売情報を伝えると、より経済的で美味しい献立提案が得られます。
            </p>
          </div>
        </div>
      </section>

      {/* その他の活用シーン */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
          🌟 その他の便利な活用シーン
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-2xl mb-3">🎂</div>
            <h3 className="font-semibold text-gray-800 mb-2">イベント企画</h3>
            <p className="text-sm text-gray-600 mb-3">
              誕生日パーティー、結婚記念日、歓送迎会の企画・準備
            </p>
            <div className="bg-purple-50 p-2 rounded text-xs text-purple-700">
              予算・人数・会場に応じた詳細プランを提案
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-2xl mb-3">💰</div>
            <h3 className="font-semibold text-gray-800 mb-2">家計管理</h3>
            <p className="text-sm text-gray-600 mb-3">
              月々の支出分析、節約方法の提案、貯蓄計画の立案
            </p>
            <div className="bg-green-50 p-2 rounded text-xs text-green-700">
              収支バランスの最適化をサポート
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-2xl mb-3">🏃‍♂️</div>
            <h3 className="font-semibold text-gray-800 mb-2">健康管理</h3>
            <p className="text-sm text-gray-600 mb-3">
              運動計画の作成、健康的な生活習慣の提案
            </p>
            <div className="bg-blue-50 p-2 rounded text-xs text-blue-700">
              個人の体力・スケジュールに合わせたプラン
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="font-semibold text-gray-800 mb-2">目標設定</h3>
            <p className="text-sm text-gray-600 mb-3">
              資格取得、スキルアップの学習計画の作成
            </p>
            <div className="bg-yellow-50 p-2 rounded text-xs text-yellow-700">
              現実的で継続可能な学習スケジュール
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-2xl mb-3">🎁</div>
            <h3 className="font-semibold text-gray-800 mb-2">ギフト選び</h3>
            <p className="text-sm text-gray-600 mb-3">
              相手の趣味・年齢・関係性に応じたプレゼント提案
            </p>
            <div className="bg-pink-50 p-2 rounded text-xs text-pink-700">
              予算と相手の好みを考慮した選択肢
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-2xl mb-3">📚</div>
            <h3 className="font-semibold text-gray-800 mb-2">子育てサポート</h3>
            <p className="text-sm text-gray-600 mb-3">
              年齢に応じた遊び方、学習方法、しつけのアドバイス
            </p>
            <div className="bg-orange-50 p-2 rounded text-xs text-orange-700">
              発達段階に合わせた具体的な提案
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">この章のまとめ</h2>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            生成AIは<strong>具体的で詳細な情報</strong>を伝えることで最大限活用できる
          </p>
          <p className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            住宅ローン、旅行、献立など<strong>日常の重要な判断</strong>をサポート
          </p>
          <p className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            段階的に質問を深めることで<strong>より実用的な回答</strong>が得られる
          </p>
          <p className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            健康や安全に関わる事項は<strong>必ず専門家に相談</strong>することが重要
          </p>
          <p className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            AIを「優秀なアシスタント」として活用し、<strong>生活の質を向上</strong>させる
          </p>
        </div>
      </section>

      {/* クイズセクション */}
      <QuizSection 
        chapterSlug="daily-life"
        questions={quizQuestions}
        onComplete={() => markChapterComplete('daily-life')}
      />
    </div>
  );
};

export default DailyLifeChapter;