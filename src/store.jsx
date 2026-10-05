import { create } from "zustand";
const useCounter = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  removeAllCount: () => set({ count: 0 }),
  updateCount: (newCount) => set({ count: newCount }),
}));

export default useCounter;
