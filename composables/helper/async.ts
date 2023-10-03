function useAsync() {
  const loading = ref(false)

  const makeAsyncOperation = async (callback: () => void) => {
    loading.value = true
    await callback()
    loading.value = false
  }

  return { loading, makeAsyncOperation }
}

export default useAsync
