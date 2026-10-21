/**
 * CPU milliseconds a reader may spend on a hostile or oversized input. These tests catch runaway
 * (quadratic, unbounded) work, which takes seconds; a few hundred milliseconds is normal on slower
 * build machines such as Cloudflare's, so the budget leaves room for them.
 */
export const CPU_BUDGET_MS = 1000;
