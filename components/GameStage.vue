<template>
  <div class="gameStage">
    <img
      @click="back()"
      src="~/assets/images/back.svg"
      class="backBtn"
      alt="Back">

    <div class="gameStep">
      <span class="title">
        {{ $t('common.stage') }}
      </span>
      <span class="num">
        {{ displayStep }}
      </span>
    </div>

    <div class="gameScore">
      <div class="num">
        {{ displayScore }}
      </div>
      <div class="title">
        {{ $t('common.score') }}
      </div>
    </div>

    <div class="countdown">
      {{ $t('common.time_left') }}
      :
      {{ countdownTimeLeft }}
      <div class="countdownBar">
        <div
          :style="`width: ${ countdownBarWidth }%`"
          class="countdownBar--inner"></div>
        <!-- <div class="countdownBar--text">
          {{ countdownTimeLeft }}
        </div> -->
      </div>
    </div>

    <div class="pitchDiff">
      {{ $t('common.pitch_diff', { diff: pitchDiff }) }}
    </div>

    <div class="tuneBtns">
      <button
        v-for="(i, idx) in 2"
        :key="`tuneBtn${idx}`"
        @click="clearAutoplayTuneInterval(); playTune(idx)"
        :disabled="showingAnswer || gameover"
        :class="{ active: playingTune === idx }"
        class="tuneBtn">
        <img
          src="~assets/images/tuning_fork.svg"
          :alt="`Tune${i}`">
        {{ showingAnswer ? `${ansTunes[idx]}Hz`  : `Tune ${i}` }}
      </button>
    </div>

    <div class="ansBtns">
      <button
        v-for="(i, idx) in 2"
        @click="showAns(idx === currentAns)"
        :key="`ansBtn${idx}`"
        :disabled="showingAnswer || gameover"
        class="ansBtn">
        {{ $t('common.n_tune_higher', { n: i }) }}
      </button>
    </div>

    <div class="ansTitle">
      {{ $t('common.which_one_is_higher') }}
    </div>

    <div
      v-if="rightAnsAnimationVisible"
      class="ansAnimation rightAnsAnimation">
      Right!
    </div>

    <div
      v-if="wrongAnsAnimationVisible"
      class="ansAnimation wrongAnsAnimation">
      Wrong!        
    </div>

    <div
      v-if="gameover"
      class="endScreen modal">
      <div class="modalHeader">
        {{ $t('common.your_certification') }}
      </div>

      <div class="modalBody">
        <Certification
          @userNameChanged="sendScoreToServer()"
          :score="displayScore" />

        <button
          @click="replay()"
          class="menuBtn">
          {{ $t('common.replay') }}
        </button>
        <button
          @click="$emit('showRecords')"
          class="menuBtn">
          {{ $t('common.show_records') }}
        </button>
        <button
          @click="$emit('endGame')"
          class="menuBtn">
          {{ $t('common.close') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var ques = [14, 12, 13, 15, 10, 8, 9, 6, 7, 5, 3, 4, 2, 3, 1, 4, 3, 1, 2, 1]
    var baseTunes = [293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]
    // 最大差值
    var questionWaveRange = 20
    // 最大可能得分數（會超過100，顯示分數時會再做轉換）
    var maxScore = questionWaveRange * ques.length - ques.reduce((a,b) => a + b)

    return {
      // status
      gameover: false,
      showingAnswer: false,
      rightAnsAnimationVisible: false,
      wrongAnsAnimationVisible: false,
      playingTune: null,

      // test questions
      ques,
      baseTunes,
      questionWaveRange,
      maxScore,

      // settings
      timeLimitPerQuestion: 10,
      timeLimitInterval: null,
      countdownTimeLeft: null,
      countdownInterval: null,
      ansDisplayDuration: 1,
      baseTune: null,
      currentAns: null,
      ansTunes: null,
      questionStep: 0,
      totalScore: 0,
      autoplayTune1: null,
      autoplayTune2: null,
      // time
      startTime: null,
      gameDuration: null,

      // audio api
      context: null,
      analyser: null,
      gainNode: null
    }
  },
  props: ['scoreCookieKey'],
  computed: {
    displayStep () {
      return this.questionStep + 1
    },
    displayScore () {
      // maxScore 268
      return Math.floor(this.totalScore / this.maxScore * 10000) / 100
    },
    countdownBarWidth () {
      return (this.timeLimitPerQuestion - this.countdownTimeLeft) / this.timeLimitPerQuestion * 100
    },
    pitchDiff () {
      return this.ansTunes
        ? Math.abs(this.ansTunes[0] - this.ansTunes[1])
        : 0
    }
  },
  methods: {
    // set question
    showStep (step) {
      clearInterval(this.timeLimitInterval)
      clearInterval(this.countdownInterval)

      this.showingAnswer = false

      this.currentAns = Math.round(Math.random()) // 0 - 1
      this.baseTune = this.baseTunes[Math.floor(Math.random() * this.baseTunes.length)]

      var right = this.baseTune + this.ques[step]
      var wrong = this.baseTune

      if (this.currentAns === 0) {
        this.ansTunes = [right, wrong]
      } else {
        this.ansTunes = [wrong, right]
      }

      this.autoplayTune1 = setTimeout(this.playTune, 500, 0)
      this.autoplayTune2 = setTimeout(this.playTune, 1500, 1)

      this.timeLimitInterval = setTimeout(() => {
        this.showAns(false)
      }, this.timeLimitPerQuestion * 1000)

      this.countdownTimeLeft = this.timeLimitPerQuestion
      this.countdownInterval = setInterval(() => {
        this.countdownTimeLeft--
      }, 1000)
    },

    clearAutoplayTuneInterval () {
      clearInterval(this.autoplayTune1)
      clearInterval(this.autoplayTune2)
    },

    // 當按下選項或是時間到時觸發 (getScore代表有得分)
    showAns (getScore = false) {
      clearInterval(this.timeLimitInterval)
      clearInterval(this.countdownInterval)
      this.countdownTimeLeft = 0

      this.showingAnswer = true

      // add score
      if (getScore) {
        this.totalScore += 20 - this.ques[this.questionStep]
        this.showRightAnsAnimation()
      } else {
        this.showWrongAnsAnimation()
      }

      if (this.questionStep > 18) {
        setTimeout(() => {
          this.endGame()
        }, this.ansDisplayDuration * 1000)
        return
      } else {
        setTimeout(() => {
          this.questionStep++
          this.showStep(this.questionStep)
        }, this.ansDisplayDuration * 1000)
      }
    },
    showRightAnsAnimation () {
      this.rightAnsAnimationVisible = true
      setTimeout(() => {
        this.rightAnsAnimationVisible = false
      }, 1000)
    },
    showWrongAnsAnimation () {
      this.wrongAnsAnimationVisible = true
      setTimeout(() => {
        this.wrongAnsAnimationVisible = false
      }, 1000)
    },

    // play tune sound
    playTune (idx, type = 'sine', startTime = this.context.currentTime, duration = 0.5) {
      var oscillator = this.context.createOscillator()
      oscillator.type = type
      oscillator.frequency.value = this.ansTunes[idx]
      oscillator.detune.value = 0
      oscillator.connect(this.gainNode)
      oscillator.start(startTime)
      oscillator.stop(startTime + duration)

      this.playingTune = idx

      setTimeout(() => {
        this.playingTune = null
      }, duration * 1000)
    },

    // game over
    async endGame () {
      var endTime = new Date().getTime()
      this.gameDuration = endTime - this.startTime

      this.gameover = true
      this.showingAnswer = false

      let scoreData = {
        date: new Date().getTime(),
        score: this.displayScore,
        duration: this.gameDuration
      }

      // write score to cookie
      const scoreRecords = this.$cookies.get(this.scoreCookieKey) || []
      scoreRecords.push(scoreData)
      scoreRecords.sort((a, b) => {
        if (a.score !== b.score) {
          // high -> low
          return b.score - a.score
        } else {
          // fast -> slow
          return a.duration - b.duration
        }
      })
      this.$cookies.set(this.scoreCookieKey, scoreRecords)

      this.sendScoreToServer()      
    },

    // send score to server
    async sendScoreToServer () {
      // send score to server
      try {
        let scoreData = {
          date: new Date().getTime(),
          score: this.displayScore,
          duration: this.gameDuration,
          name: this.$cookies.get('userName') || 'unknow'
        }
        let scoreReq = await this.$axios.post('api/score', scoreData)
      } catch (err) {
        console.log(err)
      }
    },

    // restart game
    replay () {
      this.questionStep = 0
      this.totalScore = 0
      this.gameover = false

      this.$emit('playGame')
    },

    // back to main screen
    back () {
      clearInterval(this.timeLimitInterval)
      clearInterval(this.countdownInterval)
      this.questionStep = 0
      this.totalScore = 0

      this.$emit('endGame')
    }
  },
  async mounted () {

    // get token from server
    try {
      let tokenReq = await this.$axios.get('api/token')
      this.$axios.setToken(tokenReq.data.token)
    } catch (err) {
      console.log(err)
    }

    if (!this.context) {
      this.context = new (window.AudioContext || window.webkitAudioContext)
      this.analyser = this.context.createAnalyser()
      this.gainNode = this.context.createGain()

      this.analyser.connect(this.context.destination)
      this.gainNode.gain.value = 0.25
      this.gainNode.connect(this.analyser)
    }

    // save start time
    this.startTime = new Date().getTime()

    this.showStep(this.questionStep)
  }
}
</script>

