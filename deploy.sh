#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:artem-2237/VueCvGenerator.git master:gh-pages

cd -
