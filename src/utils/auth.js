export function getAuthToken() {
  try {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    return (
      usuario?.token ??
      usuario?.access_token ??
      usuario?.accessToken ??
      usuario?.usuario?.token ??
      usuario?.usuario?.access_token ??
      usuario?.usuario?.accessToken ??
      null
    );
  } catch {
    return null;
  }
}

export function getAuthHeaders() {
  const token = getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}
