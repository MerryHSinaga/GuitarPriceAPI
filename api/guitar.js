export default function handler(req, res) {
  const guitars = [
    {
      "id": 1,
      "name": "Fender Stratocaster",
      "price_idr": 19200000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice1.jpg"
    },
    {
      "id": 2,
      "name": "Gibson Les Paul",
      "price_idr": 25000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice2.jpg"
    },
    {
      "id": 3,
      "name": "Ibanez RG",
      "price_idr": 15000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice3.jpg"
    },
    {
      "id": 4,
      "name": "Yamaha Pacifica",
      "price_idr": 9000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice4.jpg"
    },
    {
      "id": 5,
      "name": "Cort X6",
      "price_idr": 8000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice5.jpg"
    },
    {
      "id": 6,
      "name": "Cordoba C5",
      "price_idr": 6500000,
      "type": "Acoustic",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice6.jpg"
    },
    {
      "id": 7,
      "name": "Yamaha FG800",
      "price_idr": 4000000,
      "type": "Acoustic",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice7.jpg"
    },
    {
      "id": 8,
      "name": "Takamine GD30",
      "price_idr": 7000000,
      "type": "Acoustic",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice8.jpg"
    },
    {
      "id": 9,
      "name": "Fender Telecaster",
      "price_idr": 18000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice9.jpg"
    },
    {
      "id": 10,
      "name": "Gibson SG",
      "price_idr": 22000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice10.jpg"
    },
    {
      "id": 11,
      "name": "Epiphone Les Paul",
      "price_idr": 9000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice11.jpg"
    },
    {
      "id": 12,
      "name": "Fender Acoustasonic",
      "price_idr": 16000000,
      "type": "Acoustic",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice12.jpg"
    },
    {
      "id": 13,
      "name": "Martin D-15M",
      "price_idr": 22000000,
      "type": "Acoustic",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice13.jpg"
    },
    {
      "id": 14,
      "name": "PRS SE Custom",
      "price_idr": 13000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice14.jpg"
    },
    {
      "id": 15,
      "name": "Ibanez Artcore",
      "price_idr": 11000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice15.jpg"
    },
    {
      "id": 16,
      "name": "Fender Mustang",
      "price_idr": 14000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice16.jpg"
    },
    {
      "id": 17,
      "name": "Cort Earth",
      "price_idr": 5000000,
      "type": "Acoustic",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice17.jpg"
    },
    {
      "id": 18,
      "name": "Yamaha TRBX304",
      "price_idr": 8000000,
      "type": "Bass",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice18.jpg"
    },
    {
      "id": 19,
      "name": "Fender Jazz Bass",
      "price_idr": 17000000,
      "type": "Bass",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice19.jpg"
    },
    {
      "id": 20,
      "name": "Ibanez SR300",
      "price_idr": 12000000,
      "type": "Bass",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/refs/heads/main/images/guitarprice20.jpg"
    }
  ];

  res.status(200).json(guitars);
}
