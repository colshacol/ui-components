/**
 * Debounce a function using a microtask.
 */
export function microTaskDebounce(fn: () => void): () => void {
  let scheduled = false;
  return async () => {
    if (!scheduled) {
      scheduled = true;
      // Promise is scheduled as a microtask.
      await Promise.resolve();
      scheduled = false;
      fn();
    }
  };
}
