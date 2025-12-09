<template>
  <section class="py-4">
    <div class="container">
      <h1 class="mb-4">Preguntas y respuestas</h1>
      <div class="table-responsive">
        <table class="table table-bordered align-middle">
          <thead class="table-light">
            <tr>
              <th scope="col" class="w-50">Pregunta</th>
              <th scope="col" class="w-50">Respuesta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pregunta 1: Cual es la forma correcta de registrar el evento de click en VueJS?</td>
              <td>C . @click y F . v-on:click</td>
            </tr>
            <tr>
              <td>Pregunta 2: npm create vue@latest se utiliza para:</td>
              <td>B . Crear un aplicación Vue</td>
            </tr>
            <tr>
              <td>Pregunta 3: El modificador trim recorta...</td>
              <td>C . Los espacios adelante y atrás en una entrada de texto</td>
            </tr>
            <tr>
              <td>Pregunta 4: La propiedad routes en la definición del router de Vue.js tiene como función:</td>
              <td>A . Definir el path y el componente activo para esa ruta</td>
            </tr>
            <tr>
              <td>Pregunta 5: Las actions en Pinia contienen...</td>
              <td>B . La lógica para cambiar el estado global de la aplicación</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PreguntasPage'
};
</script>

<style scoped>
.container {
  max-width: 960px;
}
h1 {
  text-align: center;
  color: rgb(90, 3, 172);
}
</style>
