function showMenu() {
    const menuItems = `
      <h2>Our Menu:</h2>
      <ol>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Pasta</li>
        <li>Salad</li>
        <li>Veg MoMo</li>
        <li>Non Veg MoMo</li>
        <li>Chowmin</li>
        <li>Leg Pices</li>
        <li>Rost</li>
        <li>Hukka</li>
        <li>Sekuwa</li>
        <li>Roti</li>
        

      </ol>
    `;
    document.getElementById('foodList').innerHTML = menuItems;
    document.getElementById('showMenuBtn').style.display = 'none';
  document.getElementById('closeMenuBtn').style.display = 'inline-block';
  }
  function closeMenu() {
    document.getElementById('foodList').innerHTML = '';
  
    document.getElementById('closeMenuBtn').style.display = 'none';
    document.getElementById('showMenuBtn').style.display = 'inline-block';
  }
  function serveFood() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    let foodItem;
  
    switch (userInput) {
      case '1':
        foodItem = 'You Will Get Your Order Soon';
        window.alert ('Burger. Wow, great choice!');
        break;
      case '2':
        foodItem = 'You Will Get Your Order Soon';
        window.alert ('Pizza. Wow, great choice!');
        break;
      case '3':
        foodItem = 'You Will Get Your Order Soon';
        window.alert ('Pasta. Wow, great choice!');
        break;
      case '4':
        foodItem = 'You Will Get Your Order Soon';
        window.alert ('Salad. Wow, great choice!');
        break;
        case '5':
        foodItem = 'You Will Get Your Order Soon';
        window.alert ('Veg MoMo. Wow, great choice!');
        break;
        case '6':
        foodItem = 'You Will Get Your Order Soon';
        window.alert ('Non Veg MoMo. Wow, great choice!');
        break;
        case '7':
        foodItem = 'You Will Get Your Order Soon';
        window.alert ('Chowmin. Wow, great choice!');
        break;
        case '8':
        foodItem = 'You Will Get Your Order Soon';
        window.alert ('Leg Pices. Wow, great choice!');
        break;
        case '9':
        foodItem = 'You Will Get Your Order Soon';
        window.alert ('Rost. Wow, great choice!');
        break;
        case '10':
        foodItem = 'You Will Get Your Order Soon';
        window.alert ('Hukka. Wow, great choice!');
        break;
        case '11':
        foodItem = 'You Will Get Your Order Soon';
        window.alert ('Sekuwa. Wow, great choice!');
        break;
        case '12':
        foodItem = 'You Will Get Your Order Soon';
        window.alert ('Roti. Wow, great choice!');
        break;
      default:
        foodItem = 'Sorry Try Again';
        window.alert ('Invalid Option');
    }
  
    document.getElementById('foodList').innerHTML = foodItem;
  
    document.getElementById('greeting').innerText = 'Thank You for choosing us. See you again';
    document.getElementById('feedbackSection').classList.remove('hidden');
  }
  
  function rate(stars) {
    alert(`You've rated us ${stars} stars! Thank you for your feedback.`);
   
  }
  