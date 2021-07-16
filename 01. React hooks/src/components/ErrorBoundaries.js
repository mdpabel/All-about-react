import React, { Component } from "react";

class ErrorBoundaries extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  render() {
    if (this.state.error) {
      return <this.props.FallbackComponent error={this.state.error} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundaries;
