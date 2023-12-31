import { defineConfig } from 'tsup';
import { exec } from 'child_process';
import { type } from 'os';

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  splitting: false,
  treeshake: true,
  clean: true,
  outDir: 'dist',
  onSuccess: async () => {
    if (type() !== "Windows_NT") {
      throw new Error("Throwing an error to emulate specific OS compilation. Use windows to compile this package.")
    }
    exec('tsc --emitDeclarationOnly');
  },
  ...options,
}));
