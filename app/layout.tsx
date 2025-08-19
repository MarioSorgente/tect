export const metadata = { title: "Tect", description: "Diagram-first coding" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <link rel="stylesheet" href="/globals.css" />
        {children}
      </body>
    </html>
  );
}
