document.addEventListener('DOMContentLoaded', () => {
    // Create the accessibility button
    const accessibilityButton = document.createElement('button');
    accessibilityButton.textContent = 'A+';
    accessibilityButton.classList.add('accessibility-button');
  
    // Create the side window
    const sideWindow = document.createElement('div');
    sideWindow.classList.add('side-window');
  
    // Create the font size increase button
    const increaseFontButton = document.createElement('button');
    increaseFontButton.textContent = 'Aumentar Fonte';
    increaseFontButton.classList.add('font-button');
  
    // Create the font size decrease button
    const decreaseFontButton = document.createElement('button');
    decreaseFontButton.textContent = 'Diminuir Fonte';
    decreaseFontButton.classList.add('font-button');
  
    // Create the contrast increase button
    const increaseContrastButton = document.createElement('button');
    increaseContrastButton.textContent = 'Aumentar Contraste';
    increaseContrastButton.classList.add('contrast-button');
  
    // Create the contrast decrease button
    const decreaseContrastButton = document.createElement('button');
    decreaseContrastButton.textContent = 'Diminuir Contraste';
    decreaseContrastButton.classList.add('contrast-button');
  
    // Append the buttons to the side window
    sideWindow.appendChild(increaseFontButton);
    sideWindow.appendChild(decreaseFontButton);
    sideWindow.appendChild(increaseContrastButton);
    sideWindow.appendChild(decreaseContrastButton);
  
    // Append the side window to the accessibility button
    accessibilityButton.appendChild(sideWindow);
  
    // Append the accessibility button to the body
    document.body.appendChild(accessibilityButton);
  
    // Store the original font size and contrast
    const originalFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    let contrastLevel = 100;
  
    // Add event listeners to the font size buttons
    increaseFontButton.addEventListener('click', () => {
      document.querySelectorAll('a, p, h1, h2, h3, h4, h5, h6').forEach((element) => {
        const currentFontSize = parseFloat(getComputedStyle(element).fontSize);
        element.style.fontSize = `${currentFontSize + 2}px`;
      });
    });
  
    decreaseFontButton.addEventListener('click', () => {
      document.querySelectorAll('a, p, h1, h2, h3, h4, h5, h6').forEach((element) => {
        const currentFontSize = parseFloat(getComputedStyle(element).fontSize);
        element.style.fontSize = `${currentFontSize - 2}px`;
      });
    });
  
    increaseContrastButton.addEventListener('click', () => {
      contrastLevel += 10;
      document.body.style.filter = `contrast(${contrastLevel}%)`;
    });
  
    decreaseContrastButton.addEventListener('click', () => {
      contrastLevel -= 10;
      document.body.style.filter = `contrast(${contrastLevel}%)`;
    });
  
    // Add styles to the accessibility button and side window
    const styles = `
      .accessibility-button {
        position: fixed;
        top: calc(50% - 1vh);
        right: 2vw;
        transform: translateY(-50%);
        background-color: blue;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 10px 15px;
        font-size: 16px;
        cursor: pointer;
        z-index: 9999;
      }
  
      .side-window {
        position: absolute;
        top: 50%;
        right: calc(100% + 0.5vw);
        transform: translateY(-50%);
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        width: 200px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: none;
        animation: slideIn 0.3s ease-in-out forwards;
      }
  
      @keyframes slideIn {
        0% {
          right: calc(100% + 1vw);
          opacity: 0;
        }
        100% {
          right: calc(100% + 0.5vw);
          opacity: 1;
        }
      }
  
      .side-window.open {
        display: block;
      }
  
      .font-button, .contrast-button {
        display: block;
        width: 100%;
        background-color: #f1f1f1;
        border: none;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        cursor: pointer;
      }
  
      .font-button:hover, .contrast-button:hover {
        background-color: #e1e1e1;
      }
    `;
  
    // Add the styles to the page
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
  
    // Toggle the side window when the accessibility button is clicked
    accessibilityButton.addEventListener('click', () => {
      sideWindow.classList.toggle('open');
      if (sideWindow.classList.contains('open')) {
        sideWindow.style.animation = 'slideIn 0.3s ease-in-out forwards';
      } else {
        sideWindow.style.animation = '';
      }
    });
  
    // Close the side window when clicking outside of it
    document.addEventListener('click', (event) => {
      if (!sideWindow.contains(event.target) && event.target !== accessibilityButton) {
        sideWindow.classList.remove('open');
        sideWindow.style.animation = '';
      }
    });
  
    // Prevent closing the side window when clicking on the buttons
    increaseFontButton.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  
    decreaseFontButton.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  
    increaseContrastButton.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  
    decreaseContrastButton.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });