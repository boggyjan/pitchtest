<template>
  <div class="pitchTestApp">
    <Header />

    <MainMenu
      v-if="!playing"
      @playGame="playGame()"
      @showRecords="showRecords($event)"
      @showTutorial="showTutorial()" />

    <Tutorial
      :firstTimePlayTutorialVisible="firstTimePlayTutorialVisible"
      @hideTutorialAndPlayGame="hideTutorialAndPlayGame()"
      @hideTutorial="hideTutorial()" />

    <GameStage
      v-if="playing"
      :scoreCookieKey="scoreCookieKey"
      @playGame="playGame()"
      @endGame="endGame()"
      @showRecords="showRecords()" />

    <Records
      v-if="showingRecords"
      :scoreCookieKey="scoreCookieKey"
      @hideRecords="hideRecords()" />

    <Footer />
  </div>
</template>

<script>
// [todo]
// 1. ui
// 3. gen certification pic
// 4. share or save certification pic

export default {
  head () {
    let title = this.$t('common.head_title')
    let desc = this.$t('common.head_desc')
    let image = 'https://pitchtest.boggy.tw/images/sns_share_pic.jpg'
    let url = 'https://pitchtest.boggy.tw/'

    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: desc },
        { hid: 'twitter:type', name: 'twitter:type', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', desc },
        { hid: 'twitter:image', name: 'twitter:image', content: image },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: desc },
        { hid: 'og:image', name: 'og:image', content: image },
        { hid: 'og:url', name: 'og:url', content: url },
        { hid: 'og:site_name', name: 'og:site_name', content: 'PitchTest' }
      ],
      htmlAttrs: {
        lang: this.$i18n.locales.filter(item => item.code === this.$i18n.locale)[0].iso
      }
    }
  },
  data () {
    return {
      // variables
      scoreCookieKey: 'pitchtest_game_v1_score',
      firstTimePlay: true,
      firstTimePlayTutorialVisible: false,

      // game status
      playing: false,
      showingRecords: false
    }
  },
  watch: {
    showingRecordType (val) {
      if (val === 1) {
        this.getGlobalRecords()
      }
    }
  },
  methods: {
    // start game and init audio api
    async playGame () {
      if (this.firstTimePlay) {
        this.showTutorial()
      } else {
        this.playing = true
      }
    },

    // tutorial
    showTutorial () {
      this.firstTimePlayTutorialVisible = true
      this.firstTimePlay = false
      this.$cookies.set('firstTimePlay', false)
    },
    hideTutorialAndPlayGame () {
      this.hideTutorial()
      this.playGame()
    },
    hideTutorial () {
      this.firstTimePlayTutorialVisible = false
    },

    // back to main screen
    endGame () {
      this.playing = false
    },

    showRecords () {
      this.showingRecords = true
    },
    hideRecords () {
      this.showingRecords = false
    }
  },
  async mounted () {
    this.firstTimePlay = typeof this.$cookies.get('firstTimePlay') === 'boolean' ? this.$cookies.get('firstTimePlay') : true
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/index.scss';
</style>
