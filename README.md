#### turb discussion #6203 repro

- [discussion](https://github.com/vercel/turbo/discussions/6203)

Hi @anthonyshew! I hacked together a quick repo that emulates a somewhat similar
scenario. The repo follows the following structure,

```
.
├── ./apps/
│   └── ./web: A nextjs website.
├── ./packages/
│   └── ./transpiled: A package that needs to be transpiled if consumed. We use it's pre-built bindings in our @repo/web.
└── ./tooling/
    ├── ./eslint-config: Reuseable Eslint Configurations.
    └── ./tsconfig: Reuseable Typescript Configurations.
```

Let's say my package `@repo/transpiled` has some typescript bindings that are generated
with the compilation of the package on  a very os specific environment. These bindings need to be
transpiled and bundle'ed with my nextjs web application (`@repo/web`). The problem is, If I run
`turbo build` from root. It'll execute the "build" script for all packages. This  would fail
for `@repo/transpiled` package since it cannot compile on host os (needs windows & therefore
I used [cross-rs](https://github.com/cross-rs/cross) as a substitute which uses wine under the hood).

- I'm also uploading the [bindings](./packages/transpiled/bindings/) folder but you can generate
one by running `turbo bindings`. You'll need [cross-rs](https://github.com/cross-rs/cross) and docker
installed.
