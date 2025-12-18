include Makefile.inc

setup-node:
	python -m venv .venv && source .venv/bin/activate && pip install nodeenv && nodeenv -p -n lts

pack-dry-run: ## npm pack dry run
	npm pack --dry-run

publish: ##! Publish to npm
	npm publish --access public

package-download: ## Download published package
	npm pack @drdv/my-first-npm-package
