// Simple sanity test (no framework needed for learning)
console.log("Running tests...");

function add(a, b) {
  return a + b;
}

if (add(2, 3) === 5) {
  console.log("✅ Test passed: add(2,3) = 5");
  process.exit(0);
} else {
  console.log("❌ Test failed");
  process.exit(1);
}
