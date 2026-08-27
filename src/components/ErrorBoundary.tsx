import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uçar Hafriyat Uygulama Hatası:", error, errorInfo);
  }

  public handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#1A1A19] text-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-[#242423] p-8 rounded-3xl border border-[#E3A21E]/30 shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#E3A21E]/10 border border-[#E3A21E]/30 text-[#E3A21E] flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>
            
            <div>
              <h2 className="text-2xl font-black text-white">Bir Şeyler Ters Gitti</h2>
              <p className="text-sm text-white/70 mt-2">
                Sayfa yüklenirken geçici bir bağlantı veya sistem hatası oluştu. Sayfayı yenileyebilir veya doğrudan bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={this.handleReload}
                className="w-full py-3.5 px-6 rounded-xl bg-[#E3A21E] hover:bg-[#C88E16] text-[#1A1A19] font-black text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <RefreshCw className="w-4 h-4" /> Sayfayı Yenile
              </button>
              
              <a
                href="https://wa.me/905375151190"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs transition flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4" /> WhatsApp Destek (0537 515 11 90)
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
