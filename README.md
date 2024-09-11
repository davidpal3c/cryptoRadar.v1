# CryptoRadar

->https://davidpal3c.github.io/cryptoRadar.v1/


CryptoRadar is a React-based web application that provides real-time information about cryptocurrencies, including their prices, market caps, and daily changes. It also features the latest news related to cryptocurrencies. The application leverages Redux Toolkit for state management and data fetching, and Ant Design for UI components.

## Features

- **Responsive Navbar**: A responsive navigation bar that adapts to different screen sizes.
- **Cryptocurrency Listing**: Displays a list of cryptocurrencies with their prices, market caps, and daily changes.
- **Search Functionality**: Allows users to search for specific cryptocurrencies.
- **Cryptocurrency Details**: Provides detailed information about a selected cryptocurrency.
- **Historical Data**: Displays historical data of a cryptocurrency in a line chart.
- **Latest News**: Shows the latest news related to cryptocurrencies.
- **Dynamic Data Fetching**: Uses Redux Toolkit Query to fetch data from APIs.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A library for efficient Redux development.
- **Redux Toolkit Query**: For data fetching and caching.
- **Ant Design**: A UI library for React.
- **Chart.js**: A library for creating charts.
- **Moment.js**: A library for parsing, validating, manipulating, and formatting dates.
- **RapidAPI**: For fetching cryptocurrency and news data.

## File Structure

### `Navbar.jsx`

- **Purpose**: Implements a responsive navigation bar.
- **Key Features**:
  - Uses Ant Design components like `Menu`, `Typography`, `Avatar`, and `Button`.
  - Responsive design that adapts to screen size changes.
  - Toggles menu visibility based on screen size.

### `Cryptocurrencies.jsx`

- **Purpose**: Displays a list of cryptocurrencies.
- **Key Features**:
  - Fetches cryptocurrency data using `useGetCryptosQuery` from `cryptoApi`.
  - Implements a search functionality to filter cryptocurrencies.
  - Uses Ant Design components like `Card`, `Row`, `Col`, and `Input`.
  - Displays cryptocurrency details like price, market cap, and daily change.

### `store.js`

- **Purpose**: Configures the Redux store.
- **Key Features**:
  - Integrates `cryptoApi` and `cryptoNewsApi` reducers and middleware.
  - Uses `configureStore` from Redux Toolkit.

### `cryptoApi.js`

- **Purpose**: Defines API endpoints for fetching cryptocurrency data.
- **Key Features**:
  - Uses `createApi` and `fetchBaseQuery` from Redux Toolkit Query.
  - Defines endpoints for fetching cryptocurrencies, cryptocurrency details, historical data, and exchange data.
  - Utilizes RapidAPI for data fetching.

### `cryptoNewsApi.js`

- **Purpose**: Defines API endpoints for fetching cryptocurrency news.
- **Key Features**:
  - Uses `createApi` and `fetchBaseQuery` from Redux Toolkit Query.
  - Defines an endpoint for fetching cryptocurrency news.
  - Utilizes RapidAPI for data fetching.

### `News.jsx`

- **Purpose**: Displays the latest news related to cryptocurrencies.
- **Key Features**:
  - Fetches news data using `useGetCryptoNewsQuery` from `cryptoNewsApi`.
  - Allows users to filter news by cryptocurrency.
  - Uses Ant Design components like `Select`, `Typography`, `Row`, `Avatar`, `Card`, and `Col`.
  - Formats dates using Moment.js.

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/cryptoradar.git
   cd cryptoradar
   ```

1. **Install dependencies**:

   ```sh
   npm install
   ```

1. **Start the development server**:
   ```sh
   npm start
   ```

## Usage

- **Navigate**: Use the navigation bar to switch between different sections like Home, Cryptocurrencies, Exchanges, and News.
- **Search**: Use the search bar in the Cryptocurrencies section to find specific cryptocurrencies.
- **ViewDetails**: Click on cryptocurrency card to view detailed information.
- **Filter News**: Use the dropdown in the News section to filter news by cryptocurrency.

## API Integration

**Cryptocurrency API**

**Base URL**: https://coinranking1.p.rapidapi.com
**Endpoints**:
/coins?limit={count}: Fetches a list of cryptocurrencies.
/coin/{coinId}: Fetches details of a specific cryptocurrency.
/coin/{coinId}/history?timePeriod={timePeriod}: Fetches historical data of a cryptocurrency.
/exchanges: Fetches exchange data.

**News API**

**Base URL**: https://google-news22.p.rapidapi.com
**Endpoints**:
/v1/search?q={newsCategory}&country=us&language=en: Fetches news articles based on the category.
Contributing
Fork the repository.
Create a new branch:

## License

This project is licensed under the MIT License.

## Acknowledgements

**RapidAPI**: For providing the cryptocurrency and news APIs.
**Ant Design**: For the UI components.
**Redux Toolkit**: For state management and data fetching.
**Chart.js**: For the charting library.
**Moment.js**: For date manipulation.
