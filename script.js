const NOMOR_WHATSAPP = "6285185207306";

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
    "Mulai dari Rp. 100.000",

  "Cetak Kartu ID Card / NPWP / BPJS":
    "Rp. 15.000 / kartu"

};


const orderForm =
  document.getElementById("orderForm");


if (orderForm) {

  orderForm.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();


      const nama =
        document.getElementById("nama")
          .value.trim();


      const layanan =
        document.getElementById("layananSelect")
          .value;


      const jumlah =
        document.getElementById("jumlah")
          .value;


      const ukuran =
        document.getElementById("ukuran")
          .value.trim() || "-";


      const catatan =
        document.getElementById("catatan")
          .value.trim() || "-";


      const harga =
        HARGA_LAYANAN[layanan] ||
        "Menyesuaikan pesanan";


      const pesan =

`Halo MUCI, saya ingin memesan.

Nama: ${nama}
Layanan: ${layanan}
Jumlah: ${jumlah}
Ukuran: ${ukuran}
Harga: ${harga}
Catatan: ${catatan}

Untuk pesanan kartu ID Card / NPWP / BPJS, saya akan mengirimkan desain atau contoh kartu melalui WhatsApp.

Terima kasih.`;


      const url =
        `https://wa.me/${NOMOR_WHATSAPP}?text=${encodeURIComponent(pesan)}`;


      window.open(
        url,
        "_blank"
      );

    }

  );

}
