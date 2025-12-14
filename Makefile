help: URL := github.com/drdv/makefile-doc/releases/latest/download/makefile-doc.awk
help: DIR := $(HOME)/.local/share/makefile-doc
help: SCR := $(DIR)/makefile-doc.awk
help: VFLAG := -v SUB='$$(OPEN_TARGETS):open-:$(NOTES)'
help: ## Show this help
	@test -f $(SCR) || wget -q -P $(DIR) $(URL)
	@awk $(VFLAG) -f $(SCR) $(MAKEFILE_LIST)

setup-node:
	python -m venv .venv && source .venv/bin/activate && pip install nodeenv && nodeenv -p -n lts

pack-dry-run: ## npm pack dry run
	npm pack --dry-run

publish: ##! Publish to npm
	npm publish --access public

package-download: ## Download published package
	npm pack @drdv/my-first-npm-package
