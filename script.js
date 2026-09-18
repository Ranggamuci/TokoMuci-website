// ======================================================
// SCRIPT KATALOG ATK TOKO MUCI
// Sistem gambar berdasarkan nama file produk di repository GitHub
// ======================================================


// ======================================================
// GAMBAR CADANGAN PER KATEGORI
// ======================================================

const placeholderKategori = {

    "Alat Tulis & Koreksi":
        "https://images.unsplash.com/photo-1585336261026-6757688719d3?auto=format&fit=crop&w=600&q=80",

    "Spidol & Marker":
        "https://images.unsplash.com/photo-1629968417850-3505f5180761?auto=format&fit=crop&w=600&q=80",

    "Buku & Catatan":
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",

    "Kertas":
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",

    "Map, Arsip & Amplop":
        "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&w=600&q=80",

    "Perlengkapan Kantor":
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",

    "Lem & Perekat":
        "https://images.unsplash.com/photo-1595079672139-66b96238b939?auto=format&fit=crop&w=600&q=80",

    "Seni & Kerajinan":
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",

    "Percetakan & Nota":
        "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=600&q=80"
};


// =====================================================
// GAMBAR PRODUK ATK
// =====================================================

const atkImageMap = {
    "Pulpen": "Pulpen.jpg",
    "Pulpen Gel": "Pulpen Gel.jpg",
    "Pulpen Ballpoint": "Pulpen Ballpoint.jpeg",
    "Pensil HB": "Pensil HB.jpg",
    "Pensil 2B": "Pensil2B.jpg",
    "Penghapus": "Penghapus.jpeg",
    "Rautan Pensil": "Rautan Pensil.jpg",
    "Penggaris 30 cm": "Penggaris 30 cm.jpeg",
    "Penggaris Besi 30 cm": "Penggaris Besi 30 cm.jpg",
    "Busur Derajat": "Busur Derajat.jpg",
    "Jangka": "Jangka.jpg",
    "Correction Tape": "Correction Tape.jpeg",
    "Correction Fluid": "Correction Fluid.jpeg",
    "Stabilo": "Stabilo.jpeg",
    "Spidol Permanen": "Spidol Permanen.png",
    "Spidol Whiteboard": "Spidol Whiteboard.jpeg",
    "Spidol Warna": "Spidol Warna.jpeg",

    "Buku Tulis 38 Lembar": "Buku Tulis 38 Lembar.jpg",
    "Buku Tulis 58 Lembar": "Buku Tulis 58 Lembar.jpg",
    "Buku Gambar A4": "Buku Gambar A4.jpg",
    "Buku Agenda": "Buku Agenda.jpg",
    "Buku Kas": "Buku Kas.jpg",
    "Buku Ekspedisi": "Buku Ekspedisi.png",
    "Buku Kotak-Kotak": "Buku Kotak-Kotak.jpeg",
    "Memo Pad": "Memo Pad.jpeg",
    "Sticky Notes": "Sticky Notes.jpeg",

    "Kertas Buffalo": "Kertas Buffalo.png",
    "Kertas Manila": "Kertas Manila.jpeg",
    "Kertas Origami": "Kertas Origami.jpg",
    "Kertas Karton": "Kertas Karton.jpeg",
    "Kertas Kado": "Kertas Kado.jpg",
    "Kertas Kopi": "Kertas Kopi.jpeg",
    "Kertas Asturo Folio": "Kertas Asturo Folio.jpeg",
    "Kertas Milimeter Block": "Kertas Milimeter Block.jpeg",

    "Map L": "Map L.jpg",
    "Stopmap": "Stopmap.png",
    "Snelhecter": "Snelhecter.jpeg",
    "Clear Holder": "Clear Holder.jpeg",
    "Clipboard": "Clipboard.jpeg",
    "Expanding File": "Expanding File.jpg",
    "Map Lamaran Kerja": "Map Lamaran Kerja.jpeg",
    "Map Dokumen": "Map Dokumen.jpeg",
    "Map Kancing": "Map Kancing.jpeg",
    "Map Plastik": "Map Plastik.jpg",
    "Map Folio": "Map Folio.jpg",
    "Map Resleting": "Map Resleting.jpeg",
    "Map Business File": "Map Business File.jpg",
    "Label Sticker": "Label Sticker.jpg",
    "Amplop Putih": "Amplop Putih.jpg",

    "Stapler": "Stapler.jpeg",
    "Isi Staples No.10": "Isi Staples No.10.jpeg",
    "Paper Clip": "Paper Clip.jpeg",
    "Binder Clip Small": "Binder Clip Small.jpeg",
    "Gunting Kecil": "Gunting Kecil.jpeg",
    "Gunting Besar": "Gunting Besar.jpeg",
    "Cutter Besar": "Cutter Besar.jpeg",
    "Isi Cutter Besar": "Isi Cutter Besar.jpeg",
    "Push Pin": "Push Pin.jpeg",

    "Lem Kertas": "Lem Kertas.jpeg",
    "Lem Serbaguna": "Lem Serbaguna.jpeg",
    "Lem Tembak": "Lem Tembak.jpeg",
    "Lem Kayu": "Lem Kayu.jpeg",
    "Double Tape": "Double Tape.jpeg",
    "Double Tip Foam": "Double Tip Foam.jpg",
    "Lakban Bening": "Lakban Bening.jpeg",
    "Lakban Coklat": "Lakban Coklat.jpeg",
    "Lakban Hitam": "Lakban Hitam.jpeg",
    "Lakban Kertas": "Lakban Kertas.jpeg",
    "Isolasi Listrik": "Isolasi Listrik.jpeg",

    "Pensil Warna": "Pensil Warna.jpeg",
    "Pensil Warna 12 Warna": "Pensil Warna 12 Warna.jpeg",
    "Crayon": "Crayon.jpeg",
    "Cat Air": "Cat Air.jpeg",
    "Kuas Lukis": "Kuas Lukis.jpeg",
    "Glitter Craft": "Glitter Craft.jpeg",
    "Kertas Crepe": "Kertas Crepe.jpeg",

    "Stempel": "stempel.png",
    "Plastik ID Card": "Plastik ID Card.jpeg",
    "Tali ID Card": "Tali ID Card.jpeg",
    "Plastik Laminating": "Plastik Laminating.jpeg",
    "Nota": "Nota.jpeg",

    // Alias nama produk
    "Isi Staples 24/6": "Isi Staples 24.jpeg",
    "HVS A4 70 gsm": "KertasHVSA4&F4.jpeg",
    "Lem Cair": "Lem Kertas Cair.jpeg"
};


