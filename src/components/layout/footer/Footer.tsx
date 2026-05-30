import Link from "next/link";

export default function Footer(){
    return (
        <footer
            className="bg-brand-coffee py-10 px-5 text-center text-brand-porcelain"
        >
            <span
                className="text-sm"
            >
                Radosław Adamczyk | <Link href="https://adamczyk.top" target="_blank">adamczyk.top</Link> &copy; {new Date().getFullYear()}
            </span>
        </footer>
    )
}