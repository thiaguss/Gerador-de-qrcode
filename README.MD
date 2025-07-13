# 🚀 Gerador de QR Codes com Node.js do Desafio da DIO

Este projeto é um gerador de QR Codes robusto, desenvolvido em Node.js. Ele oferece a capacidade de criar QR Codes de forma programática, com opções para configurar o conteúdo e, potencialmente, outras características, como a geração de senhas associadas.

## ✨ Funcionalidades Principais

- **Geração de QR Codes**: Cria QR Codes a partir de dados fornecidos, adequado para links de produtos, informações de pagamento, etc.
- **Gerenciamento de Senhas**: Inclui lógica para criação e manipulação de senhas, sugerindo que pode haver QR Codes protegidos ou com dados de acesso.
- **Interface por Linha de Comando**: Utiliza prompts para interação com o usuário, tornando-o fácil de usar em ambientes de terminal.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript para back-end.
- **npm**: Gerenciador de pacotes padrão do Node.js, utilizado para instalar e gerenciar as dependências do projeto.
- **giz**: Uma biblioteca para colorir textos no terminal.
- **prompt**: Uma biblioteca para interagir com o usuário via linha de comando.
- **qrcode-terminal**: Uma biblioteca para gerar e exibir QR Codes diretamente no terminal.
- **(Outras bibliotecas implícitas, como `dotenv` para variáveis de ambiente, se utilizadas.)**

## ⚙️ Configuração do Projeto

Siga os passos abaixo para clonar o repositório, instalar as dependências e configurar o ambiente para executar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de que você tem o [Node.js](https://nodejs.org/en/) (que já inclui o npm) instalado em sua máquina.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/diegovitorportella/Criando-um-Gerador-de-QR-Codes-para-E-commerces-com-Node.js.git](https://github.com/diegovitorportella/Criando-um-Gerador-de-QR-Codes-para-E-commerces-com-Node.js.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Criando-um-Gerador-de-QR-Codes-para-E-commerces-com-Node.js
    ```
3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

### Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configurações sensíveis ou que podem variar entre ambientes (desenvolvimento, produção). Crie um arquivo chamado `.env` na **raiz** do seu projeto (na mesma pasta onde está o `package.json`).

Baseado na lógica de `src/services/qr-code/password/handle.js`, seu projeto parece usar variáveis de ambiente para definir as regras de caracteres permitidos e talvez o comprimento da senha. Configure-as no seu arquivo `.env` da seguinte forma:

```env
UPPERCASE_LETTERS="true"
LOWERCASE_LETTERS="true"
NUMBERS="true"
SPECIAL_CHARACTERS="true"
PASSWORD_LENGTH=10
```
