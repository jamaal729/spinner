const tokens = ["|", "/", "-", "\\", "|", "/", "-", "\\", "-", "|"];
for (let i = 0; i < 7; i++) {
  setTimeout(() => {
    process.stdout.write('\r  ' + tokens[i]);
  }, i * 200);
}
