import fs from 'fs'
import path from 'path'
import querystring from 'querystring'

export default function (req, res, next) {
  var filePath = path.join(__dirname, '../static/scoredata')

  if (process.env.VUE_ENV === 'server') {
    if (req.method === 'GET') {
      // [GET] 取得分數列表
      try {
        let data = fs.readFileSync(filePath, 'utf8')

        // 暫時解決多執行序同時寫入時造成json錯誤的問題
        data = data.replace(/].*/g, ']')

        // return top 100
        const list = JSON.parse(data).slice(0, 100)

        // response
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ list }))
      } catch (err) {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
          message: 'database error'
        }))
      }

    } else {
      // POST

      let body = ''

      req.on('data', (data) => {
        body += data
      })

      req.on('end', () => {

        // parse post data
        let postData

        try {
          postData = JSON.parse(body)
        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({
            message: 'data error'
          }))
          return
        }

        // token
        var token = req.headers['authorization']

        if (token && postData) {
          let now = new Date().getTime()
          let encodeAlphabet = 'lkjhgfdsaz'.split('')
          let decodedToken = ''
          let tokenArr = token.replace(/\d/g, '').split('')

          tokenArr.forEach(singleAlphabet => {
            decodedToken += encodeAlphabet.indexOf(singleAlphabet)
          })
          decodedToken = parseInt(decodedToken)
          let tokenIsAvailable = now - decodedToken < 1000 * 60 * 30

          if (tokenIsAvailable) {
            // read record file
            try {
              let data = fs.readFileSync(filePath, 'utf8')

              // 暫時解決多執行序同時寫入時造成json錯誤的問題
              data = data.replace(/].*/g, ']')

              // record info
              let record = {
                token: token,
                name: postData.name,
                date: parseFloat(postData.date),
                score: parseFloat(postData.score),
                duration: parseFloat(postData.duration)
              }

              let records = JSON.parse(data)

              let sameTokenRecordIdx = records.findIndex(item => item.token === token)

              if (sameTokenRecordIdx > -1) {
                records[sameTokenRecordIdx] = record
              } else {
                records.push(record)
              }

              // sort records
              records.sort((a, b) => {
                if (a.score !== b.score) {
                  // high -> low
                  return b.score - a.score
                } else {
                  // fast -> slow
                  return a.duration - b.duration
                }
              })

              // slice top 100
              // records = records.slice(0, 100)

              // write record
              fs.writeFileSync(filePath, JSON.stringify(records), { encoding: 'utf8', flag: 'w' })

              // response
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({
                // body: record,
                // data: data,
                // tokenIsAvailable
                success: tokenIsAvailable
              }))
            } catch (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({
                message: 'database error'
              }))
            }
          } else {
            res.writeHead(401, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({
              message: 'auth error'
            }))
          }
        } else {
          res.writeHead(401, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({
            message: 'auth error'
          }))
        }
      })
    }
  }
  return false
}
