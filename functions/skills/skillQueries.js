const GET_SKILLS = `
  query {
    allSkills {
      data {
        name
        _id
        type
        shorthand
        fullname
        proficiency
        url
        description
        archived
      }
    }
  }
`

const CREATE_SKILL = `
    mutation($name: String!, $url: String!, $description: String! ) {
        creat( data: { name:$name, url: $url, description: $description, archived: false }) {
            name
            _id
            url
            description
            archived
        }
    }
`

const UPDATE_SKILL = `
  mutation($id: ID!, $archived: Boolean!, $name: String!, $url: String!, $description: String!  ) {
        updateSKILL( id: $id, data: { name:$name, url: $url, description: $description, archived: $archived }) {
            name
            _id
            url
            description
            archived
        }
    }
`

const DELETE_SKILL = `
  mutation($id: ID!) {
        deleteSKILL( id: $id) {
            _id
        }
    }
`

module.exports = {
  GET_SKILLS,
  // CREATE_SKILL,
  // UPDATE_SKILL,
  // DELETE_SKILL,
}
