'use client';

import React from 'react';
import QuizSection from '@/components/QuizSection';
import useQuizProgress from '@/hooks/useQuizProgress';

const GettingStartedChapter: React.FC = () => {
  const { markChapterComplete } = useQuizProgress();

  const quizQuestions = [
    {
      id: 1,
      question: "効果的なプロンプト作成で最も重要な要素は何ですか？",
      options: [
        "できるだけ短く書くこと",
        "5W1Hを意識して具体的に書くこと",
        "専門用語を多用すること",
        "敬語を使って丁寧に書くこと"
      ],
      correctAnswer: 1,
      explanation: "効果的なプロンプトは5W1H（誰に、何を、いつ、どこで、なぜ、どのように）を意識して、具体的で明確な指示を書くことが最も重要です。"
    },
    {
      id: 2,
      question: "生成AIを安全に使用するために避けるべきことは何ですか？",
      options: [
        "長い文章を入力すること",
        "個人情報や機密情報を入力すること",
        "複数回質問すること",
        "日本語で質問すること"
      ],
      correctAnswer: 1,
      explanation: "個人情報（氏名、住所、電話番号など）や企業の機密情報を生成AIに入力することは避けるべきです。入力した情報が学習データとして使われる可能性があります。"
    },
    {
      id: 3,
      question: "「思った回答が得られない」時の改善方法として適切でないものはどれですか？",
      options: [
        "背景情報を詳しく説明する",
        "期待するアウトプットを明確にする",
        "同じ質問を何度も繰り返す",
        "一つずつステップを分けて質問する"
      ],
      correctAnswer: 2,
      explanation: "同じ質問を繰り返すだけでは改善されません。背景情報の追加、アウトプット形式の明確化、段階的な質問など、指示の仕方を工夫することが重要です。"
    },
    {
      id: 4,
      question: "生成AIとの対話を深めるコツとして正しいものはどれですか？",
      options: [
        "最初から完璧な結果を期待する",
        "一度に全ての要求を盛り込む",
        "段階的に質問を深めていく",
        "結果に満足しなくても諦める"
      ],
      correctAnswer: 2,
      explanation: "生成AIとの対話では、最初は大まかに質問し、その回答を見ながら段階的に条件を追加したり詳細を深めていくことが効果的です。"
    }
  ];

  return (
    <div className="prose max-w-none">
      <section className="mb-12">
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            これまで生成AIの基礎について学んできました。この章では、
            <strong className="text-green-600">実際に生成AIを使ってみましょう！</strong>
            アカウント作成から効果的な使い方まで、初心者の方でも安心して始められるよう、
            ステップバイステップで解説します。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
          アカウント作成から始めよう
        </h2>
        
        <div className="mb-8">
          <p className="text-gray-700 mb-6">
            まずは主要な生成AIサービスのアカウントを作成しましょう。
            すべて<strong>無料版</strong>から始められるので、安心してお試しください。
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">GPT</span>
                </div>
                <h3 className="text-lg font-semibold text-green-700">ChatGPT</h3>
              </div>
              
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-medium mb-1">1. アクセス</p>
                  <p>chat.openai.com にアクセス</p>
                </div>
                <div>
                  <p className="font-medium mb-1">2. サインアップ</p>
                  <p>「Sign up」をクリック</p>
                </div>
                <div>
                  <p className="font-medium mb-1">3. 認証</p>
                  <p>メールアドレスまたはGoogleアカウント</p>
                </div>
                <div>
                  <p className="font-medium mb-1">4. 確認</p>
                  <p>電話番号による認証が必要</p>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded mt-4 text-xs text-green-800">
                <strong>無料版制約：</strong> 利用回数に制限あり
              </div>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">G</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-700">Gemini</h3>
              </div>
              
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-medium mb-1">1. アクセス</p>
                  <p>gemini.google.com にアクセス</p>
                </div>
                <div>
                  <p className="font-medium mb-1">2. ログイン</p>
                  <p>Googleアカウントでログイン</p>
                </div>
                <div>
                  <p className="font-medium mb-1">3. 利用開始</p>
                  <p>すぐに使い始められる</p>
                </div>
                <div>
                  <p className="font-medium mb-1">4. 注意点</p>
                  <p>Googleアカウントが必須</p>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded mt-4 text-xs text-blue-800">
                <strong>推奨理由：</strong> 最新情報にアクセス可能
              </div>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 font-bold">Co</span>
                </div>
                <h3 className="text-lg font-semibold text-orange-700">Copilot</h3>
              </div>
              
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-medium mb-1">1. アクセス</p>
                  <p>copilot.microsoft.com にアクセス</p>
                </div>
                <div>
                  <p className="font-medium mb-1">2. サインイン</p>
                  <p>Microsoftアカウントでサインイン</p>
                </div>
                <div>
                  <p className="font-medium mb-1">3. 選択</p>
                  <p>会話スタイルを選択</p>
                </div>
                <div>
                  <p className="font-medium mb-1">4. 開始</p>
                  <p>チャット形式で利用開始</p>
                </div>
              </div>

              <div className="bg-orange-50 p-3 rounded mt-4 text-xs text-orange-800">
                <strong>特徴：</strong> Bing検索と連携
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-700 mb-3">🔒 安全な使い方のポイント</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p>• <strong>個人情報は入力しない：</strong> 氏名、住所、電話番号、クレジットカード情報など</p>
              <p>• <strong>機密情報は避ける：</strong> 社内情報、顧客情報、パスワードなど</p>
              <p>• <strong>公開される可能性：</strong> 入力した内容は学習データとして使われる場合があります</p>
              <p>• <strong>利用規約を確認：</strong> 各サービスの利用規約を一読しておきましょう</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
          効果的な「プロンプト」の書き方
        </h2>
        
        <div className="mb-8">
          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">プロンプトとは？</h3>
            <p className="text-gray-700 leading-relaxed">
              プロンプトとは、生成AIに対する<strong>「指示文」</strong>のことです。
              人間の部下に仕事を依頼するときと同じように、
              <strong>明確で具体的な指示</strong>を出すことで、より良い結果が得られます。
            </p>
          </div>

          <h3 className="text-xl font-medium text-gray-800 mb-6">良いプロンプト vs 悪いプロンプト</h3>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-400 shadow-sm">
              <h4 className="font-semibold text-red-600 mb-3">❌ 悪いプロンプトの例</h4>
              <div className="bg-red-50 p-4 rounded-lg mb-3">
                <p className="text-gray-700 font-medium">「メールを書いて」</p>
              </div>
              <div className="text-sm text-gray-700">
                <p className="mb-2"><strong>問題点：</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• 誰に送るメールか不明</li>
                  <li>• 何の目的なのか不明</li>
                  <li>• どんなトーンが適切か不明</li>
                  <li>• どの程度の長さが必要か不明</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-green-400 shadow-sm">
              <h4 className="font-semibold text-green-600 mb-3">✅ 良いプロンプトの例</h4>
              <div className="bg-green-50 p-4 rounded-lg mb-3">
                <p className="text-gray-700 font-medium">
                  「取引先のA社の田中部長宛に、来週火曜日の会議の延期をお願いするメールを作成してください。
                  理由は社内の緊急対応のため。新しい候補日は来週金曜日の午後。
                  丁寧で謝罪の気持ちが伝わる敬語で、300文字程度でお願いします。」
                </p>
              </div>
              <div className="text-sm text-gray-700">
                <p className="mb-2"><strong>良い点：</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• 送信先が明確（A社の田中部長）</li>
                  <li>• 目的が明確（会議延期のお願い）</li>
                  <li>• 理由が具体的（緊急対応のため）</li>
                  <li>• トーンが指定済み（丁寧で謝罪）</li>
                  <li>• 文字数も指定（300文字程度）</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-medium text-gray-800 mb-6">5W1Hを意識した指示の出し方</h3>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-600 mb-2">📍 Who（誰に）</h4>
                <p className="text-sm text-gray-700">誰に向けた内容か</p>
                <p className="text-xs text-gray-600 mt-1">例：上司、部下、取引先</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-purple-600 mb-2">🎯 What（何を）</h4>
                <p className="text-sm text-gray-700">何について書くか</p>
                <p className="text-xs text-gray-600 mt-1">例：会議の件、提案書</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">📅 When（いつ）</h4>
                <p className="text-sm text-gray-700">時期や期限</p>
                <p className="text-xs text-gray-600 mt-1">例：来週、月末まで</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-orange-600 mb-2">📍 Where（どこで）</h4>
                <p className="text-sm text-gray-700">場所や環境</p>
                <p className="text-xs text-gray-600 mt-1">例：会議室、オンライン</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-red-600 mb-2">🤔 Why（なぜ）</h4>
                <p className="text-sm text-gray-700">理由や背景</p>
                <p className="text-xs text-gray-600 mt-1">例：売上向上のため</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-600 mb-2">⚙️ How（どのように）</h4>
                <p className="text-sm text-gray-700">トーンや形式</p>
                <p className="text-xs text-gray-600 mt-1">例：丁寧に、簡潔に</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-medium text-gray-800 mb-6">段階的に質問を深める「対話のコツ」</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">最初は大まかに質問する</h4>
                  <div className="bg-blue-50 p-3 rounded text-sm text-gray-700 mb-2">
                    「新入社員研修の企画案を考えて」
                  </div>
                  <p className="text-sm text-gray-600">
                    まずは全体的なアイデアやアプローチを確認します。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">具体的な条件を追加する</h4>
                  <div className="bg-green-50 p-3 rounded text-sm text-gray-700 mb-2">
                    「IT企業向けで、20名程度、3日間の研修内容を詳しく教えて」
                  </div>
                  <p className="text-sm text-gray-600">
                    業界、人数、期間などの条件を明確にします。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-4">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">細部を調整する</h4>
                  <div className="bg-purple-50 p-3 rounded text-sm text-gray-700 mb-2">
                    「1日目のプログラムをもっと詳しく。グループワークを多めに入れて」
                  </div>
                  <p className="text-sm text-gray-600">
                    気になる部分を深掘りし、要望に合わせて調整します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
          シーン別：初心者におすすめの使い方
        </h2>

        <div className="space-y-8">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-700">メール作成</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">ビジネスメールの例</h4>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <p className="text-gray-700 leading-relaxed">
                    「部長への月次報告メールを作成してください。今月の売上は前月比10%増加、
                    新規顧客獲得数は15社、課題は人手不足です。感謝の気持ちと来月の意気込みも含めて、
                    丁寧な敬語で400文字程度でお願いします。」
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-3">お礼メールの例</h4>
                <div className="bg-green-50 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <p className="text-gray-700 leading-relaxed">
                    「昨日の会議に参加していただいた外部パートナー5社へのお礼メールを作成してください。
                    貴重な意見をいただけたこと、今後の協力をお願いしたいこと、
                    次回ミーティングの調整について触れて、温かみのある文面で300文字程度で。」
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-blue-100 p-3 rounded text-sm">
              <p><strong>💡 コツ：</strong> 件名も一緒に作成してもらうと便利です！</p>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">✏️</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-700">文章校正</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">レポートの見直し</h4>
                <div className="bg-purple-50 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <p className="text-gray-700 leading-relaxed">
                    「以下の文章を読みやすく校正してください。誤字脱字、文法の間違い、
                    表現の改善点があれば指摘し、より分かりやすい文章に書き直してください。
                    ビジネス文書として適切なトーンで。<br/><br/>
                    [校正したい文章をここに貼り付け]」
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-3">提案書の改善</h4>
                <div className="bg-orange-50 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <p className="text-gray-700 leading-relaxed">
                    「この提案書の内容をより説得力のある文章に改善してください。
                    論理的な構成、具体的な根拠、相手のメリットを明確にして、
                    役員向けの提案として適切なレベルに調整してください。<br/><br/>
                    [提案書の内容]」
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-green-700">情報整理</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">会議メモの要約</h4>
                <div className="bg-green-50 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <p className="text-gray-700 leading-relaxed">
                    「以下の会議メモを整理して、重要なポイントを箇条書きでまとめてください。
                    決定事項、宿題（誰が何をいつまでに）、次回の議題に分けて整理し、
                    関係者に共有しやすい形式にしてください。<br/><br/>
                    [会議メモの内容]」
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-3">ToDoリスト作成</h4>
                <div className="bg-yellow-50 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <p className="text-gray-700 leading-relaxed">
                    「新商品発売プロジェクトのToDoリストを作成してください。
                    マーケティング、製造、営業、法務の各部門で必要な作業を洗い出して、
                    優先度と大まかなスケジュール（発売の3ヶ月前から）も含めて整理してください。」
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-700">アイデア出し</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">企画のヒント</h4>
                <div className="bg-orange-50 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <p className="text-gray-700 leading-relaxed">
                    「20-30代の働く女性をターゲットにした健康食品の販促キャンペーンのアイデアを
                    10個考えてください。SNSを活用したもの、体験型のもの、
                    コラボレーション企画などバラエティに富んだ提案をお願いします。」
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-3">問題解決のアプローチ</h4>
                <div className="bg-red-50 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">プロンプト例：</p>
                  <p className="text-gray-700 leading-relaxed">
                    「社内の会議時間が長すぎて生産性が下がっています。
                    会議を効率化するための具体的な方法を、すぐに実践できるものから
                    抜本的な改革案まで、段階別に5つずつ提案してください。」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-red-200 pb-2">
          よくある失敗パターンと対処法
        </h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-400 shadow-sm">
            <h3 className="text-lg font-semibold text-red-700 mb-4">😤 「思った回答が得られない」</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-red-600 mb-2">よくある原因</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 指示が曖昧すぎる</li>
                  <li>• 背景情報が不足している</li>
                  <li>• 期待するアウトプットが不明確</li>
                  <li>• 一度に多くのことを求めすぎている</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-green-600 mb-2">改善方法</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 5W1Hを意識して詳しく説明する</li>
                  <li>• 「なぜそれが必要か」の背景を伝える</li>
                  <li>• 求める形式や長さを具体的に指定</li>
                  <li>• 一つずつステップを分けて質問する</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg mt-4">
              <p className="text-sm text-red-800">
                <strong>例：</strong> 「詳しく教えて」→「○○について、初心者向けに3つのポイントで200文字程度で説明して」
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400 shadow-sm">
            <h3 className="text-lg font-semibold text-orange-700 mb-4">🤔 「情報が古い・間違っている」</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-orange-600 mb-2">確認すべきこと</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 最新の情報が必要かどうか</li>
                  <li>• 数値データの正確性</li>
                  <li>• 法律や規制の最新状況</li>
                  <li>• 企業の具体的な情報</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-green-600 mb-2">対処方法</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 複数の信頼できるソースで確認</li>
                  <li>• 「この情報は正確ですか？」と再確認</li>
                  <li>• Geminiなど最新情報対応AIを使用</li>
                  <li>• 重要な判断材料は公式サイトで確認</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <p className="text-sm text-orange-800">
                <strong>例：</strong> 「この株価情報は最新ですか？」「2024年の最新の税制について教えて」
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">😐 「文章が硬すぎる・柔らかすぎる」</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-600 mb-2">トーンの調整方法</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 「もっとフォーマルに」</li>
                  <li>• 「親しみやすい表現で」</li>
                  <li>• 「敬語を使って丁寧に」</li>
                  <li>• 「カジュアルな感じで」</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-purple-600 mb-2">具体的な指示例</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 「上司向けの報告書として」</li>
                  <li>• 「同僚への連絡として」</li>
                  <li>• 「お客様向けの案内として」</li>
                  <li>• 「新入社員向けの説明として」</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <p className="text-sm text-blue-800">
                <strong>例：</strong> 「この文章をもっと親しみやすい表現に書き直して」「役員向けの提案として適切なトーンに調整して」
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">この章のまとめ</h2>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            主要な生成AI（ChatGPT、Gemini、Copilot）は<strong>無料版から始められる</strong>
          </p>
          <p className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            効果的なプロンプトは<strong>5W1Hを意識して具体的に</strong>書くことが重要
          </p>
          <p className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <strong>段階的に対話を深める</strong>ことで、より良い結果が得られる
          </p>
          <p className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            メール作成、文章校正、情報整理、アイデア出しなど<strong>様々な場面で活用可能</strong>
          </p>
          <p className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            失敗パターンを知って対処法を身につければ、<strong>さらに効果的に使える</strong>
          </p>
          <p className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            個人情報や機密情報は入力せず、<strong>安全な使い方</strong>を心がける
          </p>
        </div>
      </section>

      {/* クイズセクション */}
      <QuizSection 
        chapterSlug="getting-started"
        questions={quizQuestions}
        onComplete={() => markChapterComplete('getting-started')}
      />
    </div>
  );
};

export default GettingStartedChapter;