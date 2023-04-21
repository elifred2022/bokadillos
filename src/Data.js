const data = {
  status: "success",
  items: [
    {
      id: 1,
      title: "Docena de Tequeños congelados (precio detal)",
      price: 800,
      image: require("./imagenes/tequeBlack.PNG"),
      category: "congelados",
      img1: "" /* aca se coloca imagen po dafault puede serv cagradas de internet 
                ej; "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-Pine-Green/Images/Nike-Dunk-Low-Off-White-Pine-Green/Lv2/img", 
                pero en el componente prodcutoItem se coloca en img; <img src={image.default} alt={title} />
                POR LOS MOENTOS USARE LA IMAGEN LOCAL PO LO QUE EN EL COMPONENTE SOLO COLOCO; <img src={image} alt={title} />*/,
      img2: "",
      cantidad: 1,
    },
    {
      id: 2,
      title: "Docena de Tequeños congelados (precio al mayor)",
      price: 650,
      image: require("./imagenes/tequeHeladera.png"),
      category: "congelados",
      img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-Pine-Green/Images/Nike-Dunk-Low-Off-White-Pine-Green/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606319825&w=1000",
      cantidad: 1,
    },
    {
      id: 3,
      title: "Docena de Tequeños fritos + rica sala de ajo",
      price: 1500,
      image: require("./imagenes/tequeSalsa.PNG"),
      category: "teque_cocidos",
      img1: "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black/Images/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606325289&w=1000",
      cantidad: 1,
    },
    {
      id: 4,
      title:
        "Combo fiestero Junior; Cincuanta 50 Tequeños fritos + rica sala de ajo",
      price: 6250,
      image: require("./imagenes/tequeMonton.png"),
      category: "teque_cocidos",
      img1: "https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-White-Nylon/Images/Nike-LD-Waffle-Sacai-White-Nylon/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606325338&w=1000",
      cantidad: 1,
    },
    {
      id: 5,
      title:
        "Combo fiestero Sennior; Cien 100 Tequeños fritos + rica sala de ajo",
      price: 12500,
      image: require("./imagenes/tequeMonton.png"),
      category: "teque_cocidos",
      img1: "https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-White-Nylon/Images/Nike-LD-Waffle-Sacai-White-Nylon/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606325338&w=1000",
      cantidad: 1,
    },
    {
      id: 6,
      title: "Combo 2 piezas de pollo rostizados + arepas + sala BBQ",
      price: 12500,
      image: require("./imagenes/2piezas_mas_papas_ensalada.jpg"),
      category: "pollo_cocidos",
      img1: "https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-White-Nylon/Images/Nike-LD-Waffle-Sacai-White-Nylon/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606325338&w=1000",
      cantidad: 1,
    },
  ],
};

export default data;
