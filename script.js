// ============================================================
// PENGATURAN MUCI — GANTI NOMOR DI BAWAH DENGAN NOMOR WHATSAPP
// Format: kode negara + nomor, tanpa +, spasi, atau tanda -.
// Contoh 081234567890 -> 6281234567890
// ============================================================
const NOMOR_WHATSAPP = "6285185207306";

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const layanan = document.getElementById("layananSelect").value;
  const jumlah = document.getElementById("jumlah").value;
  const ukuran = document.getElementById("ukuran").value.trim() || "-";
  const catatan = document.getElementById("catatan").value.trim() || "-";

  const pesan =
`Halo MUCI, saya ingin memesan.

Nama: ${nama}
Layanan: ${layanan}
Jumlah: ${jumlah}
Ukuran: ${ukuran}
Catatan: ${catatan}

Saya akan mengirim/melampirkan file melalui WhatsApp. Terima kasih.`;

  const url = `https://wa.me/${NOMOR_WHATSAPP}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
});
