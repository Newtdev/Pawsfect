
const fs = require('fs');

const files = process.argv.slice(2);

files.forEach(file => {
  const appContent = fs.readFileSync(file, 'utf-8');
  const updateAppContent = appContent.replace(
    /console\.(log|warn|error|info|debug|trace)\(.*\);?/g,
    '',
  );
  fs.writeFileSync(file, updateAppContent, 'utf-8');
});
