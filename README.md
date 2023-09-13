PROJETO BACK-END
================

# Para iniciar o projeto (nome: back-end)
`npx @aka-demy/create-express-app`
* _Install package...?:_ y
* _Name:_ back-end
* _Language:_ JavaScript
* _Template engine:_ None
* _Package manager:_ npm

# Mudando para a pasta do projeto
`cd back-end`

# Atualizando pacores vulneráveis com atualizações de segurança
`npm audit fix --force`

# Instalando o Prisma como dependência de desenvolvimento
`npm install prisma --save-dev`

# Inicializando o Prisma com conector para MongoDB
`npx prisma init --datasource-provider mongodb`
* Instale a extensão Prisma no Visual Studio Code

# Adicionando o Prisma Client ao projeto
`npm install @prisma/client`

# Gerando o cliente do Prisma
`npx prisma generate`
* Precisa ser executado **toda vez** que o arquivo `schena.prisma` for alterado

# Exibindo os dados cadastrados com o Prisma Studio 
`npx prisma studio`
Deve ser executado em um segundo terminal, enquanto o projeto está sendo executado no primeiro
