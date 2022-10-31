## 🖥️ Projeto

Api de produtos no mysql, um CRUD

## 🧱 Tecnologias

+ NodeJs(Express)
+ TypeScript
+ MySql

## 📜 Explicação

### **/register**

- Método **POST**

- Essa rota vai registrar no banco de dados os dados do produto enviado.

- É preciso enviar os dados do produto pelo body.

Campos   | Valores
--------- | ------
name | Nome do produto
price | Preço do produto, exemplo: 10.50
inventory | Quantidade do produto disponível
description | Descrição do produto

- Não irá aceitar produtos que ja tenham o mesmo nome cadastrado.
---

### **/list**

- Método **GET**

- Vai listar todos os produtos registrados no banco de dados

---

### **/uptade/:id**

- Método **PUT**

- Rota para alterar os dados ja cadastrados

- É preciso enviar o ID específico do produto ja cadastrado pela URL, e os dados a serem alterados. 

Campos   | Valores
--------- | ------
name | Nome do produto
price | Preço do produto, exemplo: 10.50
inventory | Quantidade do produto disponível
description | Descrição do produto
---

### **/delete/:id**

- Método **DELETE**

- Vai remover o produto cadastrado

- É preciso enviar o ID específico do produto ja cadastrado pela URL.

## 🏠 Executar localmente

Clone o projeto

```bash
git clone https://github.com/FabioPenedo/productsbackend
```

Entre na pasta do projeto

```bash
cd productTest
```

Instale as dependências globais

```bash
npm install -g nodemon typescript ts-node
```

Instale as dependências

```bash
npm install
```

Inicie o servidor

```bash
npm run start-dev
```

Feito por Fábio Penedo: 👋 [Entre em contato](https://www.linkedin.com/in/fabiopenedo/)