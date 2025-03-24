import React, { useState } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" },
  ]);
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (username.length > 20 || password.length > 20) {
      setMessage("Kullanıcı adı ve şifre en fazla 20 karakter olmalıdır.");
      return;
    }

    if (username.length < 6 || password.length < 6) {
      setMessage("Kullanıcı adı ve şifre en az 6 karakter olmalıdır.");
      return;
    }

    const existingAccount = accounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (existingAccount) {
      setMessage(`Hoş geldiniz, ${username}!`);
      setUsername("");
      setPassword("");
    } else {
      setAccounts([...accounts, { username, password }]);
      setMessage("Yeni hesap oluşturuldu. Giriş yapabilirsiniz.");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        border: "solid",
        padding: 10,
      }}
      onSubmit={onSubmit}
    >
      <h3>Login</h3>
      <input
        class="border-2 border-black ..."
        placeholder="Kullanıcı adı"
        value={username}
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        style={{ marginBottom: 5 }}
      />
      <input
        class="border-2 border-black ..."
        placeholder="Şifre"
        value={password}
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        style={{ marginBottom: 10 }}
      />
      <button
        class="border-2 border-black ..."
        style={{ alignSelf: "center" }}
        onClick={onSubmit}
      >
        Submit
      </button>
      {message && <p style={{ marginTop: 10, color: "blue" }}>{message}</p>}
    </form>
  );
};

export default App;
