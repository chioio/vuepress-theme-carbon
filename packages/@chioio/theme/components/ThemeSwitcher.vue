<template>
  <div
    @click="themeSwitch"
    class="theme-switcher"
  >
    <span class="bar"></span>
    <span class="slider">
      <img :src="modeIcon" alt="" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  data: () => ({
    modeIcon:
      localStorage.getItem('theme') === 'light'
        ? require('@theme/icons/sun.svg')
        : require('@theme/icons/moon.svg'),
  }),
  methods: {
    themeSwitch() {
      let theme = localStorage.getItem('theme')
      let htmlTag = document.querySelector('html')

      if (theme === 'light') {
        this.modeIcon = require('@theme/icons/moon.svg')
        localStorage.setItem('theme', 'dark')
        htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
      } else {
        this.modeIcon = require('@theme/icons/sun.svg')
        localStorage.setItem('theme', 'light')
        htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$switcher-width: 40px;
$switcher-height: 25px;
$bar-width: 100%;
$bar-height: 12px;
$bar-transition: 0.25s ease-in-out;
$slider-size: 25px;   // size equals to `$switcher-height`
$slider-padding: 4px;
$slider-transation: 0.5s ease;

.theme-switcher {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  width: $switcher-width;
  height: $switcher-height;
  .bar {
    width: $bar-width;
    height: $bar-height;
    border-radius: $bar-height / 2;
    transition: $bar-transition;
    background-color: var(--theme-switcher-bar-background-color);
    box-shadow: var(--theme-switcher-bar-box-shadow);
    &:focus,
    &:active,
    &:link {
      -webkit-tap-highlight-color: #000000;
    }
  }
  .slider {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    box-sizing: border-box;
    width: $slider-size;
    height: $slider-size;
    border-radius: $slider-size / 2;
    padding: $slider-padding;
    transition: $slider-transation;
    background-color: var(--theme-switcher-slider-background);
    box-shadow: var(--theme-switcher-slider-box-shadow);
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
      user-select: none;
      -webkit-user-drag: none;
    }
    [data-theme='light'] & {
      transform: translateX(0%);
    }
    [data-theme='dark'] & {
      transform: translateX($switcher-width - $slider-size);
    }
  }
}
</style>

<!-- theme color variable -->
<style lang="scss">
html[data-theme='light'] {
  --theme-switcher-bar-box-shadow: inset 0 0 1px 1.5px #dfdfdf;
  --theme-switcher-bar-background-color: #efefef;
  --theme-switcher-slider-box-shadow: inset 0 -1px 4px #000000;
  --theme-switcher-slider-background: #404040;
}

html[data-theme='dark'] {
  --theme-switcher-bar-box-shadow: inset 0 0 1px 1.5px #202020;
  --theme-switcher-bar-background-color: #303030;
  --theme-switcher-slider-box-shadow: inset 0 -1px 4px #202020;
  --theme-switcher-slider-background: #ffffff;
}
</style>
