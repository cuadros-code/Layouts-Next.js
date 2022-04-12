# Next

## Static generation
- se genera en tiempo de construcción y se reusa en cada petición

## Server side rendering
- se genera en cada petición

## Layout
- search layout in our Componentes
```
file (_app.**)
const getLayout = Component.getLayout || (page => page) 
return getLayout(<Component {...pageProps} />)
```
- Implement layouts in Components
```
const About = () => {
  return (
    <>
      <h1>About Page</h1>
      </h1>
    </>
  )
}

export default About

About.getLayout = (page) => {
  return (
    <DarkLayout>
      {page}
    </DarkLayout>
  )
}
```

## Docker

1- Crear archivo .dockerignore

1- Crear archivo Dockerfile