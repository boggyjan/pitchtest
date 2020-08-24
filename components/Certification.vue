<template>
  <div>
    <canvas width="795" height="615" ref="canvas" />
    <button @click="editUserName()">
      {{ $t('common.enter_your_name') }}
    </button>
    <div
      v-if="editingUserName"
      class="userNameModel">
      <form @submit.prevent="saveUserName()">
        <input
          v-model="tempUserName"
          :placeholder="$t('common.enter_your_name')"
          type="text"
          required>
        <button>
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
      certBg: null,
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
  watch: {
    userName: {
      immediate: true,
      handler () {
        this.drawCert()
      }
    },
    score: {
      immediate: true,
      handler () {
        this.drawCert()
      }
    }
  },
  methods: {
    async loadCertBg () {
      return new Promise((resolve, reject) => {
        this.certBg = new Image()
        this.certBg.onload = () => {
          resolve()
        }
        this.certBg.onerror = () => {
          reject()
        }
        this.certBg.src = '/images/cert_bg.jpg'
      })
    },
    async drawCert () {
      if (!this.$refs.canvas || !this.$refs.canvas.getContext) {
        return
      }

      if (!this.certBg) {
        await this.loadCertBg()
      }

      let canvas = this.$refs.canvas
      let context = canvas.getContext('2d')
      context.drawImage(this.certBg, 0, 0)
      context.font = '30px Petrona'
      context.textAlign = 'center'
      context.fillText(this.score, canvas.width / 2, 260)
      context.fillText(this.userName, canvas.width / 2, 315)
    },
    editUserName () {
      this.editingUserName = true
    },
    saveUserName () {
      this.editingUserName = false
      this.userName = this.tempUserName
      this.$cookies.set('userName', this.tempUserName)
    }
  },
  mounted () {
    this.userName = this.tempUserName = this.$cookies.get('userName') || ''
    this.drawCert()
  }
}
</script>
