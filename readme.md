[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# Stencil Component Starter

Este es un componente de tabla que consume un api, creado en stencil para poder instalarlo y hacerle modificaciones ejecute:
```bash
git clone https://github.com/Wilz22/table-component.git
cd table-component.git
```

and run:

```bash
npm install
npm start
```

Para construir el componente para produccion, ejecute:

```bash
npm run build
```


### Aplicación del componente en tu proyecto

Por ejemplo, tu proyecto se llama `my-design-system`, para usar `my-table` en cualquier sitio, inserta esto en tu index.html:

```html
<script type="module" src="https://unpkg.com/my-design-system"></script>
<!--
To avoid unpkg.com redirects to the actual file, you can also directly import:
https://unpkg.com/foobar-design-system@0.0.1/dist/foobar-design-system/foobar-design-system.esm.js
-->
<my-table api-url="inserta tu api aqui"></my-table>
```

## Ejemplo 2

Por ejemplo, para usar el componente `<my-table />` en un proyecto de react tu puedes importar el componente directamente asi:

```tsx
import 'foobar-design-system/my-component';

function App() {
  return (
    <>
      <div>
        <my-table
          api-url="tu api aqui"
        ></my-table>
      </div>
    </>
  );
}

export default App;
```
