# How to create an `npm` package

+ Create an npm [account](https://www.npmjs.com/settings/drdv/profile) and activate 2FA
+ `mkdir my-first-npm-package && cd my-first-npm-package`
+ `npm init -y` (this generates `package.json`)
+ edit `package.json`
  + set `"name"` so that the package is scoped upder the created npm account
  + add `"type": "module"` to use ES modules
+ create a `.npmignore`
+ `npm pack --dry-run` (to check what would be included in the package)
+ `npm publish --access public` (publish)
