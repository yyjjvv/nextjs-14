"use client"; //this component need to be hydrated = need to be interactive in client
//rendered in backend, hydrated in frontend

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const path = usePathname();
    const [count, setCount] = useState(0);

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "❤️" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link>{" "}
                    {path === "/about-us" ? "❤️" : ""}
                </li>
                <li>
                    <button onClick={() => setCount((c) => c + 1)}>
                        {count}
                    </button>
                </li>
            </ul>
        </nav>
    );
}
//hydration : 단순 HTML을 react app으로 초기화 하는 작업