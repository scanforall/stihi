-scss
prepros

-pug
pug --watch ./ --pretty

-find
(?!rem\()-?\d+px(?!\))  press .*
rem($0)
./css
*.css

-git
git push -f


-wp
<?php echo get_template_directory_uri (); ?>/
