# 塔羅抽牌工作台

私用塔羅／雷諾曼抽牌工具：貼上 AI 設計好的牌陣 → 自動解析填入 → 洗牌抽牌 → 匯出 prompt 給 AI 解讀。

## 線上網址

**<https://alicenoted-coder.github.io/tarot-app-advance/>**

（push 到 `main` 分支後由 GitHub Actions 自動 build 部署）

## 功能

- **牌陣解析**：貼上牌陣文字（支援 `牌陣名：` 標籤、Markdown 表格、編號清單、ASCII 示意圖等格式），自動抓出牌陣名、默念問句、位置與意義
- **複製格式範本**：一鍵複製規範 prompt，請設計牌陣的 AI 直接以工具可解析的格式輸出
- **內建牌陣**：單張指引、時間三張、心智三張、決策五張、凱爾特十字、雷諾曼 3／5／9 張
- **牌組**：塔羅 78／22／56 張、雷諾曼 36 張，可切換是否含逆位
- **真隨機抽牌**：`crypto.getRandomValues`（CSPRNG）+ rejection sampling + Fisher–Yates 洗牌，無取模偏差
- **匯出 Prompt**：抽牌結果連同牌陣脈絡一鍵複製，貼給 AI 解讀

## 本地開發

```bash
npm install
npm run dev
```

開啟 <http://localhost:5173/> 即可。

```bash
npm run build    # 產出靜態檔到 dist/
npm run preview  # 預覽 build 結果
```

## 技術

- Vite + React 18（純 JavaScript、inline style，無其他執行期依賴）
- 無後端、無登入、無資料庫
