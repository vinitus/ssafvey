import { exec } from 'child_process';
const filename = process.argv[2];

if (!filename) {
  exec(`git add .`, (error, stdout, stderr) => {
    if (error) {
      console.error(`git add fail: ${error.message}`);
      return;
    }
    if (stderr && stderr.split(':')[0] !== 'warning') {
      console.error(`git add fail: ${stderr}`);
      return;
    }
    console.log('git add success: ', filename);
    exec('git commit', (error, stdout, stderr) => {
      if (error) {
        console.error(`git commit fail: ${error.message}`);
        return;
      }
      if (stderr && stderr.split(':')[0] != 'warning') {
        console.error(`git commit fail: ${stderr}`);
        return;
      }
      console.log('git commit done: ', filename);
    });
  });
}

exec(`git add ${filename}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`git add fail: ${error.message}`);
    return;
  }
  if (stderr && stderr.split(':')[0] != 'warning') {
    console.error(`git add fail: ${stderr}`);
    return;
  }
  console.log('git add success: ', filename);
  exec('git commit', (error, stdout, stderr) => {
    if (error) {
      console.error(`git commit fail: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`git commit fail: ${stderr}`);
      return;
    }
    console.log('git commit done: ', filename);
  });
});
