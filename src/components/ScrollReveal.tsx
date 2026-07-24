"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* Reveals `.reveal` elements (which start at opacity:0) as they enter view.

   Two things make this reliable:
   1. It re-runs on every route change (`pathname` dep). The root layout — and
      this component — persist across App-Router navigations, so without this a
      soft-navigated page's elements would never be observed and would stay
      stuck invisible (the "media doesn't load after navigating" bug).
   2. It never leaves content hidden. IntersectionObserver drives the nice
      staggered effect, but a setTimeout + scroll + visibilitychange fallback
      (none of which depend on requestAnimationFrame, which is paused in
      backgrounded tabs) guarantees on-screen content becomes visible. */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reveal = (el: Element) => el.classList.add("in");
    const pending = () => document.querySelectorAll<HTMLElement>(".reveal:not(.in)");

    // Force-show anything at or above the fold. Cheap, idempotent, rAF-free.
    const revealInView = () => {
      const h = window.innerHeight || document.documentElement.clientHeight;
      pending().forEach((el) => {
        if (el.getBoundingClientRect().top < h * 0.95) reveal(el);
      });
    };

    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target);
              io!.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
      );
      pending().forEach((el) => io!.observe(el));
    } else {
      pending().forEach(reveal);
    }

    // Guarantees (independent of IO / rAF):
    const t = setTimeout(revealInView, 350);
    const onScroll = () => revealInView();
    const onVis = () => document.visibilityState === "visible" && revealInView();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVis);

    return () => {
      clearTimeout(t);
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [pathname]);

  return null;
}
