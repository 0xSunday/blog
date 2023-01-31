---
title: How to use useState
date: "01-31-2023"
image: using-use-state-hook.png
excerpt: Useing useState hook in reactjs
isFeatured: true
---

# Using the State Hook

Try the new React documentation.

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

The introduction page used this example to get familiar with Hooks:

```jsx
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
```
