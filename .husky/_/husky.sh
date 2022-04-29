#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo '🏗️👷 Styling, testing and building your project before committing'

# Check Prettier standards
npm run lint ||
(
    echo 'Fix you style errors before committing';
    false;
)

# Check tsconfig standards
npm run check-types ||
(
    echo 'Fix you types errors before committing';
    false;
)

# If everything passes... Now we can commit
echo 'Alright... Code looks good to me... Trying to build now.'

npm run build ||
(
    echo 'Build failed... Please fix the errors before committing'; 
    false;
)

# If everything passes... Now we can commit
echo 'Commit successful!'
