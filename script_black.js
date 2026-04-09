let nomeUsuario = "";
let presenteSelecionado = "";
let seuTelefone = "5584999481693"; // COLOQUE SEU NÚMERO AQUI (DDI + DDD + Número)

function salvarNome() {
    const inputNome = document.getElementById('nome-convidado').value;
    if (inputNome.trim().length > 2) {
        nomeUsuario = inputNome;
        document.getElementById('tela-login').style.display = 'none';
    } else {
        alert("Por favor, digite seu nome completo.");
    }
}

function mostrarQR(link, nomePresente) {
    const modal = document.getElementById('modal');
    document.getElementById('titulo-presente').innerText = nomePresente;
    
    // Aqui está o truque: Adicionamos o nome da pessoa no link do QR Code
    // Assim, no extrato do seu banco, pode aparecer o nome se o link suportar descrição
    const mensagemPix = `Presente: ${nomePresente} - De: ${nomeUsuario}`;
    const linkFinal = `${link}?message=${encodeURIComponent(mensagemPix)}`;

    document.getElementById('qrcode').src = `https://qrserver.com{encodeURIComponent(linkFinal)}`;
    
    modal.style.display = 'block';
    
    // Mensagem de agradecimento personalizada
    console.log("Obrigado, " + nomeUsuario + "!"); 
}

function mostrarQR(chavePix, nome) {
    presenteSelecionado = nome;
    const modal = document.getElementById('modal');
    document.getElementById('titulo-presente').innerText = nome;
    
    // Define o código no campo de copiar
    document.getElementById('input-pix').value = chavePix;
    
    // Gera o QR Code
    document.getElementById('qrcode').src = `https://qrserver.com{encodeURIComponent(chavePix)}`;
    
    modal.style.display = 'block';
}
function copiarPix() {
    const inputPix = document.getElementById('input-pix');
    inputPix.select();
    inputPix.setSelectionRange(0, 99999); // Para celulares
    navigator.clipboard.writeText(inputPix.value);
    alert("Código PIX copiado! Agora é só colar no seu banco.");
}

function avisarWhatsApp() {
    const mensagem = `Oi Elaine e Antonio! Aqui é o(a) ${nomeUsuario}. Acabei de escolher o presente: ${presenteSelecionado} na lista de vocês! 😍`;
    const url = `https://whatsapp.com{seuTelefone}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}
// Opcional: Fecha o modal se o usuário clicar no fundo escuro
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
        const d = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const h = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diferenca % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = d < 10 ? '0'+d : d;
        document.getElementById("hours").innerText = h < 10 ? '0'+h : h;
        document.getElementById("mins").innerText = m < 10 ? '0'+m : m;
        document.getElementById("secs").innerText = s < 10 ? '0'+s : s;
    } else {
        document.getElementById("countdown").innerHTML = "É HOJE! 🎉";
    }
}

setInterval(atualizarCronometro, 1000);
atualizarCronometro();