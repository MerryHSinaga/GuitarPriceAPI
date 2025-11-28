export default function handler(req, res) {
  const guitars = [
    {
      "id": 1,
      "name": "Fender Stratocaster",
      "price_idr": 19200000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/fender_stratocaster.jpg"
    },
    {
      "id": 2,
      "name": "Gibson Les Paul",
      "price_idr": 25000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/gibson_lespaul.jpg"
    },
    {
      "id": 3,
      "name": "Ibanez RG",
      "price_idr": 15000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/ibanez_rg.jpg"
    },
    {
      "id": 4,
      "name": "Yamaha Pacifica",
      "price_idr": 9000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/yamaha_pacifica.jpg"
    },
    {
      "id": 5,
      "name": "Cort X6",
      "price_idr": 8000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/cort_x6.jpg"
    },
    {
      "id": 6,
      "name": "Cordoba C5",
      "price_idr": 6500000,
      "type": "Acoustic",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/cordoba_c5.jpg"
    },
    {
      "id": 7,
      "name": "Yamaha FG800",
      "price_idr": 4000000,
      "type": "Acoustic",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/yamaha_fg800.jpg"
    },
    {
      "id": 8,
      "name": "Takamine GD30",
      "price_idr": 7000000,
      "type": "Acoustic",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/takamine_gd30.jpg"
    },
    {
      "id": 9,
      "name": "Fender Telecaster",
      "price_idr": 18000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/fender_telecaster.jpg"
    },
    {
      "id": 10,
      "name": "Gibson SG",
      "price_idr": 22000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/gibson_sg.jpg"
    },
    {
      "id": 11,
      "name": "Epiphone Les Paul",
      "price_idr": 9000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/epiphone_lespaul.jpg"
    },
    {
      "id": 12,
      "name": "Fender Acoustasonic",
      "price_idr": 16000000,
      "type": "Acoustic",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/fender_acoustasonic.jpg"
    },
    {
      "id": 13,
      "name": "Martin D-15M",
      "price_idr": 22000000,
      "type": "Acoustic",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/martin_d15m.jpg"
    },
    {
      "id": 14,
      "name": "PRS SE Custom",
      "price_idr": 13000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/prs_se_custom.jpg"
    },
    {
      "id": 15,
      "name": "Ibanez Artcore",
      "price_idr": 11000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/ibanez_artcore.jpg"
    },
    {
      "id": 16,
      "name": "Fender Mustang",
      "price_idr": 14000000,
      "type": "Electric",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/fender_mustang.jpg"
    },
    {
      "id": 17,
      "name": "Cort Earth",
      "price_idr": 5000000,
      "type": "Acoustic",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/cort_earth.jpg"
    },
    {
      "id": 18,
      "name": "Yamaha TRBX304",
      "price_idr": 8000000,
      "type": "Bass",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/yamaha_trbx304.jpg"
    },
    {
      "id": 19,
      "name": "Fender Jazz Bass",
      "price_idr": 17000000,
      "type": "Bass",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/fender_jazzbass.jpg"
    },
    {
      "id": 20,
      "name": "Ibanez SR300",
      "price_idr": 12000000,
      "type": "Bass",
      "image_url": "https://raw.githubusercontent.com/MerryHSinaga/GuitarPriceAPI/main/images/ibanez_sr300.jpg"
    }
  ];

  res.status(200).json(guitars);
}
