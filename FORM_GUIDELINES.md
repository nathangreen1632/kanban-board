# 🧾 Form Handling Guidelines

This document defines best practices for handling form state, rendering inputs, and setting default values in this project.

---

## ✅ General Rules

1. **Use `??` (Nullish Coalescing) instead of `||` when providing default values for form inputs.**
    - Prevents unintended overwrites of empty strings (`''`) or valid values like `0`.
    - Example:
      ```tsx
      value={user.name ?? ''}   // ✅ Correct
      value={user.age ?? 0}     // ✅ Correct
      ```

2. **Avoid using `||` in form field values.**
    - `||` treats `''`, `0`, `false`, and `NaN` as falsy and will override them with fallback values.
    - Example:
      ```tsx
      value={user.name || 'Default'}   // ❌ Avoid
      ```

3. **Always match `label` `htmlFor` with the `id` of the associated input.**
    - Ensures accessibility and screen reader support.
    - Example:
      ```tsx
      <label htmlFor="tStatus">Status</label>
      <select id="tStatus" ... />
      ```

4. **Use controlled components with React state.**
    - Bind input `value` to a field in state.
    - Update state via `onChange` handler.
    - Example:
      ```tsx
      const [formData, setFormData] = useState({ name: '' });
 
      <input
        name="name"
        value={formData.name ?? ''}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      ```

5. **Avoid fragments (`<>...</>`) if returning a single JSX element.**
    - Return the single parent element directly.
    - Example:
      ```tsx
      return (
        <div>...</div>   // ✅ Good
      );
      ```

---

## ✅ Shared Type for API Responses

To improve consistency and error handling across services, use the shared `ApiResponse<T>` interface:

```ts
// src/interfaces/ApiResponse.ts

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
}
```

Use it as the return type of any async function that communicates with the API.

---

## 📌 Summary

| Situation                           | Preferred Practice                |
|------------------------------------|------------------------------------|
| Default values in inputs           | Use `??`                           |
| Controlled inputs                  | Bind to state, use `onChange`      |
| Labels                             | Match `htmlFor` and `id`           |
| Single parent return               | Don’t use fragment unnecessarily   |
| API return types                   | Use `ApiResponse<T>`               |

---

For any form-related questions or edge cases, refer to this guide first.

_Updated: April 2, 2025_

