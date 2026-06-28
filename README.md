# 三交設備株式会社 コーポレートサイト

配管設備工事会社「三交設備株式会社」（大阪・関西圏拠点）のコーポレートサイト。
給排水・消火・空調の配管工事の事業紹介、品質管理方針、採用情報、採用応募を掲載しています。

**ビルド不要の静的サイト**（HTML / CSS / バニラJS）です。サーバーやフレームワークは必要ありません。

## ページ構成

| ファイル | ページ | URL |
| --- | --- | --- |
| `index.html` | Home | `/` |
| `business.html` | 事業内容 | `/business.html` |
| `quality.html` | 品質管理 | `/quality.html` |
| `recruit.html` | 採用情報 | `/recruit.html` |
| `contact.html` | 採用応募 | `/contact.html` |

## ディレクトリ構成

```
.
├── index.html / business.html / quality.html / recruit.html / contact.html
├── assets/
│   ├── css/styles.css     共通スタイル（デザイントークン・レスポンシブ対応）
│   ├── js/main.js         モバイルナビ開閉・採用応募フォーム
│   └── images/            写真素材
├── docs/
│   └── design-reference.md  デザイン仕様書（配色・タイポ・各画面の仕様の正典）
└── README.md
```

## ローカルでの確認

ブラウザで `index.html` を直接開くだけでも表示できますが、採用応募ページの
Googleマップ埋め込みなどは簡易サーバー経由が確実です。

```bash
# どちらか
python3 -m http.server 8000
npx serve .
```

その後 http://localhost:8000 を開きます。

## 本番運用にあたっての TODO

- **採用応募フォーム**: 現状はデザイン確認用のモックで、実送信は行いません
  （`assets/js/main.js` 参照）。本番ではフォーム送信のバックエンド（メール送信API・
  reCAPTCHA 等）の実装が必要です。
- **写真**: `assets/images/` の写真は配管・施工イメージで、Web表示用に長辺2000px・
  JPEG品質72前後へ最適化済みです（合計約5.6MB）。自社の実写真へ差し替える際も、
  同程度（長辺〜2000px・数百KB）に圧縮してから配置することを推奨します。
- **ロゴ**: ヘッダー／フッターのロゴは「三」の文字を用いた簡易ロゴです。
  正式ロゴがあれば差し替えてください。
- **会社情報**: 住所・電話番号・設立年月日などは `docs/design-reference.md` の
  記載に基づきます。公開前に最新情報をご確認ください。

## デザイン仕様

配色・タイポグラフィ・余白などのデザイントークンと、各画面の詳細仕様は
[`docs/design-reference.md`](docs/design-reference.md) を参照してください。
このサイトは同仕様（社内デザインツールの高精度モックアップ）を静的サイトとして
忠実に再現したものです。
