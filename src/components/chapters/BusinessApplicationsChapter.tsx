'use client';

import React from 'react';
import QuizSection from '@/components/QuizSection';
import useQuizProgress from '@/hooks/useQuizProgress';

const BusinessApplicationsChapter: React.FC = () => {
  const { markChapterComplete } = useQuizProgress();

  const quizQuestions = [
    {
      id: 1,
      question: "会議の議事録作成において、生成AIを最も効果的に活用する方法はどれですか？",
      options: [
        "会議中にリアルタイムで議事録を完成させる",
        "録音データや手書きメモから整理された議事録を作成する",
        "参加者の代わりに会議の意思決定を行う",
        "会議の開催自体を自動化する"
      ],
      correctAnswer: 1,
      explanation: "生成AIは録音データの文字起こしや手書きメモを整理して、決定事項、アクションアイテム、次回予定などに分けた読みやすい議事録を作成するのに最適です。"
    },
    {
      id: 2,
      question: "プレゼンテーション資料作成で生成AIが特に有効なのはどの段階ですか？",
      options: [
        "スライドのデザイン作成",
        "ストーリーライン構成と論理構造の企画",
        "実際のプレゼンテーション実施",
        "聴衆との質疑応答"
      ],
      correctAnswer: 1,
      explanation: "生成AIはストーリーライン作成、論理構成、聞き手に合わせた内容調整など、プレゼンテーションの企画・構成段階で特に威力を発揮します。"
    },
    {
      id: 3,
      question: "営業・マーケティング分野での生成AI活用として適切でないものはどれですか？",
      options: [
        "顧客課題の分析と解決策提案書作成",
        "SNS投稿アイデアの企画",
        "顧客との直接交渉の代行",
        "キャンペーン企画の立案"
      ],
      correctAnswer: 2,
      explanation: "顧客との直接交渉や最終的な意思決定は人間が行うべき領域です。生成AIは分析、企画、文書作成などの支援業務で力を発揮します。"
    },
    {
      id: 4,
      question: "チームコラボレーションにおける生成AI活用の利点として最も適切なものはどれですか？",
      options: [
        "チームメンバー間の人間関係を改善する",
        "多角的な視点からのアイデア出しと知識共有の効率化",
        "チームの意思決定を自動化する",
        "個人の業務を完全に代替する"
      ],
      correctAnswer: 1,
      explanation: "生成AIはブレインストーミングで様々な立場からの視点を提供したり、マニュアル作成やナレッジベース構築で知識共有を効率化することに優れています。"
    }
  ];

  return (
    <div className="prose max-w-none">
      <section className="mb-12">
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            これまで生成AIの基本的な使い方を学んできました。この章では、
            <strong className="text-blue-600">実際のビジネスシーンでどのように活用するか</strong>について、
            具体的な場面別に詳しく解説します。明日からすぐに職場で使えるテクニックが満載です。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
          会議・ミーティングでの活用
        </h2>
        
        <div className="space-y-8">
          <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-green-700">議事録の自動作成</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                会議の録音データや手書きメモから、整理された議事録を効率的に作成できます。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-600 mb-3">📊 録音データの活用</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「以下の会議の文字起こしデータから、議事録を作成してください。
                    参加者、議題、決定事項、アクションアイテム（担当者・期限含む）、
                    次回会議の予定に分けて整理し、関係者に共有しやすい形式でお願いします。
                    
                    [文字起こしデータをここに貼り付け]」
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-600 mb-3">✏️ 手書きメモの整理</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「会議中に取った以下のメモを元に、正式な議事録を作成してください。
                    不足している情報は[要確認]として記載し、
                    重要度の高い項目は太字で強調してください。
                    
                    [手書きメモの内容]」
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-green-100 p-3 rounded text-sm">
              <p><strong>💡 活用のコツ：</strong> 事前に議題を共有しておくと、より精度の高い議事録が作成できます</p>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-700">事前準備の効率化</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-600 mb-3">📝 アジェンダ作成</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「新商品発売に関する部門横断会議のアジェンダを作成してください。
                    参加者：マーケティング、営業、製造、法務の各部長。
                    会議時間：90分。目的：発売スケジュールの最終確認と課題解決。
                    時間配分も含めて効率的な進行ができるよう整理してください。」
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-medium text-orange-600 mb-3">❓ 質問リスト作成</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「顧客ヒアリング会議で聞くべき質問リストを作成してください。
                    対象：製造業のIT部門責任者。目的：業務効率化システムの提案。
                    現状把握、課題抽出、ニーズ確認の順で、30分程度で聞けるボリュームで。」
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-orange-200 pb-2">
          プレゼンテーション・資料作成
        </h2>

        <div className="space-y-8">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-700">スライド構成の企画</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-600 mb-3">📖 ストーリーライン作成</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「社内のデジタル化推進プロジェクトの進捗報告プレゼンを作成します。
                    聞き手：役員会（15分間）。内容：現状、成果、課題、今後の計画。
                    説得力のあるストーリー構成で、スライド枠組み（各5-7枚程度）を
                    タイトルと要点付きで提案してください。」
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-600 mb-3">🎯 聞き手別調整</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「同じ内容を以下の3つの聞き手向けに調整してください：
                    1) 役員向け（戦略・投資効果重視）
                    2) 現場管理職向け（実装・運用重視）  
                    3) 顧客向け（メリット・事例重視）
                    それぞれ重点を置くポイントと表現方法を変えて提案してください。」
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-green-700">データ可視化のアイデア</h3>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-600 mb-3">📊 効果的なグラフ提案</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p className="font-medium mb-2">プロンプト例：</p>
                <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                  「以下のデータを効果的に可視化する方法を提案してください：
                  ・月別売上推移（12ヶ月分）
                  ・商品カテゴリ別構成比
                  ・地域別顧客数の変化
                  ・競合他社との比較データ
                  
                  それぞれに最適なグラフの種類、色使い、レイアウトのポイントを
                  具体的に教えてください。聞き手にとって分かりやすさを重視で。」
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
          営業・マーケティング活用
        </h2>

        <div className="space-y-8">
          <div className="bg-white border-2 border-red-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-red-700">提案書・企画書作成</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-medium text-red-600 mb-3">🎯 顧客課題の分析</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「A社（製造業・従業員500名）の以下の状況から、
                    ITシステム導入提案書を作成してください。
                    
                    現状：手作業による在庫管理、頻繁な在庫不足・過剰在庫
                    課題：作業時間増大、ヒューマンエラー、機会損失
                    予算：年間1000万円まで
                    
                    課題分析→解決策→導入効果→費用対効果の順で
                    説得力のある構成でお願いします。」
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-medium text-pink-600 mb-3">💡 解決策の提案</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「中小企業の人手不足問題に対する当社サービスの提案書を作成してください。
                    サービス：業務自動化ツール導入支援
                    特徴：初期費用無料、3ヶ月で効果実感、専任サポート付き
                    
                    顧客メリットを具体的な数値で示し、
                    導入までのステップも明確にしてください。」
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-700">マーケティング企画</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-600 mb-3">📢 キャンペーン企画</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「新商品（健康サプリメント）の発売記念キャンペーンを企画してください。
                    ターゲット：40-60代の健康意識の高い女性
                    予算：500万円、期間：3ヶ月
                    目標：認知度向上と初回購入1000件
                    
                    オンライン・オフライン両方の施策を含めて、
                    具体的な実施内容とスケジュールを提案してください。」
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-600 mb-3">📱 SNS投稿アイデア</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「当社（カフェチェーン）のInstagram投稿を1週間分企画してください。
                    目的：フォロワー増加とブランド認知向上
                    テーマ：季節限定メニュー、店舗の雰囲気、スタッフの魅力
                    
                    各投稿の写真構図、キャプション、ハッシュタグまで
                    具体的に提案してください。エンゲージメント向上も意識して。」
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
          プロジェクト管理・運営
        </h2>

        <div className="space-y-8">
          <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-indigo-700">計画立案支援</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-medium text-indigo-600 mb-3">📊 WBS作成</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「Webサイトリニューアルプロジェクトの詳細なWBS（作業分解構成）を作成してください。
                    期間：6ヶ月、予算：2000万円、チーム：10名
                    
                    企画→設計→開発→テスト→リリースの各フェーズで
                    必要な作業を詳細レベルまで分解し、
                    工数見積もりと担当者種別も含めてください。」
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-600 mb-3">⚠️ リスク分析</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「新規事業立ち上げプロジェクトのリスク分析を行ってください。
                    事業：オンライン教育プラットフォーム
                    
                    技術リスク、市場リスク、競合リスク、法規制リスク、
                    人的リスクなどを洗い出し、
                    各リスクの発生確率、影響度、対策案をまとめてください。」
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-700">進捗管理</h3>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-medium text-orange-600 mb-3">📋 状況報告書作成</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p className="font-medium mb-2">プロンプト例：</p>
                <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                  「以下のプロジェクト情報から、経営陣向けの月次進捗報告書を作成してください：
                  
                  ・計画進捗率：75%、実績進捗率：70%
                  ・予算執行率：65%
                  ・主な完了項目：要件定義、基本設計
                  ・課題：開発リソース不足、外部連携の調整遅れ
                  ・来月の重点項目：詳細設計完了、開発着手
                  
                  簡潔で分かりやすく、次のアクションが明確になるよう整理してください。」
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
          チームコラボレーション
        </h2>

        <div className="space-y-8">
          <div className="bg-white border-2 border-pink-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-pink-700">ブレインストーミング支援</h3>
            </div>
            
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-medium text-pink-600 mb-3">🌟 多角的視点の提供</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p className="font-medium mb-2">プロンプト例：</p>
                <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                  「『社員のモチベーション向上』について、以下の異なる立場からアイデアを
                  それぞれ5つずつ出してください：
                  
                  1) 人事部門の視点
                  2) 現場管理職の視点
                  3) 若手社員の視点
                  4) 経営陣の視点
                  5) 外部コンサルタントの視点
                  
                  実現可能性と効果の観点も含めて提案してください。」
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-teal-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-teal-700">知識共有の効率化</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-medium text-teal-600 mb-3">📖 マニュアル作成</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「新入社員向けの『電話対応マニュアル』を作成してください。
                    
                    含める内容：基本的な電話の取り方、転送方法、
                    よくある質問への回答、トラブル時の対処法
                    
                    初心者でも理解しやすいよう、具体例や注意点も
                    豊富に含めてください。A4用紙3-4枚程度で。」
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-medium text-cyan-600 mb-3">🗃️ ナレッジベース構築</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「営業部門のよくある質問と回答集を整理してください。
                    
                    カテゴリ：商品仕様、価格・見積もり、納期・配送、
                    アフターサービス、競合比較
                    
                    各カテゴリで頻出する質問5つずつと、
                    分かりやすい回答例を作成し、検索しやすい形式で
                    整理してください。」
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-red-200 pb-2">
          業務効率化の実践テクニック
        </h2>

        <div className="space-y-8">
          <div className="bg-white border-2 border-emerald-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-emerald-700">ルーティンワークの効率化</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-medium text-emerald-600 mb-3">📝 テンプレート化</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「月次売上報告書のテンプレートを作成してください。
                    
                    必要項目：当月実績、前月比較、前年同月比較、
                    主要顧客別内訳、商品カテゴリ別分析、課題と対策
                    
                    毎月のデータを入れ替えるだけで完成するよう、
                    構成と記載例も含めて整理してください。」
                  </div>
                </div>
              </div>

              <div className="bg-lime-50 p-4 rounded-lg">
                <h4 className="font-medium text-lime-600 mb-3">⏰ 時間管理最適化</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                    「以下の業務を効率的にこなすための1日のスケジュールを提案してください：
                    
                    ・メールチェック・返信（1日3回）
                    ・資料作成（2時間）
                    ・会議（3件、計2.5時間）
                    ・顧客対応（随時、計1時間）
                    ・企画検討（1時間）
                    
                    集中力や生産性を考慮した時間配分でお願いします。」
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-violet-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-violet-700">学習・スキルアップ</h3>
            </div>
            
            <div className="bg-violet-50 p-4 rounded-lg">
              <h4 className="font-medium text-violet-600 mb-3">🎯 個人成長計画</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p className="font-medium mb-2">プロンプト例：</p>
                <div className="bg-white p-3 rounded border text-xs leading-relaxed">
                  「営業職3年目の私に、今後のキャリアアップに向けた学習計画を作成してください。
                  
                  現状：基本的な営業スキルは習得済み、マネジメント経験なし
                  目標：5年後にチームリーダー、10年後に部長職
                  時間：平日夜1時間、休日3時間が学習に充てられる
                  
                  優先順位をつけて、具体的な学習内容と進め方を
                  6ヶ月単位で提案してください。」
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">この章のまとめ</h2>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            <strong>会議・資料作成</strong>から<strong>営業・マーケティング</strong>まで幅広いビジネス場面で活用可能
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            <strong>プロジェクト管理</strong>や<strong>チーム運営</strong>の効率化にも大きな効果を発揮
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            <strong>具体的なプロンプト例</strong>を参考に、自分の業務に合わせてカスタマイズして活用
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            <strong>ルーティンワークの効率化</strong>により、より創造的な業務に時間を振り分けられる
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            個人の<strong>学習・成長</strong>にも生成AIを活用し、継続的なスキルアップを実現
          </p>
          <p className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            重要な判断や最終確認は<strong>必ず人間が行う</strong>ことで、品質と責任を確保
          </p>
        </div>
      </section>

      {/* クイズセクション */}
      <QuizSection 
        chapterSlug="business-applications"
        questions={quizQuestions}
        onComplete={() => markChapterComplete('business-applications')}
      />
    </div>
  );
};

export default BusinessApplicationsChapter;