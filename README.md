# ミニ不思議ダンジョン（分割版）

- index.html … 画面の骨組み
- style.css … 見た目（CSS）
- game.js … ゲーム本体（約2,000行のJavaScript）
- images/ … 画像（73枚）
  - bg_menu … タイトル背景 / story_bg* … 物語の背景 / hero_* … 主人公・九尾の立ち絵と顔
  - sprite_名前_d/r/u … ダンジョンのキャラ（d=正面, r=横, u=背面）
  - ui_* … アイコン / stair … 階段

## 遊び方・編集のしかた
index.html をブラウザで開くだけで動きます（ダブルクリックでOK）。
編集は VS Code などで game.js / style.css を開き、保存してブラウザを再読み込みします。
VS Code の拡張「Live Server」を使うと、保存のたびに自動で更新されます。
画像を差し替えるときは、同じ名前・同じ形式で images/ に上書きしてください。

## デバッグ用スイッチ（game.js の冒頭付近）
MEM_OPEN_ALL / DEX_OPEN_ALL / DEBUG_UNLOCK_ALL / DEBUG_ALL_ROSTER が true のままです。
通常プレイに戻すときは、すべて false にしてください。

## 注意
ブラウザのセーブデータは、開く場所（URLやファイルの場所）ごとに別々です。
