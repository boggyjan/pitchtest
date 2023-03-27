export default async function (req, res, next) {
  let encodeAlphabet = 'lkjhgfdsaz'.split('')
  let dateTime = new Date().getTime()
  let dateTimeArr = dateTime.toString().split('')
  let encodedTime = ''

  dateTimeArr.forEach(numStr => {
    encodedTime += encodeAlphabet[parseInt(numStr)]
    encodedTime += Math.random().toString().slice(2, 4)
  })

  // let decodedToken = ''
  // let tokenArr = encodedTime.replace(/\d/g, '').split('')
  // tokenArr.forEach(singleAlphabet => {
  //   decodedToken += encodeAlphabet.indexOf(singleAlphabet)
  // })
  // decodedToken = parseInt(decodedToken)

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({
    // time: dateTime,
    // decode: decodedToken,
    // equal: dateTime === decodedToken,
    token: encodedTime
  }))
}
