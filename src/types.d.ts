export type SocialIcon = Record<string, string | any>;

declare global {
    interface Window {
        visitMuseum: () => void;
    }
}