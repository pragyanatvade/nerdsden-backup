#!/bin/zsh

# Generate static files with buster
buster generate --domain=http://127.0.0.1:2368

# Copy sitemap files
wget --convert-links --page-requisites --no-parent --directory-prefix static --no-host-directories --restrict-file-name=unix http://127.0.0.1:2368/sitemap.xsl
wget --convert-links --page-requisites --no-parent --directory-prefix static --no-host-directories --restrict-file-name=unix http://127.0.0.1:2368/sitemap.xml
wget --convert-links --page-requisites --no-parent --directory-prefix static --no-host-directories --restrict-file-name=unix http://localhost:2368/sitemap-pages.xml
wget --convert-links --page-requisites --no-parent --directory-prefix static --no-host-directories --restrict-file-name=unix http://localhost:2368/sitemap-posts.xml
wget --convert-links --page-requisites --no-parent --directory-prefix static --no-host-directories --restrict-file-name=unix http://localhost:2368/sitemap-authors.xml
wget --convert-links --page-requisites --no-parent --directory-prefix static --no-host-directories --restrict-file-name=unix http://localhost:2368/sitemap-tags.xml

# Replace urls that were missed by buster
find static/* -name "robots.txt" -type f -exec sed -i '' 's#http://localhost:2368#http://nerds-den.com#g' {} \;
find static/* -name "*.xsl"  -type f -exec sed -i '' 's#http://localhost:2368#http://nerds-den.com#g' {} \;
find static/* -name "*.xml"  -type f -exec sed -i '' 's#href="//localhost:2368#href="//nerds-den.com#g' {} \;
find static/* -name "*.xml"  -type f -exec sed -i '' 's#loc>http://localhost:2368#loc>http://nerds-den.com#g' {} \;
find static/* -name "*.html" -type f -exec sed -i '' 's#u=http://localhost:2368#u=http://nerds-den.com#g' {} \;
find static/* -name "*.html" -type f -exec sed -i '' 's#url=http://localhost:2368#url=http://nerds-den.com#g' {} \;
find static/* -name "*.html" -type f -exec sed -i '' 's#href="http://localhost:2368#href="http://nerds-den.com#g' {} \;
find static/* -name "*.html" -type f -exec sed -i '' 's#src="http://localhost:2368#src="http://nerds-den.com#g' {} \;
find static/* -name "*.html" -type f -exec sed -i '' 's#link>http://localhost:2368#link>http://nerds-den.com#g' {} \;

# Add CNAME file for github pages
buster add-domain nerds-den.com

# Copy files that were missed by buster
#cp humans.txt static/humans.txt
cp -R content/images static/content
