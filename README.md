# Desafio Front-end - Consultório Médico

Desenvolver aplicações para a área da Saúde é sempre um desafio. A complexidade
e a dinâmica do negócio e os usuários leigos, exigem soluções simples e
objetivas, porém, que atendam toda a complexidade que envolve a área. Tendo
telas intuitivas e de fácil utilização, que abstraem a complexidade do negócio e
que gerem valor ao usuário final, agilizando o seu dia a dia, para que este
possa focar no paciente.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [Getting started](#getting-started)
- [My process](#my-process)
  - [Decisions](#decisions)
  - [Organization](#organization)
  - [Built with](#built-with)
  - [Continued Development](#continued-development)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

O desafio consiste em esenvolver o front-end da solução proposta, para um WebApp
de consultório médico, prevendo as seguintes telas:

1. Área de trabalho com dados estatísticos do consultório, como: Número de
   agendamentos do dia, número de pacientes atendidos no dia, faturamento do
   dia, agenda do dia e avisos/lembretes;
2. Rotina de agendamento de pacientes, na qual apresenta a agenda dos médicos e
   possibilite o agendamento de pacientes
3. Rotina de consulta de pacientes agendados e atendidos, apresentando os dados
   do paciente, do agendamento, do médico e dos valores cobrados;

#### Funcionalidades

- [x] Apresentando dados estatísticos pontuais para auxiliar na gestão do dia a
      dia do consultório.
- [x] Visão gerencial da agenda de serviços.
- [x] Gerenciar as agendas dos médicos do consultório, possibilitando incluir,
      alterar, cancelar ou transferir agendamentos.
- [x] Rotina de consulta de pacientes agendados e atendidos, apresentando os
      dados do paciente, do agendamento, do médico e dos valores cobrados.
- [ ] Indisponibilizar um período no qual o médico em questão estará ausente.

### Links

- [Remote repository](https://github.com/trelcray/advice-health)

- [Live preview](https://advice-health-trelcray.vercel.app)

### Getting started

Você pode utilizar a aplicação disponível na URL de _live preview_ acima. Porém,
caso queira construí-la em sua máquina:

#### Prerequisites

Certifique-se de que sua máquina possui Node 18+ instalado e o gerenciador de
pacotes `npm`.

Certifique-se de ter instalado a extensão do ESlint.

#### Installation

Clone o repositório do projeto para sua máquina.

Using HTTPS:

```bash
https://github.com/trelcray/advice-health.git
```

Using GitHub CLI:

```bash
gh repo clone trelcray/advice-health
```

Navegue para o diretório recém-baixado:

```bash
cd advice-health
```

Instale as dependências do projeto utilizando `npm`:

```bash
npm install
```

#### Development

Para executar o projeto em modo de desenvolvimento, execute o comando:

```bash
npm run dev
```

Isso irá iniciar o servidor de desenvolvimento no endereço
`http://localhost:3000`. Abra seu navegador e cole o endereço para visualizar a
aplicação.

#### Building for Production

Para construir o projeto para produção, execute o comando:

```bash
npm run build
```

Isso irá gerar uma versão otimizada e minificada da aplicação na pasta `.next`.

#### Running in Production Mode

Após a construção do projeto, você pode iniciar um servidor em modo de produção
executando o comando:

```bash
npm run start
```

Isso irá iniciar o servidor de produção no mesmo endereço
`http://localhost:3000`. Abra seu navegador e cole o endereço para visualizar a
aplicação otimizada.

## My process

### Decisions

Primeiramente, analisei o escopo do projeto e seus requisitos. Após cuidadosa
avaliação, decidi quais tecnologias utilizar e criei a configuração inicial do
projeto, incorporando tudo o que havia planejado utilizar.

Em seguida, comecei a desenvolver os componentes e a parte estática da
aplicação. Posteriormente, implementei algumas funcionalidades necessárias
utilizando dados falsos. Após concluir essa etapa, realizei o deploy da
aplicação.

### Organization

O Next.js é um framework que possui um padrão de organização de pastas próprio,
o qual passou por uma importante alteração na versão 13.4. No meu projeto, sigo
fielmente esses padrões e utilizo a pasta "src" para conter os arquivos
específicos do projeto. Além disso, opto por separar as pastas de acordo com as
responsabilidades dos componentes. Qualquer recurso que não faça parte do
projeto é colocado na raiz do projeto, exceto a pasta "public".

### Built with

#### Technologies, libraries and tools

- React.js
- Next.js
- TypeScript
- Tailwind CSS
- Tailwind-merge
- Radix UI
- Shadcn UI
- Husky
- Prettier
- ESlint
- Clsx
- Lucide-React
- React-Hook-Form
- Zod
- Date-fns
- Class-Varience-Authorithy
- Redux Toolkit
- Tanstack React-Table
- React-Day-Picker
- React-Countup
- React-Big-Calendar
- Axios

#### Techniques, concepts and more

- Mobile-first workflow
- Semantic HTML5 markup
- Flexbox / Grid
- Hosted on Vercel

### Continued development

1. SEO 100%.

2. Telas de carregamento, Erros...

3. tests.

4. Implementar o restante das funcionalidades.

### What I learned

1. Que é importante desenvolver a lógica de programação para ser um bom
   desenvolvedor, pois existem desafios que não podem ser superados sem um bom
   nivel de raciocínio lógico.

2. Devo aprender a trabalhar com projetos de entregas rápidas e funcionais,
   focando apenas no essencial e entregando o que o cliente precisa.

3. A trabalhar com mocks, encontrar melhores maneiras de trabalhar com ele.

4. A dificuldade de elaborar uma solução com informações escassas.

5. O react big calendar não funciona corretamente durante o build.

### Useful resources

1. [Favicon Generator](https://favicon.io/favicon-converter/)

## Author

- GitHub - [trelcray](https://github.com/trelcray)

- LinkedIn - [Thalis Zambarda](https://www.linkedin.com/in/thalis-zambarda/)

## Acknowledgments

Agradeço a [AdviceHealth](https://advicehealth.com.br/) pela oportunidade de
demonstrar minhas habilidades na prática. Estou entusiasmado em poder mostrar o
que sou capaz de fazer e espero que essa experiência possa contribuir para o
processo de seleção.
