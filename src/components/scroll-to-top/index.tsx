'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Workaround: Fixes a Next.js App Router issue where the page doesn't always 
 * scroll to the top on navigation via the <Link> component. This forces a 
 * scroll reset on every pathname change.
*/
export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
