export const dynamicState = {
  loading: () => ({
    loading: true,
    data: null,
    error: null,
  }),
  success: (data) => ({
    loading: false,
    data,
    error: null,
  }),
  error: (error) => ({
    loading: true,
    data: null,
    error,
  }),
};
