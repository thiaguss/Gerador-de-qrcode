import prompt from "prompt";
import mainPrompt from "./prompts-schema/promptMain.js"
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
import chalk from "chalk"; // Importar chalk para mensagens de erro

async function main() {
  // 1. Centralizar prompt.start() aqui
  prompt.start();

  prompt.get(mainPrompt, async function (err, choose) {
    if (err) {
      console.error(chalk.red("Erro ao obter a escolha do usuário:", err));
      return;
    }

    // 3. Tratamento de Erros Mais Abrangente com try-catch
    try {
      // 2. Estrutura if / else if
      if (choose.select == 1) {
        console.log("Escolheu o QRCODE");
        await createQRCode();
      } else if (choose.select == 2) {
        console.log("Escolheu o PASSWORD");
        await createPassword();
      } else {
        console.log(chalk.red("Escolha inválida. Por favor, escolha 1 para QRCODE ou 2 para PASSWORD."));
      }
    } catch (error) {
      console.error(chalk.red("Ocorreu um erro durante a execução:", error.message));
    }
  });
}

main();