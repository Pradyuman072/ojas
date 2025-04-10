import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and optimizes them with tailwind-merge
 * @param {...string} inputs - Class names or conditional class objects
 * @returns {string} - Merged and optimized class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}