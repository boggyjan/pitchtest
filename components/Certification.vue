<template>
  <div class="certification">
    <!-- <canvas width="1000" height="700" ref="canvas" hidden /> -->
    <img
      :src="`/cert_pic?username=${userName}&score=${score}&levelmsg=${levelMsg}`"
      width="1000" height="700" class="certification-image">

    <button
      v-if="!editingUserName"
      @click="editUserName()"
      class="menuBtn primary">
      {{ $t('common.enter_your_name') }}
    </button>

    <a
      v-if="!editingUserName"
      :href="`https://www.facebook.com/sharer/sharer.php?u=https://pitchtest.boggy.tw?username=${userName}&score=${score}&levelmsg=${levelMsg}`"
      target="_blank"
      class="menuBtn primary">
      {{ $t('common.share_to_fb') }}
    </a>

    <div
      v-if="editingUserName"
      class="userNameModel">
      <form @submit.prevent="saveUserName()">
        <input
          v-model="tempUserName"
          :placeholder="$t('common.enter_your_name')"
          type="text"
          required>
        <button class="menuBtn primary">
          {{ $t('common.submit') }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // certBg: null,
      userName: '',
      tempUserName: '',
      editingUserName: false
    }
  },
  props: {
    score: {
      type: Number,
      default: 0
    }
  },
  computed: {
    levelMsg () {
      if (this.score <= 50) {
        return this.$t('common.level_msg_6')
      } else if (this.score > 50 && this.score <= 60) {
        return this.$t('common.level_msg_5')
      } else if (this.score > 60 && this.score <= 70) {
        return this.$t('common.level_msg_4')
      } else if (this.score > 70 && this.score <= 80) {
        return this.$t('common.level_msg_3')
      } else if (this.score > 80 && this.score <= 90) {
        return this.$t('common.level_msg_2')
      } else {
        return this.$t('common.level_msg_1')
      }
    }
  },
  // watch: {
  //   userName: {
  //     immediate: true,
  //     handler () {
  //       this.drawCert()
  //     }
  //   },
  //   score: {
  //     immediate: true,
  //     handler () {
  //       this.drawCert()
  //     }
  //   }
  // },
  methods: {
    // async loadCertBg () {
    //   return new Promise((resolve, reject) => {
    //     this.certBg = new Image()
    //     this.certBg.onload = () => {
    //       resolve()
    //     }
    //     this.certBg.onerror = () => {
    //       reject()
    //     }
    //     this.certBg.src = '/images/cert_bg.jpg'
    //   })
    // },
    // async drawCert () {
    //   if (!this.$refs.canvas || !this.$refs.canvas.getContext) {
    //     return
    //   }

    //   if (!this.certBg) {
    //     await this.loadCertBg()
    //   }

    //   let canvas = this.$refs.canvas
    //   let context = canvas.getContext('2d')
    //   context.drawImage(this.certBg, 0, 0)
    //   context.font = '60px Serif'
    //   context.textAlign = 'center'
    //   context.fillText(this.userName, canvas.width / 2, 360)
    //   context.font = '50px Serif'
    //   context.fillText(this.score, 290, 490)
    //   context.font = '25px San Serif'
    //   context.fillText(this.levelMsg, 590, 480)

    //   this.$refs.image.src = canvas.toDataURL()
    // },
    editUserName () {
      this.editingUserName = true
    },
    saveUserName () {
      this.editingUserName = false
      this.userName = this.tempUserName
      this.$cookies.set('userName', this.tempUserName)
      this.$emit('userNameChanged')
    }
  },
  mounted () {
    this.userName = this.tempUserName = this.$cookies.get('userName') || 'your name'
    // this.drawCert()
  }
}
</script>

<style lang="scss">
.certification {
  &-image {
    display: block;
    width: 1000px;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
}
</style>
