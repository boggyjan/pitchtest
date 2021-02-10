<template>
  <div class="pitchTestApp">
    <Header />

    <img
      :src="`/cert_pic?username=${userName}&score=${score}&levelmsg=${levelMsg}`"
      width="1000" height="700" class="shared-certification-image">

    <nuxt-link
      :to="localePath('index')"
      class="menuBtn primary">
      {{ $t('common.start_game') }}
    </nuxt-link>

    <Footer />
  </div>
</template>

<script>
export default {
  head () {
    const userName = this.$route.params.username
    const score = this.$route.params.score
    const levelMsg = this.$route.params.levelmsg

    const title = `${userName} - ${score} ${this.$t('common.point')} - ${this.$t('common.head_title')}`
    const desc = this.$t('common.head_desc')

    const showCertPic = userName && score && levelMsg

    let image = showCertPic
      ? `https://pitchtest.boggy.tw/cert_pic?username=${userName}&score=${score}&levelmsg=${levelMsg}`
      : 'https://pitchtest.boggy.tw/images/sns_share_pic.jpg'

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
    const userName = this.$route.params.username
    const score = this.$route.params.score
    const levelMsg = this.$route.params.levelmsg

    return {
      userName,
      score,
      levelMsg
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/index.scss';

.shared-certification-image {
  width: 1000px;
  max-width: 100%;
  height: auto;
}
</style>
