# todo-app
After  I started using NuxtJS last year, I discovered how much this framework is powerful and full of options and properties that made creating web apps much easier. The most important thing that you need to know about this framework is that NuxtJS supports SSR (server side rendering), which means that NuxtJS requires a server that renders a webpage and passes it to the VueJS client-side (all that is implemented by NuxtJS behind scenes). However, if you try to implement complicated operations like accessing to a database or having push notifications channels you will find difficulties specially if you try to do it without requesting external REST API. This pushes us to ask the question : 
Is it possible to create a REST API with NuxtJS ? 
The answer is : YES. By using the serverMiddleware property of NuxtJS, creating a REST API with NuxtJS is totally possible. Through this tutorial, we will discover how to achieve that.

Read keep reading at : https://medium.com/@fs_bouhenniche/is-it-possible-to-create-a-rest-api-with-nuxtjs-230685fbd2bc
## DEVELOPEMENT AND BUILD SETUP
The project can be served by docker-compose : 
```bash
# build and run project by docker-compose in interactive mode
$ docker-compose -f docker-compose.development.yml up --build

# run project only
$ docker-compose -f docker-compose.development.yml up 

# run project in detached mode
$ docker-compose -f docker-compose.development.yml up -d
```
Or without using docker-compose, in this case we should setup database connection correctly.
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
