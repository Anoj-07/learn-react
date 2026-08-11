# React Notes

## Conditional Rendering
- Allows you to control what gets rendered in your application based on a condition.
- Used to **show**, **hide**, or **change** components based on specific conditions.

---

## Props
- **Props (Properties)** are used to pass data from a **parent component** to a **child component**.
- Props are **read-only**, meaning the child component cannot modify them.

---

## PropTypes
- Used to validate the data type of props.
- Helps prevent bugs by ensuring the correct type of data is passed to a component.

---

## defaultProps
- Used to provide default values for props.
- Default values are used when the parent component does not pass a prop.

---

## Example: Passing Props

```jsx
import Card from './components/card/Card'

function App() {
  return (
    <>
      <Card
        name="Anoj"
        text="Software Engineer passionate about React, Django, and building modern web applications."
        isStudent={false}
      />

      <Card
        name="Ram"
        text="A dedicated student who enjoys learning new technologies and solving programming challenges."
        isStudent={true}
      />

      <Card
        name="Paranjal"
        text="An enthusiastic learner exploring web development, JavaScript, and React to build creative projects."
        isStudent={false}
      />

      <Card />
    </>
  );
}

export default App;
```

### Props Passed

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Name of the person |
| `text` | `string` | Description or bio |
| `isStudent` | `boolean` | Indicates whether the person is a student |

---

## Example: `defaultProps`

```jsx
function Card({
    name = "guest",
    text = "No text",
    isStudent = false,
}) 
```

If a component is rendered without props:

```jsx
<Card />
```

React will use the values defined in `defaultProps`.


## Render Lists
## Hooks
- onClick => <button>
- onChange => <input> <textarea> <select> <radio>


##  Updater Function  
## Update Object States

<!-- HOOKS -->
## useState
## useEffect