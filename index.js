<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sepeti AI — Gelişmiş Randevu & Stil Platformu</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --primary: #1a1a2e;
      --accent: #e94560;
      --gold: #f0a500;
      --light: #f5f5f5;
      --card: #ffffff;
      --text: #333;
      --muted: #777;
      --radius: 16px;
      --shadow: 0 4px 24px rgba(0,0,0,0.10);
    }

    body {
      font-family: 'Segoe UI', system-ui, sans-serif;
      background: var(--light);
      color: var(--text);
    }

    /* ──────────── NAV ──────────── */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: var(--primary);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 32px; height: 64px;
      box-shadow: 0 2px 20px rgba(0,0,0,.3);
    }
    .logo { color: #fff; font-size: 1.5rem; font-weight: 800; letter-spacing: -0.5px; cursor: pointer; }
    .logo span { color: var(--accent); }
    .nav-tabs { display: flex; gap: 6px; }
    .nav-tab {
      background: transparent; border: none; color: rgba(255,255,255,.6);
      padding: 8px 16px; border-radius: 30px; cursor: pointer;
      font-size: .85rem; font-weight: 500; transition: all .2s;
    }
    .nav-tab.active, .nav-tab:hover {
      background: var(--accent); color: #fff;
    }

    /* ──────────── SCREENS ──────────── */
    .screen { display: none; padding-top: 80px; min-height: 100vh; }
    .screen.active { display: block; }

    /* ──────────── SCREEN 1: HOME ──────────── */
    .hero {
      background: linear-gradient(135deg, var(--primary) 0%, #16213e 60%, #0f3460 100%);
      color: #fff; padding: 60px 40px 50px; text-align: center;
    }
    .hero h1 { font-size: 2.5rem; font-weight: 900; margin-bottom: 12px; }
    .hero h1 span { color: var(--accent); }
    .hero p { font-size: 1.1rem; color: rgba(255,255,255,.75); max-width: 500px; margin: 0 auto 30px; }

    .category-container {
      display: flex; justify-content: center; gap: 24px; max-width: 800px; margin: 0 auto; padding: 0 24px;
    }
    .cat-card {
      flex: 1; background: rgba(255, 255, 255, 0.05); border: 2px solid rgba(255, 255, 255, 0.15);
      border-radius: var(--radius); padding: 32px 20px; text-align: center; cursor: pointer;
      transition: all .3s; backdrop-filter: blur(10px);
    }
    .cat-card:hover {
      background: rgba(233, 69, 96, 0.15); border-color: var(--accent);
      transform: translateY(-6px); box-shadow: 0 12px 30px rgba(0,0,0,0.3);
    }
    .cat-icon { font-size: 4rem; margin-bottom: 16px; }
    .cat-title { font-size: 1.3rem; font-weight: 800; color: #fff; margin-bottom: 8px; }
    .cat-desc { font-size: 0.85rem; color: rgba(255,255,255,0.6); }

    /* ──────────── SCREEN 2: LİSTELEME ──────────── */
    .page-header { background: var(--primary); color: #fff; padding: 30px 32px; text-align: center; }
    .page-header h2 { font-size: 1.8rem; font-weight: 800; }
    .page-header p { color: rgba(255,255,255,.65); margin-top: 4px; font-size: 0.9rem; }

    .filter-bar {
      display: flex; gap: 10px; padding: 16px 32px;
      background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,.06); overflow-x: auto;
    }
    .filter-chip {
      background: var(--light); border: 2px solid #e0e0e0; border-radius: 30px;
      padding: 6px 16px; font-size: .85rem; font-weight: 600; cursor: pointer; white-space: nowrap; color: var(--muted);
    }
    .filter-chip.active { background: var(--accent); border-color: var(--accent); color: #fff; }

    .barber-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); gap: 20px; padding: 24px 32px; max-width: 1200px; margin: 0 auto; }
    .barber-card {
      background: var(--card); border-radius: var(--radius); box-shadow: var(--shadow); overflow: hidden;
      transition: transform .2s; cursor: pointer; position: relative;
    }
    .barber-card:hover { transform: translateY(-4px); }
    .barber-img {
      height: 160px; position: relative; display: flex; align-items: center; justify-content: center; font-size: 4rem;
    }
    .badge { position: absolute; top: 12px; right: 12px; background: #27ae60; color: #fff; border-radius: 20px; padding: 4px 10px; font-size: .75rem; font-weight: 800; }
    .barber-body { padding: 18px 20px; }
    .barber-name { font-size: 1.15rem; font-weight: 800; margin-bottom: 6px; }
    .barber-meta { display: flex; gap: 12px; color: var(--muted); font-size: .85rem; margin-bottom: 12px; }
    .service-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
    .service-chip { background: var(--light); border-radius: 20px; padding: 4px 10px; font-size: .75rem; color: var(--muted); }
    .barber-footer { display: flex; align-items: center; justify-content: space-between; }
    .price-from { font-size: .85rem; color: var(--muted); }
    .price-from strong { font-size: 1.1rem; color: var(--text); font-weight: 800; }
    .btn-sm { background: var(--accent); color: #fff; border: none; border-radius: 30px; padding: 8px 18px; font-size: .85rem; font-weight: 700; cursor: pointer; }

    /* ──────────── SCREEN 3: DETAY ──────────── */
    .detail-hero { background: linear-gradient(135deg,#1a1a2e,#0f3460); color: #fff; padding: 40px; display: flex; align-items: center; gap: 30px; }
    .detail-body { display: grid; grid-template-columns: 1fr 340px; gap: 24px; padding: 28px 40px; max-width: 1100px; margin: 0 auto; }
    .service-row { background: var(--card); border-radius: 12px; padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,.06); }
    .booking-card { background: var(--card); border-radius: var(--radius); box-shadow: var(--shadow); padding: 24px; }
    .btn { display: inline-block; padding: 12px 30px; border-radius: 30px; font-size: 1rem; font-weight: 700; cursor: pointer; border: none; background: var(--accent); color: #fff; text-decoration: none; text-align: center; }

    /* ──────────── SCREEN 4: AI STİL ASİSTANI ──────────── */
    .ai-wrapper { max-width: 700px; margin: 40px auto; padding: 0 24px; text-align: center; }
    .ai-box { background: var(--card); border-radius: var(--radius); padding: 32px; box-shadow: var(--shadow); }
    .ai-box h2 { margin-bottom: 12px; }
    .ai-box p { color: var(--muted); margin-bottom: 24px; font-size: .95rem; }

    /* ──────────── SCREEN 5: ESNAF PANELİ (B2B) ──────────── */
    .admin-wrapper { max-width: 800px; margin: 40px auto; padding: 0 24px; }
    .admin-card { background: var(--card); border-radius: var(--radius); padding: 24px; box-shadow: var(--shadow); margin-bottom: 20px; }
    .admin-card h3 { margin-bottom: 16px; font-size: 1.1rem; }
    .form-group { margin-bottom: 14px; text-align: left; }
    .form-group label { display: block; font-size: .85rem; font-weight: 600; margin-bottom: 4px; }
    .form-group input { width: 100%; padding: 10px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: .9rem; }

    @media (max-width: 768px) {
      .category-container { flex-direction: column; }
      .detail-body { grid-template-columns: 1fr; }
      .detail-hero { flex-direction: column; text-align: center; }
    }
  </style>
</head>
<body>

<!-- ── NAV ── -->
<nav>
  <div class="logo" onclick="showScreen('home')">Sepeti<span>AI</span></div>
  <div class="nav-tabs">
    <button class="nav-tab active" onclick="showScreen('home')">🏠 Ana Sayfa</button>
    <button class="nav-tab" onclick="showScreen('list')">💈 Salonlar</button>
    <button class="nav-tab" onclick="showScreen('ai-style')">🤖 AI Stil</button>
    <button class="nav-tab" onclick="showScreen('admin')">⚙️ Esnaf Paneli</button>
  </div>
</nav>

<!-- ════════ SCREEN 1: ANA SAYFA (KATEGORİ) ════════ -->
<section id="screen-home" class="screen active">
  <div class="hero">
    <h1>Tarzını Seç, <span>Hızla Planla</span></h1>
    <p>İhtiyacına uygun erkek berberi veya kadın kuaförünü anında keşfet.</p>
    
    <div class="category-container">
      <div class="cat-card" onclick="selectCategory('men')">
        <div class="cat-icon">🧔</div>
        <div class="cat-title">Erkek Berberleri</div>
        <div class="cat-desc">Saç kesimi, sakal tıraşı, jilet ve bakım</div>
      </div>
      <div class="cat-card" onclick="selectCategory('women')">
        <div class="cat-icon">💇‍♀️</div>
        <div class="cat-title">Kadın Kuaförleri</div>
        <div class="cat-desc">Saç tasarımı, boya, ombre ve bakım</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════ SCREEN 2: LİSTELEME ════════ -->
<section id="screen-list" class="screen">
  <div class="page-header">
    <h2 id="list-title">💈 Salonlar</h2>
    <p id="list-subtitle">Seçtiğiniz kategoriye göre listelenen mekanlar</p>
  </div>

  <div class="filter-bar">
    <span class="filter-chip active">Tümü</span>
    <span class="filter-chip">⭐ En Yüksek Puan</span>
    <span class="filter-chip">📍 En Yakın</span>
  </div>

  <div class="barber-grid" id="salon-grid"></div>
</section>

<!-- ════════ SCREEN 3: DETAY ════════ -->
<section id="screen-detail" class="screen">
  <div class="detail-hero">
    <div style="font-size: 4rem;">✂️</div>
    <div>
      <h2 id="detail-name">Makas Kardeşler</h2>
      <p style="color:rgba(255,255,255,.7); margin-top:4px;">📍 Kadıköy, İstanbul · ★ 4.8</p>
    </div>
  </div>
  <div class="detail-body">
    <div>
      <h3>🛎️ Hizmetler</h3>
      <div class="service-row">
        <div><strong>Saç Kesimi</strong><div style="font-size:0.8rem; color:var(--muted);">25 dk</div></div>
        <div style="color:var(--accent); font-weight:800;">₺200</div>
      </div>
      <div class="service-row">
        <div><strong>Ağda / Bakım</strong><div style="font-size:0.8rem; color:var(--muted);">10 dk</div></div>
        <div style="color:var(--accent); font-weight:800;">₺50</div>
      </div>
    </div>
    <div>
      <div class="booking-card">
        <h3>🛒 Seçilen Sepet</h3>
        <p style="color:var(--muted); font-size:.9rem; margin:12px 0;">Toplam: <strong>₺250 (35 dk)</strong></p>
        <button class="btn" style="width: 100%;" onclick="alert('Randevunuz başarıyla oluşturuldu!')">Randevuyu Tamamla</button>
      </div>
    </div>
  </div>
</section>

<!-- ════════ SCREEN 4: AI YÜZ & STİL ASİSTANI (YENİ) ════════ -->
<section id="screen-ai-style" class="screen">
  <div class="ai-wrapper">
    <div class="ai-box">
      <h2>🤖 Yapay Zeka Yüz & Stil Asistanı</h2>
      <p>Yüz hatlarınıza en çok yakışacak saç kesimini öğrenmek için fotoğrafınızı yükleyin veya yüz tipinizi seçin.</p>
      <div style="font-size: 4rem; margin: 20px 0;">📸</div>
      <button class="btn" onclick="alert('AI Analizi: Yüz tipiniz Oval. Size Fade Kesim ve kısa sakal öneriyoruz!')">Yüzümü Analiz Et</button>
    </div>
  </div>
</section>

<!-- ════════ SCREEN 5: ESNAF YÖNETİM PANELİ (YENİ B2B) ════════ -->
<section id="screen-admin" class="screen">
  <div class="admin-wrapper">
    <h2 style="margin-bottom: 20px;">⚙️ Esnaf & Salon Yönetim Paneli</h2>
    <div class="admin-card">
      <h3>Dükkan Bilgileri ve Fiyat Güncelleme</h3>
      <div class="form-group">
        <label>Salon Adı</label>
        <input type="text" value="Makas Kardeşler" />
      </div>
      <div class="form-group">
        <label>Saç Kesim Fiyatı (₺)</label>
        <input type="number" value="200" />
      </div>
      <button class="btn" style="padding: 10px 20px; font-size: .9rem;" onclick="alert('Bilgiler güncellendi ve sisteme kaydedildi!')">Kaydet</button>
    </div>
  </div>
</section>

<script>
  const salonsData = {
    men: [
      { id: 1, name: "Makas Kardeşler", rating: 4.8, dist: "1.2 km", price: 50, img: "bg-men", services: ["Saç Kesimi", "Sakal", "Ağda"] },
      { id: 2, name: "Klasik Ali Usta", rating: 4.9, dist: "2.1 km", price: 80, img: "bg-men", services: ["Saç Kesimi", "Jilet Tıraş"] }
    ],
    women: [
      { id: 3, name: "Ela Kuaför & Güzellik", rating: 4.9, dist: "0.5 km", price: 200, img: "bg-women", services: ["Saç Kesimi", "Boya & Ombre", "Manikür"] },
      { id: 4, name: "Buse Hair Design", rating: 4.7, dist: "1.8 km", price: 150, img: "bg-women", services: ["Fön", "Gelin Başı", "Makyaj"] }
    ]
  };

  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('screen-' + id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function selectCategory(type) {
    const grid = document.getElementById('salon-grid');
    const title = document.getElementById('list-title');
    const subtitle = document.getElementById('list-subtitle');
    
    grid.innerHTML = '';
    
    if(type === 'men') {
      title.innerText = "🧔 Erkek Berberleri";
      subtitle.innerText = "Kadıköy bölgesindeki en iyi erkek bakım salonları";
    } else {
      title.innerText = "💇‍♀️ Kadın Kuaförleri";
      subtitle.innerText = "Kadıköy bölgesindeki en popüler güzellik merkezleri";
    }

    salonsData[type].forEach(salon => {
      grid.innerHTML += `
        <div class="barber-card" onclick="showScreen('detail')">
          <div class="barber-img" style="background: linear-gradient(135deg,#1a1a2e,#16213e);">
            <span>${type === 'men' ? '💈' : '✨'}</span>
            <div class="badge">🟢 Açık</div>
          </div>
          <div class="barber-body">
            <div class="barber-name">${salon.name}</div>
            <div class="barber-meta">
              <span>⭐ <strong>${salon.rating}</strong></span>
              <span>📍 ${salon.dist}</span>
            </div>
            <div class="service-chips">
              ${salon.services.map(s => `<span class="service-chip">${s}</span>`).join('')}
            </div>
            <div class="barber-footer">
              <div class="price-from">itibaren <strong>₺${salon.price}</strong></div>
              <button class="btn-sm">Seç</button>
            </div>
          </div>
        </div>
      `;
    });

    showScreen('list');
  }
</script>
</body>
</html>