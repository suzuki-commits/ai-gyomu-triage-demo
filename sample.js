window.SAMPLE={
  "company_name": "株式会社コミクス",
  "url": "https://www.comix.co.jp",
  "industry": "デジタルマーケティング・広告代理店（DX支援・SaaS事業者支援・生成AI活用支援）",
  "representative_name": "鈴木章裕",
  "representative_title": "代表取締役",
  "analysis_date": "2026-07-18",
  "business_overview": "2007年設立、東京都渋谷区の広告代理店。デジタルマーケティング支援・DX支援・SaaS事業者支援を展開し、SaaS比較サイト「kyozon」、AIチャット「トップ営業なれるくん」、フリーランス紹介「デジパラ」、法人向け生成AI活用支援パックを提供。代表取締役は鈴木章裕。",
  "executive_summary": "主要業務15件を分類（automate6/collaborate6/human3）。最優先クイックウィンはリスティング広告レポート自動化とkyozon掲載企業の一次スクリーニング。商談・契約締結・危機対応は引き続き人が担い、月20h超の定型工数削減と提案スピード向上を狙う。",
  "counts": {
    "automate": 6,
    "collaborate": 6,
    "human": 3
  },
  "operations": [
    {
      "name": "リスティング広告運用レポート作成",
      "description": "広告媒体データを集計し定型フォーマットでクライアント向けレポートを作成する",
      "category": "automate",
      "ai_approach": "広告APIとClaudeを連携したレポート自動生成・GAS/RPAでのシート集計自動化",
      "revenue_impact": 3,
      "implementation_difficulty": 2,
      "priority": 4,
      "rationale": "定型集計・文章化で人の判断がほぼ不要、月20h以上の削減が見込める"
    },
    {
      "name": "kyozon掲載企業の一次スクリーニング",
      "description": "SaaS比較サイトkyozonへの掲載申込企業の情報確認・要件チェック",
      "category": "automate",
      "ai_approach": "Claudeで申込フォーム内容をルールベース判定し要件充足企業を自動抽出",
      "revenue_impact": 3,
      "implementation_difficulty": 2,
      "priority": 4,
      "rationale": "定型チェック項目に沿った合否判定は自動化しやすく反復頻度も高い"
    },
    {
      "name": "生成AI研修資料の議事録・要約作成",
      "description": "法人向け生成AI研修の実施内容を議事録化し受講企業へ共有する",
      "category": "automate",
      "ai_approach": "Claudeで研修音声・資料から議事録自動生成、Notion DBへ格納",
      "revenue_impact": 2,
      "implementation_difficulty": 1,
      "priority": 3,
      "rationale": "既存の会議録作成と同型で定型化しやすく既存ツールで1週間以内に対応可能"
    },
    {
      "name": "問い合わせ一次対応（トップ営業なれるくん活用）",
      "description": "自社サービスへの一次問い合わせをAIチャットで受け付け一次回答する",
      "category": "automate",
      "ai_approach": "自社開発AIチャット「トップ営業なれるくん」を自社問い合わせ窓口にも適用",
      "revenue_impact": 3,
      "implementation_difficulty": 2,
      "priority": 4,
      "rationale": "定型FAQ対応は自動化率が高く、リード獲得速度にも直結する"
    },
    {
      "name": "採用応募者の書類一次スクリーニング",
      "description": "応募書類・職務経歴書を要件と照合し通過候補を抽出する",
      "category": "automate",
      "ai_approach": "ClaudeまたはATSのAI機能で職務要件との適合度をスコアリング",
      "revenue_impact": 1,
      "implementation_difficulty": 1,
      "priority": 1,
      "rationale": "定型チェックで完結し工数は少ないが自動化率は高い"
    },
    {
      "name": "経費精算・請求書処理",
      "description": "月次の経費申請内容を確認し会計システムへ計上する",
      "category": "automate",
      "ai_approach": "クラウド会計ソフトのOCR＋自動仕訳機能で処理を自動化",
      "revenue_impact": 2,
      "implementation_difficulty": 2,
      "priority": 2,
      "rationale": "定型の証憑処理でSaaS連携により月5〜20h相当の削減が見込める"
    },
    {
      "name": "新規リード向け提案書ドラフト作成",
      "description": "商談前にヒアリング内容をもとにAI活用支援パック等の提案書たたき台を作る",
      "category": "collaborate",
      "ai_approach": "Claudeで提案書ドラフトを自動生成し営業担当が仕上げ・数値検証する",
      "revenue_impact": 5,
      "implementation_difficulty": 1,
      "priority": 9,
      "rationale": "受注に直結するが最終の訴求調整・価格判断は人が担う必要がある"
    },
    {
      "name": "デジパラ登録フリーランスと案件のマッチング候補提示",
      "description": "案件要件に対して登録マーケター人材の候補をリストアップする",
      "category": "collaborate",
      "ai_approach": "Claudeで案件要件と人材プロフィールを突合しマッチング候補を提示",
      "revenue_impact": 4,
      "implementation_difficulty": 2,
      "priority": 6,
      "rationale": "候補抽出はAIが担えるが最終アサイン判断は担当者の目利きが必要"
    },
    {
      "name": "SNS・広告クリエイティブ制作の初稿",
      "description": "クロスメディア展開向けのバナー・SNS投稿文の初稿を作成する",
      "category": "collaborate",
      "ai_approach": "画像生成AI・Claudeでクリエイティブ初稿を作成しデザイナーが仕上げる",
      "revenue_impact": 3,
      "implementation_difficulty": 1,
      "priority": 5,
      "rationale": "訴求の方向性やブランドトーンの最終判断は人が担う必要がある"
    },
    {
      "name": "SEO・検索エンジン対策の課題分析",
      "description": "クライアントサイトのSEO状況を分析し改善施策案をまとめる",
      "category": "collaborate",
      "ai_approach": "Claude＋SEOツールAPIで診断・改善案のたたき台を自動生成",
      "revenue_impact": 3,
      "implementation_difficulty": 2,
      "priority": 4,
      "rationale": "分析はAIが加速できるが施策の優先順位づけは担当者の経験が必要"
    },
    {
      "name": "既存顧客の解約予兆分析",
      "description": "契約更新・利用状況データから解約リスクの高い顧客を洗い出す",
      "category": "collaborate",
      "ai_approach": "Claudeで利用ログ・接触履歴を分析し解約リスクスコアを算出",
      "revenue_impact": 4,
      "implementation_difficulty": 3,
      "priority": 5,
      "rationale": "リスク検知はAIが支援できるが最終のフォロー方針は人が判断する"
    },
    {
      "name": "研修カリキュラムのカスタマイズ設計",
      "description": "受講企業の業種・課題に応じて生成AI研修の内容を調整する",
      "category": "collaborate",
      "ai_approach": "Claudeで業種別カリキュラム案を生成し研修講師が最終調整する",
      "revenue_impact": 3,
      "implementation_difficulty": 1,
      "priority": 5,
      "rationale": "たたき台生成は自動化できるが受講者理解度に合わせた調整は人の役割"
    },
    {
      "name": "新規商談・クロージング交渉",
      "description": "見込み顧客との商談を行い契約条件を最終決定する",
      "category": "human",
      "ai_approach": "",
      "revenue_impact": 5,
      "implementation_difficulty": 0,
      "priority": 0,
      "rationale": "信頼構築と価格・条件交渉は人でなければ成立しない受注の核心業務"
    },
    {
      "name": "重大クレーム・契約トラブルの最終対応",
      "description": "サービス品質やkyozon掲載企業とのトラブルに関する最終対応方針を決める",
      "category": "human",
      "ai_approach": "",
      "revenue_impact": 4,
      "implementation_difficulty": 0,
      "priority": 0,
      "rationale": "関係継続の可否や責任判断は経営・担当役員の最終ジャッジが不可欠"
    },
    {
      "name": "採用最終面接・評価面談",
      "description": "応募者との最終面接、社員の評価・処遇面談を実施する",
      "category": "human",
      "ai_approach": "",
      "revenue_impact": 3,
      "implementation_difficulty": 0,
      "priority": 0,
      "rationale": "人物評価と動機づけは対人接点そのものが価値であり人が担う"
    }
  ],
  "roadmap": {
    "phase1": [
      "新規リード向け提案書ドラフト作成",
      "デジパラ登録フリーランスと案件のマッチング候補提示",
      "SNS・広告クリエイティブ制作の初稿",
      "既存顧客の解約予兆分析",
      "研修カリキュラムのカスタマイズ設計"
    ],
    "phase2": [
      "リスティング広告運用レポート作成",
      "kyozon掲載企業の一次スクリーニング",
      "問い合わせ一次対応（トップ営業なれるくん活用）",
      "SEO・検索エンジン対策の課題分析",
      "生成AI研修資料の議事録・要約作成",
      "経費精算・請求書処理",
      "採用応募者の書類一次スクリーニング"
    ],
    "phase3": []
  },
  "recommended_actions": [
    "提案書ドラフト作成にClaudeを導入し、営業担当の仕上げ工程に集中させて商談化速度を上げる",
    "リスティング広告レポートとkyozon一次スクリーニングを自動化し月次の定型工数を圧縮する",
    "トップ営業なれるくんを自社の一次問い合わせ対応にも横展開しリード取りこぼしを防ぐ",
    "解約予兆分析を導入し既存顧客フォローの優先順位づけを高度化する",
    "商談・クレーム対応・採用最終判断は人専任と明確化し、AI活用の説明責任を経営層に持たせる"
  ],
  "sources": [
    "https://www.comix.co.jp/",
    "https://www.comix.co.jp/company/",
    "https://www.comix.co.jp/company/greeting.html",
    "https://www.comix.co.jp/gogo/",
    "https://www.comix.co.jp/top-sales/",
    "https://www.comix.co.jp/business_service/",
    "https://digipara.comix.co.jp/profile/",
    "https://initial.inc/companies/A-11530"
  ]
};
