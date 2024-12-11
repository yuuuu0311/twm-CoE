export default function Index() {
    return (
        <ul className="list-disc">
            <li>
                <a href={"/withPromise"}>withPromise</a>
            </li>
            <li>
                <a href={"/withoutPromise"}>withoutPromise</a>
            </li>
            <li>
                <a href={"/compare"}>Compare</a>
            </li>
        </ul>
    );
}
