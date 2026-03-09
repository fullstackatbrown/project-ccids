export default function ContactUs() {
  const textStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginRight: "40px",
    display: "flex",
    alignItems: "center",
  };
  const fieldLabelStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "4px",
    marginTop: "30px",
  };
  const inputStyle = {
    width: "100%",
    maxWidth: "556px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    display: "block",
    backgroundColor: "white",
    marginBottom: "20px",
    height: "61px",
  };
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1528px",
        height: "944px",
        marginLeft: "calc((100vw - 1498px) / 2)",
        marginTop: "40px",
        backgroundColor: "var(--primary-light)",
        color: "black",
        borderRadius: "60px",
        padding: "40px 100px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <label style={textStyle}>
          <input
            type="radio"
            name="studentType"
            style={{ width: "30px", height: "30px", marginRight: "8px" }}
          />{" "}
          Undergraduate
        </label>{" "}
        {/* the name attribute makes sure only one of the options can be selected at a time */}
        <label style={textStyle}>
          <input
            type="radio"
            name="studentType"
            style={{ width: "30px", height: "30px", marginRight: "8px" }}
          />{" "}
          Graduate
        </label>
      </div>
      {/*input section */}
      <div style={{ height: "30px" }}></div>
      <p style={fieldLabelStyle}>Name</p>
      <input type="text" placeholder="Name" style={inputStyle} />
      <p style={fieldLabelStyle}>Email</p>
      <input type="text" placeholder="Email" style={inputStyle} />
      <p style={fieldLabelStyle}>Phone Number</p>
      <input type="text" placeholder="Phone Number" style={inputStyle} />
      <p style={fieldLabelStyle}>Message</p>
      <textarea
        placeholder="Message"
        style={{
          ...inputStyle,
          height: "190px",
          resize: "none",
        }}
      />
      <button
        style={{
          backgroundColor: "var(--brown)",
          color: "white",
          borderRadius: "30px",
          width: "556px",
          height: "68px",
          marginTop: "20px",
        }}
      >
        Send Message
      </button>
      <p style={fieldLabelStyle}>
        Please contact us at ...... with any questions!
      </p>
    </div>
  );
}
