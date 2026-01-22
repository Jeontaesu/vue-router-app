<template>
  <div class="container">
    <h1>📘 Vue 3 실전 강좌</h1>
    <nav>
      <router-link to="/">홈</router-link>
      <router-link to="/about">소개</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  font-family: sans-serif;
}
nav a {
  margin: 0 8px;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
