import { writable } from "svelte/store";

const skills = writable<Skill[]>([]);
export default skills;

class Skill {
  name: string
  category: string

  constructor(name: string, category: string) {
    this.name = name
    this.category = category
  }

  profile(): string {
    return `name: ${this.name} category: ${this.category}`
  }
}
