import { createCanvas, loadImage } from 'canvas'
import querystring from 'querystring'

export default async function (req, res, next) {
  if (process.env.VUE_ENV === 'server') {
    const query = querystring.parse(req._parsedOriginalUrl.query)

    const userName = query.username
    const score = query.score
    const levelMsg = query.levelmsg

    const width = 1000
    const height = 700
    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')

    const image = await loadImage(__dirname + '/../static/images/cert_bg.jpg')
    context.drawImage(image, 0, 0, 1000, 700)

    context.font = '60px Serif'
    context.textAlign = 'center'
    context.fillText(userName, width / 2, 360)
    context.font = '50px Serif'
    context.fillText(score, 290, 490)
    context.font = '25px San Serif'
    context.fillText(levelMsg, 590, 480)

    const buffer = canvas.toBuffer('image/png')

    res.writeHead(200, { 'Content-Type': 'image/png' })
    res.end(buffer)
  }

  return false
}
