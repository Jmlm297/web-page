<template>
  <header class="bg-indigo-800 text-white font-bold p-4 rounded-md h-15 w-70 text-xl">

    <nav>
      <ul
        class="flex flex-row space-x-5 justify-center text-lg shadow-cyan-500/50 transition ease-in-out delay-150 hover:scale-110">

        <li>
          <button class="rounded-full bg-indigo-500 px-4 hover:opacity-75 transition-opacity">
            Inicio
          </button>
        </li>
        <li>
          <button class="rounded-full bg-indigo-500 px-4 hover:opacity-75 transition-opacity">
            Final
          </button>
        </li>
        <li>
          <button class="rounded-full bg-indigo-500 px-4 hover:opacity-75 transition-opacity">
            Procesos
          </button>
        </li>
        <li>
          <button class="rounded-full bg-indigo-500 px-4 hover:opacity-75 transition-opacity">
            Salir
          </button>
        </li>

      </ul>

    </nav>
  </header>

  <article class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-gray-900 mb-6 text-center">Un Título Interesante</h1>

    <div class="space-y-6 text-gray-600 leading-relaxed">
      <p class="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <p class="text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
      </p>

      <blockquote class="border-l-4 border-indigo-500 pl-4 italic my-8">
        "La vida es como montar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote."
        <footer class="text-sm mt-2">- Albert Einstein</footer>
      </blockquote>

      <p class="text-lg">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      </p>
    </div>
  </article>

  <!-- Sidebar -->
  <aside
    class="fixed right-0 top-0 h-full w-72 bg-white shadow-lg text-gray-800 p-8 overflow-y-auto border-l border-gray-200">
    <div class="mb-10">
      <h2 class="text-2xl font-bold mb-6 text-indigo-600">Menu Principal</h2>
      <ul class="space-y-3">
        <li>
          <a href="#" class="flex items-center px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-500 group-hover:text-indigo-600"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Inicio
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-500 group-hover:text-indigo-600"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Perfil
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-500 group-hover:text-indigo-600"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Configuración
          </a>
        </li>
      </ul>
    </div>

    <div class="border-t border-gray-200 pt-6">
      <h3 class="text-xl font-semibold mb-4 text-indigo-600">Enlaces Útiles</h3>
      <ul class="space-y-3">
        <li>
          <a href="#" class="flex items-center px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-500 group-hover:text-indigo-600"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Documentación
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-500 group-hover:text-indigo-600"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Soporte
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <!-- Footer -->
  <footer class="bg-white border-t border-gray-200 py-12 mt-16">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 class="text-lg font-semibold text-indigo-600 mb-4">Sobre Nosotros</h4>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore.</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-indigo-600 mb-4">Enlaces Rápidos</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">Inicio</a></li>
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">Servicios</a></li>
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">Productos</a></li>
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-indigo-600 mb-4">Contacto</h4>
          <ul class="space-y-2 text-gray-600">
            <li>Email: info@ejemplo.com</li>
            <li>Teléfono: (123) 456-7890</li>
            <li>Dirección: Calle Principal 123</li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-indigo-600 mb-4">Síguenos</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>

</template>


<script setup lang="ts">
</script>
