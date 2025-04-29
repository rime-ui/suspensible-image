import "./styles.css"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
}

export function Skeleton({ className, ...props }: SkeletonProps) {
    return (
        <div
            className={`skeleton ${className}`}
            {...props}
        >
            <div className="shimmer-overlay" />
        </div >
    );
}