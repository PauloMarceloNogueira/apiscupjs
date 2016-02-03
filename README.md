# README #

# SCUP API JS #

Middleware para acesso a API do Scup


# DEV #

## Requirements ##
**Atenção**: Somente testado em sistemas linux/Mac

  - Instalação do [Node.js]
  - Chave de acesso da API scup
    ```

## Installation ##
git clone https://github.com/PauloMarceloNogueira/apiscupjs.git
cd apiscupjs
npm install


## Config ##
Entrar no /src/settings.js 
Trocar a publickey e a privatekey

## Usage ##
Acessar localhost:8080/<action>
**Monitorings**: Exibir monitoramentos
  localhost:8080/monitorings

**Searches**: Exibir Buscas do monitoramento
  localhost:8080/searches/<monitamento_id>

**Mentions**: Exibir itens de uma busca
  localhost:8080/mentions/<monitoramento_id>/<busca_id>	