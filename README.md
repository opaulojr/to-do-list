# Projeto To Do List

Este é o meu 6º projeto durante minha jornada na Trybe!

## Estrutura do Repositório

- A pasta `src` contém todo o código;

## Funcionalidades Implementadas

## Criado um input e um botão na página

<details>
<summary><strong>Foi criado um input de texto e um botão que serão usados para a criação das tasks</strong></summary><br />

- A pagina possui uma tag `header` que possui um elemento `h1` com o `id` `title`;
- O elemento `title` possui o texto **My To Do List**;
- A pagina possui um `input` do tipo `text` com o `id` `task-text-input`;
- A pagina possui um `button` com o `id` `add-task-btn`;

</details>

## Implementado a criação e exibição de tarefas na página

<details>
<summary><strong>Implementado a função de criar uma nova tarefa e exibi-la na página</strong></summary><br />

- A pagina possui uma `div` com o `id` `content`, dentro dessa `div` há uma lista do tipo `ol` com o `id` `tasks-list`;
- Ao usuário inserir um texto no input `task-text-input` e pressionar **ENTER** ou clicar no botão `add-task-btn`, é criada a chave `tasks` no **localStorage** no formato `[{"text":"texto inserido pelo usuário", "completed": false}]`;
- Para cada objeto presente no **localStorage** é criado um elemento `li` dentro de `tasks-list`, ou seja, renderizando as tarefas que o usuário inseriu na ordem que foram criadas;
- Ao tentar inserir uma nova tarefa sem nenhum carácter, é exibido um erro abaixo do input `task-text-input` com o texto **Type something!**;
- Ao tentar inserir uma tarefa que já existe, é exibido um erro abaixo do input `task-text-input` com o texto **This task already exist**;

</details>

## Implementado a função de marcar uma tarefa como feita

<details><summary><strong>Ao clicar duas vezes em uma tarefa ela é marcada como feita</strong></summary><br />

- As tarefas são criadas com a propriedade `completed` com o valor **false** dentro do **localStorage** e sem a classe `task-completed`;
- Após uma tarefa receber um clique duplo ela passa a ter a classe `task-completed` e a propriedade `completed` é alterada para **true** dentro do **localStorage**;
- Após uma tarefa receber um segundo duplo clique, a classe `task-completed` é removida e o valor de `completed` volta a ser **false**;

</details>
