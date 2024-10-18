export function generateRandomValues(count) {
    const values = [];
    for (let i = 0; i < count; i++) {
      values.push({
        width: Math.random() * 150 + 50,
        height: Math.random() * 150 + 50,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25,
        duration: Math.random() * 15 + 10,
      });
    }
    return values;
  }
  