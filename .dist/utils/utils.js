"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaSenha = validaSenha;
exports.enviaEmail = enviaEmail;
exports.gerarString = gerarString;
const nodemailer_1 = __importDefault(require("nodemailer"));
function validaSenha(senha) {
    const mensa = [];
    // .length: retorna o tamanho da string (da senha)
    if (senha.length < 8) {
        mensa.push("Erro... senha deve possuir, no mínimo, 8 caracteres");
    }
    // contadores
    let pequenas = 0;
    let grandes = 0;
    let numeros = 0;
    let simbolos = 0;
    // senha = "abc123"
    // letra = "a"
    // percorre as letras da variável senha
    for (const letra of senha) {
        // expressão regular
        if ((/[a-z]/).test(letra)) {
            pequenas++;
        }
        else if ((/[A-Z]/).test(letra)) {
            grandes++;
        }
        else if ((/[0-9]/).test(letra)) {
            numeros++;
        }
        else {
            simbolos++;
        }
    }
    if (pequenas == 0 || grandes == 0 || numeros == 0 || simbolos == 0) {
        mensa.push("Erro... senha deve possuir letras minúsculas, maiúsculas, números e símbolos");
    }
    return mensa;
}
function enviaEmail(email, texto, Re, Html) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer_1.default.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: "06e36772288d21",
                pass: "1ddcedc01b223d",
            },
        });
        const info = yield transporter.sendMail({
            from: 'rastreador@Guardian.com', // sender address
            to: email, // list of receivers
            subject: Re, // Subject line
            text: texto, // plain text body
            html: Html
            // html: "<h3>Esyimado Cliente " + nome +" </h3>"
        });
        console.log("Message sent: %s", info.messageId);
    });
}
function gerarString(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = "";
    for (let i = 0; i < tamanho; i++) {
        resultado = resultado + caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultado;
}
//# sourceMappingURL=utils.js.map