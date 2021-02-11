import needle from 'needle'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

const TOKEN = process.env.GITLAB_PRIVATE_TOKEN
const issueURL =
  'https://gitlab.com/api/v4/projects/slipmatio%2Fdevelopment/issues?per_page=100&milestone=v3 Requirements'

export default function fetchIssues() {
  needle('get', issueURL, {
    headers: { 'PRIVATE-TOKEN': TOKEN },
  })
    .then(response => {
      let issueString = JSON.stringify(response.body)
      fs.writeFile(`issues.json`, issueString, () => console.log(`✔ Updated issues.json.`))
    })
    .catch(error => {
      console.log('Error: ', error)
    })
}
