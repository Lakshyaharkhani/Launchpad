'use client';

type LoaderProps = {
  fullScreen?: boolean;
};

export default function Loader({ fullScreen = false }: LoaderProps) {
  const wrapperClasses = fullScreen
    ? 'fixed inset-0 z-[100] flex items-center justify-center bg-background'
    : 'flex items-center justify-center py-20';

  return (
    <div className={wrapperClasses}>
      <div className="w-14 h-14 rounded-full p-1.5 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(0,0,0,0)_0deg,hsl(var(--primary))_360deg)] animate-spin">
        <div className="w-full h-full rounded-full bg-background" />
      </div>
    </div>
  );
}
