"use client";

import { useEffect } from "react";

/**
 * This component automatically adjusts the CSS zoom level of the entire website
 * so that it perfectly matches the proportions seen on a standard laptop screen.
 */
export function AutoScaler() {
  useEffect(() => {
    // We removed the zoom logic because it caused padding issues on different screen sizes.
    // The website will now use natural CSS responsive design without forcing a specific scale.
    (document.body.style as any).zoom = "1";
    document.body.style.transform = "none";
  }, []);

  return null;
}
