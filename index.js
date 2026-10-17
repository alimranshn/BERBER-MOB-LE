<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kuaför & Berber Sepet Sistemi</title>
    <style>
        /* Genel Tasarım */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
            color: #333;
        }
        
        /* Ana Kapsayıcı - İki Kolonlu Yapı */
        .main-wrapper {
            display: flex;
            gap: 30px;
            width: 100%;
            max-width: 1000px;
            flex-wrap: wrap;
        }

        /* Sol Kısım: Hizmetler */
        .container {
            flex: 2;
            background-color: rgba(255, 255, 255, 0.95);
            padding: 30px 20px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            animation: floatContainer 6s ease-in-out infinite;
            backdrop-filter: blur(10px);
            min-width: 300px;
        }

        /* Sağ Kısım: Sepet */
        .cart-container {
            flex: 1;
            background-color: rgba(255, 255, 255, 0.95);
            padding: 30px 20px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            animation: floatContainer 5s ease-in-out infinite alternate;
            backdrop-filter: blur(10px);
            min-width: 300px;
            height: fit-content;
            position: sticky;
            top: 20px;
        }

        @keyframes floatContainer {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }

        h1, h2 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
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
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            font-weight: 500;
        }

        .category-btn.active {
            background-color: #6c5ce7;
            color: #fff;
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(108, 92, 231, 0.4);
            font-weight: bold;
        }

        /* Uyarı Kutusu */
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
        }

        /* Hizmet Listesi */
        .service-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            border-radius: 15px;
            background-color: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: all 0.4s ease;
            border-left: 5px solid #6c5ce7;
        }

        .card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            z-index: 10;
        }

        .service-info {
            flex: 1;
            padding-right: 15px;
        }

        .service-name {
            font-size: 16px;
            font-weight: bold;
            color: #2d3436;
        }

        .service-desc {
            font-size: 12px;
            color: #636e72;
            margin-top: 5px;
            line-height: 1.4;
