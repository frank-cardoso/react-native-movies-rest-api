# App Lista de Filmes (React Native / Expo)

## Lista de Exercicios

**Instrucoes:**
- Implementar os algoritmos conforme enunciados.
- Publicar o projeto no GitHub como publico.
- Postar o link do projeto no GitHub no AVA.

## Objetivo Principal

Compreender o uso do React Navigation e REST API em React Native / Expo.

## Exercicio Proposto

Seguir o passo a passo dos slides da Aula 10 para implementar um app em React Native usando Expo que demonstre o uso do React Navigation e o consumo de APIs REST.

## Descricao da Atividade

O aplicativo possui tres telas (Home, Details e Movies) utilizando navegacao em pilha com `@react-navigation/native` e `@react-navigation/native-stack`. A tela Movies consome a API REST do TVMaze e exibe os 50 primeiros resultados em uma lista com `FlatList`, mostrando imagem, titulo, generos e nota.

## Tecnologias Utilizadas

- React Native
- Expo
- React Navigation (Stack)
- Fetch API

## Como Executar

1. Instale as dependencias:
   ```bash
   npm install
   ```
2. Inicie o projeto:
   ```bash
   npx expo start
   ```

## Estrutura de Pastas

```
.
├── App.js
├── src
│   ├── components
│   │   └── CustomButton.js
│   └── screens
│       ├── HomeScreen.js
│       ├── DetailsScreen.js
│       └── MoviesScreen.js
└── package.json
```

## Observacoes

- O projeto foi desenvolvido seguindo boas praticas de organizacao e separacao de responsabilidades.
- O consumo de API utiliza `try/catch/finally` para tratamento de erros e controle de loading.
