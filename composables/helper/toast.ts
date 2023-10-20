export function toast(
  title: string,
  description: string,
  type: 'success' | 'error' | 'warning',
  timeout: number = 3000,
) {
  const toast = useToast()

  toast.add({
    title,
    description,
    timeout,
    icon: type === 'success' ? 'i-ph-check-circle-fill' : 'i-ph-warning-fill',
    color: type === 'success' ? 'green' : type === 'error' ? 'red' : 'yellow',
  })
}
