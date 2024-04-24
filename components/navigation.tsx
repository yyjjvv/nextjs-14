"use client"; //NOTE: this component need to be hydrated = need to be interactive in client
//rendered in backend, hydrated in frontend

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
    const path = usePathname();

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "❤️" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link>{" "}
                    {path === "/about-us" ? "❤️" : ""}
                </li>
            </ul>
        </nav>
    );
}
//hydration : 단순 HTML을 react app으로 초기화 하는 작업
