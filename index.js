
    document.body.style.backgroundColor = 'silver';
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.padding = '20px';
   

    const title = document.getElementById('title');
    title.style.color = 'green';
    title.style.textAlign = 'center';
    title.style.fontSize = '2.5em';

    const headings = document.querySelectorAll('h3');
    headings.forEach(h3 => {
      h3.style.textTransform = 'uppercase';
      h3.style.color = '#2f4f4f';
      h3.style.marginTop = '30px';
    });

    const fruitList = document.getElementById('fruList');
    const newFruit = document.createElement('li');
    newFruit.textContent = 'Oranges';
    fruitList.appendChild(newFruit);

    const vegList = document.getElementById('vegList');
    const newVeg = document.createElement('li');
    newVeg.textContent = 'Spinach';
    vegList.appendChild(newVeg);

    const fruitForm = document.createElement('div');
    fruitForm.style.marginTop = '10px';

    const fruitInput = document.createElement('input');
    fruitInput.type = 'text';
    fruitInput.placeholder = 'Add a fruit...';
    fruitInput.style.padding = '5px';
    fruitInput.style.marginRight = '10px';
    fruitInput.style.border = '1px solid #ccc';
    fruitInput.style.borderRadius = '4px';

    const fruitButton = document.createElement('button');
    fruitButton.textContent = 'Add Fruit';
    fruitButton.style.backgroundColor = 'green';
    fruitButton.style.color = 'white';
    fruitButton.style.border = 'none';
    fruitButton.style.padding = '16px 28px';
    fruitButton.style.borderRadius = '4px';
    fruitButton.style.cursor = 'pointer';

    fruitButton.onclick = function () {
      const value = fruitInput.value.trim();
      if (value !== '') {
        const li = document.createElement('li');
        li.textContent = value;
        fruitList.appendChild(li);
        fruitInput.value = '';
      }
    };

    fruitForm.appendChild(fruitInput);
    fruitForm.appendChild(fruitButton);
    fruitList.parentElement.appendChild(fruitForm);

    const vegForm = document.createElement('div');
    vegForm.style.marginTop = '10px';

    const vegInput = document.createElement('input');
    vegInput.type = 'text';
    vegInput.placeholder = 'Add a vegetable...';
    vegInput.style.padding = '5px';
    vegInput.style.marginRight = '10px';
    vegInput.style.border = '1px solid #ccc';
    vegInput.style.borderRadius = '4px';

    const vegButton = document.createElement('button');
    vegButton.textContent = 'Add Vegetable';
    vegButton.style.backgroundColor = 'green';
    vegButton.style.color = 'white';
    vegButton.style.border = 'none';
    vegButton.style.padding = '16px 12px';
    vegButton.style.borderRadius = '4px';
    vegButton.style.cursor = 'pointer';

    vegButton.onclick = function () {
      const value = vegInput.value.trim();
      if (value !== '') {
        const li = document.createElement('li');
        li.textContent = value;
        vegList.appendChild(li);
        vegInput.value = '';
      }
    };

    vegForm.appendChild(vegInput);
    vegForm.appendChild(vegButton);
    vegList.parentElement.appendChild(vegForm);



const mangoes = document.getElementById('mangofruit');
mangoimage=document.createElement('img')
mangoimage.src='images/Fresh Mangos (Dr_ Sebi Approved Alkaline Food).jpeg'
mangoes.appendChild(mangoimage)

mangoimage.style.width='200px'
mangoimage.style.borderRadius='30px'
mangoimage.style.height ='300px'

const banana = document.getElementById("bananas");
bananasimage=document.createElement('img')
bananasimage.src = "images/Bananas 101_ How To Pick Bananas (The Right Way!).jpeg"
banana.appendChild(bananasimage)

bananasimage.style.width='200px'
bananasimage.style.borderRadius='30px'
bananasimage.style.height ='300px'

const watermelon= document.getElementById('watermelons');
watermelonsimage= document.createElement('img')
 watermelonsimage.src ="images/_ (7).jpeg"   
 watermelon.appendChild(watermelonsimage)

 watermelonsimage.style.width='200px'
watermelonsimage.style.borderRadius='30px'
watermelonsimage.style.height ='300px'

const onion = document.getElementById('onions');
onionsimage= document.createElement('img')
 onionsimage.src ="images/Types of Onions and How to Use Them.jpeg"   
 onion.appendChild(onionsimage)

 onionsimage.style.width='200px'
onionsimage.style.borderRadius='30px'
onionsimage.style.height ='300px'

const tomatoe= document.getElementById('tomatoes');
tomatoesimage= document.createElement('img')
 tomatoesimage.src = "images/The Easiest Way To Tie Up Tomato Plants - And The Cheapest Too!.jpeg"
 tomatoe.appendChild(tomatoesimage)

 tomatoesimage.style.width='200px'
tomatoesimage.style.borderRadius='30px'
tomatoesimage.style.height ='300px' 

const kale = document.getElementById('kales');
kalesimage= document.createElement('img')
 kalesimage.src ="images/Kale vs_ Spinach_ Which is Better for You_  _ Paleo Grubs.jpeg"   
 kale.appendChild(kalesimage)

 kalesimage.style.width='200px'
kalesimage.style.borderRadius='30px'
kalesimage.style.height ='300px'

fruitList.style.display = 'flex'
fruitList.style.gap = '6cm'
vegList.style.display = 'flex'
vegList.style.gap = '6.7cm'





