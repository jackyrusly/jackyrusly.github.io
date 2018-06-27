set -e
if [ $CIRCLE_BRANCH == $SOURCE_BRANCH ]; then
    git config --global user.email $GH_EMAIL
    git config --global user.name $GH_NAME

    git clone $CIRCLE_REPOSITORY_URL out

    cd out
    git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
    git rm -rf .
    cd ..

    npm run build

    cp -a dist/. out/.

    mkdir -p out/.circleci && cp -a .circleci/config.yml out/.circleci/config.yml
    cd out

    git add .
    git commit -m "Automated Deployment"

    git push origin $TARGET_BRANCH
fi