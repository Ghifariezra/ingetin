<div align="center">

  <a href="https://ingetin.vercel.app/">
    <img src="public/ui-preview/home/introduction.png" alt="Ingetin Project Banner" width="100%" style="border-radius: 10px;" />
  </a>

  # Ingetin 🚀

  **Nagih Klien Tanpa Rasa 'Ga Enakan'**
  
  *Get Paid Without the Awkwardness*

  <div style="display: flex; justify-content: center; gap: 10px; margin-top: 10px;">
    <a href="https://github.com/Ghifariezra/ingetin">
      <img src="https://img.shields.io/badge/Version-0.2.0-blue?style=for-the-badge&logo=git&logoColor=white" alt="Version" />
    </a>
    <a href="https://ingetin.vercel.app">
      <img src="https://img.shields.io/badge/Status-Live_Demo-success?style=for-the-badge" alt="Status" />
    </a>
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
  </div>

</div>

<br />

## 📖 About

**Ingetin** adalah platform SaaS yang dirancang khusus untuk Freelancer dan UMKM. Kami memahami bahwa masalah terbesar dalam freelancing bukan hanya mengerjakan proyek, tapi juga menagih pembayarannya.

Masalah utama yang kami selesaikan adalah **Social Friction**: rasa sungkan, takut dianggap galak, atau sekadar lupa menagih. Dengan Ingetin, pengguna dapat mencatat order, memantau cashflow, dan membiarkan sistem mengirimkan email pengingat tagihan (*Invoice Reminders*) secara otomatis.

> [!IMPORTANT]
> **🚀 Current Status: v0.2.0 (Compliance & Docs Update)**
> Update ini berfokus pada kelengkapan dokumen pendukung (Legalitas & Dokumentasi) serta perbaikan navigasi agar siap digunakan oleh publik.
> * ✅ **Legal Ready:** Halaman Privacy, Terms, dan Cookies sudah tersedia (Bilingual).
> * ✅ **Docs Revamp:** Dokumentasi FAQ menggunakan Accordion UI yang responsif.
> * ✅ **Frontend Complete:** UI/UX, Dark Mode, dan i18n sudah stabil.

## ✨ Key Features

| Feature | Status | Description |
| :--- | :---: | :--- |
| **Automated Reminders** | 🏗️ | Mengirim email pengingat otomatis (H-3, Hari H, Overdue). |
| **Multi-language (i18n)** | ✅ | Dukungan penuh Bahasa Indonesia & English via `next-intl`. |
| **Financial Dashboard** | ✅ | Visualisasi ringkas omzet dan status pembayaran (Lunas/Belum). |
| **Legal Compliance** | ✅ | Halaman Privacy Policy, Terms of Service, dan Cookie Policy terintegrasi. |
| **Documentation Center** | ✅ | Halaman FAQ interaktif dengan Accordion UI. |
| **Dark Mode** | ✅ | Tampilan adaptif yang nyaman di mata. |

## 🛠️ Tech Stack

Project ini dibangun di atas ekosistem modern untuk menjamin performa, skalabilitas, dan *Developer Experience* terbaik.

**Core & Framework:**
<br />
<img src="https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" />

**Styling & UI:**
<br />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/Shadcn%2FUI-000000?style=flat-square&logo=shadcnui&logoColor=white" />
<img src="https://img.shields.io/badge/Lucide_Icons-F76940?style=flat-square&logo=lucide&logoColor=white" />

**Tools & Libs:**
<br />
<img src="https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white" />
<img src="https://img.shields.io/badge/Next_Intl-000000?style=flat-square" />

## 🎨 Design System Highlights

Kami fokus pada pengalaman visual yang bersih dan modern.

* **Glassmorphism:** Penggunaan efek *backdrop-blur* pada Navbar dan Floating Elements memberikan kesan modern dan depth.
* **Smart Footer:** Footer navigasi yang terstruktur (Product, Support, Legal) dengan indikator status sistem.
* **Micro-Interactions:** Interaksi halus saat hover dan klik menggunakan CSS native & Tailwind utilities.
* **Global Preferences:** Pengguna dapat mengganti Bahasa dan Tema kapan saja melalui *Floating Preferences Button*.

## 📂 Project Structure

Berikut adalah gambaran arsitektur folder proyek ini:

```bash
ingetin
├── src/
│   ├── app/                # Next.js App Router (Pages & Layouts)
│   │   ├── [locale]/       # Route ter-lokalisasi (id/en)
│   │   │   ├── (legal)/    # Group Route untuk halaman legal (privacy, terms, cookies)
│   │   │   └── docs/       # Halaman Dokumentasi
│   ├── components/
│   │   ├── shared/         # Komponen global (Navbar, Footer, LegalLayout)
│   │   └── ui/             # Shadcn UI primitive components
│   ├── i18n/               # Konfigurasi next-intl & routing
│   ├── lib/                # Utility functions & helpers
│   ├── messages/           # File translasi JSON (id.json, en.json)
└── public/                 # Static assets (favicon, manifest, etc)
```

## 🤝 Contributing

Kontribusi selalu diterima! Jika kamu ingin membantu mengembangkan Ingetin:

1.  Fork repository ini.
2.  Buat branch fitur baru (`git checkout -b fitur-keren`).
3.  Commit perubahanmu (`git commit -m 'Menambahkan fitur keren'`).
4.  Push ke branch (`git push origin fitur-keren`).
5.  Buat Pull Request.

## 📄 License

Project ini dilisensikan di bawah [MIT License](LICENSE).

---

Built with ❤️ by **[Ezdev](https://www.ezdev.xyz/)**.