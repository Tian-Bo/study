<template>
  <div class="about">
    <h1>About</h1>
    <h1 v-for="(item, index) in users" :key="index">{{ item.slug }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

export default {
    data() {
        return {
            users: '',
            msg: ''
        }
    },
    methods: {

    },
    created() {
        this.http.get('/users').then(data => {

            this.users = data

        })
    }
}
</script>
