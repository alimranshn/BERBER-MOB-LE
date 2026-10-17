<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Berber & Kuaför Randevu Sistemi</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 0; padding: 20px; }
        .container { max-width: 900px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        h1 { text-align: center; color: #333; }
        .tabs { display: flex; justify-content: center; margin-bottom: 20px; }
        .tab-btn { padding: 10px 20px; margin: 0 5px; cursor: pointer; border: none; background-color: #ddd; font-size: 16px; border-radius: 5px; }
        .tab-btn.active { background-color: #007bff; color: white; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        h2 { color: #007bff; border-bottom: 2px solid #eee; padding-bottom: 5px; }
        .card { border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 5px; background-color: #fafafa; }
        .price { font-weight: bold; color: #28a745; float: right; }
        .package-content { font-size: 13px; color: #555; margin-top: 5px; font-style: italic; }
        .rating { color: #ffc107; font-weight: bold; }
        .expert { font-size: 14px; color: #666; }
    </style>
</head>
<body>

<div class="container">
    <h1>Berber & Kuaför Randevu Sistemi</h1>
    
    <div class="tabs">
        <button class="tab-btn active" onclick="switchTab('erkek')">Erkek Hizmetleri</button>
        <button class="tab-btn" onclick="switchTab('kadin')">Kadın Hizmetleri</button>
    </div>

    <!-- Erkek Bölümü -->
    <div id="erkek" class="tab-content active">
        <h2>Hizmetler</h2>
        <div id="erkek-hizmetler"></div>
        
        <h2>Paketler</h2>
        <div id="erkek-paketler"></div>
        
        <h2>Berberlerimiz</h2>
        <div id="erkek-kuaforler"></div>
    </div>

    <!-- Kadın Bölümü -->
    <div id="kadin" class="tab-content">
        <h2>Hizmetler</h2>
        <div id="kadin-hizmetler"></div>
        
        <h2>Paketler</h2>
        <div id="kadin-paketler"></div>
        
        <h2>Kuaförlerimiz</h2>
        <div id="kadin-kuaforler"></div>
    </div>
</div>

<script src="index.js"></script>
</body>
</html>
