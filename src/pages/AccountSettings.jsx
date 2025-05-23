const AccountSettings = () => {
  return (
    <div className="container">
      <div className="card" style={{ padding: "20px" }}>
        {/* Profile and User Info */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
          {/* Profile Picture */}
          <img
            src="https://i.imgur.com/4M34hi2.png" // Default image URL
            alt="Profile"
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "50%",
              marginRight: "16px", // Space between the pfp and the text content
            }}
          />
          {/* User Information */}
          <div style={{ textAlign: "left" }}>
            <h2>User Name</h2>
            <p>useremail@example.com</p>
          </div>
        </div>

        {/* Account Settings */}
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "16px",
            borderRadius: "8px",
            textAlign: "left",
            marginTop: "16px",
          }}
        >
          <h3>About</h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            This is a placeholder for the user's bio or additional details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
