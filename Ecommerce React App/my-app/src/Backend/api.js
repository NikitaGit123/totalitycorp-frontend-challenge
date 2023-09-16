const express = require('express');
const app = express();
const cors = require('cors');

const Menu = [
    {
        id:1,
        category:"Sofas & Chair",
        image_Url:"https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
        description:"Brown bear-Vector graphics",
        color:"gray",
        rating:4,
        price:"60,34 $US"
      },
      {
        id:2,
        category:"Sofas & Chair",
        image_Url:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        description:"Brown bear-Vector graphics",
        color:"gray",
        rating:3,
        price:"70,34 $US",
      },
      {
        id:3,
        category:"Sofas & Chair",
        image_Url:"https://images.unsplash.com/photo-1586158291800-2665f07bba79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        description:"Brown bear-Vector graphics",
        color:"Pink",
        rating:3,
        price:"60,34 $US"
      },
      {
        id:4,
        category:"Sofas & Chair",
        image_Url:"https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        description:"Brown bear-Vector graphics",
        color:"white",
        rating:4,
        price:"60,34 $US"
      },
      {
        id:5,
        category:"Room Living",
        image_Url:"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        description:"Brown bear-Vector graphics",
        color:"gray",
        rating:3,
        price:"70,34 $US",
      },
      {
          id:6,
          category:"Sofas & Chair",
          image_Url:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          description:"Brown bear-Vector graphics",
          color:"peach",
          rating:2,
          price:"60,34 $US"
        },
        {
          id:7,
          category:"Storage",
          image_Url:"https://images.unsplash.com/photo-1567016520496-0cb37d8467a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
          description:"Brown bear-Vector graphics",
          color:"black",
          rating:4,
          price:"60 $US"
        },
        {
          id:8,
          category:"Storage",
          image_Url:"https://images.unsplash.com/photo-1595515106883-5d5da3043540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=417&q=80",
          description:"Brown bear-Vector graphics",
          color:"brown",
          rating:3,
          price:"60,34 $US"
        },
        {
          id:9,
          category:"Room Living",
          image_Url:"https://images.unsplash.com/photo-1505483801569-90981ac6e43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
          description:"Brown bear-Vector graphics",
          color:"black",
          rating:3,
          price:"60,34 $US"
        },
        {
          id:10,
          category:"Room Living",
          image_Url:"https://images.unsplash.com/photo-1471171768346-d08fb2813c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          description:"Brown bear-Vector graphics",
          color:"white",
          rating:4,
          price:"47,34 $US"
        },
        {
          id:11,
          category:"Dinnings",
          image_Url:"https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
          description:"Brown bear-Vector graphics",
          color:"brown",
          rating:3,
          price:"60,34 $US"
        },
        {
          id:12,
          category:"Dinnings",
          image_Url:"https://images.unsplash.com/photo-1676088933950-bae87cf34fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
          description:"Brown bear-Vector graphics",
          color:"brown",
          rating:4,
          price:"60,34 $US"
        },
        {
          id:13,
          category:"Dinnings",
          image_Url:"https://images.unsplash.com/photo-1675252589017-4bcf7b6cf819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          description:"Brown bear-Vector graphics",
          color:"brown",
          rating:4,
          price:"60,34 $US"
        },
        {
          id:14,
          category:"More ctagories",
          image_Url:"https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wyNTU5MTYyNHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
          description:"Brown bear-Vector graphics",
          color:"white",
          rating:3,
          price:"60,34 $US"
        },
        {
          id:15,
          category:"Storage",
          image_Url:"https://images.unsplash.com/photo-1595515770107-dd8e21146361?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
          description:"Brown bear-Vector graphics",
          color:"black",
          rating:3,
          price:"60,34 $US"
        },
        {
          id:16,
          category:"Sofas & Chair",
          image_Url:"https://images.unsplash.com/photo-1519961655809-34fa156820ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mYSUyMGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          description:"Brown bear-Vector graphics",
          color:"white",
          rating:3,
          price:"60,34 $US"
        },
        {
          id:17,
          category:"Lights & Lamp",
          image_Url:"https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbXAlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          description:"Brown bear-Vector graphics",
          color:"white",
          rating:3,
          price:"30,34 $US"
        }, {
          id:18,
          category:"Lights & Lamp",
          image_Url:"https://images.unsplash.com/photo-1455792244736-3ed96c3d7f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbXAlMjBsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          description:"Brown Lamps bear-Vector graphics",
          color:"white",
          rating:3,
          price:"50,34 $US"
        }, {
          id:19,
          category:"Lights & Lamp",
          image_Url:"https://images.unsplash.com/photo-1505658862213-162b60255cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
          description:"Brown bear-Vector graphics",
          color:"white",
          rating:3,
          price:"60,34 $US"
        },
        {
          id:20,
          category:"OutDoors",
          image_Url:"https://media.istockphoto.com/id/460865449/photo/garden-furniture.jpg?s=612x612&w=0&k=20&c=IBidxpWpNHRdCZGUru4Me52nPsWIE-LNFbGUAKXVEMM=",
          description:"Brown bear-Vector graphics",
          color:"brown",
          rating:3,
          price:"40,34 $US"
        },
        {
          id:21,
          category:"OutDoors",
          image_Url:"https://media.istockphoto.com/id/1053955452/photo/interior-design-for-living-area-or-reception-with-rattan-armchair-plants-cabinet-on-wood.jpg?s=1024x1024&w=is&k=20&c=al1k2spMSdkgeXJftx8rSl1DHQTOZdIIH_ePYho-BjY=",
          description:"Brown bear-Vector graphics",
          color:"white",
          rating:4,
          price:"90,34 $US"
        },
        {
          id:22,
          category:"OutDoors",
          image_Url:"https://media.istockphoto.com/id/1223696140/photo/house-with-cozy-boho-ethnic-interior-with-plants.jpg?s=612x612&w=0&k=20&c=F0VEs7oROZ1NpCypBTpdxWwIkVOCJT4BTHWrB0AogDQ=",
          description:"Brown bear-Vector graphics",
          color:"white",
          rating:4,
          price:"80,34 $US",
        },
];

app.use(cors());

// GET endpoint to fetch the menu data
app.get('/api/menu', (req, res) => {
  res.json(Menu);
});

app.get('/api/menu/:category', (req, res) => {
  const { category } = req.params;
  const filteredMenu = Menu.filter(item => item.category === category);
  res.json(filteredMenu);
});

app.get('/api/menu/:category/:sortOption', (req, res) => {
  const { category, sortOption } = req.params;
  let filteredMenu = [...Menu];

  if (category !== 'all') {
    filteredMenu = filteredMenu.filter(item => item.category === category);
  }

  switch (sortOption) {
    case 'az':
      filteredMenu.sort((a, b) => a.category.localeCompare(b.category));
      break;
    case 'za':
      filteredMenu.sort((a, b) => b.category.localeCompare(a.category));
      break;
    case 'price-low-high':
      filteredMenu.sort((a, b) => parseFloat(a.price.replace(',', '.')) - parseFloat(b.price.replace(',', '.')));
      break;
    case 'price-high-low':
      filteredMenu.sort((a, b) => parseFloat(b.price.replace(',', '.')) - parseFloat(a.price.replace(',', '.')));
      break;
    default:
      // If sortOption is not provided or invalid, return the original filtered menu
  }

  res.json(filteredMenu);
});

// Rest of the code...
app.get('/api/menu/:category/:sortOption/:color', (req, res) => {
  const { color } = req.params;
  const filteredMenu = Menu.filter(item => item.color === color);
  res.json(filteredMenu);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

