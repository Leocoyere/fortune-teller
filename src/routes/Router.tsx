import { Route, Routes } from 'react-router'
import App from '@/pages/App.tsx'
import Answer from '@/pages/Answer.tsx'
import CardProvider from '@/components/providers/CardProvider.tsx'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route
                path="/result/:encodedData"
                element={
                <CardProvider cardId="0">
                    <Answer />
                </CardProvider>
                }
            />
        </Routes>
    )
}