import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    username: "",
  }),
  actions: {
    setUsername(name) {
      this.username = name;
    },
  },
});
