const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const kitchen_backend = [
  ...common,
  'tests/apps/kitchen/features/**/*.feature',
  '--require tests/apps/kitchen/features/step_definitions/*.steps.ts'
].join(' ');

const order_backend = [
  ...common,
  'tests/apps/order/features/**/*.feature',
  '--require tests/apps/order/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  kitchen_backend,
  order_backend,
};
