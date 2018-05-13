# EB Challenge
---
# Instruções
Clone o repositório
```sh
$ git clone https://github.com/mumumilk/eb-challenge.git
```
Na pasta do repositório, instale as dependências
```sh
$ npm install
```
Altere o ambiente de desenvolvimento com as variáveis necessárias
```javascript
export const environment = {
  production: false,
  api_url: 'https://*****.eadbox.com/api', //sua api EadBox
  api_token: '******' //seu token EadBox
};
```
Inicie o projeto
```sh
$ ng s -o
```