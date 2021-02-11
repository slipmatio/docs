<template>
  <div>
    <table style="width: 100%;">
      <tr style="width: 100%;">
        <th style="width: 70%;">
          Name
        </th>
        <th style="width:25%;">
          Status
        </th>
        <th style="width: 5%;">
          Weight
        </th>
      </tr>
      <tr v-for="issue in items" :key="issue.iid">
        <td>
          <a :href="getIssueRequirementsUrl(issue)">{{ issue.title }}</a>
        </td>
        <td>
          {{ getStatus(issue) }}
        </td>
        <td>{{ issue.weight }}</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>{{ totalWeight }} (~{{ totalDays }}d)</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { find, sortBy } from 'lodash-es'
import data from '../../issues.json'

// TODO: We should take this data from front matter instead
// Ie. ticket_number: 123
const REQUIREMENT_DOCS = [
  { id: '1', url: '/architecture/requirements/admin-functionality.html' },
  { id: '2', url: '/architecture/requirements/authentication.html' },
  { id: '3', url: '/architecture/requirements/background-tasks.html' },
  { id: '4', url: '/architecture/requirements/backups.html' },
  { id: '5', url: '/architecture/requirements/chat.html' },
  { id: '6', url: '/architecture/requirements/checklists.html' },
  { id: '7', url: '/architecture/requirements/dj-analytics.html' },
  { id: '8', url: '/architecture/requirements/djs.html' },
  { id: '9', url: '/architecture/requirements/email-sending.html' },
  { id: '10', url: '/architecture/requirements/events.html' },
  { id: '11', url: '/architecture/requirements/feedback.html' },
  { id: '12', url: '/architecture/requirements/festivals.html' },
  { id: '13', url: '/architecture/requirements/groups.html' },
  { id: '14', url: '/architecture/requirements/logs.html' },
  { id: '15', url: '/architecture/requirements/playlist-converter.html' },
  { id: '16', url: '/architecture/requirements/requests.html' },
  { id: '17', url: '/architecture/requirements/search.html' },
  { id: '18', url: '/architecture/requirements/shows.html' },
  { id: '19', url: '/architecture/requirements/site-analytics.html' },
  { id: '20', url: '/architecture/requirements/songs.html' },
  { id: '21', url: '/architecture/requirements/subscriptions.html' },
  { id: '22', url: '/architecture/requirements/tags.html' },
  { id: '23', url: '/architecture/requirements/tickets.html' },
  { id: '24', url: '/architecture/requirements/tips.html' },
  { id: '25', url: '/architecture/requirements/users.html' },
  { id: '26', url: '/architecture/requirements/ui.html' },
]

export default {
  data() {
    return {
      items: data,
      totalWeight: 0,
      totalDays: 0,
    }
  },
  methods: {
    getStatus(issue) {
      if (issue.labels.indexOf('started') >= 0) {
        return 'Started'
      } else {
        return 'Not Started'
      }
    },

    getIssueRequirementsUrl(issue) {
      let obj = find(REQUIREMENT_DOCS, function(obj) {
        return obj.id == issue.iid
      })
      if (obj) {
        return obj.url
      } else {
        return ''
      }
    },
  },
  mounted() {
    this.items = sortBy(this.items, function(obj) {
      return obj.title
    })

    for (var item of this.items) {
      this.totalWeight += item.weight
      this.totalDays = parseInt(this.totalWeight / 8)
    }
  },
}
</script>
