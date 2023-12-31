#### turb discussion #6203 repro

Hi Anthony! The repo follows the structure,

```
.
├── ./apps/
│   └── ./web (@repo/web): A nextjs website.
├── ./packages/
│   ├── ./just-in-time (@repo/just-in-time): A transpiled package.
│   └── ./compiled (@repo/compiled): A compiled package.
└── ./tooling/
    ├── ./eslint-config (@repo/lint): Reuseable Eslint Configurations.
    └── ./tsconfig (@repo/tsconfig): Reuseable Typescript Configurations.
```

Let's say my package `@repo/compiled` generates some JS bindings after being compiled on a
specific platform (suppose `windows-latest`) such that the bindings in `/dist` are already
present before the compilation of my web application (`@repo/web`) takes place
(suppose `ubuntu-latest`) via a different workflow. All I want my nextjs application (`@repo/web`)
to do is bundle those bindings at build time.
