import { type ExportMe } from "@repo/transpiled";
import Link from "next/link";

export default function Page(): JSX.Element {
  const instance: ExportMe = {
    a: 1,
    b: 2,
    c: "isitayush",
  };
  return (
    <main>
      <span>
        Hello! You should check{" "}
        <Link
          href="https://github.com/vercel/turbo/discussions/6203"
          target="_blank"
        >
          this discussion
        </Link>{" "}
        out. Below is a instance created from the bindings from @repo/compiled.
      </span>
      <code>{JSON.stringify(instance, null, 2)}</code>
    </main>
  );
}
