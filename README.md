# Learning JavaScript

## Links

+ A clear [explanation](https://javascript.info/async) of async

## Emacs setup

+ `sudo npm install -g typescript-language-server typescript`
+ `M-x treesit-install-language-grammar`
  + `javascript` (at tag `v0.23.1`)
  + `js-doc` (at tag `v0.23.2`)

+ Minimal config:
```
(use-package eglot
	:defer t
	:bind
	(:map eglot-mode-map
		  ("C-c r" . eglot-rename))
	:hook ((js-ts-mode
			.
			(lambda ()
			  (eglot-ensure)
			  (company-mode)))))
```

## How to create an `npm` package

+ Create an npm [account](https://www.npmjs.com/settings/drdv/profile) and activate 2FA
+ `mkdir my-first-npm-package && cd my-first-npm-package`
+ `npm init -y` (this generates `package.json`)
+ edit `package.json`
  + set `"name"` so that the package is scoped upder the created npm account
  + add `"type": "module"` to use ES modules
+ create a `.npmignore`
+ `npm pack --dry-run` (to check what would be included in the package)
+ `npm publish --access public` (publish)
