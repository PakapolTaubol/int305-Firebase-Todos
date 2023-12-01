<script setup>
import { ref, onMounted, watch } from 'vue'
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  orderBy,
  or,
  sum,
  getAggregateFromServer,
  average,
} from 'firebase/firestore'
import db from '../firebase/init.js'
import Documents from '../components/Documents.vue'
import { useRoute } from 'vue-router'

const zips = ref([])
const title = ref('')
const route = useRoute()

async function getQuery() {
  let qryId = route.params.id
  zips.value = []
  let qry = null
  if (qryId == 1) {
    title.value = 'Cities with population > 100000'
    const zipsRef = collection(db, 'zips')
    qry = query(zipsRef, where('pop', '>', 100000))
  } else if (qryId == 2) {
    title.value = 'Cities in New York'
    const zipsRef = collection(db, 'zips')
    qry = query(zipsRef, where('state', '==', 'NY'), limit(10))
  } else if (qryId == 3) {
    title.value = 'List zips in DC with population > 40000'
    const zipsRef = collection(db, 'zips')
    qry = query(zipsRef, where('state', '==', 'DC'), where('pop', '>', 40000))
  } else if (qryId == 4) {
    title.value = 'List zips in NY or DC with population > 60000'
    const zipsRef = collection(db, 'zips')
    qry = query(
      zipsRef,
      where('state', 'in', ['NY', 'DC']),
      where('pop', '>', 60000)
    )
  } else if (qryId == 5) {
    title.value = 'List zips in DC or cities with population > 100000'
    const zipsRef = collection(db, 'zips')
    qry = query(
      zipsRef,
      or(where('state', '==', 'DC'), where('pop', '>', 100000))
    )
  } else if (qryId == 6) {
    title.value = 'List zips in DC and sort the data by population'
    const zipsRef = collection(db, 'zips')
    qry = query(zipsRef, where('state', '==', 'DC'), orderBy('pop'))
  } else if (qryId == 7) {
    title.value = 'List zips latitude between 71 and 73'
    const zipsRef = collection(db, 'zips')
    qry = query(zipsRef, where('loc.x', '>', 71), where('loc.x', '<', 73))
  } else if (qryId == 8) {
    title.value = 'Count zips in DC or cities with population > 100000'
    const zipsRef = collection(db, 'zips')
    qry = query(
      zipsRef,
      or(where('state', '==', 'DC'), where('pop', '>', '100000'))
    )
  } else if (qryId == 9) {
    const zipsRef = collection(db, 'zips')
    qry = await query(zipsRef, where('state', '==', 'DC'))
    const snapshot = await getAggregateFromServer(qry, { totlapop: sum('pop') })
    title.value = 'show the total population in dc ' + snapshot.data().totlapop
  } else if (qryId == 10) {
    const zipsRef = collection(db, 'zips')
    qry = query(zipsRef, where('state', '==', 'NY'))
    const snapshot = await getAggregateFromServer(qry, { totlapop: average('pop') })
    title.value = 'Show the average population in NY(state) ' + snapshot.data().totlapop
  }

  const querySnap = await getDocs(qry)
  querySnap.forEach((doc) => {
    let data = doc.data()
    data.id = doc.id
    zips.value.push(data)
  })
}

watch(() => route.params.id, getQuery)

onMounted(() => {
  getQuery()
})
</script>
<template>
  <Documents :title="title" :data="zips" />
</template>
