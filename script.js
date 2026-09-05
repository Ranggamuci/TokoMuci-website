const NOMOR_WHATSAPP = "6285185207306";


/* ===============================
   DAFTAR HARGA LAYANAN
================================ */

const HARGA_LAYANAN = {

  "Fotocopy":
    "Rp. 1.000 / 3 lembar",

  "Print Dokumen":
    "Rp. 2.000 / lembar",

  "Cetak Foto":
    "Mulai dari Rp. 3.000 / lembar",

  "Pas Foto":
    "Mulai dari Rp. 2.000 / set",

  "Laminating":
    "Mulai dari Rp. 3.000",

  "Jilid":
    "Mulai dari Rp. 3.000",

  "Bikin Stempel/Cap Flash":
    "Mulai dari Rp. 100.000"

};



/* ===============================
   FORM PEMESANAN
================================ */

const orderForm =
  document.getElementById("orderForm");


if (orderForm) {


  orderForm.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();


      /* ===============================
         AMBIL DATA FORM
      ================================= */

      const nama =
        document
          .getElementById("nama")
          .value
          .trim();


      const layanan =
        document
          .getElementById("layananSelect")
          .value;


      const jumlah =
        document
          .getElementById("jumlah")
          .value;


      const ukuran =
        document
          .getElementById("ukuran")
          .value
          .trim() || "-";


      const catatan =
        document
          .getElementById("catatan")
          .value
          .trim() || "-";


      /* ===============================
         AMBIL HARGA
      ================================= */

      const harga =
        HARGA_LAYANAN[layanan]
        || "Menyesuaikan pesanan";


      /* ===============================
         PESAN WHATSAPP
      ================================= */

      const pesan =
`Halo MUCI, saya ingin memesan.

Nama: ${nama}
Layanan: ${layanan}
Jumlah: ${jumlah}
Ukuran: ${ukuran}
Harga: ${harga}
Catatan: ${catatan}

Untuk pesanan Bikin Stempel/Cap Flash, saya akan mengirimkan desain, tulisan, ukuran, atau contoh stempel melalui WhatsApp.

Terima kasih.`;


      /* ===============================
         BUAT LINK WHATSAPP
      ================================= */

      const url =
        `https://wa.me/${NOMOR_WHATSAPP}?text=${encodeURIComponent(pesan)}`;


      /* ===============================
         BUKA WHATSAPP
      ================================= */

      window.open(
        url,
        "_blank"
      );

    }

  );

}
