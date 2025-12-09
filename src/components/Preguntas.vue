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
              <td>Pregunta 1 hola como estas</td>
              <td>Respuesta 1</td>
            </tr>
            <tr>
              <td>Pregunta 2</td>
              <td>Respuesta 2</td>
            </tr>
            <tr>
              <td>Pregunta 3</td>
              <td>Respuesta 3</td>
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
