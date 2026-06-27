* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: #f5efe8;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  width: 90%;
  max-width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

/* LEFT PANEL */
.left {
  padding: 40px;
  background: #efe2d2;
}

.left h1 {
  margin-bottom: 8px;
  color: #3b2f2a;
}

.tagline {
  font-size: 14px;
  margin-bottom: 25px;
  color: #6b5c52;
}

label {
  display: block;
  margin-top: 15px;
  font-size: 14px;
}

input, select {
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #cbb8a9;
}

button {
  margin-top: 25px;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 10px;
  background: #8b6f4e;
  color: white;
  font-size: 15px;
  cursor: pointer;
}

button:hover {
  background: #72593f;
}

.error {
  margin-top: 10px;
  color: #b00020;
  font-size: 13px;
}

/* RIGHT PANEL */
.right {
  padding: 40px;
}

.right h2 {
  margin-bottom: 20px;
  color: #3b2f2a;
}

.result-box {
  background: #f7f2ed;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 15px;
}

.result-box span {
  font-size: 13px;
  color: #6b5c52;
}

.result-box p {
  font-size: 20px;
  font-weight: 500;
  margin-top: 5px;
}
