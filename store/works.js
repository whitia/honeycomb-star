import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const cardRef = db.collection('works')

export const state = () => ({
  works: []
})

export const actions = {
  fetchWorks({ commit }, payload) {
    commit('clearWorks')

    return new Promise((resolve, reject) => {
      cardRef.orderBy('created_at', 'desc').limit(payload.limit).get()
      .then(res => {
        res.forEach((doc) => {
          commit('addWork', doc.data())
          resolve(true)
        })
      })
      .catch(error => {
        console.error('An error occurred in fetchWorks(): ', error)
        reject(error)
      })
    })
  }
}

export const mutations = {
  addWork(state, work) {
    state.works.push(work)
  },
  clearWorks(state) {
    state.works = []
  }
}