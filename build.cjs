const esbuild = require('esbuild');
const { execSync } = require('child_process');
const { gzipSync } = require('zlib');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
require ('colors')

const build = async () => {
  try {
    // Compile TypeScript definitions
    execSync('npx tsc --declaration --emitDeclarationOnly --outDir dist');

    // Read dependencies from package.json
    const { dependencies, peerDependencies, devDependencies } = require('./package.json');
    const allDependencies = { ...dependencies, ...peerDependencies, ...devDependencies };
    const external = Object.keys(allDependencies);

    // ESBuild options
    const options = {
      entryPoints: ['src/server/main.ts'],
      bundle: true,
      minify: false,
      sourcemap: true,
      target: 'es2020',
      platform: 'node',
      outfile: 'dist/index.js',
      external,
      logLevel: 'info',
      metafile: true,
      legalComments: 'none',
    };

    // Build with ESBuild
    await esbuild.build(options);

    // Compress the output file
    // const fileContent = readFileSync('dist/index.js');
    // const compressedContent = gzipSync(fileContent);
    // writeFileSync('dist/index.js.gz', compressedContent);

    console.log('Build and compression complete.'.magenta);
  } catch (error) {
    console.error('Build failed:', error);
  }
};

// Initial build
build();
