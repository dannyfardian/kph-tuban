console.log("Website loaded successfully!");
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.dropdown-item, .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

const data = {
    jualanKayu: {
        title: "Kategori Kayu",
        items: {
            jati: [
                { name: "Kayu Jati A1", img: "asset/img/Jati A1.jpeg", desc: "Kelompok kayu jati yang berdiameter 10 - 19 cm." },
                { name: "Kayu Jati A2", img: "asset/img/Jati A2.jpeg", desc: "Kelompok kayu jati yang berdiameter 20 - 29 cm." },
                { name: "Kayu Jati A3", img: "asset/img/Kayu Jati A3.jpeg", desc: "Kelompok kayu jati yang berdiameter 30 sampai diatasnya." }
            ],
            rimba: [
                { name: "Kayu Mahoni", img: "asset/img/Mahoni.jpeg", desc: "Mahoni termasuk pohon besar dengan tinggi pohon mencapai 35–40 m dan diameter mencapai 125 cm."},
                { name: "Kayu Gmelina Arborea", img: "asset/img/Gembilina.jpeg", desc: "Kayu Gmelina Mempunyai Prospek Bisnis Cerah. Meningkatnya kebutuhan kayu industri membuat produsen kayu melirik potensi tanaman yang memiliki pertumbuhan cepat dengan kualitas kayu yang bagus."},
                { name: "Kayu Sengon Buto", img: "asset/img/SengonButo.jpeg", desc: "Pohon yang menggugurkan daun; berukuran sedang hingga tinggi, 30–45 m, dan gemang batangnya 70(–140) cm."}
            ]
        }
    },
    minyakKayuPutih: {
        title: "Minyak Kayu Putih",
        items: {
            jenis: [
                { name: "Minyak Kayu Putih 30 ml", img: "asset/img/Minyak1.jpeg", desc: "Minyak kayu putih adalah hasil proses ekstraksi daun tanaman Kayu Putih. Daun dan ranting tanaman Kayu Putih didestilasi sehingga menghasilkan produk akhir berupa minyak. Manfaat kayu putih sebagai obat herbal alami untuk menyembuhkan masuk angin serta dapat digunakan untuk aromaterapi." },
                { name: "Minyak Kayu Putih 60 ml", img: "asset/img/Minyak2.jpeg", desc: "Minyak kayu putih adalah hasil proses ekstraksi daun tanaman Kayu Putih. Daun dan ranting tanaman Kayu Putih didestilasi sehingga menghasilkan produk akhir berupa minyak. Manfaat kayu putih sebagai obat herbal alami untuk menyembuhkan masuk angin serta dapat digunakan untuk aromaterapi." },
                { name: "Minyak Kayu Putih 100 ml", img: "asset/img/Minyak3.jpeg", desc: "Minyak kayu putih adalah hasil proses ekstraksi daun tanaman Kayu Putih. Daun dan ranting tanaman Kayu Putih didestilasi sehingga menghasilkan produk akhir berupa minyak. Manfaat kayu putih sebagai obat herbal alami untuk menyembuhkan masuk angin serta dapat digunakan untuk aromaterapi." }
            ]
        }
    },
    wisata: {
        title: "Ekowisata",
        items: {
            jenis: [
                { name: "Wisata Sendang Asmoro", img: "asset/img/wisata.jpeg", desc: "Wisata Sendang Asmoro yang berada di wilayah Perhutani Kesatuan Pemangkuan Hutan (KPH) Tuban dengan panorama alam yang menarik berupa sendang dan sumber mata air diharapkan menjadi sasaran pengunjung pada liburan sekolah." },
                { name: "Wisata Sendang Asmoro", img: "asset/img/wisata2.jpeg", desc: "Lokasi wisata yang masuk di wilayah Resort Pemangkuan hutan (RPH) Ngembes Bagian Kesatuan Pemangkuan Hutan (BKPH) Plumpang yang secara administratif masuk Desa Ngino Kabupaten Tuban." },
                { name: "Taman Rimba", img: "asset/img/tamanrimba.jpeg", desc: "Taman Rimba yang mana lokasinya dapat digunakan untuk kegiatan outbound, camping ground dan wahana edukasi siswa sekolah maupun organisasi pecinta alam." }
            ]
        }
    },
    agroforestry: {
        title: "Agroforestri",
        items: {
            jenis: [
                { name: "Jagung", img: "asset/img/jagung2.jpeg", desc: "Tanaman Jagung merupakan salah satu agroforestri dari KPH Tuban." }
            ]
        }
    },
    produkMadu: {  
        title: "Produk Madu",
        items: {
            jenis: [
                { name: "Madu Produk Perhutani", img: "asset/img/madu.jpeg", desc: "Madu berkhasiat untuk Meningkatkan sistem kekebalan tubuh, Menjaga kesehatan jantung, dan Mengurangi gejala batuk dan pilek." },
                { name: "Madu Kemasan 600 ml", img: "asset/img/madu1.jpeg", desc: "Kemasan 600 ml." },
                { name: "Madu Kemasan 250 ml", img: "asset/img/madu2.jpeg", desc: "Kemasan 250 ml." }
            ]
        }
    }
};

function showCategory(businessType) {
    const categoryDisplay = document.getElementById('categoryDisplay');
    const productDisplay = document.getElementById('productDisplay');
    productDisplay.className = 'd-flex flex-wrap justify-content-center';
    categoryDisplay.innerHTML = '';
    productDisplay.innerHTML = '';

    if (data[businessType]) {
        let html = `<h3>${data[businessType].title}</h3>`;
        
        for (const category in data[businessType].items) {
            let buttonText = '';
            
            // Logika untuk teks tombol berdasarkan kategori bisnis
            if (businessType === "jualanKayu") {
                if (category === "jati") {
                    buttonText = "Jati";
                } else if (category === "rimba") {
                    buttonText = "Rimba";
                }
            } else if (businessType === "minyakKayuPutih") {
                buttonText = "Show Product";  
            } else if (businessType === "wisata") {
                buttonText = "Show Ekowisata";  
            } else if (businessType === "agroforestry") {
                buttonText = "Show Agroforestri";  
            } else if (businessType === "produkMadu") { // Tambahkan logika untuk madu
                buttonText = "Show Madu"; 
            } else {
                buttonText = category.toUpperCase();
            }

            html += `<button class="btn btn-success m-2" onclick="showProducts('${businessType}', '${category}')">${buttonText}</button>`;
        }
        categoryDisplay.innerHTML = html;
    }
}

function showProducts(businessType, category) {
    const productDisplay = document.getElementById('productDisplay');
    productDisplay.innerHTML = '';

    if (data[businessType] && data[businessType].items[category]) {
        let html = `<div class="row justify-content-center">`;
        data[businessType].items[category].forEach(item => {
            html += `
                <div class="col-md-4 text-center mb-4">
                    <div class="card shadow-lg" style="width: 18rem;">
                        <img src="${item.img}" class="card-img-top" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.desc}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
        productDisplay.innerHTML = html;
    }
}