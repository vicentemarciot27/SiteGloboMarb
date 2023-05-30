import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

export default (props) => {
    const navigate = useNavigate();
    const [valor, setValor] = useState();

    function quandoMudar(e) {
        setValor(e.target.valor);
    }
    return (
        <div className="Forms">
            <h1>Conta Globo</h1>

            <p>Uma só conta para todos os produtos Globo</p>
            <div className="inputemeiu">
                <h2 class="cinza pequeno">Email</h2>
                <div className="inputcontainer">
                    <input
                        className="inputbox"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="corno@gmail.com"
                        value={valor}
                        onChange={quandoMudar}
                    />
                </div>
            </div>
            <div className="inputsenha">
                {" "}
                <h2 class="cinza pequeno">Senha</h2>
                <div className="inputcontainer">
                    <input
                        className="inputbox"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*********"
                    />
                </div>
            </div>

            <div
                className="Esquecido pequeno azul clicavel "
                onClick={() => navigate("/mamoucorno")}
            >
                esqueceu a senha corno?
            </div>
            <div
                className="clicavel branco fundoazul"
                onClick={() => navigate("/")}
            >
                ENTRAR
            </div>
        </div>
    );
};
