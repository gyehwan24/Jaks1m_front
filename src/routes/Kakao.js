function Kakao() {
  const host = "https://kauth.kakao.com/oauth/authorize";
  const config = {
    client_id: process.env.REACT_APP_KAKAO_KEY,
    redirect_uri: "http://localhost:3000/",
    response_type: "code",
  };
  const params = new URLSearchParams(config).toString();
  const url = `${host}?${params}`;
  return url;
}
export default Kakao;
