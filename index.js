<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Berber & Kuaför | Antigravity AI Randevu Sistemi</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --pink:       #e91e8c;
      --pink-light: #fce4f3;
      --pink-dark:  #c2185b;
      --blue:       #1565c0;
      --blue-light: #e3f2fd;
      --blue-dark:  #0d47a1;
      --gold:       #f9a825;
      --bg:         #f8f9fa;
      --white:      #ffffff;
      --text:       #2d2d2d;
      --muted:      #757575;
      --shadow:     0 8px 30px rgba(0,0,0,0.12);
      --shadow-lg:  0 20px 60px rgba(0,0,0,0.18);
      --radius:     18px;
      --radius-sm:  10px;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
      color: var(--text);
      min-height: 100vh;
    }

    header {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      position: sticky; top: 0; z-index: 100;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }

    .header-inner {
      max-width: 1200px; margin: 0 auto; padding: 18px 30px;
      display: flex; align-items: center; justify-content: space-between; gap: 20px;
    }

    .logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
    .logo-icon { font-size: 2.2rem; }
    .logo-text h1 { color: #fff; font-size: 1.5rem; font-weight: 800; line-height: 1; }
    .logo-text span { color: var(--gold); font-size: 0.7rem; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; }

    .cart-btn-header {
      position: relative; background: linear-gradient(135deg, var(--gold), #ff8f00);
      color: #1a1a2e; border: none; border-radius: 50px; padding: 12px 24px;
      font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 700;
      cursor: pointer; display: flex; align-items: center; gap: 8px;
      box-shadow: 0 4px 15px rgba(249, 168, 37, 0.4); transition: transform 0.3s;
    }
    .cart-btn-header:hover { transform: translateY(-2px); }
    .cart-badge {
      background: #e53935; color: white; border-radius: 50%; width: 22px; height: 22px;
      display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 800;
      position: absolute; top: -6px; right: -6px; border: 2px solid white;
    }

    .hero {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      color: white; text-align: center; padding: 50px 20px 70px;
    }
    .hero h2 { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; margin-bottom: 12px; }
    .hero h2 span { color: var(--gold); }
    .hero p { font-size: 1rem; opacity: 0.85; max-width: 500px; margin: 0 auto; }

    /* Pazar Günü Uyarı Kutusu */
    .warning-box {
      display: none; background-color: #ff7675; color: white; padding: 15px;
      border-radius: var(--radius); text-align: center; font-weight: bold;
      max-width: 600px; margin: 20px auto 0; box-shadow: 0 5px 15px rgba(214, 48, 49, 0.3);
    }

    .category-section { max-width: 1200px; margin: -30px auto 0; padding: 0 20px 30px; position: relative; z-index: 10; }
    .category-tabs { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
    .category-tab {
      flex: 1; min-width: 280px; max-width: 380px; border: none; border-radius: var(--radius);
      padding: 24px 30px; font-family: 'Poppins', sans-serif; cursor: pointer; text-align: left;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .category-tab.kadin { background: linear-gradient(135deg, var(--pink), #ad1457); color: white; box-shadow: 0 10px 30px rgba(233, 30, 140, 0.4); }
    .category-tab.erkek { background: linear-gradient(135deg, var(--blue), #0d47a1); color: white; box-shadow: 0 10px 30px rgba(21, 101, 192, 0.4); }
    .category-tab:hover { transform: translateY(-6px); }
    .category-tab.active { transform: translateY(-8px) scale(1.02); }

    .tab-icon { font-size: 2.5rem; margin-bottom: 6px; display: block; }
    .tab-title { font-size: 1.4rem; font-weight: 800; display: block; }
    .tab-sub { font-size: 0.82rem; opacity: 0.85; display: block; margin-top: 2px; }

    .services-section { max-width: 1200px; margin: 0 auto; padding: 0 20px 40px; }
    .services-panel { display: none; }
    .services-panel.active { display: block; }
    .services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; }

    .service-card {
      background: var(--white); border-radius: var(--radius); overflow: hidden;
      box-shadow: var(--shadow); display: flex; flex-direction: column; transition: transform 0.3s;
    }
    .service-card:hover { transform: translateY(-6px); }
    .card-header-band { height: 8px; }
    .kadin-card .card-header-band { background: linear-gradient(90deg, var(--pink), #f06292); }
    .erkek-card .card-header-band { background: linear-gradient(90deg, var(--blue), #42a5f5); }
    .card-body { padding: 20px; flex: 1; }
    .card-emoji { font-size: 2.2rem; margin-bottom: 8px; display: block; }
    .card-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 6px; }
    .card-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.5; margin-bottom: 12px; }
    .card-price-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px 20px; }
    .card-price { font-size: 1.4rem; font-weight: 800; }
    .card-price span { font-size: 0.8rem; font-weight: 500; color: var(--muted); }

    .add-btn {
      border: none; border-radius: 50px; padding: 10px 20px; font-family: 'Poppins', sans-serif;
      font-size: 0.85rem; font-weight: 700; cursor: pointer; transition: transform 0.2s;
    }
    .kadin-card .add-btn { background: var(--pink); color: white; }
    .erkek-card .add-btn { background: var(--blue); color: white; }
    .add-btn.disabled { background: #b2bec3 !important; cursor: not-allowed; }
    .add-btn.added { background: #2e7d32 !important; }

    /* YENİ: AI YÜZ & STİL ANALİZ BÖLÜMÜ (YÖNTEM A) */
    .ai-analyzer-section {
      max-width: 1200px; margin: 20px auto 60px; padding: 0 20px;
    }
    .ai-analyzer-box {
      background: white; border-radius: var(--radius); padding: 35px;
      box-shadow: var(--shadow-lg); border: 2px solid #e0c3fc;
      text-align: center;
    }
    .ai-analyzer-box h3 { font-size: 1.5rem; font-weight: 800; margin-bottom: 8px; color: #1a1a2e; }
    .ai-analyzer-box p { color: var(--muted); font-size: 0.95rem; margin-bottom: 20px; }
    .ai-input-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 15px; }
    .ai-input-row input {
      padding: 12px 18px; border: 2px solid #ddd; border-radius: 50px;
      font-family: 'Poppins', sans-serif; font-size: 0.95rem; width: 100%; max-width: 400px; outline: none;
    }
    .ai-submit-btn {
      background: linear-gradient(135deg, #6c5ce7, #a29bfe); color: white; border: none;
      border-radius: 50px; padding: 12px 28px; font-weight: 700; cursor: pointer;
      font-family: 'Poppins', sans-serif; box-shadow: 0 4px 15px rgba(108, 92, 231, 0.4);
    }
    #aiResultBox {
      margin-top: 20px; background: #f0f3ff; padding: 20px; border-radius: var(--radius-sm);
      text-align: left; font-size: 0.95rem; line-height: 1.6; display: none; border-left: 5px solid #6c5ce7;
    }

    /* CART & MODAL STYLES (Önceki stillerle uyumlu) */
    .cart-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 200; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
    .cart-overlay.open { opacity: 1; pointer-events: all; }
    .cart-sidebar {
      position: fixed; top: 0; right: -420px; width: 100%; max-width: 420px; height: 100vh;
      background: white; z-index: 300; box-shadow: -10px 0 40px rgba(0,0,0,0.2);
      transition: right 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); display: flex; flex-direction: column;
    }
    .cart-sidebar.open { right: 0; }
    .cart-sidebar-header { background: #1a1a2e; color: white; padding: 22px 24px; display: flex; justify-content: space-between; align-items: center; }
    .close-cart { background: none; border: none; color: white; font-size: 1.2rem; cursor: pointer; }
    .cart-items-list { flex: 1; overflow-y: auto; padding: 20px; }
    .cart-item { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid #eee; }
    .cart-footer { padding: 20px 24px; background: #fafafa; border-top: 2px solid #f0f0f0; }
    .book-btn {
      width: 100%; background: linear-gradient(135deg, var(--gold), #ff8f00); color: #1a1a2e;
      border: none; border-radius: 50px; padding: 15px; font-weight: 800; cursor: pointer; font-family: 'Poppins', sans-serif;
    }

    footer { background: #1a1a2e; color: rgba(255,255,255,0.6); text-align: center; padding: 25px; font-size: 0.85rem; }
    footer b { color: var(--gold); }
  </style>
</head>
<body>

<header>
  <div class="header-inner">
    <a class="logo" href="#">
      <span class="logo-icon">✂️</span>
      <div class="logo-text">
        <h1>Berber & Kuaför</h1>
        <span>Antigravity AI Platform</span>
      </div>
    </a>
    <button class="cart-btn-header" onclick="openCart()">
      🛒 Sepet <span class="cart-badge" id="cartBadge">0</span>
    </button>
  </div>
</header>

<section class="hero">
  <h2>Profesyonel Bakım &<br><span>Akıllı Stil Danışmanı</span></h2>
  <p>Pazar günleri kapalıyız. Yüz tipinize en uygun kesimi yapay zekaya sorun!</p>
  <div class="warning-box" id="warningBox">⚠️ Bugün Pazar. Tüm salonlarımız kapalıdır, randevu alınamaz!</div>
</section>

<section class="category-section">
  <div class="category-tabs">
    <button class="category-tab kadin active" onclick="switchTab('kadin', this)">
      <span class="tab-icon">💇‍♀️</span>
      <span class="tab-title">Kadın Bölümü</span>
      <span class="tab-sub">Saç, cilt & güzellik bakımı</span>
    </button>
    <button class="category-tab erkek" onclick="switchTab('erkek', this)">
      <span class="tab-icon">💇‍♂️</span>
      <span class="tab-title">Erkek Bölümü</span>
      <span class="tab-sub">Saç, sakal & cilt bakımı</span>
    </button>
  </div>
</section>

<section class="services-section">
  <div class="services-panel active" id="panel-kadin">
    <div class="services-grid" id="grid-kadin"></div>
  </div>
  <div class="services-panel" id="panel-erkek">
    <div class="services-grid" id="grid-erkek"></div>
  </div>
</section>

<!-- YAPAY ZEKA YÜZ & STİL ANALİZ ALANI -->
<section class="ai-analyzer-section">
  <div class="ai-analyzer-box">
    <h3>🤖 AI Yüz Şekli & Saç Öneri Asistanı</h3>
    <p>Yüz tipinizi (oval, kare, yuvarlak vb.) veya saç yapınızı yazın, yapay zeka modelimiz size en uygun modeli önersin.</p>
    <div class="ai-input-row">
      <input type="text" id="aiUserQuery" placeholder="Örn: Yüzüm yuvarlak ve saçlarım dalgalı, hangi kesim yakışır?">
      <button class="ai-submit-btn" onclick="askGeminiAI()">AI'a Danış</button>
    </div>
    <div id="aiResultBox"></div>
  </div>
</section>

<!-- CART SIDEBAR -->
<div class="cart-overlay" id="cartOverlay" onclick="closeCart()"></div>
<aside class="cart-sidebar" id="cartSidebar">
  <div class="cart-sidebar-header">
    <h3>🛒 Sepetim</h3>
    <button class="close-cart" onclick="closeCart()">✕</button>
  </div>
  <div class="cart-items-list" id="cartItemsList">
    <div style="text-align:center; padding:40px; color:#757575;">Sepetiniz boş.</div>
  </div>
  <div class="cart-footer">
    <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-weight:800;">
      <span>Toplam:</span>
      <span id="cartTotal">₺0</span>
    </div>
    <button class="book-btn" onclick="checkoutBooking()">📅 Randevuyu Tamamla</button>
  </div>
</aside>

<footer>
  <p>© 2026 <b>Berber & Kuaför AI</b> — Tüm hakları saklıdır.</p>
</footer>

<script>
  const services = [
    { id: 1, name: "Saç Kesimi", price: 600, category: "Kadın", emoji: "✂️", desc: "Profesyonel saç kesimi." },
    { id: 2, name: "Dip Boya", price: 1200, category: "Kadın", emoji: "🎨", desc: "Organik dip boya işlemi." },
    { id: 3, name: "Manikür & Pedikür", price: 800, category: "Kadın", emoji: "💅", desc: "El ve ayak tırnak bakımı." },
    { id: 4, name: "Yenilenme Paketi", price: 2500, category: "Kadın", emoji: "💎", desc: "Kesim + Boya + Keratin." },
    { id: 5, name: "Saç & Sakal Kesimi", price: 400, category: "Erkek", emoji: "🪒", desc: "Modern kesim ve sakal." },
    { id: 6, name: "Sadece Saç Kesimi", price: 300, category: "Erkek", emoji: "✂️", desc: "Makine ve makas kesimi." },
    { id: 7, name: "Cilt Bakımı", price: 500, category: "Erkek", emoji: "🧖‍♂️", desc: "Siyah nokta maskesi." },
    { id: 8, name: "VIP Damat Paketi", price: 850, category: "Erkek", emoji: "👑", desc: "Kombo bakım paketi." }
  ];

  let cart = [];
  const isSunday = new Date().getDay() === 0;

  if (isSunday) {
    document.getElementById('warningBox').style.display = 'block';
  }

  function renderCards() {
    const kadinGrid = document.getElementById('grid-kadin');
    const erkekGrid = document.getElementById('grid-erkek');
    kadinGrid.innerHTML = '';
    erkekGrid.innerHTML = '';

    services.forEach(s => {
      const cls = s.category === 'Kadın' ? 'kadin-card' : 'erkek-card';
      const grid = s.category === 'Kadın' ? kadinGrid : erkekGrid;
      const inCart = cart.some(c => c.id === s.id);

      grid.innerHTML += `
        <div class="service-card ${cls}">
          <div class="card-header-band"></div>
          <div class="card-body">
            <span class="card-emoji">${s.emoji}</span>
            <div class="card-name">${s.name}</div>
            <div class="card-desc">${s.desc}</div>
          </div>
          <div class="card-price-row">
            <div class="card-price">₺${s.price}</div>
            <button class="add-btn ${isSunday ? 'disabled' : ''} ${inCart ? 'added' : ''}" onclick="${isSunday ? 'alert(\'Pazar günleri kapalıyız!\')' : `addToCart(${s.id})`}">
              ${isSunday ? 'Kapalı' : (inCart ? '✅ Eklendi' : '+ Ekle')}
            </button>
          </div>
        </div>
      `;
    });
  }

  function switchTab(tab, el) {
    document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    document.querySelectorAll('.services-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + tab).classList.add('active');
  }

  function addToCart(id) {
    if (isSunday) return;
    const s = services.find(x => x.id === id);
    if (!cart.some(c => c.id === id)) {
      cart.push(s);
      updateCart();
      renderCards();
    }
  }

  function updateCart() {
    document.getElementById('cartBadge').textContent = cart.length;
    const list = document.getElementById('cartItemsList');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartTotal').textContent = '₺' + total;

    if (cart.length === 0) {
      list.innerHTML = `<div style="text-align:center; padding:40px; color:#757575;">Sepetiniz boş.</div>`;
      return;
    }

    list.innerHTML = cart.map(c => `
      <div class="cart-item">
        <span style="font-size:1.5rem;">${c.emoji}</span>
        <div style="flex:1;">
          <div style="font-weight:600; font-size:0.9rem;">${c.name}</div>
          <div style="font-size:0.8rem; color:#757575;">₺${c.price}</div>
        </div>
      </div>
    `).join('');
  }

  function openCart() { document.getElementById('cartSidebar').classList.add('open'); document.getElementById('cartOverlay').classList.add('open'); }
  function closeCart() { document.getElementById('cartSidebar').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('open'); }

  function checkoutBooking() {
    if (isSunday) { alert("Pazar günleri kapalıyız!"); return; }
    if (cart.length === 0) { alert("Sepetiniz boş!"); return; }
    alert("Randevunuz başarıyla oluşturuldu!");
    cart = [];
    updateCart();
    renderCards();
    closeCart();
  }

  // YÖNTEM A: Google Gemini AI API Entegrasyonu (Yüz & Stil Analizi)
  async function askGeminiAI() {
    const query = document.getElementById('aiUserQuery').value.trim();
    const resultBox = document.getElementById('aiResultBox');

    if (!query) {
      alert("Lütfen yüz şeklinizi veya ne istediğinizi yazın!");
      return;
    }

    resultBox.style.display = 'block';
    resultBox.textContent = "Yapay zeka asistanı analiz ediyor...";

    try {
      // Not: Kendi Google AI Studio API anahtarınızı buraya yazabilirsiniz.
      const apiKey = "BURAYA_GOOGLE_GEMINI_API_ANAHTARINIZI_YAZIN"; 
      const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: "Sen profesyonel bir kuaför ve berber stil danışmanısın. Müşterinin şu tarifine göre en uygun saç/sakal veya bakım modelini kısa, net ve profesyonel Türkçe olarak öner: " + query }] }]
        })
      });

      const data = await response.json();
      const aiCevabi = data.candidates[0].content.parts[0].text;
      resultBox.innerHTML = `<strong>✨ AI Stil Önerisi:</strong><br>${aiCevabi}`;
    } catch (error) {
      // API anahtarı girilmediyse simüle edilmiş akıllı bir fallback yanıt verelim
      resultBox.innerHTML = `<strong>✨ AI Stil Önerisi (Simülasyon):</strong><br>Yazdığınız özelliklere dayanarak, yüz hatlarınızı dengeleyecek modern ve şık bir katlı kesim / fade stilini tercih etmenizi öneririz. Detaylı analiz için yukarıdaki kategorilerimizden randevu alabilirsiniz!`;
    }
  }

  renderCards();
</script>
</body>
</html>
