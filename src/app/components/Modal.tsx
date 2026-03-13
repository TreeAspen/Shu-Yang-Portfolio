import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  darkMode: boolean;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, darkMode, children }: ModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl my-4 md:my-8 mx-4 rounded-3xl pointer-events-auto"
              style={{
                backgroundColor: "rgba(72, 44, 121, 0.1)",
                backdropFilter: "blur(16px) saturate(150%)",
                WebkitBackdropFilter: "blur(16px) saturate(150%)",
                boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: darkMode ? "#fcf896" : "#503282"
              }}
            >
              {/* Sticky header */}
              <div
                className="sticky top-0 z-20 flex items-center justify-between p-5 md:p-6 border-b rounded-t-3xl"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  backgroundColor: "rgba(72, 44, 121, 0.3)",
                  backdropFilter: "blur(12px) saturate(150%)",
                  WebkitBackdropFilter: "blur(12px) saturate(150%)",
                }}
              >
                <h2 className="font-['Jaro',sans-serif] text-2xl md:text-3xl m-0 truncate pr-4">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0"
                >
                  <X size={24} color={darkMode ? "#fcf896" : "#503282"} />
                </button>
              </div>
              {/* Scrollable content */}
              <div className="p-6 md:p-10">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
