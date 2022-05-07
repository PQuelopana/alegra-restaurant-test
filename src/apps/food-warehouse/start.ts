import { FoodWarehouseApp } from "./FoodWarehouseApp";

try {
  new FoodWarehouseApp().start();
} catch (e) {
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});
