import { useEffect } from "react";
import { X, Play } from "lucide-react";
import { Button } from "./ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
  description?: string;
}

export const VideoModal = ({
  isOpen,
  onClose,
  videoUrl,
  title = "W3Leads Platform Demo",
  description = "See how our B2B lead generation platform works"
}: VideoModalProps) => {

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Using a professional demo video (you can replace with your own)
  const demoVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Clean backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container - Compact size (75% of original) */}
      <div
        className="relative w-full max-w-3xl mx-4 transition-all duration-300 transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Modal */}
        <div className="relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-700">

          {/* Clean Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            </div>

            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Video Container */}
          <div className="relative bg-black">
            <div className="aspect-video">
              <iframe
                src={demoVideoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
                style={{ border: 'none' }}
              />
            </div>
          </div>

          {/* Clean Footer */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <span>W3Leads Platform Walkthrough</span>
                <span>•</span>
                <span>Duration: 3:42</span>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClose}
                  className="text-gray-700 dark:text-gray-300"
                >
                  Close
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white"
                  onClick={() => window.open('/signup', '_blank')}
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle hint */}
        <div className="absolute -bottom-8 left-0 right-0 text-center">
          <p className="text-white/80 text-sm">
            Press ESC to close
          </p>
        </div>
      </div>
    </div>
  );
};
