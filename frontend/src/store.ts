import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    try {
      set({ loading: true, error: null });

      const response = await fetch(import.meta.env.VITE_API_URL);

      if (!response.ok) {
        throw new Error("Error when trying to connect!");
      }

      const result = await response.json();

      set({ products: result, loading: false });
    } 
		catch (error) {

      set({ error: error.message, loading: false });
			
    }
  },
}));
