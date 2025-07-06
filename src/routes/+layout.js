export const prerender = true;
export const ssr = false;
export const trailingSlash = 'always';

// Add error handling
export function load() {
  return {
    // This ensures the page loads even if there are issues
  };
}