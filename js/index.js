// Seleção de elementos do DOM
const passwordInput = document.getElementById('passwordInput');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');

// Cores para os estados
const colors = {
    weak: '#ff4d4d',
    medium: '#ffcc00',
    strong: '#64ffda',
    empty: '#8892b0'
};

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let score = 0;

    // Lógica de pontuação
    if (password.length >= 8) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[0-9]/.test(password)) score += 25;
    if (/[!@#$%^&*]/.test(password)) score += 25;

    // Atualização visual da barra
    strengthBar.style.width = score + '%';

    // Lógica de Feedback Textual e Cores
    if (score === 0) {
        strengthText.textContent = "Aguardando entrada...";
        strengthText.style.color = colors.empty;
        strengthBar.style.backgroundColor = 'transparent';
    } else if (score <= 25) {
        strengthText.textContent = "Fraca: Adicione letras e números 🔴";
        strengthText.style.color = colors.weak;
        strengthBar.style.backgroundColor = colors.weak;
    } else if (score <= 75) {
        strengthText.textContent = "Média: Use caracteres especiais 🟡";
        strengthText.style.color = colors.medium;
        strengthBar.style.backgroundColor = colors.medium;
    } else {
        strengthText.textContent = "Forte: Senha robusta detectada 🟢";
        strengthText.style.color = colors.strong;
        strengthBar.style.backgroundColor = colors.strong;
    }
});