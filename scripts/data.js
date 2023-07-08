const products = [
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/5815823c37c7ef667df605e6d6f99c047026c0e0/Modern-3-Seat-Sofa-Removable-Cushions-Couch-for-Living-Room-with-2-Throw-Pillows-and-Side-Hidden-Storage-Bags.jpg?imwidth=480&impolicy=medium",
    id: 1,
    price: 32555,
    category: "sofa",
    name: "Modern 3-Seat Sofa Removable Cushions Couch for Living Room with 2 Throw Pillows and Side Hidden Storage Bags",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/0d0d159f8dc5bfb87feabe1ab02aec1c1dde03e6/64-inch-living-room-folding-sofa-Velvet-Peach-sofa-bed.jpg?imwidth=480&impolicy=medium",
    id: 2,
    price: 43102,
    category: "sofa",
    name: "63 inch living room folding sofa Velvet Peach sofa bed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/6e981b31c9f44845e0fa960e2d638d2ec5898085/Serta-Palisades-Upholstered-61%22-Sofas-for-Living-Room-Modern-Design-Couch%2C-Straight-Arms%2C-Soft-Fabric-Upholstery.jpg?imwidth=480&impolicy=medium",
    id: 3,
    price: 36434,
    category: "sofa",
    name: "Serta Palisades Upholstered 61 Sofas for Living Room Modern Design Couch, Straight Arms, Soft Fabric Upholstery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/26ed8d994c17cf95617ecbcb23526b19291144d7/81%22-Nailheaded-Textured-Fabric-3-Seat-Sofa-Set-with-2-Ottomans-for-Couple-Living-Room-Use%2C-Warm-Grey.jpg?imwidth=480&impolicy=medium",
    id: 4,
    price: 129653,
    category: "sofa",
    name: "81' Nailheaded Textured Fabric 3 Seat Sofa Set with 2 Ottomans for Couple Living Room Use, Warm Grey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/947ac11117a837de516bafb35d290a7d5637d5f0/75%22-White-cotton-linen-foldable-double-sofa-bed-with-two-throw-pillows.jpg?imwidth=480&impolicy=medium",
    id: 5,
    price: 40778,
    category: "sofa",
    name: "Green Tea Day Cream with SPF 30 PA++ for Hydration & 24 Hrs Moisture Lock - 50 ml",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/3e467459d3602dae1bf8ef8bfce90fbae1df0422/Jules-Pleated-Velvet-Wingback-Bed-by-iNSPIRE-Q-Modern.jpg?imwidth=480&impolicy=medium",
    id: 6,
    price: 59512,
    category: "bed",
    name: "Jules Pleated Velvet Wingback Bed by iNSPIRE Q Modern",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/e201ee73e78fd40c57eb4868be259913c0ac5ff9/Grain-Wood-Furniture-Shaker-Panel-Queen-Solid-Wood-Platform-Bed.jpg?imwidth=480&impolicy=medium",
    id: 7,
    price: 37417,
    category: "bed",
    name: "Grain Wood Furniture Shaker Solid Wood Panel Platform Bed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/1a9e1dc549b11c36bcebb41fa38aa87ce80be17d/Priage-by-ZINUS-Mid-Century-Wood-Platform-Bed-Frame.jpg?imwidth=480&impolicy=medium",
    id: 8,
    price: 19952,
    category: "bed",
    name: "Priage by ZINUS Mid Century Wood Platform Bed Frame",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/7131a9609f7e0bc4fe8cfdde2e15d2b211fa7960/Grain-Wood-Furniture-Greenport-Louvered-Platform-Bed.jpg?imwidth=480&impolicy=medium",
    id: 9,
    price: 38613,
    category: "bed",
    name: "Grain Wood Furniture Greenport Louvered Solid Wood Platform Bed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/e0838d00ea9e9c900a0e998ad310521e4f555945/Harmony-Daybed-with-King-Conversion.jpg?imwidth=480&impolicy=medium",
    id: 10,
    price: 545782,
    category: "bed",
    name: "Harmony Daybed with King Conversion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/0a438a7a0918950f91a4d91ead8ee6159117a0ff/TUHOME-Cala-3-Shelf-Kitchen-Island.jpg?imwidth=480&impolicy=medium",
    id: 11,
    price: 21398,
    category: "kitchen",
    name: "TUHOME Cala 3-Shelf Kitchen Island",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/46e6c00923179ebdc6b2e20651da256faca7a28e/Porch-%26-Den-Jefferson-Sliding-Door-Stackable-Cabinet.jpg?imwidth=480&impolicy=medium",
    id: 12,
    price: 11704,
    category: "kitchen",
    name: "Porch & Den Jefferson Sliding Door Stackable Buffet Cabinet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/7908b1bf929bba3de9ee8924d433430e4819ec19/Kitchen-Bakers-Rack-on-Wheels-Microwave-Oven-Stand.jpg?imwidth=480&impolicy=medium",
    id: 13,
    price: 8728,
    category: "kitchen",
    name: "Kitchen Bakers Rack on Wheels Microwave Oven Stand",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/8c63fc375eb97e0a29485075025302e8803eae16/Simple-Living-Aston-Tall-Cabinet.jpg?imwidth=480&impolicy=medium",
    id: 14,
    price: 12603,
    category: "kitchen",
    name: "Simple Living Aston Tall Cabinet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/19983247/Simple-Living-Grace-Buffet-5a8a1cfd-6918-4aa6-9846-4e4598959ca2_600.jpg?imwidth=480&impolicy=medium",
    id: 15,
    price: 30052,
    category: "kitchen",
    name: "Simple Living Grace Farmhouse Buffet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/5cd4b44b80e269a3ee44f3aa616ebb34e3ac221d/ixir-29.5%22-Patio-Bar-Stool-%28Set-of-2%29-CM120.jpg?imwidth=480&impolicy=medium",
    id: 16,
    price: 14190,
    category: "patio",
    name: "ixir High Seating Swivel Patio Bar Stool Chair (Set of 2)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/dae79794f46225a627e8e628f0c2b2dc01e9b3f8/POLYTRENDS-Laguna-Folding-Poly-Eco-Friendly-All-Weather-Outdoor-Adirondack-Chair.jpg?imwidth=480&impolicy=medium",
    id: 17,
    price: 12059,
    category: "patio",
    name: "POLYTRENDS Laguna Folding Poly Eco-Friendly All Weather Outdoor Adirondack Chair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/4263d42b33b773409c5d9633a8f7c0f5871c6536/5-piece-Metal-Outdoor-Patio-Dining-Set-with-4-Stackable-Chairs-and-1-Slat-E-coating-Weather-resistant-SquareTable.jpg?imwidth=480&impolicy=medium",
    id: 18,
    price: 37624,
    category: "patio",
    name: "5-piece Outdoor E-coated Patio Dining Set with Stackable Chairs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/1a4bd5f205baf1ef7124d540976a0e2689fa6b71/Incbruce-Outdoor-2-piece-Swing-Glider-Rocking-Chair.jpg?imwidth=480&impolicy=medium",
    id: 19,
    price: 20329,
    category: "patio",
    name: "Nista Outdoor Loveseat Glider Chair by Havenside Home",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/d24a43eefd0685d0e612cc46c9475fea5b02178d/Lacoo-7-Pieces-Outdoor-Patio-Dining-Set-with-Acacia-Wood-Tabletop.jpg?imwidth=480&impolicy=medium",
    id: 20,
    price: 44280,
    category: "patio",
    name: "Lacoo PE Wicker/ Acacia Wood Outdoor Patio Dining Set",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/5815823c37c7ef667df605e6d6f99c047026c0e0/Modern-3-Seat-Sofa-Removable-Cushions-Couch-for-Living-Room-with-2-Throw-Pillows-and-Side-Hidden-Storage-Bags.jpg?imwidth=480&impolicy=medium",
    id: 21,
    price: 32555,
    category: "sofa",
    name: "Modern 3-Seat Sofa Removable Cushions Couch for Living Room with 2 Throw Pillows and Side Hidden Storage Bags",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/0d0d159f8dc5bfb87feabe1ab02aec1c1dde03e6/64-inch-living-room-folding-sofa-Velvet-Peach-sofa-bed.jpg?imwidth=480&impolicy=medium",
    id: 22,
    price: 43102,
    category: "sofa",
    name: "63 inch living room folding sofa Velvet Peach sofa bed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/6e981b31c9f44845e0fa960e2d638d2ec5898085/Serta-Palisades-Upholstered-61%22-Sofas-for-Living-Room-Modern-Design-Couch%2C-Straight-Arms%2C-Soft-Fabric-Upholstery.jpg?imwidth=480&impolicy=medium",
    id: 23,
    price: 36434,
    category: "sofa",
    name: "Serta Palisades Upholstered 61 Sofas for Living Room Modern Design Couch, Straight Arms, Soft Fabric Upholstery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/26ed8d994c17cf95617ecbcb23526b19291144d7/81%22-Nailheaded-Textured-Fabric-3-Seat-Sofa-Set-with-2-Ottomans-for-Couple-Living-Room-Use%2C-Warm-Grey.jpg?imwidth=480&impolicy=medium",
    id: 24,
    price: 129653,
    category: "sofa",
    name: "81' Nailheaded Textured Fabric 3 Seat Sofa Set with 2 Ottomans for Couple Living Room Use, Warm Grey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/947ac11117a837de516bafb35d290a7d5637d5f0/75%22-White-cotton-linen-foldable-double-sofa-bed-with-two-throw-pillows.jpg?imwidth=480&impolicy=medium",
    id: 25,
    price: 40778,
    category: "sofa",
    name: "Green Tea Day Cream with SPF 30 PA++ for Hydration & 24 Hrs Moisture Lock - 50 ml",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/3e467459d3602dae1bf8ef8bfce90fbae1df0422/Jules-Pleated-Velvet-Wingback-Bed-by-iNSPIRE-Q-Modern.jpg?imwidth=480&impolicy=medium",
    id: 26,
    price: 59512,
    category: "bed",
    name: "Jules Pleated Velvet Wingback Bed by iNSPIRE Q Modern",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/e201ee73e78fd40c57eb4868be259913c0ac5ff9/Grain-Wood-Furniture-Shaker-Panel-Queen-Solid-Wood-Platform-Bed.jpg?imwidth=480&impolicy=medium",
    id: 27,
    price: 37417,
    category: "bed",
    name: "Grain Wood Furniture Shaker Solid Wood Panel Platform Bed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/1a9e1dc549b11c36bcebb41fa38aa87ce80be17d/Priage-by-ZINUS-Mid-Century-Wood-Platform-Bed-Frame.jpg?imwidth=480&impolicy=medium",
    id: 28,
    price: 19952,
    category: "bed",
    name: "Priage by ZINUS Mid Century Wood Platform Bed Frame",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/7131a9609f7e0bc4fe8cfdde2e15d2b211fa7960/Grain-Wood-Furniture-Greenport-Louvered-Platform-Bed.jpg?imwidth=480&impolicy=medium",
    id: 29,
    price: 38613,
    category: "bed",
    name: "Grain Wood Furniture Greenport Louvered Solid Wood Platform Bed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/e0838d00ea9e9c900a0e998ad310521e4f555945/Harmony-Daybed-with-King-Conversion.jpg?imwidth=480&impolicy=medium",
    id: 30,
    price: 545782,
    category: "bed",
    name: "Harmony Daybed with King Conversion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/0a438a7a0918950f91a4d91ead8ee6159117a0ff/TUHOME-Cala-3-Shelf-Kitchen-Island.jpg?imwidth=480&impolicy=medium",
    id: 31,
    price: 21398,
    category: "kitchen",
    name: "TUHOME Cala 3-Shelf Kitchen Island",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/46e6c00923179ebdc6b2e20651da256faca7a28e/Porch-%26-Den-Jefferson-Sliding-Door-Stackable-Cabinet.jpg?imwidth=480&impolicy=medium",
    id: 32,
    price: 11704,
    category: "kitchen",
    name: "Porch & Den Jefferson Sliding Door Stackable Buffet Cabinet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/7908b1bf929bba3de9ee8924d433430e4819ec19/Kitchen-Bakers-Rack-on-Wheels-Microwave-Oven-Stand.jpg?imwidth=480&impolicy=medium",
    id: 33,
    price: 8728,
    category: "kitchen",
    name: "Kitchen Bakers Rack on Wheels Microwave Oven Stand",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/8c63fc375eb97e0a29485075025302e8803eae16/Simple-Living-Aston-Tall-Cabinet.jpg?imwidth=480&impolicy=medium",
    id: 34,
    price: 12603,
    category: "kitchen",
    name: "Simple Living Aston Tall Cabinet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/19983247/Simple-Living-Grace-Buffet-5a8a1cfd-6918-4aa6-9846-4e4598959ca2_600.jpg?imwidth=480&impolicy=medium",
    id: 35,
    price: 30052,
    category: "kitchen",
    name: "Simple Living Grace Farmhouse Buffet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/5cd4b44b80e269a3ee44f3aa616ebb34e3ac221d/ixir-29.5%22-Patio-Bar-Stool-%28Set-of-2%29-CM120.jpg?imwidth=480&impolicy=medium",
    id: 36,
    price: 14190,
    category: "patio",
    name: "ixir High Seating Swivel Patio Bar Stool Chair (Set of 2)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/dae79794f46225a627e8e628f0c2b2dc01e9b3f8/POLYTRENDS-Laguna-Folding-Poly-Eco-Friendly-All-Weather-Outdoor-Adirondack-Chair.jpg?imwidth=480&impolicy=medium",
    id: 37,
    price: 12059,
    category: "patio",
    name: "POLYTRENDS Laguna Folding Poly Eco-Friendly All Weather Outdoor Adirondack Chair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/4263d42b33b773409c5d9633a8f7c0f5871c6536/5-piece-Metal-Outdoor-Patio-Dining-Set-with-4-Stackable-Chairs-and-1-Slat-E-coating-Weather-resistant-SquareTable.jpg?imwidth=480&impolicy=medium",
    id: 38,
    price: 37624,
    category: "patio",
    name: "5-piece Outdoor E-coated Patio Dining Set with Stackable Chairs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/1a4bd5f205baf1ef7124d540976a0e2689fa6b71/Incbruce-Outdoor-2-piece-Swing-Glider-Rocking-Chair.jpg?imwidth=480&impolicy=medium",
    id: 39,
    price: 20329,
    category: "patio",
    name: "Nista Outdoor Loveseat Glider Chair by Havenside Home",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
  {
    img: "https://ak1.ostkcdn.com/images/products/is/images/direct/d24a43eefd0685d0e612cc46c9475fea5b02178d/Lacoo-7-Pieces-Outdoor-Patio-Dining-Set-with-Acacia-Wood-Tabletop.jpg?imwidth=480&impolicy=medium",
    id: 40,
    price: 44280,
    category: "patio",
    name: "Lacoo PE Wicker/ Acacia Wood Outdoor Patio Dining Set",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat justo malesuada tellus malesuada sagittis. In pellentesque nibh eget ante lacinia, vel finibus ante varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac urna mattis, tincidunt nibh eget, pellentesque nibh. Nulla iaculis felis odio, id pharetra lorem efficitur sit amet. Aenean id efficitur turpis, non hendrerit metus. Pellentesque vel interdum libero.",
  },
];

console.log(products)
