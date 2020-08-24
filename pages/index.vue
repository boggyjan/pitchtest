<template>
  <div class="pitchTestApp">
    <Header />

    <div v-if="!playing">
      <button @click="playGame()">
        start
      </button>
      <button @click="showRecords()">
        show records
      </button>
    </div>

    <div v-else>
      <div class="gameStep">
        Step:
        {{ displayStep }}
      </div>

      <div class="gameScore">
        Score:
        {{ displayScore }}
      </div>

      <div>
        Time left:
        {{ countdownTimeLeft }}
        <div class="countdownBar">
          <div
            :style="`width: ${ (timeLimitPerQuestion - countdownTimeLeft) / timeLimitPerQuestion * 100 }%`"
            class="countdownBar--inner"></div>
          <!-- <div class="countdownBar--text">
            {{ countdownTimeLeft }}
          </div> -->
        </div>
      </div>

      <div>
        <button
          v-for="(i, idx) in 2"
          :key="`tuneBtn${idx}`"
          @click="playTune(idx)"
          :disabled="showingAnswer || gameover"
          class="tuneBtn">
          {{ showingAnswer ? ansTunes[idx] : `Tune ${i}` }}
        </button>
      </div>

      <div>
        Which one is higher
        <button
          v-for="(i, idx) in 2"
          @click="showAns(idx === currentAns)"
          :key="`ansBtn${idx}`"
          :disabled="showingAnswer || gameover"
          class="ansBtn">
          Tune {{ i }}
        </button>
      </div>

      <div v-if="gameover">
        Certification Pic
        <img src="/images/cert_bg.jpg" alt="Certification">

        <button @click="replayGame()">
          replay
        </button>
        <button @click="showRecords()">
          show records
        </button>
      </div>
    </div>

    <div
      v-if="showingRecords"
      class="recordList">
      records
      <ul>
        <li
          v-for="record in displayScoreRecords">
          <div class="recordListScore">
            {{ record.score }}
          </div>
          <div class="recordListDate">
            {{ new Date(record.date).toLocaleString() }}
          </div>
        </li>
      </ul>
      <button @click="hideRecords()">
        close
      </button>
    </div>

    <Footer />
  </div>
</template>

<script>
// [todo]
// 1. ui
// 3. gen certification pic
// 4. share or save certification pic

export default {
  data () {
    var ques = [14, 12, 13, 15, 10, 8, 9, 6, 7, 5, 3, 4, 2, 3, 1, 4, 3, 1, 2, 1]
    var baseTunes = [293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]
    // 最大差值
    var questionWaveRange = 20
    // 最大可能得分數（會超過100，顯示分數時會再做轉換）
    var maxScore = questionWaveRange * ques.length - ques.reduce((a,b) => a + b)

    return {
      // test questions
      ques,
      baseTunes,
      questionWaveRange,
      maxScore,
      //
      // variables
      scoreCookieKey: 'pitchtest_game_v1_score',
      timeLimitPerQuestion: 5,
      timeLimitInterval: null,
      countdownTimeLeft: null,
      countdownInterval: null,
      ansDisplayDuration: 1,
      baseTune: null,
      currentAns: null,
      ansTunes: null,
      questionStep: 0,
      totalScore: 0,
      //
      // records
      scoreRecords: [],
      //
      // game status
      showingAnswer: false,
      playing: false,
      gameover: false,
      showingRecords: false,
      //
      // audio api
      context: null,
      analyser: null,
      gainNode: null
    }
  },
  computed: {
    displayStep () {
      return this.questionStep + 1
    },
    displayScore () {
      // maxScore 268
      return Math.floor(this.totalScore / this.maxScore * 10000) / 100
    },
    displayScoreRecords () {
      return this.scoreRecords
    }
  },
  methods: {
    //
    // start game and init audio api
    playGame () {
      if (!this.context) {
        this.context = new AudioContext
        this.analyser = this.context.createAnalyser()
        this.gainNode = this.context.createGain()

        this.analyser.connect(this.context.destination)
        this.gainNode.gain.value = 0.25
        this.gainNode.connect(this.analyser)
      }

      this.playing = true

      this.showStep(this.questionStep)
    },
    //
    // restart game
    replayGame () {
      this.questionStep = 0
      this.totalScore = 0
      this.gameover = false

      this.playGame()
    },
    //
    // play tune sound
    playTune (idx, type = 'sine', startTime = this.context.currentTime, duration = 1) {
      var oscillator = this.context.createOscillator()
      oscillator.type = type
      oscillator.frequency.value = this.ansTunes[idx]
      oscillator.detune.value = 0
      oscillator.connect(this.gainNode)
      oscillator.start(startTime)
      oscillator.stop(startTime + duration)
    },
    //
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

      this.timeLimitInterval = setTimeout(() => {
        this.showAns(false)
      }, this.timeLimitPerQuestion * 1000)

      this.countdownTimeLeft = this.timeLimitPerQuestion
      this.countdownInterval = setInterval(() => {
        this.countdownTimeLeft--
      }, 1000)
    },
    //
    // show answer (getScore代表有得分)
    showAns (getScore = false) {
      clearInterval(this.timeLimitInterval)
      clearInterval(this.countdownInterval)
      this.countdownTimeLeft = 0

      this.showingAnswer = true

      // add score
      if (getScore) {
        this.totalScore += 20 - this.ques[this.questionStep]
      }

      if (this.questionStep > 18) {
        this.gameover = true

        // write score to cookie
        this.scoreRecords.push({
          date: new Date().getTime(),
          score: this.displayScore
        })
        this.$cookies.set(this.scoreCookieKey, this.scoreRecords)

        return
      } else {
        setTimeout(() => {
          this.questionStep++
          this.showStep(this.questionStep)
        }, this.ansDisplayDuration * 1000)
      }
    },
    //
    // show game records
    showRecords () {
      this.showingRecords = true
    },
    //
    // show game records
    hideRecords () {
      this.showingRecords = false
    }
  },
  mounted () {
    this.scoreRecords = this.$cookies.get(this.scoreCookieKey) || []
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/pages/index.scss';
</style>
