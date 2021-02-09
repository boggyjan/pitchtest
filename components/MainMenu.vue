<template>
  <div class="mainMenu">
    <h1>
      <img
        src="~/assets/images/logo.svg"
        :alt="$t('common.head_title')"
        class="logo">
    </h1>

    <button
      @click="$emit('playGame')"
      class="menuBtn primary">
      {{ $t('common.start_game') }}
    </button>
    <button
      @click="$emit('showRecords', 0)"
      class="menuBtn">
      {{ $t('common.show_records') }}
    </button>
    <button
      @click="$emit('showTutorial')"
      class="menuBtn">
      {{ $t('common.game_tutorial') }}
    </button>
  </div>
</template>

<style lang="scss">
.mainMenu {
  h1 {
    text-align: center;
  }

  .logo {
    width: 200px;
    animation: 5s logoAnimation infinite;
  }
}

@keyframes logoAnimation {
  0% {
    transform-origin: center center;
    transform: rotate(0deg) scaleX(1) scaleY(1);
  }
  30% {
    transform: rotate(0deg) scaleX(1) scaleY(1);
  }
  40% {
    transform: rotate(720deg) scaleX(1) scaleY(1);
    transform-origin: center center;
  }
  70% {
    transform: rotate(720deg) scaleX(1) scaleY(1);
    transform-origin: center bottom;
  }
  75% {
    transform: rotate(720deg) scaleX(1.5) scaleY(0.5);
  }
  80% {
    transform: rotate(720deg) scaleX(0.8) scaleY(1.25);
  }
  85% {
    transform: rotate(720deg) scaleX(1.11) scaleY(0.85);
  }
  90% {
    transform: rotate(720deg) scaleX(0.97) scaleY(1.05);
  }
  95% {
    transform: rotate(720deg) scaleX(1.01) scaleY(0.99);
  }
  100% {
    transform: rotate(720deg) scaleX(1) scaleY(1);
    transform-origin: center bottom;
  }
}
</style>