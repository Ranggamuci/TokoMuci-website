// Gambar default per kategori
        const placeholderKategori = {
            "Alat Tulis & Koreksi": "https://images.unsplash.com/photo-1585336261026-6757688719d3?auto=format&fit=crop&w=400&q=80",
            "Spidol & Marker": "https://images.unsplash.com/photo-1629968417850-3505f5180761?auto=format&fit=crop&w=400&q=80",
            "Buku & Catatan": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
            "Kertas": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80",
            "Map, Arsip & Amplop": "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&w=400&q=80",
            "Perlengkapan Kantor": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=80",
            "Lem & Perekat": "https://images.unsplash.com/photo-1595079672139-66b96238b939?auto=format&fit=crop&w=400&q=80",
            "Seni & Kerajinan": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80",
            "Percetakan & Nota": "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=400&q=80"
        };

        // Render Kartu Produk ATK dengan GAMBAR
        function renderATK() {
            const filtered = daftarATK.filter(item => {
                const matchCategory = currentCategory === 'ALL' || item.kategori === currentCategory;
                const matchSearch = item.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                    item.kategori.toLowerCase().includes(searchQuery.toLowerCase());
                return matchCategory && matchSearch;
            });

            atkGrid.innerHTML = '';
            visibleCount.innerText = filtered.length;

            if (filtered.length === 0) {
                emptyState.classList.remove('hidden');
            } else {
                emptyState.classList.add('hidden');
                
                filtered.forEach(item => {
                    const waText = encodeURIComponent(`Halo Toko MUCI, saya ingin tanya stok/harga: ${item.nama}`);
                    const waLink = `https://wa.me/6285185207306?text=${waText}`;

                    const fallbackImg = placeholderKategori[item.kategori] || placeholderKategori["Alat Tulis & Koreksi"];
                    const localImgPath = `./images/atk/${item.no}.jpg`;

                    const card = document.createElement('div');
                    card.className = 'glass-card rounded-2xl p-3 flex flex-col justify-between group overflow-hidden';
                    card.innerHTML = `
                        <div>
                            <!-- AREA FOTO PRODUK -->
                            <div class="overflow-hidden h-28 sm:h-36 rounded-xl bg-slate-100 relative mb-2.5">
                                <img src="${localImgPath}" 
                                     alt="${item.nama}" 
                                     loading="lazy"
                                     onerror="this.onerror=null; this.src='${fallbackImg}';" 
                                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                                
                                <span class="absolute top-2 left-2 text-[9px] font-extrabold text-indigo-700 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md shadow-sm">
                                    #${item.no}
                                </span>
                            </div>

                            <!-- DETAIL PRODUK -->
                            <div class="mb-2">
                                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5 truncate">
                                    ${item.kategori}
                                </span>
                                <h4 class="text-xs font-bold text-slate-900 leading-snug line-clamp-2 h-8" title="${item.nama}">
                                    ${item.nama}
                                </h4>
                            </div>
                        </div>

                        <!-- TOMBOL PESAN VIA WA -->
                        <div class="pt-2 border-t border-slate-100">
                            <a href="${waLink}" target="_blank" class="w-full py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm">
                                <i class="fa-brands fa-whatsapp text-xs"></i>
                                <span>Pesan / Stok</span>
                            </a>
                        </div>
                    `;
                    atkGrid.appendChild(card);
                });
            }
        }
