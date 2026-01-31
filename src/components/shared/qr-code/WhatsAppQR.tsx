'use client';

import { QRCodeCanvas } from 'qrcode.react';

interface WhatsAppQRProps {
    qrString: string; // String QR dari API Backend kamu
    loading?: boolean;
    onRefresh?: () => void;
}

export default function WhatsAppQR({ qrString, loading, onRefresh }: WhatsAppQRProps) {
    return (
        <div className="flex flex-col items-center gap-6">
            {/* Container Card */}
            <div className="relative group bg-white p-4 rounded-3xl shadow-xl border border-gray-100">

                {/* Loading State Overlay */}
                {loading && (
                    <div className="absolute inset-0 z-10 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-3xl">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600"></div>
                        <p className="text-xs text-gray-500 mt-2 font-medium">Generating QR...</p>
                    </div>
                )}

                {/* QR Code Canvas */}
                <QRCodeCanvas
                    value={qrString || "https://whatsapp.com"} // Fallback URL
                    size={256} // Ukuran (pixel)
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"H"} // Error Correction Level Tinggi (Supaya logo ga ngerusak QR)
                    includeMargin={false}
                    imageSettings={{
                        src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", // URL Logo WA
                        x: undefined,
                        y: undefined,
                        height: 50,
                        width: 50,
                        excavate: true, 
                    }}
                    className="rounded-lg"
                />
            </div>

            {/* Instruksi & Refresh Button */}
            <div className="text-center space-y-3">
                <h3 className="text-lg font-bold text-gray-800">
                    Scan untuk Menghubungkan
                </h3>
                <ol className="text-sm text-gray-500 text-left space-y-1 list-decimal list-inside bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <li>Buka WhatsApp di HP Anda</li>
                    <li>Ketuk menu <strong>Titik Tiga</strong> atau <strong>Settings</strong></li>
                    <li>Pilih <strong>Linked Devices</strong></li>
                    <li>Arahkan kamera ke QR Code ini</li>
                </ol>

                {/* Tombol Refresh (Karena QR WA expired tiap 60 detik) */}
                {onRefresh && (
                    <button
                        onClick={onRefresh}
                        className="mt-4 text-sm text-green-600 hover:text-green-700 font-semibold flex items-center justify-center gap-2 w-full py-2 hover:bg-green-50 rounded-lg transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Refresh QR Code
                    </button>
                )}
            </div>
        </div>
    );
}