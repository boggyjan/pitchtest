<template>
  <div class="recordList modal">
    <div class="modalHeader">
      {{ $t('common.records') }}
    </div>

    <div class="modalBody">
      <div class="recordNav">
        <button
          @click="changeType(0)"
          :class="{ active: showingRecordType === 0 }">
          {{ $t('common.local_records') }}
        </button>
        <button
          @click="changeType(1)"
          :class="{ active: showingRecordType === 1 }">
          {{ $t('common.global_records') }}
          Top 100
        </button>
      </div>
      <ul v-if="displayScoreRecords.length">
        <li
          v-for="(record, idx) in displayScoreRecords">
          <div class="rank">
            {{ idx + 1 }}
          </div>
          <div
            v-if="showingRecordType === 1"
            class="name">
            {{ record.name }}
          </div>
          <div class="score">
            {{ record.score }}
            {{ $t('common.point') }}
            <div class="time">
              {{ $t('common.took_n_sec', { n: record.duration / 1000 }) }}
            </div>
          </div>
          <div class="date">
            {{ new Date(record.date).toLocaleString('ja-JP', { hour12: false }) }}
          </div>
        </li>
      </ul>
      <div v-else class="no-record">
        {{ $t('common.no_record_yet') }}
      </div>
    </div>

    <div class="modalFooter">
      <button
        @click="$emit('hideRecords')"
        class="menuBtn primary">
        {{ $t('common.close') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // show game records
      // 0 is local
      // 1 is global
      showingRecordType: 0,
      scoreRecords: [],
      globalScoreRecords: []
    }
  },
  props: ['scoreCookieKey'],
  computed: {
    displayScoreRecords () {
      return this.showingRecordType === 0 ? this.scoreRecords : this.globalScoreRecords
    }
  },
  methods: {
    changeType (type = 0) {
      this.showingRecordType = type
    }
  },
  async fetch () {
    this.scoreRecords = this.$cookies.get(this.scoreCookieKey) || []
    // get global records
    try {
      let scoreReq = await this.$axios.get('api/score')
      this.globalScoreRecords = scoreReq.data.list
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style lang="scss">
.recordList {
  .recordNav {
    margin: 20px 0;
    text-align: center;

    button {
      padding: 2px 15px;
      background: transparent;
      border: 0;
      border: 1px solid #999;
      border-radius: 100px;
      color: #888;

      &.active {
        background: #67d4b711;
        border: 1px solid #67d4b7;
        color: #4db79b;
      }
    }
  }

  ul {
    height: calc(100vh - 380px);
    margin: 0;
    padding: 10px;
    overflow-y: auto;
    background: #fafafa;
    border-radius: 20px;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      padding: 20px;
      border-bottom: 1px dashed #ccc;

      .rank {
        position: relative;
        left: -15px;
        min-width: 30px;
        height: 30px;
        background: #aaa;
        border-radius: 100px;
        color: #fff;
        line-height: 30px;
        text-align: center;
      }

      &:nth-child(1) .rank {
        background: #eb0;
      }

      &:nth-child(2) .rank {
        background: #9cc;
      }

      &:nth-child(3) .rank {
        background: #c66;
      }

      .name {
        flex: 1.5;
      }

      .score {
        flex: 1.3;
      }

      .time {
        color: #888;
        font-size: 12px;
      }

      .date {
        flex: 1;
        color: #888;
        font-size: 12px;
        text-align: center;
      }
    }
  }

  .no-record {
    padding: 10px;
    background: #fafafa;
    border-radius: 20px;
    text-align: center;
  }
}
</style>
