import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CryptoState {
  selectedCoin: string | null;
}

const initialState: CryptoState = {
  selectedCoin: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setSelectedCoin(state, action: PayloadAction<string>) {
      state.selectedCoin = action.payload;
    },
    clearSelectedCoin(state) {
      state.selectedCoin = null;
    },
  },
});

export const {setSelectedCoin, clearSelectedCoin} = cryptoSlice.actions;
export default cryptoSlice.reducer;
