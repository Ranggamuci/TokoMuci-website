const WA = '6285185207306';

// Semua file disetting menggunakan format JPG dan JPEG
const IMG = {
  atk: 'assets/images/products/alat-tulis.jpg',
  buku: 'assets/images/products/buku.jpg',
  kertas: 'assets/images/products/kertas.jpg',
  gunting: 'assets/images/products/gunting.jpg',
  stapler: 'assets/images/products/stapler.jpg',
  pulpen: 'assets/images/products/pulpen.jpg',
  spidol: 'assets/images/products/spidol.jpg',
  map: 'assets/images/products/map.jpg',
  perekat: 'assets/images/products/perekat.jpg',
  seni: 'assets/images/products/seni.jpg',
  fotocopy: 'assets/images/services/fotocopy.jpeg',
  print: 'assets/images/services/print.jpeg',
  foto: 'assets/images/services/cetak-foto.jpeg',
  jilid: 'assets/images/services/jilid.jpeg',
  laminating: 'assets/images/services/laminating.jpeg',
  stempel: 'assets/images/services/stempel.jpeg',
  idcard: 'assets/images/services/id-card.jpeg'
};

function wa(text) {
  location.href = `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

// 215 DAFTAR LENGKAP ATK MUCI ATK & PRINT
const products = [
  // ALAT TULIS (1-29)
  ['Pulpen', 'Alat Tulis', 'Rp2.000', 'assets/images/products/pulpen.jpg'],
  ['Pulpen Gel', 'Alat Tulis', 'Rp3.000', 'assets/images/products/pulpen-gel.jpg'],
  ['Pulpen Ballpoint', 'Alat Tulis', 'Rp2.500', 'assets/images/products/pulpen-ballpoint.jpg'],
  ['Pensil HB', 'Alat Tulis', 'Rp2.000', 'assets/images/products/pensil-hb.jpg'],
  ['Pensil 2B', 'Alat Tulis', 'Rp2.500', 'assets/images/products/pensil-2b.jpg'],
  ['Pensil 4B', 'Alat Tulis', 'Rp3.000', 'assets/images/products/pensil-4b.jpg'],
  ['Pensil 6B', 'Alat Tulis', 'Rp3.000', 'assets/images/products/pensil-6b.jpg'],
  ['Pensil 8B', 'Alat Tulis', 'Rp3.000', 'assets/images/products/pensil-8b.jpg'],
  ['Pensil Mekanik', 'Alat Tulis', 'Rp5.000', 'assets/images/products/pensil-mekanik.jpg'],
  ['Isi Pensil Mekanik', 'Alat Tulis', 'Rp3.000', 'assets/images/products/isi-pensil-mekanik.jpg'],
  ['Penghapus', 'Alat Tulis', 'Rp1.500', 'assets/images/products/penghapus.jpg'],
  ['Penghapus Pensil Warna', 'Alat Tulis', 'Rp3.000', 'assets/images/products/penghapus-pensil-warna.jpg'],
  ['Rautan Pensil', 'Alat Tulis', 'Rp2.500', 'assets/images/products/rautan-pensil.jpg'],
  ['Rautan 2 Lubang', 'Alat Tulis', 'Rp5.000', 'assets/images/products/rautan-2-lubang.jpg'],
  ['Penggaris 15 cm', 'Alat Tulis', 'Rp2.000', 'assets/images/products/penggaris-15cm.jpg'],
  ['Penggaris 30 cm', 'Alat Tulis', 'Rp3.000', 'assets/images/products/penggaris-30cm.jpg'],
  ['Penggaris 50 cm', 'Alat Tulis', 'Rp7.000', 'assets/images/products/penggaris-50cm.jpg'],
  ['Penggaris Besi 30 cm', 'Alat Tulis', 'Rp8.000', 'assets/images/products/penggaris-besi-30cm.jpg'],
  ['Busur Derajat', 'Alat Tulis', 'Rp3.000', 'assets/images/products/busur-derajat.jpg'],
  ['Jangka', 'Alat Tulis', 'Rp8.000', 'assets/images/products/jangka.jpg'],
  ['Set Penggaris Geometri', 'Alat Tulis', 'Rp8.000', 'assets/images/products/set-penggaris-geometri.jpg'],
  ['Correction Tape', 'Alat Tulis', 'Rp5.000', 'assets/images/products/correction-tape.jpg'],
  ['Refill Correction Tape', 'Alat Tulis', 'Rp4.000', 'assets/images/products/refill-correction-tape.jpg'],
  ['Correction Fluid', 'Alat Tulis', 'Rp5.000', 'assets/images/products/correction-fluid.jpg'],
  ['Correction Pen', 'Alat Tulis', 'Rp5.000', 'assets/images/products/correction-pen.jpg'],
  ['Stabilo', 'Alat Tulis', 'Rp5.000', 'assets/images/products/stabilo.jpg'],
  ['Drawing Pen', 'Alat Tulis', 'Rp5.000', 'assets/images/products/drawing-pen.jpg'],
  ['Tempat Pensil', 'Alat Tulis', 'Rp15.000', 'assets/images/products/tempat-pensil.jpg'],
  ['Kotak Pensil', 'Alat Tulis', 'Rp20.000', 'assets/images/products/kotak-pensil.jpg'],

  // SPIDOL & MARKER (30-36)
  ['Spidol Permanen', 'Spidol & Marker', 'Rp4.000', 'assets/images/products/spidol-permanen.jpg'],
  ['Spidol Whiteboard', 'Spidol & Marker', 'Rp5.000', 'assets/images/products/spidol-whiteboard.jpg'],
  ['Spidol Warna', 'Spidol & Marker', 'Rp5.000', 'assets/images/products/spidol-warna.jpg'],
  ['Spidol Warna 12 Warna', 'Spidol & Marker', 'Rp18.000', 'assets/images/products/spidol-warna-12.jpg'],
  ['Spidol Warna 24 Warna', 'Spidol & Marker', 'Rp30.000', 'assets/images/products/spidol-warna-24.jpg'],
  ['Marker Board Refill', 'Spidol & Marker', 'Rp8.000', 'assets/images/products/marker-board-refill.jpg'],
  ['Highlighter Set', 'Spidol & Marker', 'Rp15.000', 'assets/images/products/highlighter-set.jpg'],

  // BUKU (37-54)
  ['Buku Tulis', 'Buku', 'Rp5.000', 'assets/images/products/buku-tulis.jpg'],
  ['Buku Tulis 38 Lembar', 'Buku', 'Rp5.000', 'assets/images/products/buku-tulis-38.jpg'],
  ['Buku Tulis 58 Lembar', 'Buku', 'Rp7.000', 'assets/images/products/buku-tulis-58.jpg'],
  ['Buku Tulis 100 Lembar', 'Buku', 'Rp12.000', 'assets/images/products/buku-tulis-100.jpg'],
  ['Buku Gambar', 'Buku', 'Rp5.000', 'assets/images/products/buku-gambar.jpg'],
  ['Buku Gambar A4', 'Buku', 'Rp10.000', 'assets/images/products/buku-gambar-a4.jpg'],
  ['Buku Gambar A3', 'Buku', 'Rp18.000', 'assets/images/products/buku-gambar-a3.jpg'],
  ['Buku Gambar Sketsa', 'Buku', 'Rp15.000', 'assets/images/products/buku-gambar-sketsa.jpg'],
  ['Notebook', 'Buku', 'Rp10.000', 'assets/images/products/notebook.jpg'],
  ['Buku Agenda', 'Buku', 'Rp15.000', 'assets/images/products/buku-agenda.jpg'],
  ['Buku Kas', 'Buku', 'Rp10.000', 'assets/images/products/buku-kas.jpg'],
  ['Buku Ekspedisi', 'Buku', 'Rp12.000', 'assets/images/products/buku-ekspedisi.jpg'],
  ['Buku Kotak-Kotak', 'Buku', 'Rp7.000', 'assets/images/products/buku-kotak-kotak.jpg'],
  ['Buku Musik', 'Buku', 'Rp7.000', 'assets/images/products/buku-musik.jpg'],
  ['Buku Kegiatan', 'Buku', 'Rp8.000', 'assets/images/products/buku-kegiatan.jpg'],
  ['Memo Pad', 'Buku', 'Rp5.000', 'assets/images/products/memo-pad.jpg'],
  ['Sticky Notes', 'Buku', 'Rp4.000', 'assets/images/products/sticky-notes.jpg'],
  ['Sketchbook', 'Buku', 'Rp15.000', 'assets/images/products/sketchbook.jpg'],

  // KERTAS (55-93)
  ['HVS A4 70 gsm', 'Kertas', 'Rp45.000', 'assets/images/products/hvs-a4-70.jpg'],
  ['HVS A4 80 gsm', 'Kertas', 'Rp50.000', 'assets/images/products/hvs-a4-80.jpg'],
  ['HVS F4 70 gsm', 'Kertas', 'Rp50.000', 'assets/images/products/hvs-f4-70.jpg'],
  ['HVS F4 80 gsm', 'Kertas', 'Rp55.000', 'assets/images/products/hvs-f4-80.jpg'],
  ['Kertas A3', 'Kertas', 'Rp80.000', 'assets/images/products/kertas-a3.jpg'],
  ['Kertas Foto Glossy', 'Kertas', 'Rp10.000', 'assets/images/products/kertas-foto-glossy.jpg'],
  ['Kertas Foto Matte', 'Kertas', 'Rp12.000', 'assets/images/products/kertas-foto-matte.jpg'],
  ['Kertas Buffalo', 'Kertas', 'Rp1.500', 'assets/images/products/kertas-buffalo.jpg'],
  ['Kertas Manila', 'Kertas', 'Rp2.000', 'assets/images/products/kertas-manila.jpg'],
  ['Kertas Origami', 'Kertas', 'Rp5.000', 'assets/images/products/kertas-origami.jpg'],
  ['Kertas Origami Warna', 'Kertas', 'Rp5.000', 'assets/images/products/kertas-origami-warna.jpg'],
  ['Kertas Origami Motif', 'Kertas', 'Rp8.000', 'assets/images/products/kertas-origami-motif.jpg'],
  ['Kertas Karton', 'Kertas', 'Rp3.000', 'assets/images/products/kertas-karton.jpg'],
  ['Kertas Karton Tebal', 'Kertas', 'Rp5.000', 'assets/images/products/kertas-karton-tebal.jpg'],
  ['Kertas Warna', 'Kertas', 'Rp1.500', 'assets/images/products/kertas-warna.jpg'],
  ['Kertas Manggis', 'Kertas', 'Rp2.000', 'assets/images/products/kertas-manggis.jpg'],
  ['Kertas Kado', 'Kertas', 'Rp5.000', 'assets/images/products/kertas-kado.jpg'],
  ['Kertas Kopi', 'Kertas', 'Rp2.000', 'assets/images/products/kertas-kopi.jpg'],
  ['Kertas Concorde', 'Kertas', 'Rp3.000', 'assets/images/products/kertas-concorde.jpg'],
  ['Kertas Linen', 'Kertas', 'Rp3.000', 'assets/images/products/kertas-linen.jpg'],
  ['Kertas Asturo', 'Kertas', 'Rp2.500', 'assets/images/products/kertas-asturo.jpg'],
  ['Kertas Asturo Folio', 'Kertas', 'Rp3.000', 'assets/images/products/kertas-asturo-folio.jpg'],
  ['Kertas Kalkir', 'Kertas', 'Rp3.000', 'assets/images/products/kertas-kalkir.jpg'],
  ['Kertas Milimeter Block', 'Kertas', 'Rp5.000', 'assets/images/products/kertas-milimeter-block.jpg'],
  ['Kertas Sticker A4', 'Kertas', 'Rp15.000', 'assets/images/products/kertas-sticker-a4.jpg'],
  ['Kertas HVS Warna A4', 'Kertas', 'Rp20.000', 'assets/images/products/kertas-hvs-warna-a4.jpg'],
  ['Kertas HVS Warna F4', 'Kertas', 'Rp25.000', 'assets/images/products/kertas-hvs-warna-f4.jpg'],
  ['Kertas Samson', 'Kertas', 'Rp2.000', 'assets/images/products/kertas-samson.jpg'],
  ['Kertas Jasmine', 'Kertas', 'Rp4.000', 'assets/images/products/kertas-jasmine.jpg'],
  ['Kertas Ivory', 'Kertas', 'Rp3.000', 'assets/images/products/kertas-ivory.jpg'],
  ['Kertas Art Paper', 'Kertas', 'Rp3.000', 'assets/images/products/kertas-art-paper.jpg'],
  ['Kertas Art Carton', 'Kertas', 'Rp4.000', 'assets/images/products/kertas-art-carton.jpg'],
  ['Kertas Sertifikat', 'Kertas', 'Rp2.000', 'assets/images/products/kertas-sertifikat.jpg'],
  ['Kertas Drawing', 'Kertas', 'Rp10.000', 'assets/images/products/kertas-drawing.jpg'],
  ['Kertas Karbon', 'Kertas', 'Rp10.000', 'assets/images/products/kertas-karbon.jpg'],
  ['Carbonless Form', 'Kertas', 'Rp25.000', 'assets/images/products/carbonless-form.jpg'],
  ['Kertas Fax', 'Kertas', 'Rp20.000', 'assets/images/products/kertas-fax.jpg'],
  ['Kertas Thermal 57mm', 'Kertas', 'Rp5.000', 'assets/images/products/kertas-thermal-57mm.jpg'],
  ['Kertas Thermal 80mm', 'Kertas', 'Rp7.000', 'assets/images/products/kertas-thermal-80mm.jpg'],

  // MAP & ARSIP (94-121)
  ['Map L', 'Map & Arsip', 'Rp2.000', 'assets/images/products/map-l.jpg'],
  ['Map Plastik L', 'Map & Arsip', 'Rp2.000', 'assets/images/products/map-plastik-l.jpg'],
  ['Stopmap', 'Map & Arsip', 'Rp2.000', 'assets/images/products/stopmap.jpg'],
  ['Snelhecter', 'Map & Arsip', 'Rp3.000', 'assets/images/products/snelhecter.jpg'],
  ['Ordner A4', 'Map & Arsip', 'Rp25.000', 'assets/images/products/ordner-a4.jpg'],
  ['Binder A4', 'Map & Arsip', 'Rp25.000', 'assets/images/products/binder-a4.jpg'],
  ['Binder A5', 'Map & Arsip', 'Rp15.000', 'assets/images/products/binder-a5.jpg'],
  ['Clear Holder', 'Map & Arsip', 'Rp10.000', 'assets/images/products/clear-holder.jpg'],
  ['Clipboard', 'Map & Arsip', 'Rp10.000', 'assets/images/products/clipboard.jpg'],
  ['Folder', 'Map & Arsip', 'Rp5.000', 'assets/images/products/folder.jpg'],
  ['Expanding File', 'Map & Arsip', 'Rp25.000', 'assets/images/products/expanding-file.jpg'],
  ['Map Lamaran Kerja', 'Map & Arsip', 'Rp3.000', 'assets/images/products/map-lamaran-kerja.jpg'],
  ['Map Dokumen', 'Map & Arsip', 'Rp5.000', 'assets/images/products/map-dokumen.jpg'],
  ['Map Kancing', 'Map & Arsip', 'Rp6.000', 'assets/images/products/map-kancing.jpg'],
  ['Map Plastik', 'Map & Arsip', 'Rp5.000', 'assets/images/products/map-plastik.jpg'],
  ['Map Folio', 'Map & Arsip', 'Rp3.000', 'assets/images/products/map-folio.jpg'],
  ['Map Portofolio', 'Map & Arsip', 'Rp12.000', 'assets/images/products/map-portofolio.jpg'],
  ['Map Resleting', 'Map & Arsip', 'Rp8.000', 'assets/images/products/map-resleting.jpg'],
  ['Map Business File', 'Map & Arsip', 'Rp15.000', 'assets/images/products/map-business-file.jpg'],
  ['Map Sertifikat', 'Map & Arsip', 'Rp8.000', 'assets/images/products/map-sertifikat.jpg'],
  ['Map Kartu Nama', 'Map & Arsip', 'Rp5.000', 'assets/images/products/map-kartu-nama.jpg'],
  ['Label Sticker', 'Map & Arsip', 'Rp5.000', 'assets/images/products/label-sticker.jpg'],
  ['Label Nama', 'Map & Arsip', 'Rp5.000', 'assets/images/products/label-nama.jpg'],
  ['Amplop Putih', 'Map & Arsip', 'Rp1.000', 'assets/images/products/amplop-putih.jpg'],
  ['Amplop Putih A4', 'Map & Arsip', 'Rp1.500', 'assets/images/products/amplop-putih-a4.jpg'],
  ['Amplop Coklat Folio', 'Map & Arsip', 'Rp2.000', 'assets/images/products/amplop-coklat-folio.jpg'],
  ['Amplop Coklat A4', 'Map & Arsip', 'Rp2.000', 'assets/images/products/amplop-coklat-a4.jpg'],
  ['Amplop Coklat A3', 'Map & Arsip', 'Rp3.000', 'assets/images/products/amplop-coklat-a3.jpg'],

  // PERLENGKAPAN KANTOR (122-151)
  ['Stapler', 'Perlengkapan Kantor', 'Rp12.000', 'assets/images/products/stapler.jpg'],
  ['Stapler Mini', 'Perlengkapan Kantor', 'Rp8.000', 'assets/images/products/stapler-mini.jpg'],
  ['Staples Heavy Duty', 'Perlengkapan Kantor', 'Rp15.000', 'assets/images/products/staples-heavy-duty.jpg'],
  ['Isi Staples No.10', 'Perlengkapan Kantor', 'Rp3.000', 'assets/images/products/isi-staples-10.jpg'],
  ['Isi Staples 24/6', 'Perlengkapan Kantor', 'Rp4.000', 'assets/images/products/isi-staples-24-6.jpg'],
  ['Isi Staples 23/6', 'Perlengkapan Kantor', 'Rp5.000', 'assets/images/products/isi-staples-23-6.jpg'],
  ['Isi Staples 23/10', 'Perlengkapan Kantor', 'Rp7.000', 'assets/images/products/isi-staples-23-10.jpg'],
  ['Paper Clip', 'Perlengkapan Kantor', 'Rp3.000', 'assets/images/products/paper-clip.jpg'],
  ['Klip Kertas Warna', 'Perlengkapan Kantor', 'Rp5.000', 'assets/images/products/klip-kertas-warna.jpg'],
  ['Binder Clip Small', 'Perlengkapan Kantor', 'Rp4.000', 'assets/images/products/binder-clip-small.jpg'],
  ['Binder Clip Medium', 'Perlengkapan Kantor', 'Rp6.000', 'assets/images/products/binder-clip-medium.jpg'],
  ['Binder Clip Large', 'Perlengkapan Kantor', 'Rp8.000', 'assets/images/products/binder-clip-large.jpg'],
  ['Perforator 1 Lubang', 'Perlengkapan Kantor', 'Rp8.000', 'assets/images/products/perforator-1-lubang.jpg'],
  ['Perforator 2 Lubang', 'Perlengkapan Kantor', 'Rp15.000', 'assets/images/products/perforator-2-lubang.jpg'],
  ['Gunting Kecil', 'Perlengkapan Kantor', 'Rp6.000', 'assets/images/products/gunting-kecil.jpg'],
  ['Gunting Besar', 'Perlengkapan Kantor', 'Rp10.000', 'assets/images/products/gunting-besar.jpg'],
  ['Cutter Kecil', 'Perlengkapan Kantor', 'Rp5.000', 'assets/images/products/cutter-kecil.jpg'],
  ['Cutter Besar', 'Perlengkapan Kantor', 'Rp8.000', 'assets/images/products/cutter-besar.jpg'],
  ['Isi Cutter Kecil', 'Perlengkapan Kantor', 'Rp3.000', 'assets/images/products/isi-cutter-kecil.jpg'],
  ['Isi Cutter Besar', 'Perlengkapan Kantor', 'Rp5.000', 'assets/images/products/isi-cutter-besar.jpg'],
  ['Kalkulator', 'Perlengkapan Kantor', 'Rp25.000', 'assets/images/products/kalkulator.jpg'],
  ['Papan Tulis Mini', 'Perlengkapan Kantor', 'Rp15.000', 'assets/images/products/papan-tulis-mini.jpg'],
  ['Penghapus Papan Tulis', 'Perlengkapan Kantor', 'Rp5.000', 'assets/images/products/penghapus-papan-tulis.jpg'],
  ['Papan Jalan A4', 'Perlengkapan Kantor', 'Rp12.000', 'assets/images/products/papan-jalan-a4.jpg'],
  ['Push Pin', 'Perlengkapan Kantor', 'Rp5.000', 'assets/images/products/push-pin.jpg'],
  ['Pin Binder', 'Perlengkapan Kantor', 'Rp5.000', 'assets/images/products/pin-binder.jpg'],
  ['CD/DVD', 'Perlengkapan Kantor', 'Rp5.000', 'assets/images/products/cd-dvd.jpg'],
  ['Flashdisk', 'Perlengkapan Kantor', 'Mulai Rp45.000', 'assets/images/products/flashdisk.jpg'],
  ['Mouse', 'Perlengkapan Kantor', 'Mulai Rp35.000', 'assets/images/products/mouse.jpg'],
  ['Kabel Data', 'Perlengkapan Kantor', 'Mulai Rp15.000', 'assets/images/products/kabel-data.jpg'],

  // LEM, LAKBAN & PEREKAT (152-171)
  ['Lem Kertas', 'Lem & Perekat', 'Rp3.000', 'assets/images/products/lem-kertas.jpg'],
  ['Lem Stik', 'Lem & Perekat', 'Rp5.000', 'assets/images/products/lem-stik.jpg'],
  ['Lem Serbaguna', 'Lem & Perekat', 'Rp8.000', 'assets/images/products/lem-serbaguna.jpg'],
  ['Lem Tembak', 'Lem & Perekat', 'Rp10.000', 'assets/images/products/lem-tembak.jpg'],
  ['Stick Lem Tembak', 'Lem & Perekat', 'Rp2.000', 'assets/images/products/stick-lem-tembak.jpg'],
  ['Lem Kayu', 'Lem & Perekat', 'Rp8.000', 'assets/images/products/lem-kayu.jpg'],
  ['Lem Cair', 'Lem & Perekat', 'Rp5.000', 'assets/images/products/lem-cair.jpg'],
  ['Lem Glitter', 'Lem & Perekat', 'Rp6.000', 'assets/images/products/lem-glitter.jpg'],
  ['Double Tape', 'Lem & Perekat', 'Rp4.000', 'assets/images/products/double-tape.jpg'],
  ['Double Tip Foam', 'Lem & Perekat', 'Rp8.000', 'assets/images/products/double-tip-foam.jpg'],
  ['Double Tip 1/2 Inch', 'Lem & Perekat', 'Rp5.000', 'assets/images/products/double-tip-half-inch.jpg'],
  ['Lakban Bening', 'Lem & Perekat', 'Rp8.000', 'assets/images/products/lakban-bening.jpg'],
  ['Lakban Bening Besar', 'Lem & Perekat', 'Rp12.000', 'assets/images/products/lakban-bening-besar.jpg'],
  ['Lakban Coklat', 'Lem & Perekat', 'Rp8.000', 'assets/images/products/lakban-coklat.jpg'],
  ['Lakban Hitam', 'Lem & Perekat', 'Rp8.000', 'assets/images/products/lakban-hitam.jpg'],
  ['Lakban Kertas', 'Lem & Perekat', 'Rp8.000', 'assets/images/products/lakban-kertas.jpg'],
  ['Lakban OPP', 'Lem & Perekat', 'Rp10.000', 'assets/images/products/lakban-opp.jpg'],
  ['Masking Tape', 'Lem & Perekat', 'Rp8.000', 'assets/images/products/masking-tape.jpg'],
  ['Isolasi Listrik', 'Lem & Perekat', 'Rp5.000', 'assets/images/products/isolasi-listrik.jpg'],
  ['Dispenser Tape', 'Lem & Perekat', 'Rp12.000', 'assets/images/products/dispenser-tape.jpg'],

  // ALAT SENI & SEKOLAH (172-184)
  ['Pensil Warna', 'Alat Seni & Sekolah', 'Rp15.000', 'assets/images/products/pensil-warna.jpg'],
  ['Pensil Warna 12 Warna', 'Alat Seni & Sekolah', 'Rp15.000', 'assets/images/products/pensil-warna-12.jpg'],
  ['Pensil Warna 24 Warna', 'Alat Seni & Sekolah', 'Rp28.000', 'assets/images/products/pensil-warna-24.jpg'],
  ['Crayon', 'Alat Seni & Sekolah', 'Rp15.000', 'assets/images/products/crayon.jpg'],
  ['Crayon 12 Warna', 'Alat Seni & Sekolah', 'Rp15.000', 'assets/images/products/crayon-12.jpg'],
  ['Crayon 24 Warna', 'Alat Seni & Sekolah', 'Rp25.000', 'assets/images/products/crayon-24.jpg'],
  ['Cat Air', 'Alat Seni & Sekolah', 'Rp12.000', 'assets/images/products/cat-air.jpg'],
  ['Kuas Lukis', 'Alat Seni & Sekolah', 'Rp5.000', 'assets/images/products/kuas-lukis.jpg'],
  ['Palet Cat', 'Alat Seni & Sekolah', 'Rp5.000', 'assets/images/products/palet-cat.jpg'],
  ['Glitter Craft', 'Alat Seni & Sekolah', 'Rp5.000', 'assets/images/products/glitter-craft.jpg'],
  ['Foam Sheet', 'Alat Seni & Sekolah', 'Rp5.000', 'assets/images/products/foam-sheet.jpg'],
  ['Kertas Crepe', 'Alat Seni & Sekolah', 'Rp5.000', 'assets/images/products/kertas-crepe.jpg'],
  ['Sticker Nama Anak', 'Alat Seni & Sekolah', 'Rp5.000', 'assets/images/products/sticker-nama-anak.jpg'],

  // PRINTER & PERCETAKAN (185-210)
  ['Tinta Printer', 'Printer & Percetakan', 'Mulai Rp20.000', 'assets/images/products/tinta-printer.jpg'],
  ['Cartridge Printer', 'Printer & Percetakan', 'Mulai Rp75.000', 'assets/images/products/cartridge-printer.jpg'],
  ['Toner Printer', 'Printer & Percetakan', 'Mulai Rp100.000', 'assets/images/products/toner-printer.jpg'],
  ['Kertas Label A4', 'Printer & Percetakan', 'Rp15.000', 'assets/images/products/kertas-label-a4.jpg'],
  ['Kertas Continuous Form', 'Printer & Percetakan', 'Rp45.000', 'assets/images/products/kertas-continuous-form.jpg'],
  ['Kartu Nama', 'Printer & Percetakan', 'Mulai Rp20.000', 'assets/images/products/kartu-nama.jpg'],
  ['Stempel', 'Printer & Percetakan', 'Mulai Rp35.000', 'assets/images/products/stempel.jpg'],
  ['Kartu PVC', 'Printer & Percetakan', 'Mulai Rp5.000', 'assets/images/products/kartu-pvc.jpg'],
  ['ID Card', 'Printer & Percetakan', 'Mulai Rp10.000', 'assets/images/products/id-card.jpg'],
  ['Plastik ID Card', 'Printer & Percetakan', 'Mulai Rp3.000', 'assets/images/products/plastik-id-card.jpg'],
  ['Tali ID Card', 'Printer & Percetakan', 'Mulai Rp5.000', 'assets/images/products/tali-id-card.jpg'],
  ['Spiral Jilid', 'Printer & Percetakan', 'Mulai Rp3.000', 'assets/images/products/spiral-jilid.jpg'],
  ['Cover Jilid', 'Printer & Percetakan', 'Mulai Rp3.000', 'assets/images/products/cover-jilid.jpg'],
  ['Plastik Laminating', 'Printer & Percetakan', 'Mulai Rp3.000', 'assets/images/products/plastik-laminating.jpg'],
  ['Kertas Transfer', 'Printer & Percetakan', 'Mulai Rp10.000', 'assets/images/products/kertas-transfer.jpg'],
  ['Kartu Ujian', 'Printer & Percetakan', 'Mulai Rp1.000', 'assets/images/products/kartu-ujian.jpg'],
  ['Nota', 'Printer & Percetakan', 'Mulai Rp15.000', 'assets/images/products/nota.jpg'],
  ['Nota NCR', 'Printer & Percetakan', 'Mulai Rp15.000', 'assets/images/products/nota-ncr.jpg'],
  ['Formulir', 'Printer & Percetakan', 'Mulai Rp500', 'assets/images/products/formulir.jpg'],
  ['Stiker', 'Printer & Percetakan', 'Mulai Rp5.000', 'assets/images/products/stiker.jpg'],
  ['Brosur', 'Printer & Percetakan', 'Mulai Rp1.000', 'assets/images/products/brosur.jpg'],
  ['Undangan', 'Printer & Percetakan', 'Mulai Rp2.000', 'assets/images/products/undangan.jpg'],
  ['Foto 2x3', 'Printer & Percetakan', 'Mulai Rp2.000', 'assets/images/products/foto-2x3.jpg'],
  ['Foto 3x4', 'Printer & Percetakan', 'Mulai Rp2.000', 'assets/images/products/foto-3x4.jpg'],
  ['Foto 4x6', 'Printer & Percetakan', 'Mulai Rp2.000', 'assets/images/products/foto-4x6.jpg'],
  ['Materai 10.000', 'Printer & Percetakan', 'Rp10.000', 'assets/images/products/materai-10000.jpg'],

  // NOTA & ADMINISTRASI (211-215)
  ['Buku Nota 1 Rangkap', 'Nota & Administrasi', 'Rp8.000', 'assets/images/products/buku-nota-1-rangkap.jpg'],
  ['Buku Nota 2 Rangkap', 'Nota & Administrasi', 'Rp12.000', 'assets/images/products/buku-nota-2-rangkap.jpg'],
  ['Buku Nota 3 Rangkap', 'Nota & Administrasi', 'Rp15.000', 'assets/images/products/buku-nota-3-rangkap.jpg'],
  ['Kwitansi', 'Nota & Administrasi', 'Rp8.000', 'assets/images/products/kwitansi.jpg'],
  ['Kwitansi NCR', 'Nota & Administrasi', 'Mulai Rp15.000', 'assets/images/products/kwitansi-ncr.jpg']
];

const services = [
  ['Fotocopy', 'Fotocopy dokumen hitam putih dan warna.', IMG.fotocopy],
  ['Print', 'Print dokumen, tugas, surat, dan kebutuhan kantor.', IMG.print],
  ['Cetak Foto', 'Cetak foto berbagai ukuran.', IMG.foto],
  ['Jilid', 'Jilid spiral, lakban dan dokumen.', IMG.jilid],
  ['Laminating', 'Laminating kartu, dokumen dan sertifikat.', IMG.laminating],
  ['Stempel', 'Pembuatan stempel custom.', IMG.stempel],
  ['ID Card', 'Cetak ID card dan kartu custom.', IMG.idcard],
  ['Scan Dokumen', 'Scan dokumen dan arsip.', IMG.print]
];

const categories = ['Semua', ...new Set(products.map(p => p[1]))];
let active = 'Semua';

function renderFilters() {
  document.querySelector('#filters').innerHTML = categories.map(c => 
    `<button class="filter ${c === active ? 'active' : ''}" onclick="setCategory(${JSON.stringify(c)})">${c}</button>`
  ).join('');
}

function setCategory(c) {
  active = c;
  renderFilters();
  renderProducts(document.querySelector('#search').value);
}

function renderProducts(q = '') {
  const el = document.querySelector('#products');
  const list = products.filter(p => 
    (active === 'Semua' || p[1] === active) && 
    p.join(' ').toLowerCase().includes(q.toLowerCase())
  );
  
  el.innerHTML = list.length ? list.map(p => `
    <article class="card">
      <img loading="lazy" src="${p[3]}" alt="${p[0]}" onerror="this.onerror=null;this.src='${IMG.atk}'">
      <div class="card-body">
        <span class="cat">${p[1]}</span>
        <h3>${p[0]}</h3>
        <p>${p[2]}</p>
        <button onclick="wa('Halo MUCI ATK & PRINT, saya ingin pesan ${p[0]}. Mohon info ketersediaan dan harga terbaru.')">Pesan via WhatsApp</button>
      </div>
    </article>
  `).join('') : `<div class="empty">Produk yang Anda cari belum ditemukan.<br>Coba kata kunci lain.</div>`;
}

function renderServices() {
  document.querySelector('#services').innerHTML = services.map(s => `
    <article class="service">
      <img loading="lazy" src="${s[2]}" alt="${s[0]}" onerror="this.onerror=null;this.src='${IMG.print}'">
      <div class="service-body">
        <h3>${s[0]}</h3>
        <p>${s[1]}</p>
        <button onclick="wa('Halo MUCI ATK & PRINT, saya ingin bertanya tentang layanan ${s[0]}.')">Tanya via WhatsApp ↗</button>
      </div>
    </article>
  `).join('');
}

// Inisialisasi
renderFilters();
renderProducts();
renderServices();

document.querySelector('#search').addEventListener('input', e => renderProducts(e.target.value));
document.querySelector('#year').textContent = new Date().getFullYear();

// Menu Mobile
const menu = document.querySelector('#menuBtn');
const nav = document.querySelector('#navLinks');
menu.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Tema Gelap/Terang
const savedTheme = localStorage.getItem('muci-theme');
if (savedTheme === 'dark') document.body.classList.add('dark');

document.querySelector('#themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('muci-theme', isDark ? 'dark' : 'light');
  document.querySelector('#themeToggle').textContent = isDark ? '☀' : '☾';
});