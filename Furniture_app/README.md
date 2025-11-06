# Furniture App

A React Native mobile application for browsing and managing furniture listings, built with Expo and TypeScript.

## About The Project

Furniture App is a full-featured mobile marketplace application that allows users to browse furniture products, save favorites, manage their own listings, and connect with sellers. The app demonstrates modern React Native development practices including navigation, state management, API integration, and responsive design.

## Features

- **User Authentication**: Sign up and sign in functionality with form validation
- **Product Browsing**: Browse furniture products fetched from external API
- **Category Filtering**: Filter products by categories (Chair, Table, Armchair, Sofa, Bed)
- **Search Functionality**: Real-time search across all products
- **Product Details**: Detailed view with images, descriptions, and pricing
- **Favorites System**: Add/remove products to favorites with persistent state
- **User Profile**: Manage user information and settings
- **My Listings**: View and manage your furniture listings
- **Create Listing**: Add new furniture listings with image upload
- **Settings**: Edit personal information and access help resources
- **Contact Seller**: Email integration to contact sellers directly

## Built With

- **React Native** (0.81.4)
- **Expo** (~54.0.10)
- **TypeScript** (~5.9.2)
- **React Navigation** (Stack & Bottom Tabs)
- **Axios** (for API requests)
- **React Native Image Picker** (for image uploads)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v20.19.4 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator
- Expo Go app (for testing on physical device)

## Installation

1. Clone the repository

```bash
git clone https://github.com/GreenBean0303/Furniture-app/.git
cd furniture-app
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npx expo start
```

4. Run on your device
   - Scan the QR code with Expo Go (Android) or Camera app (iOS)
   - Or press `i` for iOS simulator or `a` for Android emulator

### Running with Tunnel (if on school WiFi)

If you have connectivity issues:

```bash
npm install @expo/ngrok
npx expo start --tunnel
```

## 📂 Project Structure

