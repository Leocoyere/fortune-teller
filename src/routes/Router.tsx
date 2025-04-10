import { Route, Routes } from 'react-router'
import App from '../pages/App.tsx'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    )
}