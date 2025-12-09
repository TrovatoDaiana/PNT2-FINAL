<template>
  <div class="conversor-container">
    <h1>Conversor a dólares</h1>
    
    <div class="form-group">
      <label>Ingrese monto $</label>
      <input 
        v-model.number="montoPesos" 
        type="number" 
        class="input-field"
        placeholder="1000"
      />
    </div>

    <div class="form-group">
      <label>Valor del dólar en $</label>
      <input 
        v-model.number="cotizacionDolar" 
        type="number" 
        class="input-field"
        :disabled="actualizacionAutomatica"
        placeholder="315"
      />
      <div class="checkbox-group">
        <input 
          type="checkbox" 
          id="actualizacion"
          v-model="actualizacionAutomatica"
        />
        <label for="actualizacion">Actualización automática</label>
      </div>
      <div v-if="actualizacionAutomatica && fechaActualizacion" class="fecha-actualizacion">
        Actualización: {{ fechaActualizacion }}
      </div>
    </div>

    <div class="resultado-group">
      <label>Valor convertido USD $</label>
      <div class="resultado">{{ valorConvertido }}</div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onUnmounted } from 'vue'
import axios from 'axios'

export default {
  name: 'ConversorDolares',
  setup() {
    const montoPesos = ref(0)
    const cotizacionDolar = ref(0)
    const actualizacionAutomatica = ref(false)
    const fechaActualizacion = ref('')
    let intervalo = null

    // Computed property para la conversión reactiva
    const valorConvertido = computed(() => {
      if (!montoPesos.value || !cotizacionDolar.value) return '0'
      const resultado = (montoPesos.value / cotizacionDolar.value).toFixed(2)
      return resultado
    })

    // Función para obtener la cotización del dólar
    const obtenerCotizacion = async () => {
      try {
        const response = await axios.get('https://api.bluelytics.com.ar/v2/latest')
        const valorDolarOficial = response.data.oficial.value_sell
        cotizacionDolar.value = valorDolarOficial
        
        // Actualizar fecha y hora
        const ahora = new Date()
        const fecha = ahora.toLocaleDateString('es-AR')
        const hora = ahora.toLocaleTimeString('es-AR')
        fechaActualizacion.value = `${fecha}, ${hora}`
      } catch (error) {
        console.error('Error al obtener cotización:', error)
      }
    }

    // Watcher para activar/desactivar la actualización automática
    watch(actualizacionAutomatica, (nuevoValor) => {
      if (nuevoValor) {
        // Obtener cotización inmediatamente
        obtenerCotizacion()
        // Configurar intervalo de 2 segundos
        intervalo = setInterval(() => {
          obtenerCotizacion()
        }, 2000)
      } else {
        // Detener el intervalo
        if (intervalo) {
          clearInterval(intervalo)
          intervalo = null
        }
        fechaActualizacion.value = ''
      }
    })

    // Limpiar intervalo al desmontar el componente
    onUnmounted(() => {
      if (intervalo) {
        clearInterval(intervalo)
      }
    })

    return {
      montoPesos,
      cotizacionDolar,
      actualizacionAutomatica,
      fechaActualizacion,
      valorConvertido
    }
  }
}
</script>

<style scoped>
.conversor-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2em;
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #2c3e50;
  font-weight: 500;
  font-size: 14px;
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.input-field:focus {
  outline: none;
  border-color: #42b983;
}

.input-field:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
  opacity: 0.7;
}

.checkbox-group {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox-group input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.checkbox-group label {
  margin: 0;
  cursor: pointer;
  font-size: 14px;
}

.fecha-actualizacion {
  margin-top: 8px;
  font-size: 13px;
  color: #666;
  font-style: italic;
}

.resultado-group {
  margin-top: 30px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.resultado-group label {
  margin-bottom: 12px;
}

.resultado {
  font-size: 2em;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}
</style>