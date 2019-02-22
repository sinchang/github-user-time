const axios = require('axios')
const moment = require('moment-timezone')

module.exports = async function(username, token) {
  if (typeof username !== 'string') {
    throw new TypeError('Expected username to be string')
  }

  try {
    const {
      data: { location }
    } = await axios(`https://api.github.com/users/${username}`)

    const { data: geoRes } = await axios(
      `https://locationiq.org/v1/search.php?key=${token}&q=${location}&format=json`
    )

    const { lat, lon } = geoRes[0]

    const { data: timezoneRes } = await axios(
      `https://my.locationiq.com/v2/timezone.php?token=${token}&lat=${lat}&lon=${lon}`
    )

    const timezone = timezoneRes.timezone.name
    const time = moment()
      .tz(timezone)
      .format()

    return { timezone, time }
  } catch (error) {
    throw new Error(error)
  }
}
