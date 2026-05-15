# YouTubeVideoContentSlider

## 概要
YouTubeの特定のプレイリストから最新の動画をRSS経由で動的に取得し、レスポンシブなスライダーとして表示するWebアプリケーションです。

## 使用技術
- 言語: HTML, CSS, JavaScript
- ライブラリ/フレームワーク: jQuery (3.7.1), Swiper.js (11)
- その他: rss2json API

## 使い方

### 前提条件
本プロジェクトは静的なWebファイルで構成されているため、特別なソフトウェアのインストールは不要です。最新のWebブラウザをご用意ください。

### インストール方法
```bash
git clone https://github.com/username/YouTubeVideoCotentSlider.git
cd YouTubeVideoCotentSlider
```

### 基本的な使い方
ダウンロードしたフォルダ内の `youtube_content.html` をWebブラウザで開くことで動作を確認できます。または、任意のWebサーバーに配置してアクセスしてください。

## 主な機能
- rss2json APIを活用したYouTube動画リスト（サムネイル、リンク、タイトル）の動的取得
- Swiper.jsによるレスポンシブなスライダー表示（画面幅に応じて1〜3枚のスライドを切り替え）
- `postMessage` を利用した、iframe埋め込み時の親ウィンドウへの高さ自動調整・送信機能

## 設定
取得するYouTube動画のプレイリストを変更する場合は、`script/main.js` ファイル内の `feed_url` の値を編集してください。

```javascript
// script/main.js
var feed_url = "https://www.youtube.com/feeds/videos.xml?playlist_id=YOUR_PLAYLIST_ID";
```

# English
## Overview
A web application that dynamically fetches the latest videos from a specific YouTube playlist via RSS and displays them as a responsive slider.

## Technologies Used
- Language: HTML, CSS, JavaScript
- Library/Framework: jQuery (3.7.1), Swiper.js (11)
- Other: rss2json API

## How to Use

### Prerequisites
As this project consists of static web files, no special software installation is required. Please prepare a modern web browser.

### Installation
```bash
git clone https://github.com/username/YouTubeVideoCotentSlider.git
cd YouTubeVideoCotentSlider
```

### Basic Usage
You can verify the operation by opening `youtube_content.html` in the downloaded folder with a web browser. Alternatively, place it on any web server and access it.

## Key Features
- Dynamic fetching of YouTube video lists (thumbnails, links, titles) utilizing the rss2json API.
- Responsive slider display using Swiper.js (switches between 1 to 3 slides depending on the screen width).
- Automatic height adjustment and sending feature for the parent window when embedded as an iframe, utilizing `postMessage`.

## Configuration
To change the YouTube playlist to be fetched, edit the `feed_url` value in the `script/main.js` file.

```javascript
// script/main.js
var feed_url = "https://www.youtube.com/feeds/videos.xml?playlist_id=YOUR_PLAYLIST_ID";
```