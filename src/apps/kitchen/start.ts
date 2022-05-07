import { KitchenApp } from "./KitchenApp";

try {
  new KitchenApp().start();
} catch (e) {
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});
