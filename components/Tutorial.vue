<template>
  <div
    class="tutorial modal"
    v-if="firstTimePlayTutorialVisible">
    <div class="modalHeader">
      {{ $t('common.game_tutorial') }}
    </div>

    <div class="modalBody">
      <img
        :src="`images/tutorial_${$i18n.locale}.jpg`"
        class="tutorial-pic">
    </div>

    <div class="modalFooter">
      <button
        @click="$emit('hideTutorialAndPlayGame')"
        class="menuBtn primary">
        {{ $t('common.start_game') }}
      </button>
      <button
        @click="$emit('hideTutorial')"
        class="menuBtn">
        {{ $t('common.close') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['firstTimePlayTutorialVisible']
}
</script>

<style lang="scss">
.tutorial {
  .tutorial-pic {
    width: 100%;
  }
}
</style>