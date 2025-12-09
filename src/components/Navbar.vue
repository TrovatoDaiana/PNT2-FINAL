<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
        <div class="container-fluid justify-content-center">
            <RouterLink class="navbar-brand" to="/">Inicio</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/index">Indice</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/preguntas">Preguntas</RouterLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'Navbar',
    components: {
        RouterLink
    }
};
</script>

<style scoped>
.navbar {
    background: linear-gradient(90deg, #8c3bdc, #7031b4);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
}

.navbar-brand {
    font-size: 1.5rem;
    color: #f3e8ff;
    font-weight: bold;
    text-transform: uppercase;
}

.navbar-brand:hover {
    color: #d6b3ff;
}

.nav-link {
    color: #f3e8ff;
    font-size: 1.2rem;
    margin: 0 15px;
    transition: color 0.3s ease, transform 0.2s ease;
}

.nav-link:hover {
    color: #d6b3ff;
    transform: translateY(-1px);
}

.nav-item {
    text-align: center;
}

.container-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbar-toggler {
    border-color: #d6b3ff;
}

.navbar-toggler-icon {
    background-color: #b17bff;
}
</style>