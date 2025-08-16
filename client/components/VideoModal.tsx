import { useState, useEffect } from "react";
import { X, Play, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
import { Button } from "./ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  description?: string;
}

export const VideoModal = ({ 
  isOpen, 
  onClose, 
  videoUrl, 
  title = "Product Demo",
  description = "See how our platform works in action"
}: VideoModalProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);

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

  if (!isOpen || !videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&cc_load_policy=1${isMuted ? '&mute=1' : ''}`;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop with sophisticated blur */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-all duration-500"
        onClick={onClose}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/20 animate-pulse"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
              backgroundSize: "32px 32px"
            }}
          ></div>
        </div>
      </div>

      {/* Modal Container */}
      <div 
        className={`relative w-full max-w-6xl mx-4 transition-all duration-700 transform ${
          isFullscreen ? 'h-screen max-w-none mx-0' : 'h-auto'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-3xl blur-xl opacity-50"></div>
        
        {/* Main Modal */}
        <div className="relative bg-slate-900/95 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-xl"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-xl"
              >
                {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-gray-400 hover:text-white hover:bg-red-500/20 hover:text-red-400 rounded-xl"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative bg-black">
            {/* Video Embed */}
            <div className={`relative ${isFullscreen ? 'h-[calc(100vh-120px)]' : 'aspect-video'}`}>
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
                style={{ border: 'none' }}
              />
              
              {/* Loading State */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse">
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="text-lg font-medium">Loading video...</span>
                </div>
              </div>
            </div>

            {/* Video Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold mb-1">W3Leads Platform Demo</h4>
                    <p className="text-gray-300 text-sm">Discover how to find, verify, and engage with qualified B2B leads</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-xs font-medium">LIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                  <span>Duration: 3:42</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                  <span>HD Quality</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 rounded-xl"
                  onClick={onClose}
                >
                  Close
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white rounded-xl font-semibold"
                  onClick={() => window.open('/signup', '_blank')}
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard Shortcuts Hint */}
        <div className="absolute -bottom-12 left-0 right-0 text-center">
          <p className="text-white/60 text-sm">
            Press <kbd className="bg-white/10 px-2 py-1 rounded text-xs">ESC</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
};