<style lang="scss">
.gameStage {
  .gameScore {
    position: absolute;
    right: 0;
    top: 0;
    min-width: 80px;
    color:#fff;
    text-align: center;
    text-shadow: 2px 2px 0 #5cd4ca;

    .title {
      padding: 2px;
      border: 1px solid #fff;
      border-radius: 3px;
      font-size: 13rem;
    }

    .num {
      font-size: 55rem;
      font-weight: 500;
    }
  }

  .gameStep {
    padding: 10px 0;
    color:#fff;
    font-size: 40rem;
    text-shadow: 2px 2px 0 #5cd4ca;

    .num {
    }
  }

  .countdown {
    margin: 20px 0;
    color: #fff;
    text-shadow: 2px 2px 0 #5cd4ca;

    .countdownBar {
      margin-top: 5px;
      position: relative;
      background: #5cd4ca;
      border-radius: 20px;
      color:#fff;

      &--inner {
        height: 6px;
        // background: #59c40d;
        // background: #fffc;
        background: #d6fbd2;
        border-radius: 20px;
        transition: 0.2s;
      }

      /*
      &--text {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 12px;
      }
      */
    }
  }

  .pitchDiff {
    margin-top: 50px;
    color: #fff;
    text-align: center;
    text-shadow: 2px 2px 0 #5cd4ca;
  }

  .tuneBtns {
    display: flex;
    margin: 10px -10px 0 -10px;

    .tuneBtn {
      flex: 1;
      margin: 0 10px;
      padding: 50px 20px;
      appearance: none;
      background: #fff;
      border: 0;
      border-radius: 10px 10px 0 0;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
      color: #435e5f;
      font-family: 'Varela Round', sans-serif;
      font-size: 16rem;
      font-weight: 500;
      outline: none;
      opacity: 0.9;

      img {
        display: block;
        width: 60px;
        margin: 10px auto;
      }

      &.active,
      &:hover {
        opacity: 1;
        box-shadow: 0 0 20px #fff;
      }

      &:focus {
        box-shadow: 0 0 0 4px #5ed4ca
      }

      &:disabled {
        color: #435e5f66;
        opacity: 0.7;
      }

    }
  }

  .ansBtns {
    display: flex;
    margin: 0 -10px 10px -10px;

    .ansBtn {
      flex: 1;
      margin: 0 10px;
      padding: 20px;
      appearance: none;
      background: var(--primary);
      border: 0;
      border-radius: 0 0 10px 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
      color: #fff;
      font-family: 'Varela Round', sans-serif;
      font-size: 16rem;
      font-weight: 500;
      outline: none;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }

      &:focus {
        box-shadow: 0 0 0 4px #5ed4ca
      }

      &:disabled {
        color: #fff6;
        opacity: 0.7;
      }

    }
  }

  .ansTitle {
    margin-top: 20px;
    text-align: center;
  }

  .ansAnimation {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fc3;
    font-size: 100px;
    font-weight: 900;
    font-family: 'Fredoka One', cursive;
    text-shadow: -4px -4px 0 #fff,
      0 -4px 0 #fff,
      -4px 0px 0 #fff,
      0px 4px 0 #fff,
      4px 0px 0 #fff,
      6px 6px 0 #fff,
      6px 20px 16px #0001;
    animation: 1s answerAnimation;

    &.rightAnsAnimation {}
    &.wrongAnsAnimation {
      color: #f99;
    }
  }

  .endScreen {
    canvas {
      display: block;
      width: 400px;
      max-width: 100%;
      margin: 0 auto;
    }
  }
}

@keyframes answerAnimation {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(1440deg) scale(1);
  }
  80% {
    transform: rotate(1440deg) scale(0.8);
  }
  100% {
    transform: rotate(1440deg) scale(10);
  }
}
</style>