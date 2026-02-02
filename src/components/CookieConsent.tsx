import { useState, useEffect } from 'react';

interface CookieConsentProps {
    onAccept: () => void;
}

function CookieConsent({ onAccept }: CookieConsentProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const consent = localStorage.getItem('cookieConsent');
        if (consent === null) {
            setIsVisible(true);
        } else if (consent === 'accepted') {
            onAccept();
        }
    }, [onAccept]);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        onAccept();
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    if (!isMounted || !isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 shadow-lg">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-white text-sm sm:text-base text-center sm:text-left">
                    <p className="mb-1">
                        🍪 Мы используем cookies для улучшения работы сайта и анализа посещаемости.
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm">
                        Нажимая «Принять», вы соглашаетесь с использованием cookies.
                    </p>
                </div>
                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={handleDecline}
                        className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-colors"
                    >
                        Отклонить
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-6 py-2 text-sm bg-green-700 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                    >
                        Принять
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
