# Kodemia APIv1

## JavaScript Kodemia generacion 33

Proyecto creado en modulo backend 

# [kodemia](thhp://kodemia.mx)

### Para esta api se usaron las dependecias :

- bcryptjs
- cors
- dotenv
- express
- http-errors
- jsonwebtoken
- mongoose
- nodemon

## El proceso a seguir es:

```
npm install
```

```
run dev mode
```

```
npm run dev
```

## Esta api hace el uso de las siguientes entidades:
 
# Users 

### con los atributos :


- Name
  - firstName
  - lastName
- email
- password
- createAt 
- updateAt



# Post

### con los atributos :

- title
- image
- body
- user (referente)
- createAt 
- updateAt


### Endpoints:

- GET
  - user
  - post

- POST 
  - user
  - post 
  - login
- PATCH
- DELETE

# Example.env

### carpeta que muestra las llaves necesarias.



