This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Requirements:
- **Type Safety**: All component props are explicitly typed
- **Recursive Rendering**: Used recursive rendering to display data
- **Visual Hierarchy**: Nested components are spaced left and below their parents
- **Interactive**: Animations on dropdown content when they are first opened
- **Customizable**: The labels, icons and text are all decoupled to provide maximum flexibility. There is a single source of truth (const file) to update them or add more
- **Accessible**: Only clickable elements are able to be highlighted, showing interactability. Aria-labels are on every icon.
- **Performance Optimized**: Only uncollapsed files are displayed
- **Mobile/Desktop Styled**: Made this feature mobile optimized to improve visusals on phones & tablets

Note: Took some liberties with the icons so I could use an external library

Mobile: 
<img width="451" alt="Screenshot 2024-11-19 at 4 39 40 PM" src="https://github.com/user-attachments/assets/afb546ac-ca92-4c59-9fff-376da2e52db9">

Web:
<img width="703" alt="Screenshot 2024-11-19 at 4 38 47 PM" src="https://github.com/user-attachments/assets/c92c45e6-76f4-4e5f-a975-fe4bc3a0d9c3">
