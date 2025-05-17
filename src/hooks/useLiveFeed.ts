import {useEffect, useState} from 'react';
import {useQueryClient} from '@tanstack/react-query';
import {CRYPTOS} from '~utils/coins';

export const useLiveFeed = () => {
  const [enabled, setEnabled] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const ws = new WebSocket('wss://ws-feed.exchange.coinbase.com');

    const subscribeToTickers = () => {
      ws.send(
        JSON.stringify({
          type: 'subscribe',
          channels: [
            {
              name: 'ticker',
              product_ids: CRYPTOS.map(coin => coin.id),
            },
          ],
        }),
      );
    };

    const handleMessage = (event: WebSocketMessageEvent) => {
      const data = JSON.parse(event.data);
      if (data.type === 'ticker' && data.price) {
        const price = parseFloat(data.price);
        queryClient.setQueryData(['price', data.product_id], price);
      }
    };

    ws.onopen = subscribeToTickers;
    ws.onmessage = handleMessage;
    ws.onerror = err => console.error('[Error] WebSocket:', err);

    return () => {
      ws.close();
    };
  }, [enabled, queryClient]);

  return [enabled, setEnabled] as const;
};
