async function permittedCharacters() {
  let permitted = [];

  if (process.env.UPPERCASE_LETTERS === "true") {
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (process.env.LOWERCASE_LETTERS === "true") {
    permitted.push(..."abcdefghijklmnopqrstuvwxyz");
  }
  if (process.env.NUMBERS === "true") {
    permitted.push(..."0123456789");
  }
  if (process.env.SPECIAL_CHARACTERS === "true") {
    permitted.push(..."!@#$%^&*()-_");
  }

  return permitted;
}

async function handle() {
  let characters = [];
  let password = "";

  // 5. Validação de PASSWORD_LENGTH
  let passwordLength = parseInt(process.env.PASSWORD_LENGTH, 10);
  if (isNaN(passwordLength) || passwordLength <= 0) {
    console.warn(chalk.yellow("PASSWORD_LENGTH inválido no .env. Usando comprimento padrão de 8."));
    passwordLength = 8; // Valor padrão
  }

  characters = await permittedCharacters();

  // Se não houver caracteres permitidos, a senha não pode ser gerada
  if (characters.length === 0) {
    console.error(chalk.red("Nenhum tipo de caractere permitido para gerar a senha. Verifique seu arquivo .env."));
    return ""; // Retorna uma string vazia ou lança um erro, dependendo do comportamento desejado
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length)
    password += characters[index];
  }

  return password;
}

export default handle;