# ESLint rules to enforce STARZPLAY Javascript style guide

This configuration works on top of [AirBnB's Javascript Style guide](https://github.com/airbnb/javascript) and follows the modifications agreed by [STARZPLAY Frontend team](https://github.com/starzplayarabia/javascript-style-guide).

To use this ruleset in your with ESLint project, first include eslint-config-starzplay as a devDependency on package.json file and install dependencies:

```
"devDependencies": {
    "eslint-config-starzplay": "0.0.1"
  },
```

Once the installation is correct, create an .eslintrc file with the following contents:

```
{
    "extends": "starzplay"
}
```
