const GiveMark = () => {
  return (
    <div className="container">
      <div className="file-input-container">
        <label htmlFor="fileInput">Select a PDF file:</label>
        <input type="file" id="fileInput" accept=".pdf" />
      </div>

      <div className="input-fields">
        <label htmlFor="nameInput">Enter your name:</label>
        <input type="text" id="nameInput" placeholder="Your Name" />

        <label htmlFor="emailInput">Enter your email:</label>
        <input type="email" id="emailInput" placeholder="your@email.com" />
      </div>
    </div>
  );
};

export default GiveMark;
