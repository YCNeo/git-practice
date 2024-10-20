# Readme
1. 你的網址，應該是 https://www.xxx.xxx，點擊過去應該要可以看到個人作業 4 架設的 Express server （由 Nginx proxy 到 Express）
   - https://www.neoycn.xyz
2. 你在哪裡購買網域的
   - [GoDaddy](https://www.godaddy.com)
3. DNS 的 A record 是什麼？
   - DNS 中的 A record (Address Record) 是用來將一個網域名稱 (如 `neoycn.xyz`) 解析成對應的 IPv4 位址。它是最常見的 DNS 記錄類型之一，透過 A record，瀏覽器或應用程式可以將域名解析為對應的 IP，從而與網站伺服器建立連線。例如，`neoycn.xyz` 可能對應到 `13.210.241.83`。
4. DNS 的 NS record 是什麼？
   - NS record (Name Server Record) 是用來指定管理某個網域的名稱伺服器。這些伺服器負責處理該網域的 DNS 查詢，告訴其他伺服器如何尋找此網域的其他 record（如 A record）。當用戶訪問一個網域時，查詢會首先通過 NS record 找到對應的名稱伺服器，然後再查詢具體的 DNS record。例如，`neoycn.xyz` 的 NS record 可能指向 `rong.neoycn.xyz` 和 `neo.neoycn.xyz`。
5. Domain Name vs FQDN vs URL 這三者分別為何？
   - __Domain Name__: 域名是用來標識網上資源的一個名稱。它通常是用來訪問網站或其他網路服務的簡化名稱，例如 `neoycn.xyz`。域名由層級結構組成，從右至左依次為頂級域名 (TLD)，如 `.xyz`、次級域名 (Second-level domain)，如 `neoycn`，可以讓人更容易記住網絡資源的位置。
   - __FDDN__: (Fully Qualified Domain Name) 完全限定域名是指一個完整的網域名稱，包含域名的所有部分，從具體的主機名稱開始，到頂級域結束。例如，`www.neoycn.xyz` 就是一個 FQDN，因為它從主機 `www` 到域名 `neoycn` 再到 `.xyz`，表示了該主機在網際網路上的唯一位置。
   - __URL__: (Uniform Resource Locator) 統一資源定位符是用來描述網絡資源的位置及其訪問方式的完整路徑。以 `https://www.neoycn.xyz/about.html` 為例，它包括協議（如 `https://` 或 `http://`）、FQDN（如 `www.neoycn.xyz`）、以及具體資源的路徑（如 `/about.html`）。URL 不僅描述了域名，還包括了具體資源的位置信息。
6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？
   - 使用憑證 (通常指 SSL/TLS 憑證) 來啟用 HTTPS 是為了確保網站與用戶之間的數據傳輸是加密的，從而提供以下好處：
     - __資料加密保護__： HTTP 是明文傳輸，任何人都可以截取並讀取數據，HTTPS 則通過加密來防止數據被第三方窺探或攔截。
     - __身份驗證__： 憑證可以驗證網站的真實身份，確保用戶連接的是正確的網站，而不是被中間人攻擊替換的假冒網站。
     - __資料完整性__： 憑證保證資料在傳輸過程中不會被篡改，確保用戶收到的信息與伺服器發出的內容一致。
     - __SEO 優勢__： 搜索引擎（如 Google）通常會給 HTTPS 網站更高的排名，因為它們認為這些網站更安全。