// app/layout.tsx
import "./globals.css";
import "reactflow/dist/style.css";

export const metadata = { title: "Tect", description: "Diagram-first coding" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