// =====================================================
// FUNGSI MENCARI GAMBAR
// =====================================================

function normalizeProductName(text) {
    return String(text || "")
        .toLowerCase()
        .replace(/\.[^/.]+$/, "")
        .replace(/[^a-z0-9]/g, "");
}

function getATKImage(item) {

    const direct = atkImageMap[item.nama];
    if (direct) {
        return encodeURI(`./${direct}`);
    }

    const target = normalizeProductName(item.nama);

    const key = Object.keys(atkImageMap).find(key =>
        normalizeProductName(key) === target
    );

    if (key) {
        return encodeURI(`./${atkImageMap[key]}`);
    }

    return "";
}

// =====================================================
// RENDER KARTU PRODUK ATK
// =====================================================

function renderATK() {

    const filtered = daftarATK.filter(item => {

        const matchCategory =
            currentCategory === 'ALL' ||
            item.kategori === currentCategory;

        const matchSearch =
            item.nama.toLowerCase().includes(
                searchQuery.toLowerCase()
            ) ||
            item.kategori.toLowerCase().includes(
                searchQuery.toLowerCase()
            );

        return matchCategory && matchSearch;
    });

    atkGrid.innerHTML = '';

    visibleCount.innerText = filtered.length;

    if (filtered.length === 0) {

        emptyState.classList.remove('hidden');

        return;

    } else {

        emptyState.classList.add('hidden');
    }


    filtered.forEach(item => {

        const image = getATKImage(item);

        const waText = encodeURIComponent(
            `Halo Toko MUCI, saya ingin tanya/pesan: ${item.nama}`
        );

        const waLink =
            `https://wa.me/6285185207306?text=${waText}`;


        const card = document.createElement('div');

        card.className =
            'glass-card rounded-xl overflow-hidden flex flex-col justify-between hover:border-indigo-400/50 transition-all duration-300';


        // =================================================
        // GAMBAR PRODUK
        // =================================================

        const imageHTML = `
            <div class="w-full h-40 sm:h-48 bg-white flex items-center justify-center overflow-hidden">
                <img
                    src="${image || placeholderKategori[item.kategori] || placeholderKategori["Alat Tulis & Koreksi"]}"
                    alt="${item.nama}"
                    class="w-full h-full object-contain p-2"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1585336261026-6757688719d3?auto=format&fit=crop&w=600&q=80'"
                >
            </div>
        `;


        card.innerHTML = `

            ${imageHTML}

            <div class="p-3">

                <div class="text-xs text-indigo-500 font-semibold mb-1">
                    ${item.kategori}
                </div>

                <h3 class="font-bold text-gray-800 text-sm sm:text-base leading-tight">
                    ${item.nama}
                </h3>

                <p class="text-xs text-gray-500 mt-1">
                    ${item.satuan || ''}
                </p>

                <div class="mt-3 flex items-center justify-between gap-2">

                    <div>
                        <div class="text-xs text-gray-500">
                            Harga
                        </div>

                        <div class="font-bold text-indigo-600">
                            ${item.harga || 'Hubungi kami'}
                        </div>
                    </div>

                    <a
                        href="${waLink}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-xs font-bold transition-colors"
                    >
                        Pesan
                    </a>

                </div>

            </div>
        `;


        atkGrid.appendChild(card);

    });
}
// ======================================================
// FILTER KATEGORI
// ======================================================

