const fs = require('fs');

// 1. Veritabanını (JSON) Oku
const berberVerisi = JSON.parse(fs.readFileSync('./berber_verileri.json', 'utf-8'));

// 2. Müşteri Senaryosu
const musteriTalebi = "Saç kesimi ve ağda yaptırmak istiyorum. Bütçem kısıtlı. Hangisini önerirsin?";

// 3. Ajanın Beyni (Geliştirilmiş Sistem Promptu)
const prompt = `
Sen 'Berber Sepeti' uygulamasının zeki bir asistanısın. Sana verilen JSON verisine bakarak kesin ve doğru hesaplamalar yapmalısın.

Müşteri Talebi: ${musteriTalebi}

Mevcut Berberler (JSON Verisi):
${JSON.stringify(berberVerisi, null, 2)}

Kesin Kurallar:
1. Müşterinin bütçesi kısıtlı olduğu için en ucuz berberi seç. (Ağda hizmeti sadece Makas Kardeşler'de var, bunu fark et).
2. Sadece seçtiğin o tek berber hakkında bilgi ver. İki berberin verilerini birbirine karıştırma.
3. Seçtiğin berberdeki 'Saç Kesimi' ve 'Ağda' fiyatlarını topla ve toplam fiyatı söyle.
4. Bu iki işlemin 'sure_dk' değerlerini topla ve toplam süreyi söyle.
5. Seçtiğin berberin Makas Puanını ve Uzaklığını da mesaja ekle.

Cevabını doğrudan, kısa ve Türkçe olarak ver.
`;

console.log("Berber Sepeti Ajanı hesaplama yapıyor, lütfen bekleyin...\n");

// 4. Arka plandaki Gemma Modeline İstek At
async function ajaniCalistir() {
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'gemma:2b',
                prompt: prompt,
                stream: false
            })
        });

        const data = await response.json();
        console.log("Ajanın Müşteriye Cevabı:\n------------------");
        console.log(data.response);
    } catch (error) {
        console.error("Ajan modele bağlanamadı. Ollama'nın çalıştığından emin ol.", error);
    }
}

ajaniCalistir();