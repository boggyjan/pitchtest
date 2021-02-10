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
</style>
