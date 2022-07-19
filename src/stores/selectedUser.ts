import { writable } from "svelte/store";

const selectedUser = writable<User>();
export default selectedUser;

class User {
  name: string
  email: string
  skills: string[]
  ranks: string[]

  constructor(name: string, email: string, skills: string[], ranks: string[]) {
    this.name = name
    this.email = email
    this.skills = skills
    this.ranks = ranks
  }

  profile(): string {
    return `name: ${this.name} email: ${this.email} skills: ${this.skills} ranks: ${this.ranks}`
  }
}