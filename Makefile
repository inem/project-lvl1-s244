install:
	npm install

start:
	npm run babel-node -- src/bin/brain-even.js

build:
	rm -rf dist
	npm run build

publish:
	npm publish

lint:
	npm run eslint

.PHONY: test