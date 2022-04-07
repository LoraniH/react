# Conceitos importantes
 
## JavaScript

### `var` vs `let` vs `const`

Em 2015, as keywords `let` e `const` foram introduzidas ao JS, e com elas vieram novos padrões de como declarar variáveis da forma mais eficiente e segura. Ambos, `var` e `let` declaram uma variável, a diferença entre elas são regras de escopo, `let` restringe o uso da variável em um escopo mais fechado que `var`, o que ajuda a diminuir bugs, na maioria dos casos. [Veja esse artigo pra mais informações](https://blog.schoolofnet.com/diferenca-entre-var-e-let-no-javascript)

A idéia é: use `const` sempre que você criar uma variável que não precise mudar de valor depois, ou seja, uma constante; use `let` para as variáveis propriamente ditas

### Convenções

Como em toda linguagem, os programadores JS usam algumas convenções pra deixar o código com um certo padrão. Algumas empresas adotam seus próprios estilos de formatação, como Google, AirBnB, etc. Mas em geral, usamos camel case para variáveis, funções e métodos de classes, e pascal case para classes.

#### Camel case

Em camel case, se usa a primeira letra em minúsculo e as demais iniciais das palavras seguintes em maiúsculo. Exemplo:

```js
const thisIsMyVariable = ":)";


function myFunction() { }
```

#### Pascal case

Em pascal case, se usa todas as inicias em maiúsculo. Exemplo:

```js
class MyFirstClass { }
```

### Objeto

Em JS, chamamos de objeto a seguinte estrutura
```js
const meusAutomoveis = {
   "carro": 1,
   "bicicleta": 2,
   "moto": 1
}
```

Chamamos de key (ou chave) a string que antedece os dois pontos, e de value (ou valor) o valor após os dois pontos. O valor pode ser de qualquer tipo, string, number, array, ou até mesmo outro objeto.

### Desestruturação (destructuring)

Destructuring tem como objetivo tornar o código mais limpo, criando variáveis de forma mais fácil e enxuta.

Supondo que temos a seguinte array

```js
const array = ["um", "dois", " três"]
```

Para criar uma variável para cada elemento da array, eu teria que

```js
const primeiro = array[0]
const segundo = array[1]
const terceiro = array[2]
```

Com destructuring, posso simplesmente usar

```js
const [primeiro, segundo, terceiro] = ["um", "dois", " três"]
```

O conceito serve não só para arrays, mas também para objetos, usando chaves, ao invés de colchetes:

```js
const person = { 
   id: 1234567,
   name: "joaozinho123",
   email: " joaozinho123@gmail.com"
}
const { id, name } = person
```
