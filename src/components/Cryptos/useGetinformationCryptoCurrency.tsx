// En useGetAllCryptos
import { useQuery } from 'react-query';

export const allCryptosKey = () => 'allCryptos';

interface IResponse {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

const useCryptoCurrencies = () => {
  return useQuery<IResponse[]>(allCryptosKey(), async () => {
    const URL = `https://api.coincap.io/v2/assets`;

    const fetchOptions = {
      method: 'GET',
    };

    const response = await fetch(URL, fetchOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData.data || []; // Manejar el caso en que data puede ser undefined o null
  });
};

export default useCryptoCurrencies;
