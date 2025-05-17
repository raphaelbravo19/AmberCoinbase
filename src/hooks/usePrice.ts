import {useQuery} from '@tanstack/react-query';
import {useEffect, useMemo, useRef, useState} from 'react';
import {fetchPrice} from '~api/prices';
import {queries} from '~utils/queries';

type Direction = 'up' | 'down' | 'same' | undefined;

export const usePrice = (id: string) => {
  const previous = useRef<number | null>(null);
  const [direction, setDirection] = useState<Direction>();

  const {data, isPending, error} = useQuery<number>({
    queryKey: queries.price(id),
    queryFn: () => fetchPrice(id),
    refetchInterval: 60000,
    staleTime: 30000,
    gcTime: 0,
  });
  const price = useMemo(
    () => (data !== undefined ? Math.round(data * 1000) / 1000 : undefined),
    [data],
  );
  useEffect(() => {
    if (price !== undefined && previous.current !== null) {
      if (price > previous.current) {
        setDirection('up');
      } else if (price < previous.current) {
        setDirection('down');
      } else {
        setDirection('same');
      }
    }

    if (price !== undefined) {
      previous.current = price;
    }
  }, [price]);

  return {
    price,
    isLoading: isPending,
    error,
    direction,
  };
};
