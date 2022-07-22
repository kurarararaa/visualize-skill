import { writable } from "svelte/store";

const selectedUserEmail = writable<string>();
export default selectedUserEmail;