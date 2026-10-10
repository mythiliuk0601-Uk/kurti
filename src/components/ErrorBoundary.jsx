import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  reset = () => {
    try { localStorage.clear(); sessionStorage.clear(); } catch {}
    location.href = "/";
  };
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{ padding: 40, maxWidth: 560, margin: "60px auto", fontFamily: "Poppins, sans-serif" }}>
        <h2 style={{ color: "#6e0f3c" }}>Something went wrong</h2>
        <p style={{ margin: "12px 0", color: "#555" }}>{String(this.state.error.message || this.state.error)}</p>
        <button onClick={this.reset} style={{ background: "#6e0f3c", color: "#fff", padding: "10px 22px", borderRadius: 10 }}>
          Reset and reload
        </button>
      </div>
    );
  }
}