```
Furniture_app/
├── app/
│   ├── _layout.tsx         # Root layout with providers
│   └── index.tsx           # App entry point
├── Navigation/
│   ├── context/
│   │   └── FavouritesContext.tsx  # Favorites state management
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── SignIn/     # Sign in screen
│   │   │   ├── SignUp/     # Sign up screen
│   │   │   └── Splash/     # Splash screen
│   │   ├── CreateListing/  # Create listing screen
│   │   ├── Favourites/     # Favorites screen
│   │   ├── Home/           # Home screen with products
│   │   ├── MyListings/     # User's listings
│   │   ├── ProductDetails/ # Product detail view
│   │   ├── Profile/        # User profile
│   │   └── Settings/       # Settings screen
│   └── index.tsx           # Navigation configuration
├── components/
│   ├── AuthHeader/         # Authentication header
│   ├── Button/             # Button component
│   ├── CategoryBox/        # Category selector
│   ├── Checkbox/           # Checkbox component
│   ├── EditableBox/        # Editable input box
│   ├── FavouriteItem/      # Favorite list item
│   ├── GoogleLogin/        # Google login button
│   ├── Header/             # Screen header
│   ├── ImageCarousel/      # Image carousel
│   ├── Input/              # Text input component
│   ├── ListItem/           # List item component
│   ├── ProductHomeItem/    # Product card
│   └── Separator/          # Separator component
├── constants/              # App constants
├── data/
│   ├── categories.ts       # Category data
│   └── products.ts         # Product data
├── services/
│   └── api.ts              # API service (Fake Store API)
├── utils/
│   └── colors.ts           # Color palette
├── assets/
│   └── images/             # App images and icons
├── .gitignore              # Git ignore file
├── app.json                # Expo configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## API Integration

The app uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data:

- GET `/products` - Fetch all products
- GET `/products/categories` - Fetch categories

## Design

The app follows a custom design created in Figma with:

- Color scheme: Primary (#4A5FBF), Secondary (#FF8C00)
- Typography: Gelasio, Nunito Sans
- Consistent spacing and component styling

## Screens

1. **Splash Screen** - Welcome screen with branding
2. **Sign Up** - User registration with name, email, password
3. **Sign In** - User login
4. **Home** - Product listing with categories and search
5. **Product Details** - Detailed product information
6. **Favourites** - Saved favorite products
7. **Profile** - User profile with navigation to other features
8. **My Listings** - Manage user's listings
9. **Create Listing** - Add new furniture listing
10. **Settings** - Edit user information and access help

## Development

### Key Technologies Used

- **State Management**: React Context API (for favorites)
- **Navigation**: React Navigation v7
- **HTTP Requests**: Axios for API calls
- **Image Handling**: React Native Image Picker
- **Safe Areas**: React Native Safe Area Context
- **Gestures**: React Native Gesture Handler

### Code Style

- TypeScript for type safety
- Functional components
- Modular component structure
- Consistent styling patterns

## Known Issues

- None currently reported

## Author

Agnes Tiit

- School Project - Furniture App

## License

This project is created for educational purposes **;D**

## Acknowledgments

- Fake Store API for product data
- Expo team for excellent documentation
- React Navigation for routing solution
- Design inspiration from Figma community

**KOKKUVÕTE (Summary):**

# Projekti Kokkuvõte: Furniture App

## Mida näidisprojekt mulle õpetas

### Tehnilised oskused

1. **React Native põhitõed**

   - Õppisin, kuidas luua mobiilirakendusi JavaScripti abil
   - Mõistan nüüd React Native komponentide tööpõhimõtteid
   - Sain kogemuse Expo raamistikuga töötamisel

2. **Navigatsioon**

   - Stack Navigator - ekraanide vaheline liikumine
   - Tab Navigator - alumise menüü loomine
   - Õppisin, kuidas edastada andmeid ekraanide vahel (route params)

3. **Oleku haldamine (State Management)**

   - Context API kasutamine globaalse oleku jaoks
   - useState ja useEffect hookide praktiline kasutamine
   - Lemmikute süsteemi loomine Context API abil

4. **HTTP päringud**

   - API integratsioon (Fake Store API)
   - Axios teegi kasutamine
   - Andmete laadimine ja kuvamine

5. **TypeScript**

   - Tüüpide defineerimine ja kasutamine
   - Interface'ide loomine
   - Tüübikindluse eelised arenduses

6. **Vormide töötlemine**
   - TextInput komponentide kasutamine
   - Validatsioon
   - Piltide üleslaadimine (react-native-image-picker)

## Projekti Plussid +

1. **Struktureeritud õppimine**

   - Projekt oli jagatud loogilisteks etappideks
   - Igal etapil oli selge eesmärk
   - Samm-sammult õppimine võimaldas materjali paremini omandada

2. **Praktilised oskused**

   - Sain tegeliku kogemuse täisväärtusliku rakenduse loomisel
   - Õppisin lahendama päris probleeme (navigation errors, state management)
   - Keskendusin rohkem failide ja kaustade organiseerimisele ja olen selle üle uhke.

3. **Korduvkasutatavad komponendid**

   - Lõin komponente (Button, Input, Header), mida sain mitmetes kohtades kasutada
   - Kood on modulaarne ja hooldatav

4. **Probleemide lahendamine**
   - Igal probleemil oli lahendus
   - Õppisin debuggima ja console.log kasutama
   - Sain kogemuse error message'ite lugemises ja mõistmises

## Projekti Miinused

1. **Aeganõudvus**

   - Projekt võttis rohkem aega kui oodatud
   - Paljud väikesed detailid (styling, navigation) nõudsid palju aega

2. **Tehnilised väljakutsed**

   - Navigation setup oli alguses keeruline,
   - Context API mõistmine võttis aega
   - TypeScript tüübid tekitasid alguses segadust

3. **Keerulised probleemid**

   - Favorites funktsionaalsus nõudis globaalset state'i
   - Andmete edastamine ekraanide vahel oli alguses segane
   - Image picker konfiguratsioon oli keeruline

4. **Õppekõver**

   - React Native on erinev tavalisest Reactist
   - Paljud asjad tuli õppida korraga (Navigation, State, API, TypeScript)
   - Dokumentatsiooni lugemine võttis aega

## Peamised õppetunnid

1. **Planeerimine on oluline** - Enne kodeerimist peaks mõtlema struktuurile
2. **Dokumentatsioon on sõber** - React Native ja Expo dokumentatsioon on väga kasulik
3. **Väikesed sammud** - Parem teha väikeseid samme ja testida pidevalt
4. **Console.log on abivahend** - Debugging on osa protsessist
5. **Context API on võimas** - Globaalne state management muudab rakenduse lihtsamaks

## Järeldus

Sain praktilist kogemust mobiilirakenduste arenduses ja õppisin palju React Native'i kohta. Kuigi oli raskeid hetki (eriti navigation ja state management), on lõpptulemus toimiv ja professionaalne rakendus.

Kõige väärtuslikum oli see, et õppisin mitte ainult koodi kirjutama, vaid ka probleeme lahendama, dokumentatsiooni lugema ja projekti struktureerima. Need oskused on kasulikud tulevikus mis tahes arendusprojektides.
