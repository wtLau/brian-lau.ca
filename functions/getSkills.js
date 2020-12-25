const { GET_SKILLS } = require('./skills/skillQueries.js')
const sendQuery = require('./helper/sendQuery')
const formattedResponse = require('./helper/formattedResponse')

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return formattedResponse(405, { err: 'Method not supported' })
  }

  try {
    const res = await sendQuery(GET_SKILLS)
    const data = res.allSkills.data
    return formattedResponse(200, data)
  } catch (err) {
    console.error(err)
    return formattedResponse(500, { err: 'Something went wrong' })
  }
}
