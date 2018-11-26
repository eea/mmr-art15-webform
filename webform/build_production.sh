

npm run build

cp ./dist-example/webform-project-export.metadata ./dist
cp ./dist-example/empty.xml ./dist
cp ./dist-example/schema.xsd ./dist

cp ./dist-example/mmr-art15.xsd ./dist

zip -r -j dist.zip ./dist
