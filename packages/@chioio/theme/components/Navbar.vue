<template>
  <header class="navbar">
    
    <ThemeSwitcher />
  </header>
</template>

<script>
import ThemeSwitcher from '@theme/components/ThemeSwitcher.vue'

export default {
  name: 'Navbar',
  components: {
    ThemeSwitcher
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.navbar {
  height: $navbarHeight;
  background: var(--navbar-background);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<style lang="scss">
html[data-theme='light'] {
  --navbar-background: #efefef;
}

html[data-theme='dark'] {
  --navbar-background: #303030
}
</style>