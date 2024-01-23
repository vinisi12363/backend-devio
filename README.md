Certamente! Aqui está o conteúdo do README em formato Markdown:

```markdown
# Sistema de Pedidos fast food API

## Introdução

Esta API fornece endpoints para operações relacionadas a produtos, pedidos, e interações com uma impressora térmica. Faz parte do desafio Fullstack da empresa Devio.
caso queria visulalizar 

## Endpoints

### Produtos

#### Obter Lista de Produtos

- **Endpoint:** `/products`
- **Método:** GET
- **Descrição:** Rota responsável por obter a lista de produtos disponíveis.
- **Resposta de Sucesso (200):**
  - **Exemplo:**
    ```json
    [
      {
        "id": 1,
        "nome": "Produto A",
        "preco": 10.99,
        "imagem": "imagemPng",
        "codigo": "123456",
        "descricao": "Descrição do Produto A",
        "quantidade": 1
      },
      {
        "id": 2,
        "nome": "Produto B",
        "preco": 9.99,
        "imagem": "imagemPng",
        "codigo": "12345",
        "descricao": "Descrição do Produto B",
        "quantidade": 1
      }
    ]
    ```

### Pedidos

#### Criar Novo Pedido

- **Endpoint:** `/orders`
- **Método:** POST
- **Descrição:** Cria um novo pedido.
- **Corpo da Requisição:**
  - **Exemplo:**
    ```json
    {
      "nomecliente": "Nome do Cliente",
      "items": [
        {
          "produtoId": 1,
          "quantidade": 2
        },
        {
          "produtoId": 2,
          "quantidade": 1
        }
      ]
    }
    ```
- **Resposta de Sucesso (201):**
  - **Cabeçalho:**
    - `Location`: URL para acessar o pedido recém-criado.

#### Obter Todos os Pedidos

- **Endpoint:** `/orders`
- **Método:** GET
- **Descrição:** Obtém todos os pedidos.
- **Parâmetros da Requisição:**
  - `orderId` (Obrigatório): ID do pedido.
- **Resposta de Sucesso (200):**
  - **Exemplo:**
    ```json
    {
      "id": 1,
      "nomecliente": "Nome do Cliente",
      "status": "preparando",
      "products": [
        {
          "produto_id": 1,
          "nome": "produto",
          "quantidade": 21,
          "imagem": "imagemPng",
          "preco": 10.99,
          "descricao": "Descrição do Produto",
          "codigo": "123456"
        }
      ],
      "total": 15.99,
      "numeropedido": 1,
      "metodopagamento": "dinheiro"
    }
    ```
- **Resposta de Erro (404):**
  - "Pedido não encontrado"

#### Cancelar Pedido

- **Endpoint:** `/orders`
- **Método:** DELETE
- **Descrição:** Cancela um pedido.
- **Parâmetros da Requisição:**
  - `orderId` (Obrigatório): ID do pedido.
- **Resposta de Sucesso (204):**
  - "Pedido cancelado com sucesso"
- **Resposta de Erro (404):**
  - "Pedido não encontrado"

#### Atualizar Status do Pedido

- **Endpoint:** `/orders`
- **Método:** UPDATE
- **Descrição:** Atualiza o status de um pedido.
- **Parâmetros da Requisição:**
  - `orderId` (Obrigatório): ID do pedido.
  - `status` (Obrigatório): Novo status do pedido.
- **Resposta de Sucesso (200):**
  - "OK"
- **Resposta de Erro (404):**
  - "Pedido não encontrado"

### Impressora Térmica

#### Imprimir Pedido na Impressora Térmica

- **Endpoint:** `/printer`
- **Método:** POST
- **Descrição:** Imprime um pedido na impressora térmica.
- **Corpo da Requisição:**
  - **Exemplo:**
    ```json
    {
      "orderId": 1
    }
    ```
- **Resposta de Sucesso (200):**
  - "Impressão concluída com sucesso"
- **Resposta de Erro (400):**
  - "Erro ao imprimir o pedido"

## Esquemas

### Pedido

```json
{
  "id": 1,
  "nomecliente": "Nome do Cliente",
  "status": "preparando",
  "products": [
    {
      "produto_id": 1,
      "nome": "produto",
      "quantidade": 21,
      "imagem": "imagemPng",
      "preco": 10.99,
      "descricao": "Descrição do Produto",
      "codigo": "123456"
    }
  ],
  "total": 15.99,
  "numeropedido": 1,
