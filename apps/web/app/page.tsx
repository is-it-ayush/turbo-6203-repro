import { executeMeJIT } from "@repo/just-in-time";
import { executeMeCompiled } from "@repo/compiled";
import Link from "next/link";


export default function Page(): JSX.Element {
  executeMeJIT();
  executeMeCompiled(); // pre-generated bindings provided by @repo/compiled.
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
        out.
      </span>
    </main>
  );
}
