const CartWidget = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          padding: "8px",
          borderRadius: "8px",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2ZM7.16 14h9.45c.75 0 1.42-.41 1.76-1.05l3.24-6.14c.37-.7.34-1.53-.06-2.2C21.15 4.3 20.45 4 19.71 4H5.21L4.27 2H1v2h2l3.6 7.59L5.25 14c-.24.48-.36 1.02-.36 1.57 0 .36.07.71.19 1.03.2.51.59.9 1.11 1.13.11.05.22.07.34.07h12v-2H7.16l.9-2Z"></path>
        </svg>
  
        
        <span
          style={{
            backgroundColor: "red",
            color: "white",
            fontWeight: "bold",
            padding: "4px 8px",
            borderRadius: "50%",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "24px",
            minHeight: "24px",
          }}
        >
          3
        </span>
      </div>
    );
  };
  
  export default CartWidget;
  