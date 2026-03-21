import { X } from 'lucide-react';

type VideoModalProps = {
    isOpen: boolean
    onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
    if(!isOpen) return null;
    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 "
          aria-label="Close video modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/7Q2vsJ4-tMU?si=J9iU6dMvsA4N3vM5"
            title="Brand video presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}