// ======================================================
// SCRIPT KATALOG ATK TOKO MUCI
// Sistem gambar otomatis 1.jpg - 215.jpg
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


// ======================================================
// PENGATURAN
// ======================================================

const ATK_IMAGE_FOLDER = "./images/atk/";


// ======================================================
// MENCARI GAMBAR PRODUK
// ======================================================

function getProductImage(item, imgElement, fallbackImg) {

    const extensions = [
        "jpg",
        "jpeg",
        "png",
        "webp"
    ];

    let index = 0;

    function tryNextImage() {

        if (index >= extensions.length) {

            // Semua format gagal
            imgElement.onerror = null;
            imgElement.src = fallbackImg;

            return;
        }

        const extension = extensions[index];

        index++;

        imgElement.src =
            `${ATK_IMAGE_FOLDER}${item.no}.${extension}`;
    }


    imgElement.onerror = function () {

        tryNextImage();

    };


    tryNextImage();
}


// ======================================================
// RENDER KARTU PRODUK ATK
// ======================================================

function renderATK() {

    const filtered = daftarATK.filter(item => {

        const matchCategory =
            currentCategory === "ALL" ||
            item.kategori === currentCategory;


        const search =
            searchQuery.toLowerCase();


        const matchSearch =
            item.nama
                .toLowerCase()
                .includes(search)

            ||

            item.kategori
                .toLowerCase()
                .includes(search);


        return matchCategory && matchSearch;

    });


    // Kosongkan katalog
    atkGrid.innerHTML = "";


    // Jumlah produk
    visibleCount.innerText = filtered.length;


    // Tidak ada hasil pencarian
    if (filtered.length === 0) {

        emptyState.classList.remove("hidden");

        return;

    }


    emptyState.classList.add("hidden");


    // ==================================================
    // BUAT KARTU SATU PER SATU
    // ==================================================

    filtered.forEach(item => {


        // WhatsApp
        const waText = encodeURIComponent(
            `Halo Toko MUCI, saya ingin tanya stok/harga: ${item.nama}`
        );


        const waLink =
            `https://wa.me/6285185207306?text=${waText}`;


        // Gambar cadangan
        const fallbackImg =
            placeholderKategori[item.kategori] ||
            placeholderKategori["Alat Tulis & Koreksi"];


        // Buat kartu
        const card =
            document.createElement("div");


        card.className =
            "glass-card rounded-2xl p-3 flex flex-col justify-between group overflow-hidden";


        // ==================================================
        // HTML KARTU
        // ==================================================

        card.innerHTML = `

            <!-- ========================================= -->
            <!-- FOTO PRODUK -->
            <!-- ========================================= -->

            <div>

                <div
                    class="
                        w-full
                        h-36
                        sm:h-44
                        rounded-xl
                        bg-slate-50
                        border
                        border-slate-100
                        relative
                        overflow-hidden
                        mb-3
                        flex
                        items-center
                        justify-center
                    "
                >

                    <img
                        class="
                            atk-product-image
                            w-full
                            h-full
                            object-contain
                            p-2
                            group-hover:scale-105
                            transition-transform
                            duration-300
                        "
                        alt="${item.nama}"
                        loading="lazy"
                    >


                    <!-- NOMOR PRODUK -->

                    <span
                        class="
                            absolute
                            top-2
                            left-2
                            text-[9px]
                            font-extrabold
                            text-indigo-700
                            bg-white/95
                            backdrop-blur-sm
                            px-2
                            py-1
                            rounded-md
                            shadow-sm
                        "
                    >
                        #${item.no}
                    </span>


                    <!-- INDIKATOR FOTO -->

                    <span
                        class="
                            absolute
                            top-2
                            right-2
                            text-[8px]
                            font-bold
                            text-slate-400
                            bg-white/90
                            px-2
                            py-1
                            rounded-md
                        "
                    >
                        FOTO
                    </span>

                </div>


                <!-- ===================================== -->
                <!-- INFORMASI PRODUK -->
                <!-- ===================================== -->

                <div class="mb-3">

                    <span
                        class="
                            text-[9px]
                            font-bold
                            text-indigo-500
                            uppercase
                            tracking-wider
                            block
                            mb-1
                            truncate
                        "
                    >
                        ${item.kategori}
                    </span>


                    <h4
                        class="
                            text-sm
                            font-bold
                            text-slate-900
                            leading-snug
                            line-clamp-2
                            min-h-[40px]
                        "
                        title="${item.nama}"
                    >
                        ${item.nama}
                    </h4>

                </div>

            </div>


            <!-- ========================================= -->
            <!-- WHATSAPP -->
            <!-- ========================================= -->

            <div
                class="
                    pt-2
                    border-t
                    border-slate-100
                "
            >

                <a
                    href="${waLink}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="
                        w-full
                        py-2
                        rounded-lg
                        bg-emerald-50
                        hover:bg-emerald-600
                        hover:text-white
                        text-emerald-700
                        text-[10px]
                        font-bold
                        transition-all
                        flex
                        items-center
                        justify-center
                        gap-1.5
                        shadow-sm
                    "
                >

                    <i
                        class="
                            fa-brands
                            fa-whatsapp
                            text-xs
                        "
                    ></i>

                    <span>
                        Pesan / Stok
                    </span>

                </a>

            </div>

        `;


        // Ambil elemen gambar
        const img =
            card.querySelector(".atk-product-image");


        // Cari gambar 1.jpg / 1.jpeg / 1.png / 1.webp
        getProductImage(
            item,
            img,
            fallbackImg
        );


        // Masukkan kartu ke katalog
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

                clearSearch.classList.remove(
                    "hidden"
                );

            } else {

                clearSearch.classList.add(
                    "hidden"
                );

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

                clearSearch.classList.add(
                    "hidden"
                );

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
