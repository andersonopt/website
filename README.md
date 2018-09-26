
# Anderson Optimization

This is the landing page for Anderson Optimization.  

## CI

We use Circle CI to publish our website upon commit.

[![CircleCI](https://circleci.com/gh/andersonopt/website.svg?style=svg)](https://circleci.com/gh/andersonopt/website)

### Build Prod

```bash
HUGO_ENV=production hugo 
```

### HTML Proofing

[html-proofer](https://github.com/gjtorikian/html-proofer)

Run in root directory after building
```bash
htmlproofer public --allow-hash-href --check-html --empty-alt-ignore --disable-external
```

### Colors

Light Blue: #91D8F7