function setupFilterKategori() {

    const filterBtns =
        document.querySelectorAll(".filter-btn");


    filterBtns.forEach(btn => {

        btn.addEventListener("click", () => {


            // Reset semua tombol
            filterBtns.forEach(b => {

                b.classList.remove(
                    "active",
                    "bg-indigo-600",
                    "text-white",
                    "shadow-md",
                    "shadow-indigo-500/20"
                );


                b.classList.add(
                    "bg-slate-100",
                    "text-slate-700"
                );

            });


            // Aktifkan tombol
            btn.classList.add(
                "active",
                "bg-indigo-600",
                "text-white",
                "shadow-md",
                "shadow-indigo-500/20"
            );


            btn.classList.remove(
                "bg-slate-100",
                "text-slate-700"
            );


            // Ambil kategori
            currentCategory =
                btn.getAttribute("data-category");


            // Render ulang
            renderATK();

        });

    });

}


// ======================================================
// SEARCH
// ======================================================

function setupSearch() {

    const searchInput =
        document.getElementById("searchInput");

    const clearSearch =
        document.getElementById("clearSearch");

    if (!searchInput) return;

    searchInput.addEventListener(
        "input",
        event => {

            searchQuery =
                event.target.value.trim();

            if (searchQuery.length > 0) {
                if (clearSearch) {
                    clearSearch.classList.remove("hidden");
                }
            } else {
                if (clearSearch) {
                    clearSearch.classList.add("hidden");
                }
            }

            renderATK();
        }
    );

    // Tombol hapus pencarian
    if (clearSearch) {

        clearSearch.addEventListener(
            "click",
            () => {

                searchInput.value = "";
                searchQuery = "";

                clearSearch.classList.add("hidden");

                renderATK();

                searchInput.focus();
            }
        );
    }
}

// ======================================================
// INISIALISASI
// ======================================================

function initATK() {

    try {

        setupFilterKategori();

        setupSearch();

        renderATK();

        console.log(
            "Katalog ATK berhasil dimuat:",
            daftarATK.length,
            "produk"
        );

    } catch (error) {

        console.error(
            "Gagal memuat katalog ATK:",
            error
        );

    }

}


// ======================================================
// JALANKAN SCRIPT
// ======================================================

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initATK
    );

} else {

    initATK();

}
