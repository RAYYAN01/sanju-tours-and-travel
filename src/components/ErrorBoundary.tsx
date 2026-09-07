import React from 'react';

interface State {
  hasError: boolean;
}

/**
 * Catches render/lifecycle errors anywhere in the tree so a single bad
 * component can't blank the whole site. Shows a minimal recovery screen
 * with a reload action instead of React's unmount-everything default.
 */
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Surfaced in the console for debugging; no external logging service wired up.
    console.error('App error boundary caught:', error);
  }

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-[#fff9eb] text-[#200f07] px-6">
        <div className="max-w-md text-center space-y-4">
          <h1 className="font-display text-2xl font-extrabold">Something went wrong</h1>
          <p className="text-sm text-[#200f07]/70 leading-relaxed">
            The page hit an unexpected error. Reloading usually fixes it. If it keeps
            happening, call or WhatsApp us on <strong>+91 73381 48518</strong>.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            className="btn-accent text-xs py-3 px-6 tracking-wider"
          >
            Reload the page
          </button>
        </div>
      </div>
    );
  }
}
