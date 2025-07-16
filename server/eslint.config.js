import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js },
        extends: ['js/recommended']
    },
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: { globals: globals.node }
    },
    globalIgnores(['./generated']),
    {
        rules: {
            'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
        }
    }
]);
