# back-end-project

Clear instructions to run the application locally.
--------------------------------------------------->
http://localhost:5000/api/users

<------------------------------------------->START THE PROJECT SETUP------------------------------------------->
steps--------------------------------->
0.let's make a project name, open cmd and code .
----------------------------------------------------->
1.npm init -y
2.npm install express
3.npm install mongoose --save
4.npm install typescript --save-dev
5.npm i cors
6.npm i dotenv
7.set up-----> mongoDB Atlas database
8.tsc -init
9.and now, import express from 'express' and install, `npm i --save-dev @types/express`
10.and now, import cors form 'cors' and install, `npm i --save-dev @types/cors`

------------------>
11.add tsconfig.json
---------------------------->
"include": ["src"], // which files to compile
"exclude": ["node_modules"], // which files to skip
------------------------------------------------------>
12.and now install ----> npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

-------------------------->
13.npx eslint --init
14.and now some question,
-->y
-->enter button press
-->enter button press
-->select, None of these and enter
-->Yes
--> select, node
-->select, JSON
-->yes
-->select, npm

15.and now, set the rules:
--------------------------->
"rules": {
"@typescript-eslint/no-unused-vars": "error",
"@typescript-eslint/consistent-type-definitions": ["error", "type"],
},
---------------------------->
--> 16. and now, create file:
------------------------------>
.eslintignore and add,
----------------->
node_modules
dist

-->17.add package.json
{
"scripts": {
"lint": "eslint src --ignore-path .eslintignore --ext .ts"
},
}
18.npx eslint src --fix
or, npm run lint --fix

And now install Prettier
------------------------------->
-->19. npm install --save-dev prettier
-->20. and now create file-----> .prettierrc.json
and add,
---------------------------------------------->
{
"semi": true,
"singleQuote": true,
}
-->21.npx prettier --write src/index.ts
-->22. add,
------------->
// package.json

{
"scripts": {
"dev": "tsc --watch",
"lint": "eslint --ext .js,.ts .",
"format": "prettier --ignore-path .gitignore --write \"\*_/_.+(js|ts|json)\""
},
}

-->23. npm run prettier

-->24. and now setting,
--------------------->
// settings.json
{
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
}

-->25. install VS extention. 1. ESLint, 2. Prettier
-->26. VS Code reload: Shift + Ctrl + p and Developer: Reload Window
-->27. npm install --save-dev eslint-config-prettier
-->28. add ,
.eslintrc.json
-------------------->
HERE: "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],

-->29. npm i ts-node-dev --save-dev
-->30. ts-node-dev --respawn --transpile-only server.ts

<------------------------------------------->COMPETE THE PROJECT SETUP------------------------------------------->
-->create src>app.ts
-------------------------->
express, express.json, cors,
and call: user.route.ts -----> UserRoutes

-->create src>server.ts
-------------------------->
import mongoose , config.database_url, config.port

-->create src>app>config>index.ts
----------------------------------->
import --> dotenv, path
export -->
port: process.env.PORT,
database_url: process.env.DATABASE_URL,

------------------------------------->
1.create src>app>modules>user>
user.interface.ts
------------------->
2.create src>app>modules>user>
user.model.ts
-------------------->
3.create src>app>modules>user>
user.route.ts
-------------------->
Endpoint: POST /api/users ------> successfully created post.

4.create src>app>module>user>
user.controller.ts
-------------------->
5.create src>app>modules>user>
user.service.ts
-------------------->

NOW HERE IS VALIDATOR WITH JOI
------------------------------>
1.npm i validation
2.npm i -D @types/validator
3.npm install joi --save-dev
