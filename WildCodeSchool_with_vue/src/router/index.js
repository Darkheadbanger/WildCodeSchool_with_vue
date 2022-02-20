import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// le fichier HomeView qui comporte le fichier TheWelcome.vue est transféré ici
// Ici sert à tromper le changement de la page c'est a dire, de changer la page mais
// Toujours dans le même page
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Ici, le router "faux hangement de page" se réalise avec le component
    // Pour récupèrer le fichier HomeView qui contient le fichier TheWelcome.vue
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});
// On export router au fichier app.vue
export default router;
