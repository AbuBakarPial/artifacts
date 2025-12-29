import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Log for debugging in production; prevents blank screen
    console.error("App crashed:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
          <section className="max-w-xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-heading">Something went wrong</h1>
            <p className="mt-3 text-muted-foreground">
              Please refresh the page. If the issue continues, the 3D background may be blocked by your browser.
            </p>
            <a
              href={import.meta.env.BASE_URL}
              className="inline-flex mt-6 text-primary underline hover:text-primary/90"
            >
              Reload site
            </a>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
