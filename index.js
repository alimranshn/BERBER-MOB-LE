<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kuaför ve Berber - Antigravity</title>
    <style>
        /* Genel Tasarım Ayarları */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            overflow: hidden; /* Dışarı taşmaları engelle */
        }
        
        /* Ana Kutu İçin Antigravity Efekti */
        .container {
            background-color: rgba(255, 255, 255, 0.95);
            width: 100%;
            max-width: 500px;
            padding: 30px 20px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            animation: floatContainer 6s ease-in-out infinite;
            backdrop-filter: blur(10px);
        }

        /* Ana Kutu Yerçekimsiz Dalgalanma */
        @keyframes floatContainer {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }

        h1 {
            text-align: center;
            font-size: 26px;
            color: #333;
            margin-bottom: 25px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* Kategori Butonları */
        .category-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 25px;
            gap: 15px;
        }

        .category-btn {
            flex: 1;
            padding: 15px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            background-color: #f0f0f0;
            border-radius: 12px;
            color: #555;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }

        .category-btn.active {
            background-color: #6c5ce7;
            color: #fff;
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(108, 92, 231, 0.4);
            font-weight: bold;
        }

        /* Pazar Günü Uyarı Kutusu */
        .warning-box {
            display: none;
            background-color: #ff7675;
            color: white;
            padding: 15px;
            border-radius: 12px;
            text-align: center;
            font-weight: bold;
            margin-bottom: 20px;
            box-shadow: 0 5px 15px rgba(214, 48, 49, 0.3);
            animation: floatCard 4s ease-in-out infinite alternate;
        }

        /* Kuaför Listesi */
        .salon-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        /* Kartlar İçin Antigravity Efekti */
        .card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-radius: 15px;
            background-color: #fff;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
            transition: all 0.4s ease;
            animation: floatCard 4s ease-in-out infinite;
        }

        @keyframes floatCard {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }

        /* Farenin kartın üzerine gelmesi (Daha yükseğe uçar) */
        .card:hover {
            transform: translateY(-20px) scale(1.02) !important;
            box-shadow: 0 25px 40px rgba(0, 0, 0, 0.15);
            animation-play-state: paused;
            z-index: 10;
        }

        .salon-name {
            font-size: 18px;
            font-weight: 600;
            color: #2d3436;
        }

        /* Randevu Al Butonu */
        .book-btn {
            background-color: #00b894;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 184, 148, 0.4);
        }

        .book-btn:hover {
            background-color: #00a885;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 184, 148, 0.6);
        }

        .book-btn.disabled {
            background-color: #b2bec3;
            box-shadow: none;
            cursor: not-allowed;
            transform: none;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Hizmet Seçimi</h1>

        <!-- Kategori Seçimi -->
        <div class="category-container">
            <button class="category-btn active" onclick="changeCategory('Kadın')" id="btn-kadin">Kadın Kuaförü</button>
            <button class="category-btn" onclick="changeCategory('Erkek')" id="btn-erkek">Erkek Kuaförü</button>
        </div>

        <!-- Pazar Günü Uyarısı -->
        <div class="warning-box" id="warningBox">
            Bugün Pazar. Tüm salonlarımız kapalıdır.
        </div>

        <!-- Salonların Listeleneceği Alan -->
        <div class="salon-list" id="salonList"></div>
    </div>

    <script>
        const salons = [
            { id: 1, name: 'Ayşe Güzellik Merkezi', category: 'Kadın' },
            { id: 2, name: 'Elif Saç Tasarım', category: 'Kadın' },
            { id: 3, name: 'Ahmet Erkek Kuaförü', category: 'Erkek' },
            { id: 4, name: 'VIP Berber Mehmet', category: 'Erkek' }
        ];

        const currentDay = new Date().getDay();
        const isSunday = currentDay === 0;

        if (isSunday) {
            document.getElementById('warningBox').style.display = 'block';
        }

        let activeCategory = 'Kadın';

        function renderSalons() {
            const salonListDiv = document.getElementById('salonList');
            salonListDiv.innerHTML = ''; 

            const filteredSalons = salons.filter(salon => salon.category === activeCategory);

            filteredSalons.forEach((salon, index) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.animationDelay = `${index * 0.5}s`;

                const nameEl = document.createElement('div');
                nameEl.className = 'salon-name';
                nameEl.textContent = salon.name;

                const btnEl = document.createElement('button');
                btnEl.className = `book-btn ${isSunday ? 'disabled' : ''}`;
                btnEl.textContent = isSunday ? 'Kapalı' : 'Randevu Al';
                
                btnEl.onclick = () => handleBooking(salon.name);

                card.appendChild(nameEl);
                card.appendChild(btnEl);
                salonListDiv.appendChild(card);
            });
        }

        function changeCategory(category) {
            activeCategory = category;

            if (category === 'Kadın') {
                document.getElementById('btn-kadin').classList.add('active');
                document.getElementById('btn-erkek').classList.remove('active');
            } else {
                document.getElementById('btn-erkek').classList.add('active');
                document.getElementById('btn-kadin').classList.remove('active');
            }

            renderSalons();
        }

        function handleBooking(salonName) {
            if (isSunday) {
                alert("Kapalıyız!\nKuaförler ve berberler Pazar günleri kapalıdır.");
                return;
            }
            alert(`Başarılı!\n${salonName} adlı salondan randevu alıyorsunuz...`);
        }

        renderSalons();
    </script>
</body>
</html>
