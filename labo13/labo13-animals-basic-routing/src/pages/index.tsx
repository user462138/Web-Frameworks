import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Link href="/animals/dog">Dog</Link>
      <Link href="/animals/cat">Cat</Link>
      <Link href="/animals/hamster">Hamster</Link>
    </div>
  );
}
