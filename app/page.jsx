import Link from "next/link";

export default function Index() {
    return (
        <ul className="list-disc">
            <li>
                <Link href={"/withPromise"}>withPromise</Link>
            </li>
            <li>
                <Link href={"/withoutPromise"}>withoutPromise</Link>
            </li>
            <li>
                <Link href={"/compare"}>Compare</Link>
            </li>
        </ul>
    );
}
