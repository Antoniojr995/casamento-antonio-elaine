let nomeUsuario = "";
let presenteSelecionado = "";
let seuTelefone = "5584999481693"; 

function salvarNome() {
    const inputNome = document.getElementById('nome-convidado').value;
    if (inputNome.trim().length > 2) {
        nomeUsuario = inputNome;
        document.getElementById('tela-login').style.display = 'none';
    } else {
        alert("Por favor, digite seu nome completo.");
    }
}

const presentes = {
    aparelho_jantar: {
        nome: "Aparelho de jantar",
        pix: "00020126330014BR.GOV.BCB.PIX0111016637784855204000053039865406120.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***630476A3"
    },
    copos_tacas: {
        nome: "Jogos de copos e taças",
        pix: "00020126330014BR.GOV.BCB.PIX011101663778485520400005303986540540.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***6304E4CF"
    },
    talheres: {
        nome: "Jogo de talheres",
        pix: "00020126330014BR.GOV.BCB.PIX0111016637784855204000053039865406100.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***6304482E"
    },
    faqueiro: {
        nome: "Faqueiro",
        pix: "00020126330014BR.GOV.BCB.PIX0111016637784855204000053039865406100.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***6304482E"
    },
    panelas: {
        nome: "Jogo de panelas",
        pix: "00020126330014BR.GOV.BCB.PIX0111016637784855204000053039865406500.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***6304FD14"
    },
    Formas: {
        nome: "Formas de cozinha",
        pix: "00020126330014BR.GOV.BCB.PIX0111016637784855204000053039865406100.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***6304482E"
    },
    Potes: {
        nome: "Potes herméticos",
        pix: "00020126330014BR.GOV.BCB.PIX0111016637784855204000053039865406100.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***6304482E"
    },
    Chaleira_elétrica: {
        nome: "Chaleira elétrica",
        pix: "00020126330014BR.GOV.BCB.PIX011101663778485520400005303986540550.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***63047399"
    },
    Batedeira: {
        nome: "Batedeira",
        pix: "00020126330014BR.GOV.BCB.PIX0111016637784855204000053039865406100.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***6304482E"
    },
    Bowls: {
        nome: "Bowls",
        pix: "00020126330014BR.GOV.BCB.PIX011101663778485520400005303986540540.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***6304E4CF"
    },
    Escorredor: {
        nome: "Escorredor de louça",
        pix: "00020126330014BR.GOV.BCB.PIX0111016637784855204000053039865406100.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***6304482E"
    },
    Cesto_de_roupa: {
        nome: "Cesto de roupa (Bambu)",
        pix: "00020126330014BR.GOV.BCB.PIX011101663778485520400005303986540580.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***630463E1"
    },
    Tapetinhos: {
        nome: "Tapetinhos",
        pix: "00020126330014BR.GOV.BCB.PIX011101663778485520400005303986540550.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***63047399"
    },
    Kit_organização_bancada: {
        nome: "Kit organização bancada",
        pix: "00020126330014BR.GOV.BCB.PIX011101663778485520400005303986540550.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***63047399"
    },
    toalha: {
        nome: "Jogos de toalha de banho",
        pix: "00020126330014BR.GOV.BCB.PIX011101663778485520400005303986540550.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***63047399"
    },
    cama_Queen: {
        nome: "Jogo cama completo (Queen)",
        pix: "00020126330014BR.GOV.BCB.PIX0111016637784855204000053039865406100.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***6304482E"
    },
    Edredom_Queen: {
        nome: "Edredom (Queen)",
        pix: "00020126330014BR.GOV.BCB.PIX0111016637784855204000053039865406100.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***6304482E"
    },
    Travesseiros: {
        nome: "Travesseiros",
        pix: "00020126330014BR.GOV.BCB.PIX011101663778485520400005303986540550.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***63047399"
    },
    Jogo_Americano: {
        nome: "Jogo Americano",
        pix: "00020126330014BR.GOV.BCB.PIX011101663778485520400005303986540550.005802BR5916ANTONIO E ELAINE6008Parelhas62070503***63047399"
    },
};
function mostrarAnimacao(texto) {
    const div = document.createElement("div");
    div.className = "animacao-sucesso";
    div.innerText = texto;

    document.body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3500);
}

function gerarPix(chave, nome, cidade, valor, descricao) {
    function formatar(valor, tamanho) {
        return valor.length.toString().padStart(2, '0') + valor;
    }

    function crc16(str) {
        let crc = 0xFFFF;
        for (let i = 0; i < str.length; i++) {
            crc ^= str.charCodeAt(i) << 8;
            for (let j = 0; j < 8; j++) {
                crc = (crc & 0x8000) ? (crc << 1) ^ 0x1021 : crc << 1;
            }
        }
        return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
    }

    let payload = 
        "000201" +
        "26" + formatar("0014BR.GOV.BCB.PIX01" + formatar(chave), "") +
        "52040000" +
        "5303986" +
        (valor ? "54" + valor.toFixed(2).replace('.', '').padStart(2, '0') : "") +
        "5802BR" +
        "59" + formatar(nome.substring(0, 25)) +
        "60" + formatar(cidade.substring(0, 15)) +
        (descricao ? "62" + formatar("05" + formatar(descricao.substring(0, 25))) : "") +
        "6304";

    payload += crc16(payload);

    return payload;
}

function mostrarQR(id) {
    const presente = presentes[id];

    if (!presente) {
        alert("Presente não encontrado!");
        return;
    }

    presenteSelecionado = presente.nome;
    mostrarAnimacao("Presente selecionado 🎁");

    const modal = document.getElementById('modal');
    document.getElementById('titulo-presente').innerText = presente.nome;

    const inputPix = document.getElementById('input-pix');
    if (inputPix) inputPix.value = presente.pix;

    const qrImg = document.getElementById('qrcode');
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(presente.pix)}`;

    modal.style.display = 'block';
}
function copiarPix() {
    const inputPix = document.getElementById('input-pix');
    inputPix.select();
    inputPix.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(inputPix.value);
    alert("Código PIX copiado! Agora é só colar no seu banco.");
}

function avisarWhatsApp() {
    if (!nomeUsuario) {
        alert("Por favor, digite seu nome primeiro!");
        return;
    }

    const mensagem = `🎁 *Confirmação de Presente* 🎁
    
        Oi Elaine e Antonio! 💖

        Aqui é *${nomeUsuario}* 😊  
        Acabei de escolher o presente: *${presenteSelecionado}* 🛍️

        Depois confirmo o pagamento via PIX! 💸`;

    const url = `https://wa.me/${seuTelefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        fecharModal();
    }
}

function atualizarCronometro() {
    const dataCasamento = new Date("2026-06-13T00:00:00").getTime();
    const agora = new Date().getTime();
    const diferenca = dataCasamento - agora;

    if (diferenca > 0) {
        document.getElementById("days").innerText = Math.floor(diferenca / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        document.getElementById("hours").innerText = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        document.getElementById("mins").innerText = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        document.getElementById("secs").innerText = Math.floor((diferenca % (1000 * 60)) / 1000).toString().padStart(2, '0');
    }
}
setInterval(atualizarCronometro, 1000);
atualizarCronometro();
