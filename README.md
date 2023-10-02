# Welcome to <code>for-loop-icons</code>
<p>
  <a href="https://www.npmjs.com/package/for-loop-icons" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/for-loop-icons?labelColor=black&color=black">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license_MIT-black" />
  </a>
   <a href="https://www.npmjs.com/package/for-loop-icons" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dt/for-loop-icons?labelColor=black&color=black">
  </a>
</p>
Visit FOR{LOOP} 👉 <a href="https://forloop.vercel.app/" target="_blank">https://forloop.vercel.app/</a>
<br /><br />
You can use icons and UI components quickly and easily in React. Type checking is also possible. <br />
The <code>for-loop-icons</code> library provides FOR{LOOP}'s uniquely designed icons and components.
<br /><br />

## Install
```sh
npm i for-loop-icons
```

## Usage
```typescript
import { House } from 'for-loop-icons';

function IconEx() {
   return (
      <House size = {40} color = 'black' />
   );
}
```
```typescript
import { DarkPlusButton } from 'for-loop-icons';

function ComponentEx() {
   return (
      <DarkPlusButton size={120} />
   );
}
```

### Props
| name           | type      | default      | description                         |
| -------------- | --------- | ------------ | ----------------------------------- |
| `size`         | `number`  | **required** | all icons, button/toggle components |
| `color`        | `string`  | **required** | all icons                           |
| `width`        | `number`  | **required** | input/search/dropdown components    |
| `scale`        | `number`  | **required** | checkbox components                 |

<br />
Please check [FOR{LOOP}](https://forloop.vercel.app/) for more details.