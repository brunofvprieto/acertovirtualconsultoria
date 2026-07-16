import "./globals.css";

export const metadata = {
  title: "Acerto Virtual — Excelência em Gestão e Atendimento",
  description:
    "Consultoria e treinamento personalizado para equipes de atendimento em clínicas, consultórios e hospitais. Método HACE, por Fernanda Coelho.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Figtree:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
