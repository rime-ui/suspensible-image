import "./styles.css"

export default function Skeleton({ className = "" }: { className: string }) {
    return (
        <div
            className={`relative overflow-hidden bg-zinc-200 w-full ${className}`}
        >
            <div className="shimmer-overlay" />
        </div >
    );
}