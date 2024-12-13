/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
const HomePageView = () => {
  // Render Home page view
  return (
    <div>
      <h1>Home Page</h1>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Main_Quadrangle%2C_University_of_Sydney_%28cropped%29.jpg"
        alt="Campus"
        style={{ width: '1400px', height: 'auto' }} 
      />
    </div>
  );    
}

export default HomePageView;