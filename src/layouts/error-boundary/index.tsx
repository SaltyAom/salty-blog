import { Component } from 'react'

class ErrorBoundary extends Component {
    static getDerivedStateFromError() {}

    componentDidCatch() {}

    render() {
        return this.props.children
    }
}

export default ErrorBoundary
