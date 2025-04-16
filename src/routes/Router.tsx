import { Route, Routes } from 'react-router'
import App from '@/pages/App.tsx'
import Answer from '@/pages/Answer.tsx'
import CardProvider from '@/components/providers/CardProvider.tsx'
import Error404 from '@/pages/Error404'

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
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}