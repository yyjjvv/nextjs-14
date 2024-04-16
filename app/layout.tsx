import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = { // We can use metadata only in page and layout
    title: {
        template: "%s | Next Movies",
        default: "Next Movies" // if there is no specific title, this will be the default title
    },
    description: "Best movie",
};

export default function Layout({ // Layouts are nesting each other
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}