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
