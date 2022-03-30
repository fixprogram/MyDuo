import { Links, LiveReload, Outlet, Scripts } from "remix";

function Document({
  children,
  title = `MyDuo`,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.skypack.dev/react-markdown@7?min" />
        <Links />
      </head>
      <body style={{ margin: 0 }}>
        {children}
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Uh-oh!">
      <div className="error-container">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}
