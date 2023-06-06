import { edenTreaty } from "@elysiajs/eden";
import { App } from "@unicorn-menagerie/menagerie";

export const menagerieClient = edenTreaty<App>("http://localhost:3000");
