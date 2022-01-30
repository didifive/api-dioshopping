# Integrando um Backend em Node.js com um Frontend em React para um E-commerce

## Digital Innovation One
### Bootcamp "Inter Frontend Developer"

---
# API Backend em Node.js com PostgreSQL

Projeto desenvolvido com instruções de [Nathally Souza] na trilha de estudo do Bootcamp "Inter Frontend Developer" da [dio.me].

<p align="center">
	<img alt="Repository language count" src="https://img.shields.io/github/languages/count/didifive/api-dioshopping">
    <a href="https://github.com/nathyts/">
		<img alt="Made by Nathally" src="https://img.shields.io/badge/made%20by-Nathally-blue">
	</a>
	<a href="https://www.linkedin.com/in/luis-carlos-zancanela/">
		<img alt="Update by Didi" src="https://img.shields.io/badge/update%20by-Didi-green">
	</a>	
    <a href="https://github.com/didifive/api-dioshopping/commits/master">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/didifive/api-dioshopping?color=blue">
    </a>
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=blue">
</p>

<p align="center">
    <a href="https://nodejs.org/">
        <img alt="Node.js" src="https://img.shields.io/static/v1?color=green&label=Dev&message=NodeJS&style=for-the-badge&logo=Node.js">
        </a>
    <a href="https://www.typescriptlang.org/">
        <img alt="TypeScript" src="https://img.shields.io/static/v1?color=blue&label=Dev&message=TypeScript&style=for-the-badge&logo=TypeScript">
        </a>
</p>

Link da base utilizada neste projeto: [nathyts/api-dioshopping].

Abaixo seguem modificações feitas em relação ao projeto base:

* Foi alterado o banco de dados para PostgreSQL, o banco está hospedado em [ElephantSQL] com plano free;
* As informações de conexão foram colocadas em variáveis de ambiente no arquivo `.env`;
* Criadas mensagens para `.then()` e `.catch()` no `createConnection()` do arquivo `database/index.ts`;
* Além do email e mensagem que já existiam, foi adicionado campo para "nome" na entidade `Message`;
* Incluído na resposta da API o _status code_ para informar se a requisição ocorreu normalmente (status 200) ou se foi gravado novo registro (status 201);
* Criada condicional para checar se email já foi utilizado que retornará o _HTTP status code 403 - Forbidden_ caso realmente já foi usado;
* Criado endpoint para deletar mensagem, assim o cliente (frontend) pode apagar mensagens indevidas.

_Observações para rodar o projeto baixado:_

* _Para instalar os arquivos de dependências do projeto, basta rodar o comando `yarn install` ou `npm install`;_
* _Para o repositório será disposto o arquivo `.env.example` com as variáveis de ambientes utilizadas pelo TypeORM para conexão com o banco, basta informar a url de conexão com o PostgreSQL na variável `TYPEORM_URL` e renomear o arquivo para `.env`;_
* _Para iniciar o servidor localmente, basta rodar o comando `yarn dev` ou `npm run dev`._

---

#### Endpoints criados na API

* Confirmar se servidor está rodando: `GET` `/`
* Listar todas as mensagens: `GET` `/message`
* Criar/salvar nova mensagem: `POST` `/message`
* Deletar mensagem: `DELETE` `/message/delete/{id}`

Para testar localmente os Endpoints, foi adicionado ao projeto uma coleção do Postman que já possuí modelos e testes de requisições HTTP. O arquivo está na pasta [postman](https://github.com/didifive/api-dioshopping/tree/master/postman)

---

#### Deploy in Heroku

Projeto da API hospedado no [Heroku]: [api-dioshopping-didi.herokuapp.com/](https://api-dioshopping-didi.herokuapp.com/)

---

#### Frontend em React para este projeto

* Repositório: [didifive/dioshopping]

---
#### Links Interessantes

* [Netlify]
* [Heroku]
* [Node.js]
* [JavaScript]
* [TypeScript]
* [ElephantSQL]
* [TypeORM]
* [TypeORM Repository API]
* [HTTP Status Code]

[dio.me]: https://dio.me/
[Nathally Souza]: https://github.com/nathyts/
[nathyts/api-dioshopping]: https://github.com/nathyts/api-dioshopping
[didifive/api-dioshopping]: https://github.com/didifive/api-dioshopping
[didifive/dioshopping]: https://github.com/didifive/dioshopping
[Netlify]:https://www.netlify.com/
[Heroku]: https://www.heroku.com/
[Node.js]: https://nodejs.org/
[JavaScript]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction
[TypeScript]: https://www.typescriptlang.org/
[ElephantSQL]: https://www.elephantsql.com/
[TypeORM]: https://typeorm.io/
[TypeORM Repository API]: https://github.com/typeorm/typeorm/blob/master/docs/repository-api.md#treerepository-api
[HTTP Status Code]: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status