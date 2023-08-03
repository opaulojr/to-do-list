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
- Ao usuário inserir um texto no input `task-text-input` e pressionar **ENTER** ou clicar no botão `add-task-btn`, é criada a chave `tasks` no **localStorage** no formato `[{"text":"texto inserido pelo usuário"}]`;
- Para cada objeto presente no **localStorage** é criado um elemento `li` dentro de `tasks-list`, ou seja, renderizando as tarefas que o usuário inseriu;

</details>
