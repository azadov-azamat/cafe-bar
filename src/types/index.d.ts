export {};

declare global {
    interface Window {
        Telegram: any; // 👈️ turn off type checking
    }
}
