import { useEffect, useState } from "react";

/**
 * Toast — a lightweight notification popup.
 *
 * Usage:
 *   const [toast, setToast] = useState(null);
 *   setToast({ message: "Done!", type: "success" });   // or "error" | "warning"
 *   <Toast toast={toast} onClose={() => setToast(null)} />
 */
const Toast = ({ toast, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!toast) return;

    // Trigger slide-in
    setVisible(true);

    // Auto-dismiss after 4 seconds
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // wait for slide-out animation
    }, 4000);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const typeStyles = {
    success: { bg: "#2e7d32", icon: "✅" },
    error: { bg: "#c62828", icon: "❌" },
    warning: { bg: "#e65100", icon: "⚠️" },
    info: { bg: "#1565c0", icon: "ℹ️" },
  };

  const { bg, icon } = typeStyles[toast.type] || typeStyles.info;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 9999,
        transform: visible ? "translateX(0)" : "translateX(120%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease",
        maxWidth: "360px",
        minWidth: "280px",
      }}
    >
      <div
        style={{
          background: bg,
          color: "#fff",
          borderRadius: "14px",
          padding: "16px 20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontFamily: "Poppins, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        <span style={{ fontSize: "20px", flexShrink: 0 }}>{icon}</span>
        <span style={{ flex: 1 }}>{toast.message}</span>
        <button
          onClick={() => {
            setVisible(false);
            setTimeout(onClose, 300);
          }}
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "none",
            borderRadius: "50%",
            color: "#fff",
            width: "26px",
            height: "26px",
            cursor: "pointer",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
