
<h1 align="center">
Vini Fast Food  - Fullstack Challenge
</h1>
<h4 align="center">
Modelo de Fast food fullstack
</h4>
<div align="center">
Faça seu pedido de forma rápida e com visualização em TEMPO REAL do que está sendo preparado na cozinha e também os pedidos para retirada!
</div>
<br>
<br>


[![banner.png](./public/banner.png)](https://devio-frontend-8tjq.vercel.app/)

<div align="center">

[[Acesse o aplicativo online]](https://devio-frontend-8tjq.vercel.app/)

</div>

<br>

### Principais recursos

- **Acesso rápido e fácil** - comece fazendo o seu pedido sem precisar de cadastros chatos, indicando apenas o nome para retirada e a forma e pagamento.
- **Organização** - Faça seus pedidos de forma simples, podendo alterar ou excluir qualquer item do pedido antes de finalizar, de acordo com o seu gosto.
- **Design responsivo** - Faça seus pedidos em qualquer dispositivo, seja no computador ou celular.
- **Design intuitivo** - Interface simples e intuitiva, com poucos cliques você consegue escolher os itens do pedido e finalizá-lo.
<br>

### Como utilizar:

<img src="./public/Homepage.png" alt="Home" align="center"
width="90%"
style="margin-right:20px; "/>
<br>
<br>
<br>

1. Quando você abrir o app você poderar escolher qualquer um dos produtos disponíveis na sessão Produtos , ou por  Categoria! 
<br>

 2. Clique no produto desejado.
<br>
</br>
<br>
<br>

3. **No Modal de resumo do pedido**, ao clicar em um produto, será exibida uma janela com o resumo  do seu pedido, valor total e opção de adicionar mais itens , e também de deixar uma observação para a cozinha.
<br>
<img src="./public/modalOrder1.png" alt="Home" align="center"
width="90%"
style="margin-right:20px; "/>
<img src="./public/modalOrder2.png" alt="Home" align="center"
width="90%"
style="margin-right:20px; "/>


4. **No final da janela você  terá duas opções continuar comprando ou adicionar ao pedido**, caso escolha continuar, a janela de resumo do pedido será fechada , e você pode continuar adicionando itens normalmente, caso queira finalizar, receberá um aviso que deve finalizar o pedido e prencher o nome para retirada e a forma de pagamento.



5. **Preencha os dados para retirada e a forma de pagamento**, basta preencher os dados de maneira resumida, caso digite `dinheiro` como forma de pagamento, deverá ser preenchido o campo troco, com o valor ou zero.
<br>
<br>
6. **Após preencher o nome para retirada vá para a parte da cozinha para visualizar o seu pedido** - Na aba cozinha você pode acompanhar  todos os pedidos que estão sendo preparados e os pedidos prontos para retirada.

  <img src="./public/telaCozinha.png" alt="Home" align="center"
width="90%"
style="margin-right:20px; "/>
<br>
<br>
`Na aba cozinha também é possível excluir, enviar para retirada ou dar baixa em um pedido em tempo real.` 
<br>
<br>
7. **por fim na aba retirada :**  - É possível visualizar os nomes das pessoas que estão com os pedidos prontos e também os nomes de quem o pedido está sendo preparado.
<br>
<br>

 <img src="./public/telaRetirada.png" alt="Home" align="center"
width="90%"
style="margin-right:20px; "/>

### Tecnologias usadas

**Front-end** _(interface)_**:**
- **[React](https://react.dev/learn)**
- **[Vite](https://vitejs.dev/guide/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Styled-Components](https://styled-components.com/docs)**

**Back-end** _(servidor)_**:**
- **[NodeJS](https://nodejs.org/docs/latest/api/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Swagger](https://swagger.io/)**
- **[Render](https://render.com/)**
<br>

## Server

Ao rodar o projeto, a documentação da API estará disponível em:
_Acesse no seu navegador:_

   - **[Backend Docs](https://devio-backend-challenge.onrender.com/api-docs/)**



## Como rodar o projeto

**_Para rodar o projeto ambos Front-end e Back-end devem estar rodando._**

### **Como rodar o back-end**

1. Clone o repositório do back-end:
    ```bash
    git clone https://github.com/vinisi12363/backend-devio
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Crie o arquivo .env na raiz do projeto e insira as seguintes linhas:
    ```bash
    #database connection
    DATABASE_URL=postgres://zhsjjmhb:eCGtEkMuhvYYkhw_hB6FZUT7HamN0oVB@heffalump.db.elephantsql.com/zhsjjmhb

    #production mode
    MODE=prod

    #server port access used by the front-end
    PORT=4080
    ```

4. Rode o projeto em modo de desenvolvimento:
    ```bash
    # development
    npm run dev

    ```

### **Como rodar o front-end**

1. Clone o repositório do projeto:
    ```bash
    git clone https://github.com/vinisi12363/devio-frontend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Crie o arquivo .env na raiz do projeto e insira a seguinte linha:
    ```bash
    #The same url as the back-end
    VITE_APP_API_URL= https://devio-backend-challenge.onrender.com 
    ```

4. Rode o projeto em modo de desenvolvimento:
    ```bash
    npm run dev
    ```

5. Acesse o projeto em:
    ```bash
    http://localhost:5173/
    ```

6. Para gerar uma build do projeto:
    ```bash
    npm run build
    ```
<br>


